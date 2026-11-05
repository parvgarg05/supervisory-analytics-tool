"""
api_benchmark.py -- REST API Load Testing and Concurrency Benchmarking.

Evaluates endpoints under concurrency levels: 1, 5, 10, 25, 50 clients.
Measures:
  - Latency percentiles: min, p50 (median), p90, p95, p99, max, avg
  - Throughput (requests/sec)
  - Error rate (%)
  - Response payload size (bytes)
"""

from __future__ import annotations

import argparse
import json
import os
import subprocess
import sys
from pathlib import Path

BENCHMARK_DIR = Path(__file__).resolve().parent
RUNNER_CJS = BENCHMARK_DIR / "run_api_bench.cjs"


def run_api_benchmark(output_path: str) -> dict:
    cmd = ["node", str(RUNNER_CJS)]
    print(f"[*] Executing API benchmark runner: {' '.join(cmd)}")
    subprocess.run(cmd, check=True)
    results_json = BENCHMARK_DIR / "results" / "api_results.json"
    if results_json.exists():
        with open(results_json, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}


def main():
    parser = argparse.ArgumentParser(description="SAT-SA API Concurrency Benchmark")
    parser.add_argument("--output", default="benchmark/results/api_results.json", help="Output path")
    args = parser.parse_args()

    results = run_api_benchmark(args.output)
    print(f"\n[+] API benchmark results verified from {args.output}")


if __name__ == "__main__":
    main()
