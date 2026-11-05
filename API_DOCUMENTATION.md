# REST API Specification: SAT-SA Platform
**Version:** 1.0.0  
**Base URL:** `http://localhost:3001/api`  
**Transport:** HTTP/1.1 (JSON & multipart/form-data)  

---

## 1. System & Health Endpoints

### `GET /api/health`
Returns system status, active database path, and entity/asset/alert/case counts.
- **Response (200 OK):**
```json
{
  "status": "healthy",
  "version": "1.0.0",
  "database": {
    "path": "c:\\Users\\Parv Garg\\Desktop\\PS0157\\sat_sa.db",
    "connected": true,
    "counts": {
      "entities": 100,
      "assets": 500,
      "alerts": 1000,
      "cases": 250
    }
  }
}
```

### `GET /api/dashboard`
Returns high-level regulatory metrics, active findings count, severity breakdowns, and overall risk posture.
- **Response (200 OK):**
```json
{
  "total_entities": 100,
  "total_assets": 500,
  "total_alerts": 1000,
  "total_cases": 250,
  "total_findings": 42,
  "severity_breakdown": {
    "CRITICAL": 12,
    "HIGH": 18,
    "MEDIUM": 10,
    "LOW": 2
  },
  "overall_compliance_posture": "DEGRADED"
}
```

---

## 2. Ingestion & Analytical Pipeline Endpoints

### `POST /api/upload`
Uploads raw telemetry to overwrite or ingest into the active assessment database.
- **Content-Type:** `multipart/form-data` (or `application/json`)
- **Accepted Files:**
  - Consolidated `dataset.json`
  - Multi-part CSV files (`entities.csv`, `assets.csv`, `alerts.csv`, `cases.csv`)
  - SQLite export database (`.db`, `.sqlite`)
- **Response (200 OK):**
```json
{
  "success": true,
  "message": "Dataset ingested successfully",
  "records_ingested": {
    "entities": 100,
    "assets": 500,
    "alerts": 1000,
    "cases": 250
  }
}
```
- **Error Response (400 Bad Request):** If referential integrity fails or schema is violated, returns detailed validation error diagnostics.

### `POST /api/analyze`
Triggers the full analytics pipeline across all 8 modules (Execution Gaps, Negative Space, Anomaly Detection, Peer Comparison, Repeated Incidents, Risk Scoring, Alert Prioritization, and Control Prioritization).
- **Response (200 OK):**
```json
{
  "success": true,
  "total_findings": 42,
  "elapsed_seconds": 1.84,
  "module_counts": {
    "EXECUTION_GAP": 14,
    "NEGATIVE_SPACE": 12,
    "ANOMALY": 7,
    "PEER_DEVIATION": 5,
    "REPEATED_INCIDENT": 4
  }
}
```

---

## 3. Entity & Supervisory Findings Endpoints

### `GET /api/entities`
Returns all monitored entities, sector classifications, risk scores, and primary risk drivers.
- **Query Parameters:** `?sector=Energy&risk_level=CRITICAL`

### `GET /api/entities/:id`
Returns entity detail profile, including computed risk score, component score breakdown, asset inventory, and all linked supervisory findings.

### `GET /api/findings`
Returns supervisory findings across the enterprise fleet.
- **Query Parameters:** `?entity_id=CSE-007&severity=CRITICAL&type=EXECUTION_GAP`

### `GET /api/findings/:id`
Returns finding detail, rationale, supporting metrics, and linked raw evidence IDs.

---

## 4. Evidence Traceability & Integrity Endpoints

### `GET /api/evidence/integrity`
Performs an audit check validating that every evidence ID referenced in every finding exists in the raw SQLite tables.
- **Response (200 OK):**
```json
{
  "success": true,
  "total_findings_checked": 42,
  "total_evidence_ids_checked": 348,
  "valid_evidence_ids": 348,
  "broken_evidence_ids": 0,
  "broken_references": []
}
```

### `GET /api/evidence/:id`
Resolves any evidence identifier (`ALT-*`, `CAS-*`, `AST-*`) to its raw database row and linked context.

---

## 5. Audit Ledger & Cryptographic Verification Endpoints

### `GET /api/audit`
Returns the chronological list of all audit records recorded in the SQLite database.
- **Response (200 OK):**
```json
{
  "success": true,
  "total_logs": 8,
  "logs": [
    {
      "id": 1,
      "operation": "SYSTEM_INIT",
      "timestamp": "2026-11-05T09:00:00.000Z",
      "details": "{}",
      "previous_hash": "GENESIS",
      "hash": "3f8a..."
    }
  ]
}
```

### `GET /api/audit/verify`
Re-computes the SHA-256 hash chain from genesis to tail, verifying cryptographic integrity, row content fidelity, and sequence continuity.
- **Response (200 OK):**
```json
{
  "success": true,
  "valid": true,
  "errors": [],
  "total_logs": 8
}
```
- **Response if tampered (200 OK):**
```json
{
  "success": true,
  "valid": false,
  "errors": [
    "Hash mismatch at log 2: computed 9a2b..., stored 3f8a..."
  ],
  "total_logs": 8
}
```
