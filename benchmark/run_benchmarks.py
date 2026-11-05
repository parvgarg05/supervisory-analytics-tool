"""
run_benchmarks.py -- Comprehensive Automated Benchmark Suite for SAT-SA.

Orchestrates:
  - Phase 3A: Data Ingestion Performance & Rejection/Rollback Verification
  - Phase 3B: Analytical Processing Performance (All 8 modules & full pipeline)
  - Phase 3C: SQLite Database Engine Performance (Indexed vs Non-Indexed, JOINs, WAL reads)
  - Phase 3F: Reliability, Cryptographic Audit Chaining, and Tamper Detection

Adheres strictly to Phase 4 Methodology:
  - Warmup runs before measurements
  - 5 measured runs per benchmark
  - Reports median, mean, min, max
  - Captures memory (RSS), throughput, and latency
"""

from __future__ import annotations

import argparse
import csv
import gc
import hashlib
import json
import os
import platform
import shutil
import sqlite3
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Callable, Dict, List, Tuple

# Process memory measurement
try:
    import psutil
    HAS_PSUTIL = True
except ImportError:
    HAS_PSUTIL = False

REPO_ROOT = Path(__file__).resolve().parents[1]
ANALYTICS_DIR = REPO_ROOT / "sat-sa" / "analytics"
sys.path.insert(0, str(ANALYTICS_DIR))

# Import analytics modules
from execution_gaps import detect_execution_gaps
from negative_space import detect_negative_space
from anomaly_detection import detect_anomalies, evaluate_entity_anomalies
from peer_analysis import detect_peer_deviations
from repeated_incidents import detect_repeated_incidents
from risk_scoring import score_entities
from alert_prioritization import prioritize_alerts
from control_prioritization import prioritize_controls_processes
from pipeline import run_pipeline


def get_process_memory_mb() -> float:
    """Returns current process RSS memory in MB."""
    if HAS_PSUTIL:
        return psutil.Process(os.getpid()).memory_info().rss / (1024 * 1024)
    return 0.0


def compute_stats(values: List[float]) -> Dict[str, float]:
    """Computes median, mean, min, max for a list of floats."""
    if not values:
        return {"min": 0.0, "max": 0.0, "mean": 0.0, "median": 0.0}
    sorted_v = sorted(values)
    n = len(sorted_v)
    mid = n // 2
    median = (sorted_v[mid] if n % 2 != 0 else (sorted_v[mid - 1] + sorted_v[mid]) / 2.0)
    return {
        "min": round(min(values), 4),
        "max": round(max(values), 4),
        "mean": round(sum(values) / len(values), 4),
        "median": round(median, 4),
    }


def init_benchmark_database(db_path: Path) -> sqlite3.Connection:
    """Initializes standard SAT-SA SQLite schema in WAL mode."""
    if db_path.exists():
        try:
            db_path.unlink()
        except Exception:
            pass
    for ext in ["-wal", "-shm"]:
        p = Path(f"{db_path}{ext}")
        if p.exists():
            try: p.unlink()
            except Exception: pass

    conn = sqlite3.connect(str(db_path))
    conn.execute("PRAGMA journal_mode = WAL;")
    conn.execute("PRAGMA foreign_keys = ON;")

    # Schema definition matching SAT-SA production db.ts
    conn.executescript("""
        CREATE TABLE IF NOT EXISTS entities (
            entity_id TEXT PRIMARY KEY,
            entity_name TEXT NOT NULL,
            sector TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS assets (
            asset_id TEXT PRIMARY KEY,
            entity_id TEXT NOT NULL,
            asset_type TEXT NOT NULL,
            criticality TEXT NOT NULL CHECK(criticality IN ('CRITICAL', 'HIGH', 'MEDIUM', 'LOW')),
            expected_telemetry TEXT NOT NULL,
            last_telemetry TEXT,
            FOREIGN KEY (entity_id) REFERENCES entities(entity_id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS alerts (
            alert_id TEXT PRIMARY KEY,
            timestamp TEXT NOT NULL,
            entity_id TEXT NOT NULL,
            asset_id TEXT NOT NULL,
            severity TEXT NOT NULL CHECK(severity IN ('CRITICAL', 'HIGH', 'MEDIUM', 'LOW')),
            category TEXT NOT NULL,
            source_ip TEXT,
            destination_ip TEXT,
            status TEXT NOT NULL CHECK(status IN ('OPEN', 'INVESTIGATING', 'CLOSED', 'ESCALATED')),
            FOREIGN KEY (entity_id) REFERENCES entities(entity_id) ON DELETE CASCADE,
            FOREIGN KEY (asset_id) REFERENCES assets(asset_id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS cases (
            case_id TEXT PRIMARY KEY,
            alert_id TEXT NOT NULL,
            entity_id TEXT NOT NULL,
            investigator TEXT NOT NULL,
            opened_at TEXT NOT NULL,
            investigation_duration INTEGER NOT NULL CHECK(investigation_duration >= 0),
            escalated INTEGER NOT NULL CHECK(escalated IN (0, 1)),
            closed_at TEXT,
            closure_reason TEXT,
            remediation_status TEXT CHECK(remediation_status IS NULL OR remediation_status IN ('Completed', 'In Progress', 'None', 'Ignored')),
            FOREIGN KEY (alert_id) REFERENCES alerts(alert_id) ON DELETE CASCADE,
            FOREIGN KEY (entity_id) REFERENCES entities(entity_id) ON DELETE CASCADE
        );

        -- Production Indexes
        CREATE INDEX IF NOT EXISTS idx_assets_entity ON assets(entity_id);
        CREATE INDEX IF NOT EXISTS idx_assets_criticality ON assets(criticality);
        CREATE INDEX IF NOT EXISTS idx_alerts_entity ON alerts(entity_id);
        CREATE INDEX IF NOT EXISTS idx_alerts_asset ON alerts(asset_id);
        CREATE INDEX IF NOT EXISTS idx_alerts_severity ON alerts(severity);
        CREATE INDEX IF NOT EXISTS idx_alerts_timestamp ON alerts(timestamp);
        CREATE INDEX IF NOT EXISTS idx_cases_entity ON cases(entity_id);
        CREATE INDEX IF NOT EXISTS idx_cases_alert ON cases(alert_id);
        CREATE INDEX IF NOT EXISTS idx_cases_escalated ON cases(escalated);

        -- Audit logs table with hash chaining
        CREATE TABLE IF NOT EXISTS audit_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            operation TEXT NOT NULL,
            timestamp TEXT NOT NULL,
            details TEXT NOT NULL,
            previous_hash TEXT NOT NULL,
            hash TEXT NOT NULL
        );
    """)
    conn.commit()
    return conn


# ==============================================================================
# PHASE 3A: DATA INGESTION BENCHMARK
# ==============================================================================

def benchmark_ingestion_single_run(
    dataset_path: Path,
    db_path: Path
) -> Dict[str, Any]:
    with open(dataset_path / "dataset.json", "r", encoding="utf-8") as f:
        data = json.load(f)

    entities = data.get("entities", [])
    assets = data.get("assets", [])
    alerts = data.get("alerts", [])
    cases = data.get("cases", [])
    total_records = len(entities) + len(assets) + len(alerts) + len(cases)

    conn = init_benchmark_database(db_path)
    cur = conn.cursor()

    mem_before = get_process_memory_mb()

    # Step 1: Validation timing
    t_val_start = time.perf_counter()
    # In-memory referential integrity validation (matching DataValidator logic)
    valid_eids = {e["entity_id"] for e in entities}
    valid_aids = {a["asset_id"] for a in assets}
    valid_alids = {al["alert_id"] for al in alerts}

    val_errors = 0
    for a in assets:
        if a["entity_id"] not in valid_eids: val_errors += 1
    for al in alerts:
        if al["entity_id"] not in valid_eids or al["asset_id"] not in valid_aids: val_errors += 1
    for c in cases:
        if c["entity_id"] not in valid_eids or c["alert_id"] not in valid_alids: val_errors += 1
    val_time = time.perf_counter() - t_val_start

    # Step 2: Transactional Bulk Insertion
    t_insert_start = time.perf_counter()
    conn.execute("BEGIN TRANSACTION;")

    cur.executemany(
        "INSERT INTO entities (entity_id, entity_name, sector) VALUES (?, ?, ?)",
        [(e["entity_id"], e["entity_name"], e["sector"]) for e in entities]
    )
    cur.executemany(
        "INSERT INTO assets (asset_id, entity_id, asset_type, criticality, expected_telemetry, last_telemetry) VALUES (?, ?, ?, ?, ?, ?)",
        [(a["asset_id"], a["entity_id"], a["asset_type"], a["criticality"], a["expected_telemetry"], a["last_telemetry"]) for a in assets]
    )
    cur.executemany(
        "INSERT INTO alerts (alert_id, timestamp, entity_id, asset_id, severity, category, source_ip, destination_ip, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [(al["alert_id"], al["timestamp"], al["entity_id"], al["asset_id"], al["severity"], al["category"], al.get("source_ip"), al.get("destination_ip"), al["status"]) for al in alerts]
    )
    cur.executemany(
        "INSERT INTO cases (case_id, alert_id, entity_id, investigator, opened_at, investigation_duration, escalated, closed_at, closure_reason, remediation_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [(c["case_id"], c["alert_id"], c["entity_id"], c["investigator"], c["opened_at"], c["investigation_duration"], c["escalated"], c.get("closed_at"), c.get("closure_reason"), c.get("remediation_status")) for c in cases]
    )

    t_commit_start = time.perf_counter()
    conn.commit()
    t_commit = time.perf_counter() - t_commit_start
    insert_time = time.perf_counter() - t_insert_start
    total_time = val_time + insert_time

    mem_after = get_process_memory_mb()
    conn.close()

    throughput = total_records / total_time if total_time > 0 else 0.0

    return {
        "total_records": total_records,
        "total_time_seconds": total_time,
        "validation_time_seconds": val_time,
        "insert_time_seconds": insert_time,
        "commit_time_seconds": t_commit,
        "records_per_second": throughput,
        "latency_per_record_us": (total_time / total_records * 1_000_000) if total_records > 0 else 0.0,
        "memory_delta_mb": max(0.0, mem_after - mem_before),
    }


def run_ingestion_benchmarks(data_dir: Path, db_dir: Path, runs: int = 5) -> Dict[str, Any]:
    print("\n" + "="*80)
    print("PHASE 3A: DATA INGESTION BENCHMARK (5 Measured Runs per Dataset)")
    print("="*80)

    results: Dict[str, Any] = {}

    for size in ["small", "medium", "large", "xl", "stress"]:
        dataset_path = data_dir / size
        if not dataset_path.exists():
            print(f"[-] Skipping {size}: directory not found.")
            continue

        print(f"\n[*] Benchmarking Ingestion: {size.upper()} Dataset...")
        db_path = db_dir / f"bench_ingest_{size}.db"

        # Warm-up run (discarded)
        benchmark_ingestion_single_run(dataset_path, db_path)

        # 5 Measured runs
        run_metrics: List[Dict[str, Any]] = []
        for r in range(1, runs + 1):
            m = benchmark_ingestion_single_run(dataset_path, db_path)
            run_metrics.append(m)
            print(f"    Run {r}/{runs}: {m['records_per_second']:.1f} rec/s | Total Time: {m['total_time_seconds']:.3f}s | Commit: {m['commit_time_seconds']:.4f}s")

        total_recs = run_metrics[0]["total_records"]
        rps_stats = compute_stats([x["records_per_second"] for x in run_metrics])
        time_stats = compute_stats([x["total_time_seconds"] for x in run_metrics])
        commit_stats = compute_stats([x["commit_time_seconds"] for x in run_metrics])
        val_stats = compute_stats([x["validation_time_seconds"] for x in run_metrics])
        mem_stats = compute_stats([x["memory_delta_mb"] for x in run_metrics])

        results[size] = {
            "total_records": total_recs,
            "records_per_second": rps_stats,
            "total_time_seconds": time_stats,
            "commit_time_seconds": commit_stats,
            "validation_time_seconds": val_stats,
            "memory_delta_mb": mem_stats,
        }
        print(f"    --> {size.upper()} MEDIAN THROUGHPUT: {rps_stats['median']:.1f} rec/s (Median Time: {time_stats['median']:.3f}s)")

    return results


# ==============================================================================
# PHASE 3B: ANALYTICAL PROCESSING PERFORMANCE (8 MODULES)
# ==============================================================================

def benchmark_analytical_modules(db_path: Path, runs: int = 5) -> Dict[str, Any]:
    print("\n" + "="*80)
    print("PHASE 3B: ANALYTICAL ENGINE PERFORMANCE (All 8 Modules & Pipeline)")
    print("="*80)

    # 1. Warm-up run
    print("[*] Performing pipeline warm-up run...")
    run_pipeline(str(db_path))

    # Helper to benchmark individual module
    def bench_callable(fn: Callable[[], Any], name: str) -> Dict[str, Any]:
        durations: List[float] = []
        gc.collect()
        for r in range(runs):
            t0 = time.perf_counter()
            fn()
            durations.append(time.perf_counter() - t0)
        st = compute_stats(durations)
        print(f"    {name:<32} | Median: {st['median']:7.4f}s | Mean: {st['mean']:7.4f}s | Min: {st['min']:7.4f}s | Max: {st['max']:7.4f}s")
        return st

    # Fetch entity metadata for risk scoring
    conn = sqlite3.connect(str(db_path))
    conn.row_factory = sqlite3.Row
    entity_rows = conn.execute("SELECT entity_id, entity_name, sector FROM entities").fetchall()
    entity_metadata = {
        r["entity_id"]: {"entity_name": r["entity_name"], "sector": r["sector"]}
        for r in entity_rows
    }
    entity_count = len(entity_rows)
    conn.close()

    results: Dict[str, Any] = {"entity_count": entity_count, "modules": {}}

    print(f"[*] Benchmarking individual modules on database ({entity_count} entities)...")
    results["modules"]["Module_A_Execution_Gaps"] = bench_callable(
        lambda: detect_execution_gaps(str(db_path)), "Module A: Execution Gaps"
    )
    results["modules"]["Module_B_Negative_Space"] = bench_callable(
        lambda: detect_negative_space(str(db_path)), "Module B: Negative Space"
    )
    results["modules"]["Module_C_Anomaly_Detection"] = bench_callable(
        lambda: detect_anomalies(str(db_path)), "Module C: Isolation Forest"
    )
    results["modules"]["Module_D_Peer_Comparison"] = bench_callable(
        lambda: detect_peer_deviations(str(db_path)), "Module D: Peer Comparison"
    )
    results["modules"]["Module_E_Repeated_Incidents"] = bench_callable(
        lambda: detect_repeated_incidents(str(db_path)), "Module E: Repeated Incidents"
    )

    # Pre-generate findings for risk scoring benchmark
    eg = detect_execution_gaps(str(db_path))
    ns = detect_negative_space(str(db_path))
    an = detect_anomalies(str(db_path))
    pc = detect_peer_deviations(str(db_path))
    ri = detect_repeated_incidents(str(db_path))
    sample_findings = eg + ns + an + pc + ri

    results["modules"]["Phase_4_Risk_Scoring"] = bench_callable(
        lambda: score_entities(sample_findings, entity_metadata), "Phase 4: Risk Scoring & Math"
    )
    results["modules"]["Module_F_Alert_Prioritization"] = bench_callable(
        lambda: prioritize_alerts(str(db_path)), "Module F: Alert Prioritization"
    )
    results["modules"]["Module_G_Control_Prioritization"] = bench_callable(
        lambda: prioritize_controls_processes(str(db_path)), "Module G: Control Prioritization"
    )

    # Full End-to-End Pipeline Execution (In-Process)
    print("\n[*] Benchmarking Full Pipeline In-Process...")
    pipeline_durations: List[float] = []
    for _ in range(runs):
        t0 = time.perf_counter()
        run_pipeline(str(db_path))
        pipeline_durations.append(time.perf_counter() - t0)
    results["full_pipeline_in_process"] = compute_stats(pipeline_durations)
    print(f"    Full Pipeline (In-Process)       | Median: {results['full_pipeline_in_process']['median']:.4f}s")

    # Subprocess Communication Overhead
    print("[*] Benchmarking Subprocess Execution Overhead...")
    subp_durations: List[float] = []
    script_path = REPO_ROOT / "sat-sa" / "analytics" / "pipeline.py"
    py_bin = sys.executable

    for _ in range(runs):
        t0 = time.perf_counter()
        subprocess.run(
            [py_bin, str(script_path), "--db-path", str(db_path)],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            check=True
        )
        subp_durations.append(time.perf_counter() - t0)

    results["full_pipeline_subprocess"] = compute_stats(subp_durations)
    overhead = results["full_pipeline_subprocess"]["median"] - results["full_pipeline_in_process"]["median"]
    results["subprocess_overhead_seconds"] = round(overhead, 4)
    print(f"    Full Pipeline (Subprocess)       | Median: {results['full_pipeline_subprocess']['median']:.4f}s (Overhead: {overhead:.4f}s)")

    # Throughput (Entities per second)
    med_pipeline = results["full_pipeline_in_process"]["median"]
    results["entities_per_second"] = round(entity_count / med_pipeline, 2) if med_pipeline > 0 else 0.0
    print(f"    --> Analytics Throughput: {results['entities_per_second']} entities/sec")

    return results


# ==============================================================================
# PHASE 3C: SQLITE DATABASE ENGINE PERFORMANCE
# ==============================================================================

def benchmark_sqlite_performance(db_path: Path, runs: int = 5) -> Dict[str, Any]:
    print("\n" + "="*80)
    print("PHASE 3C: SQLITE ENGINE PERFORMANCE (Indexed vs Unindexed, JOINs, WAL Reads)")
    print("="*80)

    conn = sqlite3.connect(str(db_path))
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    # 1. Indexed vs Non-Indexed Lookups
    print("[*] Benchmarking Indexed vs Non-Indexed Query: SELECT * FROM alerts WHERE entity_id = ?")
    cur.execute("SELECT entity_id FROM entities LIMIT 20")
    sample_eids = [r["entity_id"] for r in cur.fetchall()]
    queries_count = 1000

    # With Index
    indexed_times = []
    for _ in range(runs):
        t0 = time.perf_counter()
        for i in range(queries_count):
            eid = sample_eids[i % len(sample_eids)]
            cur.execute("SELECT * FROM alerts WHERE entity_id = ?", (eid,)).fetchall()
        indexed_times.append(time.perf_counter() - t0)
    indexed_stats = compute_stats(indexed_times)

    # Drop Index temporarily
    cur.execute("DROP INDEX IF EXISTS idx_alerts_entity;")
    unindexed_times = []
    for _ in range(runs):
        t0 = time.perf_counter()
        for i in range(queries_count):
            eid = sample_eids[i % len(sample_eids)]
            cur.execute("SELECT * FROM alerts WHERE entity_id = ?", (eid,)).fetchall()
        unindexed_times.append(time.perf_counter() - t0)
    unindexed_stats = compute_stats(unindexed_times)

    # Re-create Index
    cur.execute("CREATE INDEX IF NOT EXISTS idx_alerts_entity ON alerts(entity_id);")
    conn.commit()

    speedup = unindexed_stats["median"] / indexed_stats["median"] if indexed_stats["median"] > 0 else 1.0
    print(f"    Indexed Median (1,000 queries)   : {indexed_stats['median']:.4f}s ({indexed_stats['median']/queries_count*1000:.2f}ms/query)")
    print(f"    Unindexed Median (1,000 queries) : {unindexed_stats['median']:.4f}s ({unindexed_stats['median']/queries_count*1000:.2f}ms/query)")
    print(f"    --> B-Tree Index Speedup Multiplier: {speedup:.2f}x faster")

    # 2. Complex 4-Table JOIN Query
    print("\n[*] Benchmarking Complex 4-Table Relational JOIN...")
    join_query = """
        SELECT
            e.entity_name,
            e.sector,
            a.asset_type,
            a.criticality,
            al.severity,
            al.category,
            c.investigation_duration,
            c.escalated,
            c.remediation_status
        FROM alerts al
        JOIN entities e ON al.entity_id = e.entity_id
        JOIN assets a ON al.asset_id = a.asset_id
        LEFT JOIN cases c ON al.alert_id = c.alert_id
        WHERE al.severity = 'CRITICAL'
        LIMIT 5000;
    """
    join_times = []
    for _ in range(runs):
        t0 = time.perf_counter()
        rows = cur.execute(join_query).fetchall()
        join_times.append(time.perf_counter() - t0)
    join_stats = compute_stats(join_times)
    print(f"    4-Table JOIN (5,000 rows) Median: {join_stats['median']:.4f}s")

    # 3. Aggregation & Analytical GROUP BY Query
    print("[*] Benchmarking Sector & Category Aggregation Query...")
    agg_query = """
        SELECT
            e.sector,
            al.category,
            COUNT(al.alert_id) as total_alerts,
            AVG(c.investigation_duration) as avg_duration,
            SUM(CASE WHEN c.escalated = 1 THEN 1 ELSE 0 END) * 1.0 / COUNT(c.case_id) as escalation_rate
        FROM alerts al
        JOIN entities e ON al.entity_id = e.entity_id
        LEFT JOIN cases c ON al.alert_id = c.alert_id
        GROUP BY e.sector, al.category
    """
    agg_times = []
    for _ in range(runs):
        t0 = time.perf_counter()
        cur.execute(agg_query).fetchall()
        agg_times.append(time.perf_counter() - t0)
    agg_stats = compute_stats(agg_times)
    print(f"    Complex Aggregation Median: {agg_stats['median']:.4f}s")

    # 4. Concurrent Read Operations under WAL
    print("[*] Benchmarking Concurrent Multi-Threaded Reads (4 Workers, 2,000 Total Reads)...")
    def worker_read():
        t_w0 = time.perf_counter()
        w_conn = sqlite3.connect(str(db_path))
        w_cur = w_conn.cursor()
        for i in range(500):
            eid = sample_eids[i % len(sample_eids)]
            w_cur.execute("SELECT * FROM alerts WHERE entity_id = ? LIMIT 10", (eid,)).fetchall()
        w_conn.close()
        return time.perf_counter() - t_w0

    concurrent_times = []
    for _ in range(runs):
        t0 = time.perf_counter()
        with ThreadPoolExecutor(max_workers=4) as ex:
            futs = [ex.submit(worker_read) for _ in range(4)]
            for f in futs: f.result()
        concurrent_times.append(time.perf_counter() - t0)
    conc_stats = compute_stats(concurrent_times)
    conc_rps = 2000.0 / conc_stats["median"] if conc_stats["median"] > 0 else 0.0
    print(f"    Concurrent 4-Worker Reads Median: {conc_stats['median']:.4f}s ({conc_rps:.1f} reads/sec)")

    # 5. Database File Size Growth
    cur.execute("PRAGMA wal_checkpoint(TRUNCATE);")
    conn.close()
    db_size_mb = round(os.path.getsize(str(db_path)) / (1024 * 1024), 2)
    print(f"    Database Size on Disk: {db_size_mb} MB")

    return {
        "db_size_mb": db_size_mb,
        "indexed_lookup_1000_seconds": indexed_stats,
        "unindexed_lookup_1000_seconds": unindexed_stats,
        "index_speedup_multiplier": round(speedup, 2),
        "four_table_join_seconds": join_stats,
        "aggregation_query_seconds": agg_stats,
        "concurrent_wal_reads_seconds": conc_stats,
        "concurrent_reads_per_second": round(conc_rps, 1),
    }


# ==============================================================================
# PHASE 3F: RELIABILITY, AUDIT CHAINING & DATA INTEGRITY
# ==============================================================================

def benchmark_reliability_and_integrity(db_dir: Path) -> Dict[str, Any]:
    print("\n" + "="*80)
    print("PHASE 3F: RELIABILITY, AUDIT CHAINING & DATA INTEGRITY")
    print("="*80)

    results: Dict[str, Any] = {}
    test_db = db_dir / "bench_reliability.db"
    conn = init_benchmark_database(test_db)
    cur = conn.cursor()

    # 1. Foreign-Key Rejection Verification
    print("[*] Test 1: Foreign-Key Referential Integrity Rejection...")
    fk_rejected = False
    try:
        cur.execute(
            "INSERT INTO assets (asset_id, entity_id, asset_type, criticality, expected_telemetry) VALUES (?, ?, ?, ?, ?)",
            ("AST-ORPHAN-01", "CSE-NON-EXISTENT", "Server", "CRITICAL", "1 day")
        )
        conn.commit()
    except sqlite3.IntegrityError:
        fk_rejected = True
        conn.rollback()
    results["fk_violation_rejected"] = fk_rejected
    print(f"    -> Foreign key violation rejected: {fk_rejected}")

    # 2. Malformed Timestamp & Check Constraints Rejection
    print("[*] Test 2: Check Constraint Rejection (Invalid Criticality Enum)...")
    enum_rejected = False
    try:
        # Insert valid entity first
        cur.execute("INSERT INTO entities (entity_id, entity_name, sector) VALUES ('CSE-001', 'Test', 'Energy')")
        cur.execute(
            "INSERT INTO assets (asset_id, entity_id, asset_type, criticality, expected_telemetry) VALUES (?, ?, ?, ?, ?)",
            ("AST-BAD-ENUM", "CSE-001", "Server", "INVALID_SUPER_CRITICAL", "1 day")
        )
        conn.commit()
    except sqlite3.IntegrityError:
        enum_rejected = True
        conn.rollback()
    results["enum_violation_rejected"] = enum_rejected
    print(f"    -> Invalid enum rejected: {enum_rejected}")

    # 3. Duplicate Primary Key Rejection
    print("[*] Test 3: Duplicate Primary Key Rejection...")
    dup_rejected = False
    try:
        cur.execute("INSERT INTO entities (entity_id, entity_name, sector) VALUES ('CSE-001', 'Test 1', 'Energy')")
        cur.execute("INSERT INTO entities (entity_id, entity_name, sector) VALUES ('CSE-001', 'Test 2', 'Banking')")
        conn.commit()
    except sqlite3.IntegrityError:
        dup_rejected = True
        conn.rollback()
    results["duplicate_pk_rejected"] = dup_rejected
    print(f"    -> Duplicate primary key rejected: {dup_rejected}")

    # 4. Atomic Transaction Rollback Verification
    print("[*] Test 4: Atomic Transaction Rollback (No Partial Commits)...")
    cur.execute("DELETE FROM entities")
    conn.commit()

    rollback_clean = False
    try:
        conn.execute("BEGIN TRANSACTION;")
        cur.execute("INSERT INTO entities (entity_id, entity_name, sector) VALUES ('CSE-VALID-1', 'Valid 1', 'Energy')")
        cur.execute("INSERT INTO entities (entity_id, entity_name, sector) VALUES ('CSE-VALID-2', 'Valid 2', 'Energy')")
        # Deliberate failure on 3rd statement
        cur.execute("INSERT INTO entities (entity_id, entity_name, sector) VALUES ('CSE-VALID-1', 'Duplicate Collision', 'Energy')")
        conn.commit()
    except sqlite3.IntegrityError:
        conn.rollback()
        # Verify 0 rows survived the aborted transaction
        cur.execute("SELECT COUNT(*) FROM entities")
        remaining = cur.fetchone()[0]
        rollback_clean = (remaining == 0)

    results["atomic_rollback_verified"] = rollback_clean
    print(f"    -> Atomic rollback left 0 orphaned rows: {rollback_clean}")

    # 5. Cryptographic SHA-256 Audit Chain & Tamper Detection
    print("[*] Test 5: Cryptographic Audit Hash Chain & Tamper Detection...")
    def add_audit_entry(cur, op: str, details: dict, prev_hash: str) -> str:
        ts = datetime.now(timezone.utc).isoformat()
        raw_det = json.dumps(details, sort_keys=True)
        payload = f"{op}|{ts}|{raw_det}|{prev_hash}"
        h = hashlib.sha256(payload.encode("utf-8")).hexdigest()
        cur.execute(
            "INSERT INTO audit_logs (operation, timestamp, details, previous_hash, hash) VALUES (?, ?, ?, ?, ?)",
            (op, ts, raw_det, prev_hash, h)
        )
        return h

    prev = "0" * 64
    for i in range(5):
        prev = add_audit_entry(cur, f"OP_{i}", {"action": "ingest", "seq": i}, prev)
    conn.commit()

    # Function to verify audit chain
    def verify_audit_chain(cur) -> Tuple[bool, int]:
        rows = cur.execute("SELECT id, operation, timestamp, details, previous_hash, hash FROM audit_logs ORDER BY id").fetchall()
        expected_prev = "0" * 64
        for r in rows:
            if r[4] != expected_prev:
                return False, r[0]
            payload = f"{r[1]}|{r[2]}|{r[3]}|{r[4]}"
            calculated = hashlib.sha256(payload.encode("utf-8")).hexdigest()
            if calculated != r[5]:
                return False, r[0]
            expected_prev = r[5]
        return True, -1

    valid_chain, _ = verify_audit_chain(cur)
    print(f"    -> Untampered audit chain verification: {valid_chain}")

    # Intentionally tamper with record #3
    cur.execute("UPDATE audit_logs SET details = '{\"action\":\"tampered\"}' WHERE id = 3")
    conn.commit()
    tamper_detected, bad_id = verify_audit_chain(cur)
    tamper_caught = (not tamper_detected and bad_id == 3)
    print(f"    -> Tampered audit record caught at ID={bad_id}: {tamper_caught}")

    results["audit_chain_valid_before_tamper"] = valid_chain
    results["audit_tamper_detected"] = tamper_caught

    conn.close()
    return results


# ==============================================================================
# MAIN ORCHESTRATOR
# ==============================================================================

def main():
    parser = argparse.ArgumentParser(description="SAT-SA Comprehensive Benchmark Suite")
    parser.add_argument("--data-dir", default="benchmark/data", help="Directory containing generated datasets")
    parser.add_argument("--results-dir", default="benchmark/results", help="Directory to store JSON/CSV results")
    parser.add_argument("--runs", type=int, default=5, help="Number of measured iterations per test")
    parser.add_argument("--target-scale", default="medium", choices=["small", "medium", "large", "xl", "stress"], help="Scale to run deep analytical/SQLite benchmarks on")

    args = parser.parse_args()
    data_dir = Path(args.data_dir)
    results_dir = Path(args.results_dir)
    results_dir.mkdir(parents=True, exist_ok=True)

    db_dir = results_dir / "databases"
    db_dir.mkdir(parents=True, exist_ok=True)

    suite_start = time.time()

    environment_info = {
        "os": platform.system(),
        "os_release": platform.release(),
        "os_version": platform.version(),
        "architecture": platform.machine(),
        "python_version": platform.python_version(),
        "sqlite_version": sqlite3.sqlite_version,
        "cpu_count": os.cpu_count(),
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }

    print("\n" + "#"*80)
    print("SAT-SA OFFLINE REGULATORY ANALYTICS ENGINE — FULL BENCHMARK SUITE")
    print("#"*80)
    print(f"Platform: {environment_info['os']} {environment_info['architecture']} | Python {environment_info['python_version']} | SQLite {environment_info['sqlite_version']}")

    # 1. Data Ingestion Performance (Phase 3A)
    ingestion_results = run_ingestion_benchmarks(data_dir, db_dir, runs=args.runs)

    # 2. SQLite & Analytical Benchmarks on Target Scale
    target_db = db_dir / f"bench_ingest_{args.target_scale}.db"
    if not target_db.exists():
        print(f"[*] Initializing target database for {args.target_scale}...")
        benchmark_ingestion_single_run(data_dir / args.target_scale, target_db)

    # 3. Analytical Engine Performance (Phase 3B)
    analytics_results = benchmark_analytical_modules(target_db, runs=args.runs)

    # 4. SQLite Performance (Phase 3C)
    sqlite_results = benchmark_sqlite_performance(target_db, runs=args.runs)

    # 5. Reliability and Data Integrity (Phase 3F)
    reliability_results = benchmark_reliability_and_integrity(db_dir)

    # Compile Final Benchmark Summary Object
    full_report = {
        "environment": environment_info,
        "benchmark_runs_per_test": args.runs,
        "target_scale": args.target_scale,
        "elapsed_total_seconds": round(time.time() - suite_start, 2),
        "ingestion": ingestion_results,
        "analytics": analytics_results,
        "sqlite": sqlite_results,
        "reliability": reliability_results,
    }

    # Save to JSON
    summary_path = results_dir / "benchmark_summary.json"
    with open(summary_path, "w", encoding="utf-8") as f:
        json.dump(full_report, f, indent=2)

    # Save Ingestion CSV Summary
    ingest_csv_path = results_dir / "ingestion_throughput.csv"
    with open(ingest_csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["Dataset", "Total Records", "Median RPS", "Mean RPS", "Median Time (s)", "Commit Time (s)", "Memory Delta (MB)"])
        for k, v in ingestion_results.items():
            writer.writerow([
                k,
                v["total_records"],
                v["records_per_second"]["median"],
                v["records_per_second"]["mean"],
                v["total_time_seconds"]["median"],
                v["commit_time_seconds"]["median"],
                v["memory_delta_mb"]["median"],
            ])

    # Save Analytics CSV Summary
    analytics_csv_path = results_dir / "analytics_latency.csv"
    with open(analytics_csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["Module", "Median Latency (s)", "Mean Latency (s)", "Min (s)", "Max (s)"])
        for mod, val in analytics_results.get("modules", {}).items():
            writer.writerow([mod, val["median"], val["mean"], val["min"], val["max"]])

    print("\n" + "="*80)
    print(f"[+] COMPLETE BENCHMARK SUITE FINISHED in {full_report['elapsed_total_seconds']}s")
    print(f"[+] Output JSON written to : {summary_path}")
    print(f"[+] Ingestion CSV written to: {ingest_csv_path}")
    print(f"[+] Analytics CSV written to: {analytics_csv_path}")
    print("="*80 + "\n")


if __name__ == "__main__":
    main()
