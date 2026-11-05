"""
lanl_adapter.py -- Adapter converting LANL Cybersecurity Authentication/Redteam
Dataset into the SAT-SA Relational Schema.

Maps raw positional records:
  time (seconds offset), user@domain, source_computer, dest_computer
into:
  - entities (Domain / Enterprise network segments)
  - assets (Monitored source & destination host systems)
  - alerts (Lateral movement / Unauthorized Access security detections)
  - cases (Forensic SOC incident investigation & closure records)
  - ground_truth (Confirmed adversarial redteam ground truth labels)
"""

from __future__ import annotations

import csv
import json
import os
import sqlite3
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any, Dict, List, Set, Tuple


DEFAULT_SOURCE_PATH = Path(__file__).resolve().parents[1] / "datasets" / "external" / "redteam.txt" / "redteam.txt"
ANCHOR_TIMESTAMP = datetime(2024, 1, 1, 0, 0, 0, tzinfo=timezone.utc)


def computer_to_ip(comp_id: str, subnet_prefix: str = "10.10") -> str:
    """Deterministically convert computer identifier (e.g. C17693) to RFC1918 IPv4."""
    num_str = "".join(ch for ch in comp_id if ch.isdigit())
    val = int(num_str) if num_str else hash(comp_id) % 65535
    b3 = (val >> 8) & 0xFF
    b4 = val & 0xFF
    return f"{subnet_prefix}.{b3}.{b4}"


class LanlDatasetAdapter:
    def __init__(self, source_path: Path | str = DEFAULT_SOURCE_PATH):
        self.source_path = Path(source_path)
        self.raw_records: List[Tuple[int, str, str, str]] = []
        self._load_raw()

    def _load_raw(self) -> None:
        if not self.source_path.exists():
            raise FileNotFoundError(f"LANL source file not found at: {self.source_path}")

        records = []
        with open(self.source_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                parts = line.split(",")
                if len(parts) != 4:
                    continue
                t_sec = int(parts[0])
                user = parts[1]
                src_comp = parts[2]
                dst_comp = parts[3]
                records.append((t_sec, user, src_comp, dst_comp))
        self.raw_records = records

    def transform(self) -> Dict[str, Any]:
        """Transform raw LANL records into complete SAT-SA schema objects."""
        # 1. Identify Domains / Entities
        domains: Set[str] = set()
        computers: Set[str] = set()
        comp_activity_counts: Dict[str, int] = {}

        for _, user, src, dst in self.raw_records:
            if "@" in user:
                dom = user.split("@", 1)[1]
            else:
                dom = "DOM1"
            domains.add(dom)
            computers.add(src)
            computers.add(dst)
            comp_activity_counts[src] = comp_activity_counts.get(src, 0) + 1
            comp_activity_counts[dst] = comp_activity_counts.get(dst, 0) + 1

        entities = []
        for dom in sorted(domains):
            eid = f"ENT-LANL-{dom}"
            entities.append({
                "entity_id": eid,
                "entity_name": f"LANL Network Segment {dom}",
                "sector": "Defense & Research Infrastructure",
            })
        default_eid = entities[0]["entity_id"] if entities else "ENT-LANL-DOM1"

        # 2. Assets
        # Systems frequently targeted or used as jump boxes receive CRITICAL
        assets = []
        for comp in sorted(computers):
            aid = f"AST-{comp}"
            act = comp_activity_counts.get(comp, 0)
            crit = "CRITICAL" if act >= 10 else "HIGH" if act >= 4 else "MEDIUM"
            assets.append({
                "asset_id": aid,
                "entity_id": default_eid,
                "asset_type": "Server" if "S" in comp or crit == "CRITICAL" else "Workstation",
                "criticality": crit,
                "expected_telemetry": "1 day",
                "last_telemetry": (ANCHOR_TIMESTAMP + timedelta(days=60)).isoformat().replace("+00:00", "Z"),
            })

        # 3. Alerts & Cases
        alerts = []
        cases = []
        ground_truth_anomalous_alerts = []

        for idx, (t_sec, user, src, dst) in enumerate(self.raw_records, start=1):
            alid = f"ALT-LANL-{idx:06d}"
            cid = f"CAS-LANL-{idx:06d}"
            ts = ANCHOR_TIMESTAMP + timedelta(seconds=t_sec)
            ts_str = ts.isoformat().replace("+00:00", "Z")

            src_asset = f"AST-{src}"
            src_ip = computer_to_ip(src, "10.10")
            dst_ip = computer_to_ip(dst, "10.20")

            alerts.append({
                "alert_id": alid,
                "timestamp": ts_str,
                "entity_id": default_eid,
                "asset_id": src_asset,
                "severity": "CRITICAL",
                "category": "Unauthorized Access",
                "source_ip": src_ip,
                "destination_ip": dst_ip,
                "status": "CLOSED",
            })
            ground_truth_anomalous_alerts.append(alid)

            # Simulated SOC response (unsupervised execution gaps embedded for validation)
            # In real intrusions, lateral redteam auths often had quick or ignored closures
            inv_duration = 5 if idx % 3 == 0 else 45
            escalated = 1 if idx % 4 == 0 else 0
            closed_ts = (ts + timedelta(minutes=inv_duration)).isoformat().replace("+00:00", "Z")

            cases.append({
                "case_id": cid,
                "alert_id": alid,
                "entity_id": default_eid,
                "investigator": user,
                "opened_at": ts_str,
                "investigation_duration": inv_duration,
                "escalated": escalated,
                "closed_at": closed_ts,
                "closure_reason": "Remediated" if escalated else "False Positive",
                "remediation_status": "Completed" if escalated else "None",
            })

        ground_truth = {
            "dataset_name": "LANL Redteam Authentication Dataset",
            "source_file": str(self.source_path),
            "record_count": len(self.raw_records),
            "anomalous_entities": [default_eid],
            "anomalous_alerts": ground_truth_anomalous_alerts,
            "counts": {
                "entities": len(entities),
                "assets": len(assets),
                "alerts": len(alerts),
                "cases": len(cases),
            }
        }

        return {
            "entities": entities,
            "assets": assets,
            "alerts": alerts,
            "cases": cases,
            "ground_truth": ground_truth,
        }

    def export_to_sqlite(self, db_path: Path | str) -> sqlite3.Connection:
        """Export converted dataset directly into SQLite database."""
        db_path = Path(db_path)
        if db_path.exists():
            db_path.unlink()

        conn = sqlite3.connect(str(db_path))
        conn.execute("PRAGMA journal_mode = WAL;")
        conn.execute("PRAGMA foreign_keys = ON;")

        conn.executescript("""
            CREATE TABLE entities (
                entity_id TEXT PRIMARY KEY,
                entity_name TEXT NOT NULL,
                sector TEXT NOT NULL
            );
            CREATE TABLE assets (
                asset_id TEXT PRIMARY KEY,
                entity_id TEXT NOT NULL,
                asset_type TEXT NOT NULL,
                criticality TEXT NOT NULL,
                expected_telemetry TEXT NOT NULL,
                last_telemetry TEXT,
                FOREIGN KEY (entity_id) REFERENCES entities(entity_id) ON DELETE CASCADE
            );
            CREATE TABLE alerts (
                alert_id TEXT PRIMARY KEY,
                timestamp TEXT NOT NULL,
                entity_id TEXT NOT NULL,
                asset_id TEXT NOT NULL,
                severity TEXT NOT NULL,
                category TEXT NOT NULL,
                source_ip TEXT,
                destination_ip TEXT,
                status TEXT NOT NULL,
                FOREIGN KEY (entity_id) REFERENCES entities(entity_id) ON DELETE CASCADE,
                FOREIGN KEY (asset_id) REFERENCES assets(asset_id) ON DELETE CASCADE
            );
            CREATE TABLE cases (
                case_id TEXT PRIMARY KEY,
                alert_id TEXT NOT NULL,
                entity_id TEXT NOT NULL,
                investigator TEXT NOT NULL,
                opened_at TEXT NOT NULL,
                investigation_duration INTEGER NOT NULL,
                escalated INTEGER NOT NULL,
                closed_at TEXT,
                closure_reason TEXT,
                remediation_status TEXT,
                FOREIGN KEY (alert_id) REFERENCES alerts(alert_id) ON DELETE CASCADE,
                FOREIGN KEY (entity_id) REFERENCES entities(entity_id) ON DELETE CASCADE
            );
            CREATE INDEX idx_assets_entity ON assets(entity_id);
            CREATE INDEX idx_alerts_entity ON alerts(entity_id);
            CREATE INDEX idx_cases_entity ON cases(entity_id);
        """)

        data = self.transform()
        cur = conn.cursor()
        cur.executemany(
            "INSERT INTO entities VALUES (?, ?, ?)",
            [(e["entity_id"], e["entity_name"], e["sector"]) for e in data["entities"]]
        )
        cur.executemany(
            "INSERT INTO assets VALUES (?, ?, ?, ?, ?, ?)",
            [(a["asset_id"], a["entity_id"], a["asset_type"], a["criticality"], a["expected_telemetry"], a["last_telemetry"]) for a in data["assets"]]
        )
        cur.executemany(
            "INSERT INTO alerts VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [(al["alert_id"], al["timestamp"], al["entity_id"], al["asset_id"], al["severity"], al["category"], al["source_ip"], al["destination_ip"], al["status"]) for al in data["alerts"]]
        )
        cur.executemany(
            "INSERT INTO cases VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [(c["case_id"], c["alert_id"], c["entity_id"], c["investigator"], c["opened_at"], c["investigation_duration"], c["escalated"], c["closed_at"], c["closure_reason"], c["remediation_status"]) for c in data["cases"]]
        )
        conn.commit()
        return conn

    def export_to_csv(self, output_dir: Path | str) -> None:
        """Export converted dataset to CSV directory."""
        out = Path(output_dir)
        out.mkdir(parents=True, exist_ok=True)
        data = self.transform()

        for key in ["entities", "assets", "alerts", "cases"]:
            rows = data[key]
            if not rows:
                continue
            fieldnames = list(rows[0].keys())
            with open(out / f"{key}.csv", "w", newline="", encoding="utf-8") as f:
                writer = csv.DictWriter(f, fieldnames=fieldnames)
                writer.writeheader()
                writer.writerows(rows)

        with open(out / "ground_truth.json", "w", encoding="utf-8") as f:
            json.dump(data["ground_truth"], f, indent=2)


if __name__ == "__main__":
    adapter = LanlDatasetAdapter()
    res = adapter.transform()
    print(f"Transformed {res['ground_truth']['record_count']} LANL records into SAT-SA relational format:")
    print(f"  - Entities: {len(res['entities'])}")
    print(f"  - Assets:   {len(res['assets'])}")
    print(f"  - Alerts:   {len(res['alerts'])}")
    print(f"  - Cases:    {len(res['cases'])}")
