#!/usr/bin/env python3
"""
run_investigation.py -- CLI Entry Point for SAT-SA Multi-Agent Security Investigation.

Usage:
    python sat-sa/agents/run_investigation.py --entity-id CSE-007 [--db-path sat_sa.db] [--output-json output.json]
"""

from __future__ import annotations

import argparse
import json
import os
import sys
from pathlib import Path

# Ensure repo root, sat-sa, sat-sa/agents, and sat-sa/analytics are importable
REPO_ROOT = Path(__file__).resolve().parents[2]
SAT_SA_DIR = REPO_ROOT / "sat-sa"
AGENTS_DIR = SAT_SA_DIR / "agents"
ANALYTICS_DIR = SAT_SA_DIR / "analytics"

for d in [str(REPO_ROOT), str(SAT_SA_DIR), str(AGENTS_DIR), str(ANALYTICS_DIR)]:
    if d not in sys.path:
        sys.path.insert(0, d)

try:
    from agents.workflow import run_investigation
except ImportError:
    from workflow import run_investigation


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Run an end-to-end security investigation on a target entity using SAT-SA LangGraph & Ollama."
    )
    parser.add_argument(
        "--entity-id",
        required=True,
        type=str,
        help="Target Entity ID to investigate (e.g., CSE-007)",
    )
    parser.add_argument(
        "--db-path",
        default="sat_sa.db",
        type=str,
        help="Path to SQLite database file (default: sat_sa.db)",
    )
    parser.add_argument(
        "--output-json",
        default=None,
        type=str,
        help="Optional path to write the JSON result to disk.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    # Resolve db_path if relative
    db_path = args.db_path
    if not os.path.isabs(db_path):
        # If relative, check CWD first, then repo root
        if not os.path.exists(db_path):
            candidate = REPO_ROOT / db_path
            if candidate.exists():
                db_path = str(candidate)

    try:
        result = run_investigation(entity_id=args.entity_id, db_path=db_path)

        output_str = json.dumps(result, indent=2, default=str)
        print(output_str)

        if args.output_json:
            out_path = Path(args.output_json)
            out_path.parent.mkdir(parents=True, exist_ok=True)
            out_path.write_text(output_str, encoding="utf-8")

        return 0 if result.get("status") == "COMPLETED" else 1

    except Exception as exc:
        error_payload = {
            "entity_id": args.entity_id,
            "status": "FAILED",
            "error": str(exc),
        }
        print(json.dumps(error_payload, indent=2), file=sys.stderr)
        return 2


if __name__ == "__main__":
    sys.exit(main())
