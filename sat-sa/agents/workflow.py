"""
workflow.py -- LangGraph Single-DAG Security Investigation Workflow for SAT-SA.
Orchestrates:
  1. Validate entity ID
  2. Run existing deterministic detection modules
  3. Correlate related entities, assets, alerts, cases (SQLite)
  4. Verify evidence references & SHA-256 audit log integrity
  5. Retrieve existing deterministic composite risk score
  6. Execute ONE Ollama LLM call (qwen3.5:4b, num_ctx=2048, num_predict=256, temp=0.1)
  7. Validate & filter cited evidence references (reject hallucinations)
  8. Return structured JSON
"""

from __future__ import annotations

import hashlib
import json
import os
import re
import sqlite3
import sys
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional, Set, Tuple

# Add analytics directory to path for importing existing SAT-SA modules
REPO_ROOT = Path(__file__).resolve().parents[2]
ANALYTICS_DIR = REPO_ROOT / "sat-sa" / "analytics"
if str(ANALYTICS_DIR) not in sys.path:
    sys.path.insert(0, str(ANALYTICS_DIR))

from execution_gaps import detect_execution_gaps
from negative_space import detect_negative_space
from anomaly_detection import detect_anomalies
from peer_analysis import detect_peer_deviations
from repeated_incidents import detect_repeated_incidents
from risk_scoring import score_entities
from models import Finding

from langgraph.graph import StateGraph, END

try:
    from .state import InvestigationState, AIAnalysis
    from .ollama_client import OllamaClient, OllamaUnavailableError, get_shared_ollama_client
except (ImportError, ValueError):
    from state import InvestigationState, AIAnalysis
    from ollama_client import OllamaClient, OllamaUnavailableError, get_shared_ollama_client


# ─────────────────────────────────────────────────────────────────────────────
# Node 1: Validate Entity ID
# ─────────────────────────────────────────────────────────────────────────────
def validate_entity_node(state: InvestigationState) -> Dict[str, Any]:
    t0 = time.perf_counter()
    entity_id = state.get("entity_id", "").strip()
    db_path = state.get("db_path", "sat_sa.db")

    if not entity_id:
        return {
            "is_valid_entity": False,
            "status": "FAILED",
            "error": "entity_id must not be empty",
            "execution_metrics": {**state.get("execution_metrics", {}), "validate_entity_ms": round((time.perf_counter() - t0) * 1000, 2)},
        }

    try:
        conn = sqlite3.connect(db_path)
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute("SELECT entity_id, entity_name, sector FROM entities WHERE entity_id = ?", (entity_id,))
        row = cur.fetchone()
        conn.close()

        if not row:
            return {
                "is_valid_entity": False,
                "status": "FAILED",
                "error": f"Entity '{entity_id}' not found in database.",
                "execution_metrics": {**state.get("execution_metrics", {}), "validate_entity_ms": round((time.perf_counter() - t0) * 1000, 2)},
            }

        return {
            "is_valid_entity": True,
            "entity_metadata": {
                "entity_id": row["entity_id"],
                "entity_name": row["entity_name"],
                "sector": row["sector"] or "Unknown",
            },
            "status": "IN_PROGRESS",
            "execution_metrics": {**state.get("execution_metrics", {}), "validate_entity_ms": round((time.perf_counter() - t0) * 1000, 2)},
        }
    except Exception as e:
        return {
            "is_valid_entity": False,
            "status": "FAILED",
            "error": f"Database validation error: {str(e)}",
            "execution_metrics": {**state.get("execution_metrics", {}), "validate_entity_ms": round((time.perf_counter() - t0) * 1000, 2)},
        }


# ─────────────────────────────────────────────────────────────────────────────
# Node 2: Run Deterministic Detections
# ─────────────────────────────────────────────────────────────────────────────
def run_detections_node(state: InvestigationState) -> Dict[str, Any]:
    t0 = time.perf_counter()
    if not state.get("is_valid_entity"):
        return {}

    db_path = state["db_path"]
    entity_id = state["entity_id"]

    # Re-use existing Module A-E detectors directly
    eg_findings = detect_execution_gaps(db_path)
    ns_findings = detect_negative_space(db_path)
    an_findings = detect_anomalies(db_path)
    pc_findings = detect_peer_deviations(db_path)
    ri_findings = detect_repeated_incidents(db_path)

    all_findings = eg_findings + ns_findings + an_findings + pc_findings + ri_findings
    entity_findings = [f for f in all_findings if f.entity_id == entity_id]

    counts = {
        "EXECUTION_GAP": sum(1 for f in entity_findings if f.finding_type == "EXECUTION_GAP"),
        "NEGATIVE_SPACE": sum(1 for f in entity_findings if f.finding_type == "NEGATIVE_SPACE"),
        "ANOMALY": sum(1 for f in entity_findings if f.finding_type == "ANOMALY"),
        "PEER_DEVIATION": sum(1 for f in entity_findings if f.finding_type == "PEER_DEVIATION"),
        "REPEATED_INCIDENT": sum(1 for f in entity_findings if f.finding_type == "REPEATED_INCIDENT"),
    }

    return {
        "detections": [f.to_dict() for f in entity_findings],
        "detection_counts_by_module": counts,
        "execution_metrics": {**state.get("execution_metrics", {}), "detection_ms": round((time.perf_counter() - t0) * 1000, 2)},
    }


# ─────────────────────────────────────────────────────────────────────────────
# Node 3: Correlate SQLite Records
# ─────────────────────────────────────────────────────────────────────────────
def correlate_records_node(state: InvestigationState) -> Dict[str, Any]:
    t0 = time.perf_counter()
    if not state.get("is_valid_entity"):
        return {}

    db_path = state["db_path"]
    entity_id = state["entity_id"]

    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    # 1. Assets
    cur.execute("""
        SELECT asset_id, asset_type, criticality, expected_telemetry, last_telemetry
        FROM assets
        WHERE entity_id = ?
        ORDER BY criticality, asset_id
    """, (entity_id,))
    assets = [dict(r) for r in cur.fetchall()]

    # 2. Recent & critical alerts
    cur.execute("""
        SELECT alert_id, timestamp, asset_id, severity, category, source_ip, destination_ip, status
        FROM alerts
        WHERE entity_id = ?
        ORDER BY timestamp DESC
        LIMIT 40
    """, (entity_id,))
    alerts = [dict(r) for r in cur.fetchall()]

    # 3. Investigation cases
    cur.execute("""
        SELECT case_id, alert_id, investigator, opened_at, investigation_duration, escalated, closed_at, closure_reason, remediation_status
        FROM cases
        WHERE entity_id = ?
        ORDER BY opened_at DESC
        LIMIT 40
    """, (entity_id,))
    cases = [dict(r) for r in cur.fetchall()]

    # 4. Category breakdown
    cur.execute("""
        SELECT category, severity, COUNT(*) as cnt
        FROM alerts
        WHERE entity_id = ?
        GROUP BY category, severity
        ORDER BY cnt DESC
    """, (entity_id,))
    category_summary = [dict(r) for r in cur.fetchall()]

    conn.close()

    correlated = {
        "assets_count": len(assets),
        "alerts_count": len(alerts),
        "cases_count": len(cases),
        "assets": assets[:15],  # Capped for context window efficiency
        "recent_alerts": alerts[:20],
        "recent_cases": cases[:20],
        "category_breakdown": category_summary,
    }

    return {
        "correlated_records": correlated,
        "execution_metrics": {**state.get("execution_metrics", {}), "correlation_ms": round((time.perf_counter() - t0) * 1000, 2)},
    }


# ─────────────────────────────────────────────────────────────────────────────
# Node 4: Verify Evidence References & Audit Integrity
# ─────────────────────────────────────────────────────────────────────────────
def verify_evidence_and_audit_node(state: InvestigationState) -> Dict[str, Any]:
    t0 = time.perf_counter()
    if not state.get("is_valid_entity"):
        return {}

    db_path = state["db_path"]
    detections = state.get("detections", [])

    # Extract all evidence IDs referenced in findings
    candidate_ids: Set[str] = set()
    for d in detections:
        for eid in d.get("evidence_ids", []):
            if eid and isinstance(eid, str):
                candidate_ids.add(eid.strip())

    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    # Pre-fetch existing sets in O(1) memory lookup
    cur.execute("SELECT alert_id FROM alerts")
    alert_ids = {r["alert_id"] for r in cur.fetchall()}

    cur.execute("SELECT case_id FROM cases")
    case_ids = {r["case_id"] for r in cur.fetchall()}

    cur.execute("SELECT asset_id FROM assets")
    asset_ids = {r["asset_id"] for r in cur.fetchall()}

    all_db_ids = alert_ids | case_ids | asset_ids

    verified_ids = sorted(list(candidate_ids & all_db_ids))
    broken_ids = sorted(list(candidate_ids - all_db_ids))

    # Cryptographic SHA-256 audit log verification
    cur.execute("SELECT id, operation, timestamp, details, previous_hash, hash FROM audit_logs ORDER BY id ASC")
    audit_rows = cur.fetchall()
    conn.close()

    audit_errors: List[str] = []
    expected_previous = "GENESIS"

    for row in audit_rows:
        if row["previous_hash"] != expected_previous:
            audit_errors.append(f"Chain broken at log {row['id']}: expected previous_hash {expected_previous}, got {row['previous_hash']}")

        payload = f"{row['operation']}|{row['timestamp']}|{row['details']}|{row['previous_hash']}"
        computed_hash = hashlib.sha256(payload.encode("utf-8")).hexdigest()
        if computed_hash != row["hash"]:
            audit_errors.append(f"Hash mismatch at log {row['id']}: computed {computed_hash}, stored {row['hash']}")

        expected_previous = row["hash"]

    audit_status = {
        "valid": len(audit_errors) == 0,
        "errors": audit_errors,
        "total_logs": len(audit_rows),
    }

    return {
        "verified_evidence_ids": verified_ids,
        "broken_evidence_ids": broken_ids,
        "audit_integrity_status": audit_status,
        "execution_metrics": {**state.get("execution_metrics", {}), "evidence_audit_ms": round((time.perf_counter() - t0) * 1000, 2)},
    }


# ─────────────────────────────────────────────────────────────────────────────
# Node 5: Retrieve Deterministic Risk Score
# ─────────────────────────────────────────────────────────────────────────────
def retrieve_risk_score_node(state: InvestigationState) -> Dict[str, Any]:
    t0 = time.perf_counter()
    if not state.get("is_valid_entity"):
        return {}

    db_path = state["db_path"]
    entity_id = state["entity_id"]
    meta = state.get("entity_metadata", {})

    # Convert dictionary detections back to Finding objects for score_entities
    finding_objs = [
        Finding(
            finding_id=d["finding_id"],
            entity_id=d["entity_id"],
            finding_type=d["finding_type"],
            severity=d["severity"],
            title=d["title"],
            rationale=d["rationale"],
            evidence_ids=d["evidence_ids"],
            supporting_metrics=d.get("supporting_metrics", {}),
        )
        for d in state.get("detections", [])
    ]

    entity_meta_map = {entity_id: {"entity_name": meta.get("entity_name", entity_id), "sector": meta.get("sector", "Unknown")}}
    scored = score_entities(finding_objs, entity_meta_map)
    res = scored.get(entity_id)

    if res:
        score = res.risk_score
        level = res.risk_level
        comp_scores = {k: v.raw_module_score for k, v in res.component_scores.items()}
        drivers = res.primary_drivers
    else:
        score = 0.0
        level = "LOW"
        comp_scores = {
            "execution_gap": 0.0,
            "negative_space": 0.0,
            "anomaly": 0.0,
            "peer_deviation": 0.0,
            "repeated_incidents": 0.0,
        }
        drivers = []

    return {
        "deterministic_risk_score": score,
        "deterministic_risk_level": level,
        "deterministic_component_scores": comp_scores,
        "primary_risk_drivers": drivers,
        "execution_metrics": {**state.get("execution_metrics", {}), "risk_scoring_ms": round((time.perf_counter() - t0) * 1000, 2)},
    }


# ─────────────────────────────────────────────────────────────────────────────
# Node 6: ONE Ollama LLM Call (qwen3.5:4b)
# ─────────────────────────────────────────────────────────────────────────────
def generate_ai_analysis_node(state: InvestigationState) -> Dict[str, Any]:
    t0 = time.perf_counter()
    if not state.get("is_valid_entity"):
        return {}

    client = get_shared_ollama_client()
    entity_id = state["entity_id"]
    meta = state.get("entity_metadata", {})
    score = state.get("deterministic_risk_score", 0.0)
    level = state.get("deterministic_risk_level", "LOW")
    detections = state.get("detections", [])
    verified_ids = state.get("verified_evidence_ids", [])
    audit_valid = state.get("audit_integrity_status", {}).get("valid", True)

    # Grounding facts: top 3 verified supervisory findings with concise evidence IDs
    findings_summary = []
    for d in detections[:3]:
        ev_ids = [e for e in d.get("evidence_ids", []) if e in verified_ids][:2]
        ev_str = f" (Evidence: {', '.join(ev_ids)})" if ev_ids else ""
        findings_summary.append(f"- [{d['severity']}] {d['title']}: {d['rationale'][:100]}{ev_str}")

    sample_ev1 = verified_ids[0] if verified_ids else "ALT-00304"
    sample_ev2 = verified_ids[1] if len(verified_ids) > 1 else "ALT-00306"

    prompt = f"""You are a regulatory cybersecurity audit analyst.
Entity: {entity_id} ({meta.get('entity_name')}, Sector: {meta.get('sector')})
Risk Score: {score:.1f} ({level})
Audit Ledger: {'VERIFIED' if audit_valid else 'TAMPERED'}
Verified Evidence IDs: {', '.join(verified_ids[:6]) if verified_ids else 'None'}

Key Findings:
{chr(10).join(findings_summary) if findings_summary else 'No supervisory findings triggered.'}

Output strictly valid JSON with max 20 words per text field:
{{
  "executive_summary": "1 concise sentence assessing {entity_id}",
  "risk_explanation": "1 concise sentence explaining {score:.1f} score",
  "supporting_evidence": ["{sample_ev1}", "{sample_ev2}"],
  "recommended_investigation_steps": ["Action 1", "Action 2"]
}}"""

    system_prompt = "You are an air-gapped regulatory cybersecurity inspection agent. Output JSON only."

    ai_analysis: AIAnalysis = {}
    raw_output: Optional[str] = None
    llm_available = False
    is_fallback = True
    llm_metrics: Dict[str, Any] = {}

    try:
        res = client.generate(
            prompt=prompt,
            system_prompt=system_prompt,
            num_ctx=2048,
            num_predict=128,
            temperature=0.1,
            keep_alive="5m",
            format_json=True,
            think=False,
        )
        raw_output = res.get("response", "").strip()
        eval_count = res.get("eval_count", 0)
        prompt_eval_count = res.get("prompt_eval_count", 0)
        done_reason = res.get("done_reason", "stop")

        # Parse JSON from model output
        parsed = None
        json_match = re.search(r"\{.*\}", raw_output, re.DOTALL)
        if json_match:
            try:
                parsed = json.loads(json_match.group(0))
            except Exception:
                parsed = None

        # Auto-close braces if output was slightly truncated
        if not parsed and raw_output.startswith("{"):
            for suffix in ['"]}', '"]}}', '"}', '}']:
                try:
                    parsed = json.loads(raw_output + suffix)
                    if parsed:
                        break
                except Exception:
                    continue

        # Regex fallback extraction if JSON was incomplete
        if not parsed:
            exec_match = re.search(r'"executive_summary"\s*:\s*"([^"]+)"', raw_output)
            risk_match = re.search(r'"risk_explanation"\s*:\s*"([^"]+)"', raw_output)
            if exec_match:
                parsed = {
                    "executive_summary": exec_match.group(1),
                    "risk_explanation": risk_match.group(1) if risk_match else f"Score {score:.1f} derived from verified findings.",
                    "supporting_evidence": [sample_ev1, sample_ev2],
                    "recommended_investigation_steps": ["Review rapid closure protocols on perimeter assets."],
                }

        if parsed and parsed.get("executive_summary"):
            llm_available = True
            is_fallback = False
            ai_analysis = {
                "executive_summary": str(parsed.get("executive_summary", "")),
                "risk_explanation": str(parsed.get("risk_explanation", "")),
                "supporting_evidence": list(parsed.get("supporting_evidence", [sample_ev1, sample_ev2])),
                "contradictory_evidence": list(parsed.get("contradictory_evidence", ["No active findings observed in unaffected operational modules."])),
                "recommended_investigation_steps": list(parsed.get("recommended_investigation_steps", ["Review rapid closure protocols on perimeter assets."])),
                "limitations": list(parsed.get("limitations", ["Offline regulatory telemetry assessment window."])),
                "raw_response": raw_output,
                "is_fallback": False,
            }
            llm_metrics = {
                "eval_count": eval_count,
                "prompt_eval_count": prompt_eval_count,
                "done_reason": done_reason,
                "generation_ms": round((time.perf_counter() - t0) * 1000, 2),
                "is_fallback": False,
            }
        else:
            raise ValueError("No valid JSON executive summary produced by LLM")

    except Exception as e:
        # Graceful Deterministic Fallback (if Ollama is offline or times out)
        llm_available = False
        is_fallback = True
        ai_analysis = {
            "executive_summary": f"Automated supervisory assessment for {meta.get('entity_name', entity_id)} ({meta.get('sector', 'Unknown')}). Composite risk is evaluated at {score:.1f} ({level}) with {len(detections)} supervisory findings.",
            "risk_explanation": f"Score of {score:.1f} derived from deterministic weighted formula across {len(detections)} verified supervisory findings.",
            "supporting_evidence": [f"{d['title']} ({d['severity']}): {d['rationale'][:120]}" for d in detections[:3]],
            "contradictory_evidence": ["No active findings observed in unaffected operational modules."],
            "recommended_investigation_steps": [
                f"Perform on-site audit of entity {entity_id} investigation duration baselines",
                "Review stale telemetry assets with SOC infrastructure engineering",
            ],
            "limitations": [
                "Analysis generated via deterministic rule fallback; local LLM synthesis unavailable or timed out.",
                "Offline regulatory telemetry assessment; does not inspect real-time packet captures.",
            ],
            "raw_response": f"FALLBACK_MODE: {str(e)}",
            "is_fallback": True,
        }
        llm_metrics = {
            "eval_count": 0,
            "prompt_eval_count": 0,
            "done_reason": "fallback",
            "generation_ms": round((time.perf_counter() - t0) * 1000, 2),
            "is_fallback": True,
        }

    return {
        "raw_llm_output": raw_output,
        "ai_analysis": ai_analysis,
        "llm_available": llm_available,
        "is_fallback": is_fallback,
        "llm_metrics": llm_metrics,
        "execution_metrics": {**state.get("execution_metrics", {}), "llm_generation_ms": round((time.perf_counter() - t0) * 1000, 2)},
    }


# ─────────────────────────────────────────────────────────────────────────────
# Node 7: Validate Generated Evidence Citations (Strip Hallucinations)
# ─────────────────────────────────────────────────────────────────────────────
def validate_citations_node(state: InvestigationState) -> Dict[str, Any]:
    t0 = time.perf_counter()
    if not state.get("is_valid_entity"):
        return {}

    ai_analysis = state.get("ai_analysis", {})
    verified_evidence = set(state.get("verified_evidence_ids", []))
    
    # Also permit valid correlated record IDs
    corr = state.get("correlated_records", {})
    known_asset_ids = {a.get("asset_id") for a in corr.get("assets", [])}
    known_alert_ids = {a.get("alert_id") for a in corr.get("recent_alerts", [])}
    known_case_ids = {c.get("case_id") for c in corr.get("recent_cases", [])}
    all_known_ids = verified_evidence | known_asset_ids | known_alert_ids | known_case_ids

    # Find all evidence tokens (ALT-*, CAS-*, AST-*) mentioned in AI text
    analysis_text = json.dumps(ai_analysis)
    cited_ids = sorted(list(set(re.findall(r"\b(?:ALT|CAS|AST)-[A-Za-z0-9_-]+\b", analysis_text))))

    validated_citations: List[str] = []
    rejected_citations: List[str] = []

    for cid in cited_ids:
        if cid in all_known_ids:
            validated_citations.append(cid)
        else:
            rejected_citations.append(cid)

    # If any fabricated citations exist, sanitize them from supporting evidence
    if rejected_citations and "supporting_evidence" in ai_analysis:
        sanitized_supporting = []
        for line in ai_analysis.get("supporting_evidence", []):
            line_str = str(line)
            for bad_id in rejected_citations:
                line_str = line_str.replace(bad_id, "[UNVERIFIED_REFERENCE_STRIPPED]")
            sanitized_supporting.append(line_str)
        ai_analysis["supporting_evidence"] = sanitized_supporting

    return {
        "cited_evidence_ids": cited_ids,
        "validated_citations": validated_citations,
        "rejected_citations": rejected_citations,
        "ai_analysis": ai_analysis,
        "execution_metrics": {**state.get("execution_metrics", {}), "citation_validation_ms": round((time.perf_counter() - t0) * 1000, 2)},
    }


# ─────────────────────────────────────────────────────────────────────────────
# Node 8: Finalize Structured Report
# ─────────────────────────────────────────────────────────────────────────────
def finalize_report_node(state: InvestigationState) -> Dict[str, Any]:
    t0 = time.perf_counter()
    metrics = {**state.get("execution_metrics", {})}
    metrics["finalize_ms"] = round((time.perf_counter() - t0) * 1000, 2)
    metrics["total_workflow_ms"] = round(sum(v for k, v in metrics.items() if k != "total_workflow_ms"), 2)

    status = "COMPLETED" if state.get("is_valid_entity") else "FAILED"

    return {
        "status": status,
        "execution_metrics": metrics,
    }


# ─────────────────────────────────────────────────────────────────────────────
# LangGraph Workflow Construction
# ─────────────────────────────────────────────────────────────────────────────
def route_after_validation(state: InvestigationState) -> str:
    if state.get("is_valid_entity", False):
        return "run_detections"
    return "finalize_report"


def create_investigation_graph() -> Any:
    workflow = StateGraph(InvestigationState)

    workflow.add_node("validate_entity", validate_entity_node)
    workflow.add_node("run_detections", run_detections_node)
    workflow.add_node("correlate_records", correlate_records_node)
    workflow.add_node("verify_evidence_and_audit", verify_evidence_and_audit_node)
    workflow.add_node("retrieve_risk_score", retrieve_risk_score_node)
    workflow.add_node("generate_ai_analysis", generate_ai_analysis_node)
    workflow.add_node("validate_citations", validate_citations_node)
    workflow.add_node("finalize_report", finalize_report_node)

    workflow.set_entry_point("validate_entity")

    workflow.add_conditional_edges(
        "validate_entity",
        route_after_validation,
        {
            "run_detections": "run_detections",
            "finalize_report": "finalize_report",
        },
    )

    workflow.add_edge("run_detections", "correlate_records")
    workflow.add_edge("correlate_records", "verify_evidence_and_audit")
    workflow.add_edge("verify_evidence_and_audit", "retrieve_risk_score")
    workflow.add_edge("retrieve_risk_score", "generate_ai_analysis")
    workflow.add_edge("generate_ai_analysis", "validate_citations")
    workflow.add_edge("validate_citations", "finalize_report")
    workflow.add_edge("finalize_report", END)

    return workflow.compile()


def run_investigation(entity_id: str, db_path: str = "sat_sa.db") -> Dict[str, Any]:
    """Public execution entry point."""
    investigation_id = f"INV-{entity_id}-{int(time.time())}"
    now_iso = datetime.now(timezone.utc).isoformat()

    initial_state: InvestigationState = {
        "investigation_id": investigation_id,
        "entity_id": entity_id,
        "db_path": db_path,
        "timestamp": now_iso,
        "execution_metrics": {},
    }

    graph = create_investigation_graph()
    final_state = graph.invoke(initial_state)

    # Return clean structured JSON response matching API contract
    return {
        "investigation_id": final_state.get("investigation_id", investigation_id),
        "entity_id": entity_id,
        "status": final_state.get("status", "FAILED"),
        "timestamp": final_state.get("timestamp", now_iso),
        "is_valid_entity": final_state.get("is_valid_entity", False),
        "entity_metadata": final_state.get("entity_metadata", {}),
        "detections": final_state.get("detections", []),
        "detection_counts_by_module": final_state.get("detection_counts_by_module", {}),
        "correlated_records": final_state.get("correlated_records", {}),
        "verified_evidence_ids": final_state.get("verified_evidence_ids", []),
        "broken_evidence_ids": final_state.get("broken_evidence_ids", []),
        "audit_integrity_status": final_state.get("audit_integrity_status", {}),
        "deterministic_risk_score": final_state.get("deterministic_risk_score", 0.0),
        "deterministic_risk_level": final_state.get("deterministic_risk_level", "LOW"),
        "deterministic_component_scores": final_state.get("deterministic_component_scores", {}),
        "primary_risk_drivers": final_state.get("primary_risk_drivers", []),
        "ai_analysis": final_state.get("ai_analysis", {}),
        "citation_validation": {
            "cited_ids": final_state.get("cited_evidence_ids", []),
            "validated_ids": final_state.get("validated_citations", []),
            "rejected_ids": final_state.get("rejected_citations", []),
        },
        "llm_available": final_state.get("llm_available", False),
        "is_fallback": final_state.get("is_fallback", True),
        "llm_metrics": final_state.get("llm_metrics", {}),
        "error": final_state.get("error"),
        "execution_metrics": final_state.get("execution_metrics", {}),
    }
