# Dataset Methodology & Generation Specification: SAT-SA Platform
**Standard:** Synthetic Benchmark & Empirical Evaluation Methodology  
**Target:** Regulatory Security Analytics & Threat Assessment Platform  

---

## 1. Overview & Objective

To benchmark the SAT-SA offline analytics engine rigorously without exposing production telemetry, a deterministic synthetic data generator (`benchmark/generate_data.py`) and an external dataset adapter (`sat-sa/analytics/lanl_adapter.py`) were developed.

The generation suite serves two distinct testing objectives:
1. **Scale & Performance Benchmarking:** Evaluating throughput, latency, memory consumption, and SQLite query efficiency under standard relational workloads from 1K to 180K records.
2. **Detection & Ingestion Resilience:** Evaluating detection precision/recall against ground-truth behavioral anomalies, and proving rejection of malformed or corrupted inputs.

---

## 2. Standard Benchmark Datasets

Datasets are generated with consistent entity-to-asset (1:5), entity-to-alert (1:10), and entity-to-case (1:2) proportions:

| Dataset Size | Entities | Assets | Alerts | Cases | Total Records | JSON Size (MB) |
|---|---:|---:|---:|---:|---:|---:|
| **Small** | 100 | 500 | 1,000 | 250 | 1,850 | ~0.56 |
| **Medium** | 500 | 2,500 | 5,000 | 1,000 | 9,000 | ~2.80 |
| **Large** | 1,000 | 5,000 | 10,000 | 2,000 | 18,000 | ~5.60 |
| **XL** | 5,000 | 25,000 | 50,000 | 10,000 | 90,000 | ~28.0 |
| **Stress** | 10,000 | 50,000 | 100,000 | 20,000 | 180,000 | ~56.2 |

All datasets are saved in both CSV directory bundles (`entities.csv`, `assets.csv`, `alerts.csv`, `cases.csv`) and consolidated `dataset.json` formats in `benchmark/data/<size>/`.

---

## 3. Behavioral Anomaly Injection (Ground Truth)

Approximately 15% of entities (`anomaly_ratio = 0.15`) are deterministically designated as exhibiting deficient or compromised operational practices. Ground truth is recorded in `ground_truth.json`.

### Injected Behavioral Patterns:
1. **Quick Closures (Module A):**
   - Critical alerts assigned investigation durations between 1 and 8 minutes (< 10 min threshold).
2. **Incident Suppression / Non-Escalation (Module A):**
   - Critical severity alerts closed with `escalated = 0` and closure reason `Ignored`.
3. **Surveillance Voids / Negative Space (Module B):**
   - Critical and high assets configured with stale telemetry timestamps (15 to 60 days overdue vs 7-day/14-day thresholds).
4. **Repeated Alerts Without Remediation (Module E):**
   - Repetitive clusters of $\ge 5$ malware alerts on the same asset closed with `remediation_status = 'None'`.
5. **Elevated Critical Density (Module C & D):**
   - Anomaly entities generate 3x alert density with heavily skewed critical proportions, allowing cohort deviation measurement.

---

## 4. Corrupted Dataset Generation (Negative Testing)

To verify the ingestion validation layer, corrupted dataset variants (`small_corrupted` through `stress_corrupted`) are generated with deliberate fault injection:
- **Missing Required Headers:** Key columns removed from CSV headers.
- **Malformed Timestamps:** Invalid date strings (e.g. `"2026-99-99T99:99:99Z"`, `"invalid-date"`).
- **Domain Value Violations:** Illegal enum strings (e.g. `severity = "URGENT"`, `status = "DONE"`).
- **Negative Durations:** Case records with `investigation_duration < 0`.
- **Broken Foreign Keys:** Alerts referencing non-existent asset IDs (`AST-NONEXISTENT`).
- **Cross-Entity Violations:** An alert assigned to Entity A referencing an asset belonging to Entity B.

**Validation Requirement:** Every corrupted dataset must be 100% rejected by `DataValidator.validateDataset()` without persisting partial state to the SQLite database.

---

## 5. LANL Redteam Dataset Integration

To evaluate the platform against real-world adversarial intrusion telemetry, `sat-sa/analytics/lanl_adapter.py` translates the Los Alamos National Laboratory (LANL) Cybersecurity Redteam dataset (`sat-sa/datasets/external/redteam.txt/redteam.txt`) into SAT-SA relational schema.

### Mapping Specification:
- **Raw LANL Schema (749 records):** `time (sec), user@domain, source_computer, dest_computer`
- **Entity Mapping:** Extracted user domains (`DOM1`, etc.) mapped to enterprise entities (`ENT-LANL-DOM1`).
- **Asset Mapping:** 305 unique computers mapped to `assets` (`AST-C17693`, etc.) with criticality assigned based on network graph degree.
- **Alert Mapping:** 749 lateral movement authentication events mapped to `alerts` with `category = 'Unauthorized Access'` and `severity = 'CRITICAL'`.
- **Case Mapping:** SOC triage response records simulated with variable investigation durations to test supervisory execution gap heuristics.

---

## 6. Reproducibility & Seeding

All data generation is strictly deterministic:
- Generation is seeded with `seed = 42` by default.
- Fixed anchor timestamp: `2026-09-27T12:00:00Z`.
- Running `python benchmark/generate_data.py --size small --seed 42` produces bit-for-bit identical datasets across OS platforms.
