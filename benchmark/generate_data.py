"""
generate_data.py -- Scalable, Configurable Synthetic Data Generator for SAT-SA Benchmarking.

Produces deterministic datasets matching SAT-SA relational schema:
  - entities (entity_id, entity_name, sector)
  - assets (asset_id, entity_id, asset_type, criticality, expected_telemetry, last_telemetry)
  - alerts (alert_id, timestamp, entity_id, asset_id, severity, category, source_ip, destination_ip, status)
  - cases (case_id, alert_id, entity_id, investigator, opened_at, investigation_duration, escalated, closed_at, closure_reason, remediation_status)

Also generates:
  - Ground truth anomaly labels for detection benchmarking (precision/recall/F1).
  - Corrupted/dirty records for reliability and validation testing.
"""

from __future__ import annotations

import argparse
import csv
import json
import os
import random
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any, Dict, List, Tuple


# Canonical Schema Constants
SECTORS = ["Energy", "Banking", "Defence", "Telecom", "Transport", "Healthcare"]
ASSET_TYPES = ["Server", "Workstation", "Firewall", "Router", "SCADA", "ICS", "Database", "Switch"]
CRITICALITIES = ["CRITICAL", "HIGH", "MEDIUM", "LOW"]
SEVERITIES = ["CRITICAL", "HIGH", "MEDIUM", "LOW"]
CATEGORIES = [
    "Malware", "Phishing", "DDoS", "Unauthorized Access",
    "Data Exfiltration", "Ransomware", "Privilege Escalation", "Reconnaissance"
]
STATUSES = ["CLOSED", "OPEN", "INVESTIGATING", "ESCALATED"]
INVESTIGATORS = ["Analyst_A", "Analyst_B", "Analyst_C", "Analyst_D", "Lead_Auditor"]
CLOSURE_REASONS = [
    "True Positive - Remediated", "False Positive", "Duplicate",
    "Policy Exception", "Ignored"
]
REMEDIATION_STATUSES = ["Completed", "In Progress", "None", "Ignored"]

REFERENCE_TIMESTAMP = datetime(2026, 9, 27, 12, 0, 0, tzinfo=timezone.utc)

PRESET_CONFIGS = {
    "small":   {"entities": 100,   "assets": 500,    "alerts": 1000,   "cases": 250},
    "medium":  {"entities": 500,   "assets": 2500,   "alerts": 5000,   "cases": 1000},
    "large":   {"entities": 1000,  "assets": 5000,   "alerts": 10000,  "cases": 2000},
    "xl":      {"entities": 5000,  "assets": 25000,  "alerts": 5000,  "cases": 10000},  # will use ratio
    "stress":  {"entities": 10000, "assets": 50000,  "alerts": 100000, "cases": 20000},
}
# Adjust xl alerts to match spec (50,000)
PRESET_CONFIGS["xl"]["alerts"] = 50000


class SyntheticDatasetGenerator:
    def __init__(self, seed: int = 42, anchor_time: datetime | None = None):
        self.seed = seed
        self.rng = random.Random(seed)
        self.anchor_time = anchor_time or REFERENCE_TIMESTAMP
        self.start_time = self.anchor_time - timedelta(days=90)

    def _random_date(self, start: datetime, end: datetime) -> datetime:
        delta = (end - start).total_seconds()
        offset = self.rng.random() * delta
        return start + timedelta(seconds=offset)

    def generate(
        self,
        num_entities: int,
        num_assets: int,
        num_alerts: int,
        num_cases: int,
        anomaly_ratio: float = 0.15,
    ) -> Dict[str, Any]:
        """
        Generates relational dataset ensuring realistic constraints and foreign-key integrity.
        """
        # 1. Generate Entities
        entities: List[Dict[str, Any]] = []
        num_anomalous = max(1, int(num_entities * anomaly_ratio))
        anomalous_entity_ids = set()

        for i in range(1, num_entities + 1):
            eid = f"CSE-{i:05d}"
            sector = SECTORS[(i - 1) % len(SECTORS)]
            entities.append({
                "entity_id": eid,
                "entity_name": f"Enterprise Unit {eid}",
                "sector": sector,
            })
            if i <= num_anomalous:
                anomalous_entity_ids.add(eid)

        # 2. Distribute Assets across Entities
        assets: List[Dict[str, Any]] = []
        entity_asset_map: Dict[str, List[str]] = {e["entity_id"]: [] for e in entities}
        
        # Base asset distribution
        base_assets_per_entity = max(1, num_assets // num_entities)
        asset_counter = 1

        for ent in entities:
            eid = ent["entity_id"]
            is_anomalous = eid in anomalous_entity_ids
            # Anomalous entities might have specific asset patterns (e.g., stale telemetry)
            count = base_assets_per_entity
            for _ in range(count):
                if asset_counter > num_assets:
                    break
                aid = f"AST-{asset_counter:06d}"
                asset_type = self.rng.choice(ASSET_TYPES)
                crit = self.rng.choice(CRITICALITIES)
                expected_telem = self.rng.choice(["1 hour", "1 day", "1 week"])

                # Negative Space Anomaly: Stale telemetry on critical assets
                if is_anomalous and crit in ("CRITICAL", "HIGH") and self.rng.random() < 0.6:
                    stale_days = self.rng.randint(15, 60)
                    last_telem = self.anchor_time - timedelta(days=stale_days)
                else:
                    fresh_days = self.rng.uniform(0.1, 4.0)
                    last_telem = self.anchor_time - timedelta(days=fresh_days)

                asset_rec = {
                    "asset_id": aid,
                    "entity_id": eid,
                    "asset_type": asset_type,
                    "criticality": crit,
                    "expected_telemetry": expected_telem,
                    "last_telemetry": last_telem.isoformat().replace("+00:00", "Z"),
                }
                assets.append(asset_rec)
                entity_asset_map[eid].append(aid)
                asset_counter += 1

        # Fill remaining assets if any
        while asset_counter <= num_assets:
            ent = self.rng.choice(entities)
            eid = ent["entity_id"]
            aid = f"AST-{asset_counter:06d}"
            asset_rec = {
                "asset_id": aid,
                "entity_id": eid,
                "asset_type": self.rng.choice(ASSET_TYPES),
                "criticality": self.rng.choice(CRITICALITIES),
                "expected_telemetry": "1 day",
                "last_telemetry": (self.anchor_time - timedelta(days=self.rng.uniform(0.1, 2.0))).isoformat().replace("+00:00", "Z"),
            }
            assets.append(asset_rec)
            entity_asset_map[eid].append(aid)
            asset_counter += 1

        # 3. Generate Alerts
        alerts: List[Dict[str, Any]] = []
        alert_counter = 1
        ground_truth_anomalies: List[Dict[str, Any]] = []

        # Allocate alerts with higher density to anomalous entities (peer deviation / anomaly signal)
        total_weight = (len(anomalous_entity_ids) * 3) + (len(entities) - len(anomalous_entity_ids))
        
        for ent in entities:
            eid = ent["entity_id"]
            is_anomalous = eid in anomalous_entity_ids
            ent_assets = entity_asset_map[eid]
            if not ent_assets:
                continue

            # Weighting
            w = 3.0 if is_anomalous else 1.0
            ent_alert_target = max(1, int((w / total_weight) * num_alerts))

            # Repeated incident cluster target for anomalous entities
            repeat_asset = ent_assets[0]
            repeat_category = "Malware"

            for _ in range(ent_alert_target):
                if alert_counter > num_alerts:
                    break
                alid = f"ALT-{alert_counter:07d}"
                
                # Anomaly patterns
                if is_anomalous and self.rng.random() < 0.35:
                    target_asset = repeat_asset
                    cat = repeat_category
                    sev = "CRITICAL" if self.rng.random() < 0.7 else "HIGH"
                else:
                    target_asset = self.rng.choice(ent_assets)
                    cat = self.rng.choice(CATEGORIES)
                    sev = self.rng.choice(SEVERITIES)
                    if is_anomalous and self.rng.random() < 0.4:
                        sev = "CRITICAL"

                alert_time = self._random_date(self.start_time, self.anchor_time)
                src_ip = f"192.168.{self.rng.randint(1, 254)}.{self.rng.randint(1, 254)}"
                dst_ip = f"10.0.{self.rng.randint(1, 254)}.{self.rng.randint(1, 254)}"
                status = "CLOSED" if self.rng.random() < 0.85 else self.rng.choice(STATUSES)

                alert_rec = {
                    "alert_id": alid,
                    "timestamp": alert_time.isoformat().replace("+00:00", "Z"),
                    "entity_id": eid,
                    "asset_id": target_asset,
                    "severity": sev,
                    "category": cat,
                    "source_ip": src_ip,
                    "destination_ip": dst_ip,
                    "status": status,
                }
                alerts.append(alert_rec)
                alert_counter += 1

        # Fill remaining alerts
        while alert_counter <= num_alerts:
            ent = self.rng.choice(entities)
            eid = ent["entity_id"]
            ent_assets = entity_asset_map[eid]
            if not ent_assets:
                continue
            alid = f"ALT-{alert_counter:07d}"
            alert_rec = {
                "alert_id": alid,
                "timestamp": self._random_date(self.start_time, self.anchor_time).isoformat().replace("+00:00", "Z"),
                "entity_id": eid,
                "asset_id": self.rng.choice(ent_assets),
                "severity": self.rng.choice(SEVERITIES),
                "category": self.rng.choice(CATEGORIES),
                "source_ip": "192.168.1.100",
                "destination_ip": "10.0.1.50",
                "status": "CLOSED",
            }
            alerts.append(alert_rec)
            alert_counter += 1

        # 4. Generate Cases
        cases: List[Dict[str, Any]] = []
        case_counter = 1
        
        # Sample alerts to link with cases
        # Sort alerts by date
        alerts_pool = list(alerts)
        self.rng.shuffle(alerts_pool)
        selected_alerts = alerts_pool[:num_cases]

        for al in selected_alerts:
            cid = f"CAS-{case_counter:07d}"
            eid = al["entity_id"]
            is_anomalous = eid in anomalous_entity_ids
            sev = al["severity"]
            alert_dt = datetime.fromisoformat(al["timestamp"].replace("Z", "+00:00"))

            # Normal vs Anomalous investigation patterns
            if is_anomalous:
                # Fast closure / short duration / no escalation / no remediation
                if sev == "CRITICAL":
                    inv_duration = self.rng.randint(1, 8)  # < 10 mins (Execution gap)
                    escalated = 0                          # No escalation (Execution gap)
                    closure_reason = "Ignored"
                    remediation = "None"
                else:
                    inv_duration = self.rng.randint(5, 20)
                    escalated = 1 if self.rng.random() < 0.05 else 0
                    closure_reason = self.rng.choice(["False Positive", "Ignored"])
                    remediation = "None"
            else:
                # Normal healthy entity behavior
                inv_duration = self.rng.randint(35, 280)   # 35 mins to ~4.5 hours
                closure_reason = self.rng.choice(CLOSURE_REASONS)
                remediation = self.rng.choice(REMEDIATION_STATUSES)
                if sev == "CRITICAL":
                    escalated = 1 if self.rng.random() < 0.70 else 0
                else:
                    escalated = 1 if self.rng.random() < 0.15 else 0

            closed_dt = alert_dt + timedelta(minutes=inv_duration)

            case_rec = {
                "case_id": cid,
                "alert_id": al["alert_id"],
                "entity_id": eid,
                "investigator": self.rng.choice(INVESTIGATORS),
                "opened_at": alert_dt.isoformat().replace("+00:00", "Z"),
                "investigation_duration": inv_duration,
                "escalated": escalated,
                "closed_at": closed_dt.isoformat().replace("+00:00", "Z"),
                "closure_reason": closure_reason,
                "remediation_status": remediation,
            }
            cases.append(case_rec)
            case_counter += 1

        # Ground truth labels metadata
        ground_truth = {
            "seed": self.seed,
            "anchor_time": self.anchor_time.isoformat(),
            "counts": {
                "entities": len(entities),
                "assets": len(assets),
                "alerts": len(alerts),
                "cases": len(cases),
            },
            "anomalous_entities": sorted(list(anomalous_entity_ids)),
            "anomaly_ratio": anomaly_ratio,
        }

        return {
            "dataset": {
                "entities": entities,
                "assets": assets,
                "alerts": alerts,
                "cases": cases,
            },
            "ground_truth": ground_truth,
        }

    def generate_corrupted_dataset(self, base_dataset: Dict[str, Any]) -> Dict[str, Any]:
        """
        Generates invalid records specifically designed to test ingestion integrity:
        - Invalid foreign keys
        - Malformed ISO timestamps
        - Duplicate primary keys
        - Out-of-spec enum values
        - Inconsistent cross-entity references
        """
        corrupted = json.loads(json.dumps(base_dataset))
        
        # 1. Broken Foreign Key
        corrupted["alerts"].append({
            "alert_id": "ALT-CORRUPT-FK",
            "timestamp": "2026-09-20T10:00:00Z",
            "entity_id": "CSE-DOES-NOT-EXIST",
            "asset_id": "AST-NON-EXISTENT",
            "severity": "CRITICAL",
            "category": "Malware",
            "status": "CLOSED"
        })

        # 2. Malformed Timestamp
        corrupted["alerts"].append({
            "alert_id": "ALT-CORRUPT-TIME",
            "timestamp": "INVALID-TIMESTAMP-FORMAT",
            "entity_id": base_dataset["entities"][0]["entity_id"],
            "asset_id": base_dataset["assets"][0]["asset_id"],
            "severity": "HIGH",
            "category": "Phishing",
            "status": "OPEN"
        })

        # 3. Duplicate Primary Key
        if base_dataset["alerts"]:
            dup = dict(base_dataset["alerts"][0])
            dup["timestamp"] = "2026-09-21T10:00:00Z"
            corrupted["alerts"].append(dup)

        # 4. Invalid Enum
        corrupted["assets"].append({
            "asset_id": "AST-CORRUPT-ENUM",
            "entity_id": base_dataset["entities"][0]["entity_id"],
            "asset_type": "Server",
            "criticality": "ULTRA_CRITICAL_INVALID",
            "expected_telemetry": "1 day",
            "last_telemetry": "2026-09-20T10:00:00Z"
        })

        # 5. Inconsistent entity reference (Alert entity != Asset entity)
        if len(base_dataset["entities"]) >= 2:
            e1 = base_dataset["entities"][0]["entity_id"]
            e2 = base_dataset["entities"][1]["entity_id"]
            # find an asset belonging to e2
            a2 = next(a["asset_id"] for a in base_dataset["assets"] if a["entity_id"] == e2)
            corrupted["alerts"].append({
                "alert_id": "ALT-CORRUPT-MISMATCH",
                "timestamp": "2026-09-20T10:00:00Z",
                "entity_id": e1,  # Entity 1
                "asset_id": a2,   # Asset belongs to Entity 2!
                "severity": "MEDIUM",
                "category": "Reconnaissance",
                "status": "CLOSED"
            })

        return corrupted


def save_dataset_files(data: Dict[str, Any], output_dir: Path) -> None:
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # 1. Save Full JSON
    json_path = output_dir / "dataset.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(data["dataset"], f, indent=2)

    # 2. Save CSVs for individual tables
    for table_name in ["entities", "assets", "alerts", "cases"]:
        records = data["dataset"].get(table_name, [])
        if not records:
            continue
        csv_path = output_dir / f"{table_name}.csv"
        headers = list(records[0].keys())
        with open(csv_path, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=headers)
            writer.writeheader()
            writer.writerows(records)

    # 3. Save Ground Truth Labels
    if "ground_truth" in data:
        labels_path = output_dir / "ground_truth.json"
        with open(labels_path, "w", encoding="utf-8") as f:
            json.dump(data["ground_truth"], f, indent=2)


def main():
    parser = argparse.ArgumentParser(description="Synthetic Dataset Generator for SAT-SA Benchmarking")
    parser.add_argument("--size", choices=["small", "medium", "large", "xl", "stress"], default="small")
    parser.add_argument("--entities", type=int, help="Override entity count")
    parser.add_argument("--assets", type=int, help="Override asset count")
    parser.add_argument("--alerts", type=int, help="Override alert count")
    parser.add_argument("--cases", type=int, help="Override case count")
    parser.add_argument("--seed", type=int, default=42, help="Deterministic random seed")
    parser.add_argument("--anomaly-ratio", type=float, default=0.15, help="Ratio of anomalous entities")
    parser.add_argument("--output-dir", type=str, default="benchmark/data", help="Output directory")
    parser.add_argument("--all-presets", action="store_true", help="Generate all 5 preset datasets at once")
    parser.add_argument("--with-corrupted", action="store_true", help="Also generate corrupted datasets for ingestion testing")

    args = parser.parse_args()
    base_out = Path(args.output_dir)

    generator = SyntheticDatasetGenerator(seed=args.seed)

    if args.all_presets:
        for size_key, cfg in PRESET_CONFIGS.items():
            print(f"[*] Generating {size_key.upper()} dataset ({cfg['entities']} ents, {cfg['assets']} assets, {cfg['alerts']} alerts, {cfg['cases']} cases)...")
            target_dir = base_out / size_key
            result = generator.generate(
                num_entities=cfg["entities"],
                num_assets=cfg["assets"],
                num_alerts=cfg["alerts"],
                num_cases=cfg["cases"],
                anomaly_ratio=args.anomaly_ratio,
            )
            save_dataset_files(result, target_dir)
            print(f"    Saved {size_key.upper()} dataset to {target_dir}")

            if args.with_corrupted:
                corrupted_dir = base_out / f"{size_key}_corrupted"
                corrupted_data = {
                    "dataset": generator.generate_corrupted_dataset(result["dataset"]),
                    "ground_truth": {"note": "Corrupted dataset with foreign key, timestamp, and enum errors"}
                }
                save_dataset_files(corrupted_data, corrupted_dir)
                print(f"    Saved CORRUPTED {size_key.upper()} dataset to {corrupted_dir}")
    else:
        cfg = PRESET_CONFIGS[args.size]
        e = args.entities or cfg["entities"]
        ast = args.assets or cfg["assets"]
        alt = args.alerts or cfg["alerts"]
        cas = args.cases or cfg["cases"]

        print(f"[*] Generating {args.size.upper()} dataset ({e} ents, {ast} assets, {alt} alerts, {cas} cases)...")
        target_dir = base_out / args.size
        result = generator.generate(e, ast, alt, cas, args.anomaly_ratio)
        save_dataset_files(result, target_dir)
        print(f"    Saved to {target_dir}")

        if args.with_corrupted:
            corrupted_dir = base_out / f"{args.size}_corrupted"
            corrupted_data = {
                "dataset": generator.generate_corrupted_dataset(result["dataset"]),
                "ground_truth": {"note": "Corrupted dataset with intentional errors"}
            }
            save_dataset_files(corrupted_data, corrupted_dir)
            print(f"    Saved corrupted to {corrupted_dir}")


if __name__ == "__main__":
    main()
