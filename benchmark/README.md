# SAT-SA Large-Scale Benchmark Suite

Comprehensive performance, scalability, and detection benchmark suite for the SAT-SA Offline Regulatory Analytics Engine.

---

## 1. Directory Structure

```
benchmark/
├── generate_data.py          # Synthetic dataset generator with ground-truth and corrupted injection
├── run_benchmarks.py         # Automated pipeline (Ingestion, Analytics, SQLite, Integrity)
├── run_api_bench.cjs         # Low-overhead Node.js REST API concurrency runner
├── api_benchmark.py          # Python CLI wrapper for REST API load testing
├── detection_benchmark.py    # Detection evaluation (Precision, Recall, F1, FPR, FNR)
├── README.md                 # Execution instructions and methodology guide
├── data/                     # Generated benchmark datasets (Small, Medium, Large, XL, Stress)
└── results/                  # Raw benchmark metrics (JSON, CSV, SQLite test databases)
    ├── benchmark_summary.json
    ├── ingestion_throughput.csv
    ├── analytics_latency.csv
    ├── api_results.json
    ├── detection_results.json
    └── databases/
```

---

## 2. Dataset Specifications

| Dataset Scale | Entities | Assets | Alerts | Cases | Total Relational Records |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Small** | 100 | 500 | 1,000 | 250 | **1,850** |
| **Medium** | 500 | 2,500 | 5,000 | 1,000 | **9,000** |
| **Large** | 1,000 | 5,000 | 10,000 | 2,000 | **18,000** |
| **XL** | 5,000 | 25,000 | 50,000 | 10,000 | **90,000** |
| **Stress** | 10,000 | 50,000 | 100,000 | 20,000 | **180,000** |

---

## 3. Execution Instructions

### A. Generate Datasets
To generate all 5 standard datasets plus corrupted variants with deterministic random seed (42):
```bash
python benchmark/generate_data.py --all-presets --with-corrupted
```

### B. Run Comprehensive Engine Benchmarks
Executes 5 measured runs (following a warm-up run) for Ingestion, 8 Analytics Modules, SQLite Engine, and Reliability:
```bash
python benchmark/run_benchmarks.py --runs 5 --target-scale small
```

### C. Run Anomaly Detection Accuracy Benchmark
Evaluates Scikit-Learn Isolation Forest and heuristic rule detectors against ground-truth labels:
```bash
python benchmark/detection_benchmark.py \
  --db-path benchmark/results/databases/bench_ingest_small.db \
  --ground-truth benchmark/data/small/ground_truth.json \
  --output benchmark/results/detection_results.json
```

### D. Run REST API Concurrency Benchmark
Tests all core REST endpoints across concurrency levels 1, 5, 10, 25, and 50:
```bash
python benchmark/api_benchmark.py --output benchmark/results/api_results.json
```

---

## 4. Benchmark Methodology Rules

1. **Warmup**: Every test executes a discarded warmup pass before recording metrics to eliminate JIT and cold disk cache skew.
2. **5 Measured Runs**: Every reported number is derived from at least 5 independent runs (median, mean, min, max recorded).
3. **Hardware / Software Capture**: Machine architecture, OS, Python version, and SQLite build are captured automatically in output JSON.
4. **Offline Isolation**: All tests run without external network requests, adhering strictly to the air-gapped supervisory deployment specification.
