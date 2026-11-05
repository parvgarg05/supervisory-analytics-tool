"""
detection_benchmark.py -- Evaluates Anomaly Detection & Rule-Based Risk Scoring against Ground Truth.

Measures:
  - True Positives, False Positives, False Negatives, True Negatives
  - Precision, Recall, F1-score
  - False Positive Rate (FPR), False Negative Rate (FNR)
  - PR-AUC (Average Precision) and ROC-AUC
  - Recall@K (K=5, 10, 15, 20)
  - Module execution latency
"""

from __future__ import annotations

import argparse
import json
import os
import sqlite3
import sys
import time
from pathlib import Path
from typing import Any, Dict, List, Set

import numpy as np
from sklearn.metrics import average_precision_score, roc_auc_score

# Add analytics directory to sys.path so we can import modules directly
REPO_ROOT = Path(__file__).resolve().parents[1]
ANALYTICS_DIR = REPO_ROOT / "sat-sa" / "analytics"
sys.path.insert(0, str(ANALYTICS_DIR))

from execution_gaps import detect_execution_gaps
from negative_space import detect_negative_space
from anomaly_detection import detect_anomalies, evaluate_entity_anomalies
from peer_analysis import detect_peer_deviations
from repeated_incidents import detect_repeated_incidents
from risk_scoring import score_entities


def ensure_db_populated(db_path: Path) -> None:
    """Ensure SQLite database exists and has required tables from sibling dataset.json."""
    if not db_path.exists() or db_path.stat().st_size == 0:
        json_path = db_path.parent / "dataset.json"
        if not json_path.exists():
            return
        data = json.loads(json_path.read_text(encoding="utf-8"))
        conn = sqlite3.connect(str(db_path))
        conn.executescript("""
            CREATE TABLE IF NOT EXISTS entities (entity_id TEXT PRIMARY KEY, entity_name TEXT NOT NULL, sector TEXT NOT NULL);
            CREATE TABLE IF NOT EXISTS assets (asset_id TEXT PRIMARY KEY, entity_id TEXT NOT NULL, asset_type TEXT NOT NULL, criticality TEXT NOT NULL, expected_telemetry TEXT NOT NULL, last_telemetry TEXT);
            CREATE TABLE IF NOT EXISTS alerts (alert_id TEXT PRIMARY KEY, timestamp TEXT NOT NULL, entity_id TEXT NOT NULL, asset_id TEXT NOT NULL, severity TEXT NOT NULL, category TEXT NOT NULL, source_ip TEXT, destination_ip TEXT, status TEXT NOT NULL);
            CREATE TABLE IF NOT EXISTS cases (case_id TEXT PRIMARY KEY, alert_id TEXT NOT NULL, entity_id TEXT NOT NULL, investigator TEXT NOT NULL, opened_at TEXT NOT NULL, investigation_duration INTEGER NOT NULL, escalated INTEGER NOT NULL, closed_at TEXT, closure_reason TEXT, remediation_status TEXT);
            CREATE INDEX IF NOT EXISTS idx_assets_entity ON assets(entity_id);
            CREATE INDEX IF NOT EXISTS idx_alerts_entity ON alerts(entity_id);
            CREATE INDEX IF NOT EXISTS idx_cases_entity ON cases(entity_id);
        """)
        cur = conn.cursor()
        cur.executemany("INSERT OR IGNORE INTO entities VALUES (?, ?, ?)", [(e["entity_id"], e["entity_name"], e["sector"]) for e in data.get("entities", [])])
        cur.executemany("INSERT OR IGNORE INTO assets VALUES (?, ?, ?, ?, ?, ?)", [(a["asset_id"], a["entity_id"], a["asset_type"], a["criticality"], a["expected_telemetry"], a["last_telemetry"]) for a in data.get("assets", [])])
        cur.executemany("INSERT OR IGNORE INTO alerts VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [(al["alert_id"], al["timestamp"], al["entity_id"], al["asset_id"], al["severity"], al["category"], al.get("source_ip"), al.get("destination_ip"), al["status"]) for al in data.get("alerts", [])])
        cur.executemany("INSERT OR IGNORE INTO cases VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [(c["case_id"], c["alert_id"], c["entity_id"], c["investigator"], c["opened_at"], c["investigation_duration"], c["escalated"], c.get("closed_at"), c.get("closure_reason"), c.get("remediation_status")) for c in data.get("cases", [])])
        conn.commit()
        conn.close()


def evaluate_detection(db_path: str, ground_truth_path: str) -> Dict[str, Any]:
    ensure_db_populated(Path(db_path))

    with open(ground_truth_path, "r", encoding="utf-8") as f:
        gt = json.load(f)

    gt_anomalous_set: Set[str] = set(gt.get("anomalous_entities", []))

    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()
    cur.execute("SELECT entity_id, entity_name, sector FROM entities")
    entity_rows = cur.fetchall()
    all_entity_ids: Set[str] = {row["entity_id"] for row in entity_rows}
    entity_metadata = {
        row["entity_id"]: {"entity_name": row["entity_name"], "sector": row["sector"]}
        for row in entity_rows
    }
    conn.close()

    total_entities = len(all_entity_ids)
    gt_normal_set = all_entity_ids - gt_anomalous_set
    ordered_eids = sorted(all_entity_ids)
    y_true = np.array([1 if eid in gt_anomalous_set else 0 for eid in ordered_eids])

    # 1. Run Module C: Isolation Forest directly
    t0 = time.perf_counter()
    if_findings = detect_anomalies(db_path)
    if_profiles = evaluate_entity_anomalies(db_path)
    if_time = time.perf_counter() - t0
    if_flagged = {f.entity_id for f in if_findings}

    # Continuous anomaly scores for IF
    if_scores = np.array([if_profiles.get(eid, {}).get("anomaly_score", 0.0) for eid in ordered_eids])

    # 2. Run Module A: Execution Gaps
    t0 = time.perf_counter()
    eg_findings = detect_execution_gaps(db_path)
    eg_time = time.perf_counter() - t0
    eg_flagged = {f.entity_id for f in eg_findings}

    # 3. Run Module B: Negative Space
    t0 = time.perf_counter()
    ns_findings = detect_negative_space(db_path)
    ns_time = time.perf_counter() - t0
    ns_flagged = {f.entity_id for f in ns_findings}

    # 4. Run Module D: Peer Analysis
    t0 = time.perf_counter()
    pa_findings = detect_peer_deviations(db_path)
    pa_time = time.perf_counter() - t0
    pa_flagged = {f.entity_id for f in pa_findings}

    # 5. Run Module E: Repeated Incidents
    t0 = time.perf_counter()
    ri_findings = detect_repeated_incidents(db_path)
    ri_time = time.perf_counter() - t0
    ri_flagged = {f.entity_id for f in ri_findings}

    # 6. Run Risk Scoring (Composite)
    all_findings = eg_findings + ns_findings + if_findings + pa_findings + ri_findings
    t0 = time.perf_counter()
    scored = score_entities(all_findings, entity_metadata)
    scoring_time = time.perf_counter() - t0
    composite_flagged = {
        eid for eid, r in scored.items() if r.risk_level in ("HIGH", "CRITICAL")
    }
    composite_scores = np.array([scored.get(eid).risk_score / 100.0 if eid in scored else 0.0 for eid in ordered_eids])

    def calc_metrics(flagged: Set[str], name: str, exec_time: float, continuous_scores: np.ndarray | None = None) -> Dict[str, Any]:
        tp = len(flagged & gt_anomalous_set)
        fp = len(flagged - gt_anomalous_set)
        fn = len(gt_anomalous_set - flagged)
        tn = len(gt_normal_set - flagged)

        precision = (tp / (tp + fp)) if (tp + fp) > 0 else 0.0
        recall = (tp / (tp + fn)) if (tp + fn) > 0 else 0.0
        f1 = (2 * precision * recall / (precision + recall)) if (precision + recall) > 0 else 0.0
        fpr = (fp / (fp + tn)) if (fp + tn) > 0 else 0.0
        fnr = (fn / (tp + fn)) if (tp + fn) > 0 else 0.0

        roc_auc = None
        pr_auc = None
        recall_at_k: Dict[str, float] = {}

        if continuous_scores is not None and len(np.unique(y_true)) > 1:
            try:
                roc_auc = round(float(roc_auc_score(y_true, continuous_scores)), 4)
                pr_auc = round(float(average_precision_score(y_true, continuous_scores)), 4)
            except Exception:
                pass

            # Calculate Recall@K
            ranked_indices = np.argsort(-continuous_scores)
            total_positives = sum(y_true)
            for k in [5, 10, 15, 20]:
                if k <= len(ranked_indices):
                    top_k_indices = ranked_indices[:k]
                    k_tp = sum(y_true[i] for i in top_k_indices)
                    recall_at_k[f"recall@{k}"] = round(float(k_tp / total_positives) if total_positives > 0 else 0.0, 4)

        return {
            "detector": name,
            "execution_time_seconds": round(exec_time, 4),
            "flagged_count": len(flagged),
            "ground_truth_anomalies": len(gt_anomalous_set),
            "confusion_matrix": {
                "tp": tp,
                "fp": fp,
                "fn": fn,
                "tn": tn,
            },
            "metrics": {
                "precision": round(precision, 4),
                "recall": round(recall, 4),
                "f1_score": round(f1, 4),
                "false_positive_rate": round(fpr, 4),
                "false_negative_rate": round(fnr, 4),
                "roc_auc": roc_auc,
                "pr_auc": pr_auc,
                "recall_at_k": recall_at_k,
            }
        }

    return {
        "dataset_entities": total_entities,
        "ground_truth_anomalies_count": len(gt_anomalous_set),
        "detectors": {
            "isolation_forest": calc_metrics(if_flagged, "Isolation Forest (Module C)", if_time, if_scores),
            "execution_gaps": calc_metrics(eg_flagged, "Execution Gaps (Module A)", eg_time),
            "negative_space": calc_metrics(ns_flagged, "Negative Space (Module B)", ns_time),
            "peer_analysis": calc_metrics(pa_flagged, "Peer Comparison (Module D)", pa_time),
            "repeated_incidents": calc_metrics(ri_flagged, "Repeated Incidents (Module E)", ri_time),
            "composite_risk_scoring": calc_metrics(composite_flagged, "Composite Risk >= 60 (Phase 4)", scoring_time, composite_scores),
        }
    }


def main():
    parser = argparse.ArgumentParser(description="Detection Accuracy Benchmark")
    parser.add_argument("--db-path", required=True, help="SQLite database path")
    parser.add_argument("--ground-truth", required=True, help="Path to ground_truth.json")
    parser.add_argument("--output", default="benchmark/results/detection_results.json", help="Output JSON path")

    args = parser.parse_args()
    results = evaluate_detection(args.db_path, args.ground_truth)

    out_path = Path(args.output)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)

    print("\n=== DETECTION BENCHMARK RESULTS ===")
    for k, v in results["detectors"].items():
        m = v["metrics"]
        extra = ""
        if m.get("roc_auc") is not None:
            extra += f" | ROC-AUC: {m['roc_auc']:.3f} | PR-AUC: {m['pr_auc']:.3f}"
        if m.get("recall_at_k"):
            extra += f" | R@10: {m['recall_at_k'].get('recall@10', 0):.3f}"
        print(f"[{v['detector']}] Time: {v['execution_time_seconds']}s | P: {m['precision']:.3f} | R: {m['recall']:.3f} | F1: {m['f1_score']:.3f} | FPR: {m['false_positive_rate']:.3f}{extra}")


if __name__ == "__main__":
    main()
