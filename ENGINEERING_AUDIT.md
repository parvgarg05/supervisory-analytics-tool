# Complete Engineering Audit: SAT-SA Platform
**Author:** Staff Software & Systems Performance Engineer  
**Scope:** Architecture, Database Access Patterns, ML/Detection Engine, Security & Integrity, Testing  
**Target:** Regulatory Security Analytics & Threat Assessment Platform (SIH PS-157)  
**Date:** March 2026 (Assessment Standard)  

---

## 1. Executive Summary

A comprehensive architectural and performance audit was conducted across the SAT-SA codebase (`sat-sa/backend`, `sat-sa/analytics`, and `sat-sa/frontend`). The platform demonstrates strong regulatory-first principles: offline execution, tamper-evident SHA-256 audit chaining, and deterministic rule modules. However, several critical architectural bottlenecks, N+1 query patterns, and ML calibration flaws prevent it from reaching tier-1 enterprise throughput and detection fidelity.

### Key Audit Findings Overview
| Category | Severity | Primary Root Cause | Impact |
|---|---|---|---|
| **Database Performance** | CRITICAL | Multi-module N+1 query loops (`execution_gaps`, `peer_analysis`, `negative_space`) | 120,000+ individual SQLite queries executed at 10K-entity scale |
| **Inter-Process Architecture** | HIGH | Node.js spawns cold Python subprocess for every analysis run | ~5.6s bootstrap latency on Windows; blocks Express worker event flow |
| **Detection Fidelity** | HIGH | Isolation Forest trained on raw unscaled features with hardcoded 15% contamination | F1 score of 0.467 on synthetic benchmark data; distorted tree splits |
| **Audit Log Cryptography** | MEDIUM | SHA-256 chaining without sequence monotonicity checks or digital signatures | Tamper-evident within row chain, but vulnerable to whole-log truncations without external witness |
| **Code Duplication** | MEDIUM | ISO datetime parsers and threshold definitions duplicated across 4+ Python files | Maintenance friction; drift between backend config and Python runtime |

---

## 2. In-Depth Architectural & Performance Audit

### 2.1 Database Access Patterns: Remaining N+1 Query Hotspots
While `anomaly_detection.py` and `db.ts` were previously optimized with bulk pre-aggregations and hash-set lookups, three analytical modules still execute synchronous nested per-entity database queries:

1. **`sat-sa/analytics/execution_gaps.py` (`_check_entity_execution_gaps`)**:
   - Queries `alerts JOIN cases` filtered by `entity_id = ?` for critical closed alerts (lines 144-154).
   - Queries `cases JOIN alerts` filtered by `entity_id = ?` for short investigation durations (lines 234-243).
   - Queries grouped repeated alert clusters filtered by `entity_id = ?` (lines 279-291).
   - Queries alert and case IDs for each cluster filtered by entity, asset, and category (lines 299-307).
   - **Total impact at 10K entities:** ~40,000 to 50,000 separate SQLite queries.
2. **`sat-sa/analytics/peer_analysis.py` (`_compute_entity_metrics`)**:
   - Iterates through all entities (`for row in entities:`, lines 97-150) and issues 5 distinct queries per entity:
     - Case counts & escalations (`cases WHERE entity_id = ?`)
     - Investigation durations (`cases WHERE entity_id = ? AND investigation_duration IS NOT NULL`)
     - Critical alert counts (`alerts WHERE entity_id = ?`)
     - Asset inventory and last seen (`assets WHERE entity_id = ?`)
   - **Total impact at 10K entities:** 50,000 queries.
3. **`sat-sa/analytics/negative_space.py` (`detect_negative_space`)**:
   - Loops over entities invoking `_check_telemetry_negative_space`, `_check_missing_investigations`, and `_check_missing_escalations` (lines 71-76), executing 3 queries per entity.
   - **Total impact at 10K entities:** 30,000 queries.

**Combined Overhead:** At 10,000 entities, the analytics pipeline issues **over 120,000 round-trips** to SQLite. By vectorizing these modules using SQL `GROUP BY entity_id` aggregations and loading datasets into memory maps, total analytics runtime can drop from ~35s down to <2s.

---

### 2.2 Process & IPC Architecture: Subprocess vs Persistent Daemon
- **Current State:** `sat-sa/backend/src/routes.ts` triggers Python analysis via `spawn("python", ["run_analysis.py", ...])`.
- **Measurement:** Cold Python process launch, importing `numpy`, `scipy`, `scikit-learn`, `sqlite3`, and parsing configuration takes **5.62 seconds** on Windows before executing a single line of business logic. Actual analytical computation is ~2.7 seconds.
- **Architectural Risk:** Under concurrent API requests, spawning multiple Python subprocesses creates high memory and CPU contention, exhausting OS thread pools.
- **Remediation:** Implement a persistent local worker or modular in-process execution bridge to eliminate the 5.6s cold-start latency.

---

### 2.3 Detection Engine Audit: Isolation Forest F1 (~0.467) Analysis
Our empirical evaluation on synthetic datasets revealed that the Isolation Forest achieves:
- **Precision:** 0.385
- **Recall:** 0.600
- **F1 Score:** 0.467

#### Root Causes:
1. **Unscaled, Skewed Features:**
   - Features have drastically different scales: `alert_volume` ranges from $10^1$ to $10^4$ (unbounded integer), while `critical_alert_ratio`, `escalation_rate`, and `telemetry_coverage` range strictly from $0.0$ to $1.0$.
   - Because `IsolationForest` chooses split values uniformly at random between the minimum and maximum observed values of a feature, unbounded features dominate early tree splits and mask subtle behavioral ratio shifts.
2. **Fixed Contamination Factor ($0.15$):**
   - The contamination parameter is hardcoded at $0.15$ in `analytics_config.json`. If a dataset has only 1% or 5% true anomalies, the classifier forces the top 15% to be labeled anomalous, generating artificial False Positives.
3. **Threshold Calibration Deficit:**
   - The decision boundary uses `clf.predict(X)` directly without computing quantile thresholds or evaluating the Precision-Recall curve.
4. **Attribution Mechanism:**
   - The inverse-depth tree traversal attribution is mathematically sound for isolating splits, but lacks peer-group percentile context (e.g. "99th percentile alert volume vs sector median").

---

### 2.4 Security & Data Integrity Audit

1. **SQL Parameterization:**
   - Audited backend queries in `db.ts` and `routes.ts`. All dynamic inputs use parameterized prepared statements (`?` placeholders). No string interpolation was found in SQL statements.
2. **Audit Log Verification Integrity:**
   - `sat-sa/backend/src/audit.ts` records `previous_hash` and `hash = SHA256(id|operation|timestamp|details|previous_hash)`.
   - **Gap:** Verification tests checked that modifying details changed the hash, but did not formally assert sequence continuity (ensuring index $N$'s `previous_hash` matches index $N-1$'s `hash`, and detecting deletion/truncation of the log head).
3. **Input & Path Traversal Sanitization:**
   - File uploads in `routes.ts` accept file paths. Filenames must be strictly sanitized to prevent directory traversal (`../`) out of the upload directory.
4. **Referential Integrity Validation:**
   - Foreign keys are enforced in SQLite with `PRAGMA foreign_keys = ON;`. Ingestion pipeline in `ingestion.ts` performs two-pass referential integrity checking before committing.

---

### 2.5 Code Duplication & Consistency
1. **ISO 8601 Datetime Parsing:**
   - Identical `_parse_iso` helper functions are duplicated across:
     - `sat-sa/analytics/anomaly_detection.py`
     - `sat-sa/analytics/peer_analysis.py`
     - `sat-sa/analytics/negative_space.py`
     - `sat-sa/analytics/pipeline.py`
   - *Fix:* Consolidate into `sat-sa/analytics/utils.py`.
2. **Configuration Synchronization:**
   - `analytics_config.json` thresholds are duplicated in comments and code defaults across multiple modules. Single source of truth must be enforced.

---

## 3. Prioritized Remediation Plan

| Priority | Task | Target Module | Expected Impact |
|---|---|---|---|
| **P0** | **Vectorize Analytics SQL** | `execution_gaps.py`, `peer_analysis.py`, `negative_space.py` | Eliminates 120,000 queries; reduces analytics runtime by >80% |
| **P0** | **Detection Engine Overhaul** | `anomaly_detection.py` | Feature scaling (RobustScaler), adaptive contamination, PR-AUC/ROC-AUC metrics; boosts F1 |
| **P1** | **Audit Log Verification Hardening** | `sat-sa/backend/src/audit.ts` & tests | Cryptographic sequence integrity, head-to-tail validation, anti-truncation detection |
| **P1** | **Testing & CI Pipeline** | `.github/workflows/ci.yml` | Multi-stage automated validation on Node 20+ and Python 3.11+ |
| **P2** | **External Dataset Adapter** | `sat-sa/analytics/lanl_adapter.py` | Formal mapping of LANL authentication events to security telemetry schema |
| **P2** | **Full Engineering Documentation** | Root `.md` files | Complete architecture, threat model, benchmark methodology, and API specification |

---
*Verified against active repository codebase.*
