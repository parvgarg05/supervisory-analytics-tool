# Security & Threat Model Specification: SAT-SA Platform
**Standard:** Enterprise Security Engineering & Threat Modeling (STRIDE / OWASP)  
**Target:** Regulatory Security Analytics & Threat Assessment Platform  
**Classification:** Confidential Telemetry Engine  

---

## 1. Threat Model & Trust Boundaries

The SAT-SA engine processes highly sensitive organizational cybersecurity telemetry, including infrastructure asset lists, alert classifications, incident investigation notes, and analyst identifiers.

```
[Untrusted Client / User Data Upload]
                |
                | (HTTP multipart / JSON Body)
                v
+=======================================================+
| TRUST BOUNDARY 1: Web & Ingestion Layer               |
| - File size caps (50MB memory buffer)                 |
| - Ephemeral memory storage (no disk staging traversal)|
| - In-memory schema & foreign-key validation           |
+=======================================================+
                |
                v
+=======================================================+
| TRUST BOUNDARY 2: Persistence Layer (SQLite Database) |
| - Parameterized prepared statements (? placeholders)  |
| - Write-Ahead Logging (WAL) + Foreign key enforcement |
| - Cryptographic SHA-256 hash-chained audit logging    |
+=======================================================+
                |
                v
+=======================================================+
| TRUST BOUNDARY 3: Analytical Execution Subsystem      |
| - Strictly local Python execution                     |
| - Air-gapped: ZERO network requests                   |
| - Deterministic seed (random_state=42)                |
+=======================================================+
```

---

## 2. Security Safeguards & Implementations

### 2.1 SQL Injection Defenses
- **Audit Result:** All SQL queries in `sat-sa/backend/src/db.ts`, `sat-sa/backend/src/routes.ts`, and `sat-sa/analytics/*.py` use parameterized prepared statements.
- **Verification:** Dynamic user values are passed exclusively as bound parameters (`?` in SQLite and Python DB-API 2.0). Zero string concatenation (`f"SELECT ... {user_input}"`) exists across database query boundaries.

### 2.2 Path Traversal & Filesystem Hardening
- **Upload Buffering:** Multer is configured with `multer.memoryStorage()`, keeping upload payloads strictly in volatile memory. Files are not staged on disk using user-controlled filenames.
- **Temporary SQLite Exports:** When importing SQLite `.db` exports, unique random filenames generated via OS temp directory and process PID (`sat-sa-import-${process.pid}-${Date.now()}.db`) are used. Client-supplied `originalname` values are never used as filesystem paths.

### 2.3 Strict Referential Integrity & Malformed Payload Rejection
- Ingestion enforces a two-pass validation model:
  1. Structural validation: Required fields, timestamp formats (ISO 8601), enum boundaries (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`), non-negative durations.
  2. Referential validation: Every asset maps to a valid entity; every alert maps to an asset belonging to that same entity; every case maps to an alert of matching entity ownership.
- Any violation causes transaction abort and returns HTTP 400 with granular field-level diagnostics.

---

## 3. Audit Log Trust Model & Cryptographic Limitations

SAT-SA implements a sequential SHA-256 hash-chained audit ledger (`audit_logs` table).

### 3.1 Tamper-Evident Properties
Each log row satisfies:
$$\text{Hash}_i = \text{SHA256}(\text{operation}_i \parallel \text{timestamp}_i \parallel \text{details}_i \parallel \text{Hash}_{i-1})$$

The chain guarantees:
1. **Row Tamper Evidence:** Any modification of `details`, `timestamp`, or `operation` in row $i$ invalidates its hash and breaks the link to row $i+1$.
2. **Deletion & Insertion Detection:** Deleting or inserting a row breaks previous-hash continuity ($\text{previous\_hash}_{k} \neq \text{Hash}_{k-1}$).
3. **Reordering Detection:** Row permutation changes the input hash values and invalidates the entire chain suffix.

### 3.2 Formal Trust Limitations (Honesty & Engineering Integrity)
- **Tamper-Evident, Not Tamper-Proof:** Because the database runs locally, an adversary with direct write access to the host SQLite file could theoretically recalculate the entire hash chain from row 0 forward.
- **Lack of Asymmetric Non-Repudiation:** The audit log currently uses symmetric SHA-256 hashing rather than asymmetric digital signatures (e.g. Ed25519) signed by an external Hardware Security Module (HSM) or secure enclave.
- **External Witnessing Recommendation:** In enterprise production, the latest block hash ($\text{Hash}_N$) should be anchored to an external immutable witness (e.g., enterprise syslog, remote RFC 3161 timestamping authority, or write-once ledger).

---

## 4. Air-Gapped & Offline Execution Assurance

SAT-SA is engineered for zero-trust, sovereign regulatory compliance:
- **Zero Outbound Telemetry:** No telemetry beacons, analytics trackers, or external CDN dependencies.
- **Local Machine Learning:** The unsupervised Isolation Forest and statistical peer anomaly models run entirely in-process using local NumPy, scikit-learn, and SQLite binaries.
- **No Third-Party Cloud APIs:** No dependencies on OpenAI, Anthropic, Gemini, or external inference APIs. All analytical risk scoring is 100% air-gapped and reproducible.

---

## 5. Security Verification Test Suite

The security and integrity mechanisms are regression-tested on every build:
- `Audit Log Cryptographic Chain & Tamper Detection`: Verifies valid chain integrity, content modification rejection, and middle-row deletion detection.
- `Validation: Referential Integrity & Cross-Entity Mismatches`: Validates rejection of cross-entity asset/alert theft.
- `LANL adapter preserves exact schema, count, duplicates, provenance, and isolation`: Validates data isolation and determinism.
- `Evidence Integrity Check: GET /api/evidence/integrity`: Confirms all supervisory findings link to real, unmanipulated database rows.
