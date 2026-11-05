"""
state.py -- State schema for SAT-SA LangGraph Security Investigation Workflow.
"""

from __future__ import annotations
from typing import Any, Dict, List, Optional
from typing_extensions import TypedDict


class AIAnalysis(TypedDict, total=False):
    executive_summary: str
    risk_explanation: str
    supporting_evidence: List[str]
    contradictory_evidence: List[str]
    recommended_investigation_steps: List[str]
    limitations: List[str]
    raw_response: Optional[str]
    is_fallback: bool


class InvestigationState(TypedDict, total=False):
    # Inputs & Identification
    investigation_id: str
    entity_id: str
    db_path: str
    timestamp: str

    # Step 1: Validation
    is_valid_entity: bool
    entity_metadata: Dict[str, Any]

    # Step 2: Deterministic Detection
    detections: List[Dict[str, Any]]
    detection_counts_by_module: Dict[str, int]

    # Step 3: SQLite Correlation
    correlated_records: Dict[str, Any]  # assets, alerts, cases, categories

    # Step 4: Evidence & Audit Verification
    verified_evidence_ids: List[str]
    broken_evidence_ids: List[str]
    audit_integrity_status: Dict[str, Any]  # valid, errors, total_logs

    # Step 5: Deterministic Risk Scoring
    deterministic_risk_score: float
    deterministic_risk_level: str
    deterministic_component_scores: Dict[str, Any]
    primary_risk_drivers: List[Dict[str, Any]]

    # Step 6: LLM Generation
    raw_llm_output: Optional[str]
    ai_analysis: AIAnalysis
    llm_available: bool
    is_fallback: bool
    llm_metrics: Dict[str, Any]

    # Step 7: Evidence Reference Validation
    cited_evidence_ids: List[str]
    validated_citations: List[str]
    rejected_citations: List[str]  # Fabricated IDs stripped

    # Step 8: Execution Metadata & Status
    status: str  # "COMPLETED" | "FAILED"
    error: Optional[str]
    execution_metrics: Dict[str, float]
