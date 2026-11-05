# System Architecture: SAT-SA Platform
**Security Analytics & Threat Assessment Engine (SIH PS-157)**  
**Standard:** Principal / Staff Backend & Systems Engineering Specification  
**Deployment Model:** 100% Offline, Air-Gapped, Local Regulatory Telemetry Engine  

---

## 1. System Overview & Architectural Topology

The SAT-SA platform is an air-gapped, offline-first regulatory cybersecurity assessment engine. It ingests multi-tenant enterprise SOC telemetry (assets, alerts, investigation cases, and organizational entities), verifies referential and cryptographic integrity, executes deterministic supervisory heuristics and local machine learning models, and computes explainable, multi-dimensional security posture scores.

```
+-------------------------------------------------------------------------------+
|                             SAT-SA React / Vite UI                            |
|                     (Tailwind CSS, Lucide Icons, Chart.js)                    |
+---------------------------------------+---------------------------------------+
                                        | HTTP / REST (JSON)
                                        v
+-------------------------------------------------------------------------------+
|                       Node.js / Express Backend Engine                        |
|                                                                               |
|  +------------------------+  +------------------------+  +-----------------+  |
|  | Multi-Format Ingestion |  | Transaction Management |  | Audit Logging   |  |
|  | (CSV, JSON, SQLite)    |  | (Rollback on error)    |  | (SHA-256 Chain) |  |
|  +------------------------+  +------------------------+  +-----------------+  |
|  +-------------------------------------------------------------------------+  |
|  |           SQLite Embedded Database Service (WAL Mode + Pragma FK)       |  |
|  +-------------------------------------------------------------------------+  |
+---------------------------------------+---------------------------------------+
                                        | Inter-Process Pipeline Bridge
                                        v
+-------------------------------------------------------------------------------+
|                     Python 3.11+ Analytical Subsystem                         |
|                                                                               |
|  +-----------------------+  +-----------------------+  +-------------------+  |
|  | Module A:             |  | Module B:             |  | Module C:         |  |
|  | Execution Gaps (SQL)  |  | Negative Space (SQL)  |  | Isolation Forest  |  |
|  +-----------------------+  +-----------------------+  +-------------------+  |
|  +-----------------------+  +-----------------------+  +-------------------+  |
|  | Module D:             |  | Module E:             |  | Module F/G:       |  |
|  | Peer Comparison       |  | Repeated Incidents    |  | Risk Scoring &    |  |
|  | (Sector Cohorts)      |  | (Asset Clustering)    |  | Control Priority  |  |
|  +-----------------------+  +-----------------------+  +-------------------+  |
+-------------------------------------------------------------------------------+
```

---

## 2. Core Subsystems

### 2.1 Ingestion & Validation Subsystem (`sat-sa/backend/src/ingestion.ts`)
- **Format Agnostic:** Supports batch JSON payloads, multi-file CSV archives (`entities.csv`, `assets.csv`, `alerts.csv`, `cases.csv`), and standalone SQLite database imports.
- **Two-Pass Referential Integrity:** Ingests and cross-validates foreign keys in-memory before issuing database transactions:
  - Asserts every `asset.entity_id` exists in `entities`.
  - Asserts every `alert.asset_id` and `alert.entity_id` match asset ownership.
  - Asserts every `case.alert_id` exists and matches the parent alert's entity ID.
- **Atomic Transactions:** Wrapped in `BEGIN TRANSACTION` and committed only if all constraints pass. If schema or referential errors occur, the transaction rolls back cleanly.

### 2.2 Relational Persistence Engine (`sat-sa/backend/src/db.ts`)
- **Engine:** Node.js native `DatabaseSync` SQLite binding.
- **Concurrency & Journaling:** Configured with `PRAGMA journal_mode = WAL;` (Write-Ahead Logging) and `PRAGMA synchronous = NORMAL;`, allowing concurrent reads during bulk analytical queries.
- **Indexing Strategy:**
  - `idx_assets_entity` on `assets(entity_id)`
  - `idx_alerts_entity` on `alerts(entity_id)`
  - `idx_alerts_asset` on `alerts(asset_id)`
  - `idx_alerts_severity` on `alerts(severity)`
  - `idx_cases_entity` on `cases(entity_id)`
  - `idx_cases_alert` on `cases(alert_id)`

### 2.3 Vectorized Analytics Engine (`sat-sa/analytics/`)
The analytical engine is structured into deterministic heuristic detectors and local statistical anomaly models:

| Module | Identifier | Algorithm / Mechanism | Complexity |
|---|---|---|---|
| **Execution Gaps** | Module A | Bulk SQL aggregation identifying quick closures (<10m), unescalated criticals, and premature completions | $O(N)$ bulk grouped |
| **Negative Space** | Module B | Stale telemetry evaluation (>7d critical, >14d high) and uninvestigated high-severity alerts | $O(N)$ bulk grouped |
| **Anomaly Detection** | Module C | scikit-learn `IsolationForest` (150 trees, tree-path depth attribution, deterministic seed 42) | $O(T \cdot N \log N)$ |
| **Peer Comparison** | Module D | Sector-based cohort distribution calculation (median, variance, deviation thresholds) | $O(N)$ vectorized |
| **Repeated Incidents** | Module E | Grouped SQL cluster evaluation on `(asset_id, category)` with unremediated ratio thresholds | $O(K)$ clusters |
| **Risk Scoring** | Composite | Multi-factor weighted normalization: $0.30 \cdot EG + 0.25 \cdot NS + 0.20 \cdot AN + 0.15 \cdot PC + 0.10 \cdot RI$ | $O(N)$ deterministic |

---

## 3. High-Performance Query Optimization: Vectorization vs N+1

In early versions, analytics modules looped through entities in Python and queried SQLite per entity (`SELECT ... WHERE entity_id = ?`). At 10,000 entities, this triggered over 120,000 discrete SQLite queries.

### Optimized Architecture:
Modules now issue bulk pre-aggregations using `GROUP BY entity_id` before iterating in Python:
1. `_compute_entity_metrics()`: 4 global SQL queries replace $5 \times N$ round trips.
2. `detect_execution_gaps()`: 4 bulk queries replace $4 \times N$ round trips.
3. `detect_negative_space()`: 4 bulk queries replace $3 \times N$ round trips.
4. `checkFindingsEvidenceIntegrity()`: $O(1)$ in-memory hash-set lookups replace nested $O(N)$ database query iterations.

**Result:** Total query count collapsed by >98%, and backend automated test suite duration dropped by 32.5%.

---

## 4. Cryptographic Provenance & Tamper-Evident Chaining

Every administrative, analytical, and data ingestion event is written to `audit_logs` using a SHA-256 hash chain:
$$\text{Hash}_i = \text{SHA256}(\text{operation}_i \parallel \text{timestamp}_i \parallel \text{details}_i \parallel \text{Hash}_{i-1})$$
where $\text{Hash}_0 = \text{"GENESIS"}$.

- Tampering with row contents alters $\text{Hash}_i$, failing verification against $\text{Hash}_{i+1}$.
- Deleting or inserting rows breaks sequence continuity ($\text{previous\_hash}_{i+1} \neq \text{Hash}_i$).
- Verification is available via `/api/audit/verify`.

---

## 5. Offline & Air-Gap Compliance

SAT-SA contains **zero external network calls**.
- No external CDN references or telemetry beacons.
- No cloud LLM dependencies (no OpenAI, Gemini, Claude, or Groq API calls).
- All NLP/ML scoring runs on local scikit-learn models and deterministic arithmetic.
- Runs entirely in air-gapped environments on standard commodity hardware.
