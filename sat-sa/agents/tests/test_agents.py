"""
test_agents.py -- Comprehensive Unit and Integration Tests for SAT-SA Multi-Agent Security Investigation Workflow.

Validates:
1. Successful investigation (with mocked Ollama response)
2. Invalid entity ID (returns is_valid_entity: False, status: "FAILED")
3. Ollama unavailable / connection error (triggers graceful fallback report)
4. Invalid / malformed LLM response (triggers fallback without crashing)
5. Fabricated evidence ID rejection (hallucinated citations stripped)
6. Deterministic score invariant (LLM never modifies risk scoring)
7. CLI runner execution
"""

from __future__ import annotations

import json
import os
import sqlite3
import subprocess
import sys
from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest

# Ensure paths
REPO_ROOT = Path(__file__).resolve().parents[3]
ANALYTICS_DIR = REPO_ROOT / "sat-sa" / "analytics"
AGENTS_DIR = REPO_ROOT / "sat-sa" / "agents"

for d in [str(REPO_ROOT), str(REPO_ROOT / "sat-sa"), str(AGENTS_DIR), str(ANALYTICS_DIR)]:
    if d not in sys.path:
        sys.path.insert(0, d)

from agents.workflow import run_investigation, create_investigation_graph
from agents.ollama_client import OllamaUnavailableError, OllamaClient

TEST_DB_PATH = str(REPO_ROOT / "sat_sa.db")


@pytest.fixture
def mock_valid_llm_response():
    """Returns a realistic, valid Ollama API response dict."""
    payload = {
        "executive_summary": "Entity CSE-007 demonstrates elevated operational and security risk driven by anomalous telemetry gaps.",
        "risk_explanation": "Investigation indicates persistent non-compliance patterns aligning with alert escalation anomalies.",
        "supporting_evidence": ["ALT-001 evidence indicates perimeter anomaly"],
        "contradictory_evidence": ["Standard telemetry recovered on secondary core asset."],
        "recommended_investigation_steps": [
            "Perform immediate on-site configuration audit.",
            "Verify SHA-256 audit log integrity with regulatory overseer."
        ],
        "limitations": ["Assessment confined to offline telemetry window."]
    }
    return {
        "model": "qwen3.5:4b",
        "created_at": "2026-11-05T00:00:00Z",
        "response": json.dumps(payload),
        "done": True,
        "done_reason": "stop",
    }


def test_invalid_entity_id():
    """Test 1: Non-existent entity ID returns clean failure without running LLM."""
    result = run_investigation(entity_id="INVALID-NONEXISTENT-999", db_path=TEST_DB_PATH)

    assert result["is_valid_entity"] is False
    assert result["status"] == "FAILED"
    assert "not found" in result["error"].lower()
    assert result["ai_analysis"] == {}
    assert result["deterministic_risk_score"] == 0.0


def test_successful_investigation_with_mocked_llm(mock_valid_llm_response):
    """Test 2: Successful investigation with mocked Ollama LLM call."""
    with patch.object(OllamaClient, "generate", return_value=mock_valid_llm_response) as mock_gen:
        result = run_investigation(entity_id="CSE-007", db_path=TEST_DB_PATH)

        assert mock_gen.call_count == 1  # Exactly ONE LLM call made
        assert result["is_valid_entity"] is True
        assert result["status"] == "COMPLETED"
        assert result["llm_available"] is True
        assert result["is_fallback"] is False
        assert result["entity_metadata"]["entity_id"] == "CSE-007"
        assert result["deterministic_risk_score"] > 0
        assert "executive_summary" in result["ai_analysis"]
        assert len(result["ai_analysis"]["recommended_investigation_steps"]) >= 1
        assert "execution_metrics" in result
        assert "total_workflow_ms" in result["execution_metrics"]


def test_ollama_unavailable_graceful_fallback():
    """Test 3: When Ollama is offline or times out, pipeline succeeds with deterministic fallback."""
    with patch.object(OllamaClient, "generate", side_effect=OllamaUnavailableError("Ollama connection timed out")):
        result = run_investigation(entity_id="CSE-007", db_path=TEST_DB_PATH)

        assert result["is_valid_entity"] is True
        assert result["status"] == "COMPLETED"
        assert result["llm_available"] is False
        assert result["ai_analysis"] != {}
        # Deterministic fallback generated
        assert "Automated supervisory assessment" in result["ai_analysis"]["executive_summary"]
        assert len(result["ai_analysis"]["recommended_investigation_steps"]) > 0
        assert result["deterministic_risk_score"] > 0


def test_malformed_llm_response_handling():
    """Test 4: When Ollama returns unstructured gibberish or non-JSON, fallback handles it safely."""
    gibberish_response = {
        "model": "qwen3.5:4b",
        "response": "Here is some raw unstructured analysis without valid JSON syntax: Alert high!",
        "done": True,
    }
    with patch.object(OllamaClient, "generate", return_value=gibberish_response):
        result = run_investigation(entity_id="CSE-007", db_path=TEST_DB_PATH)

        assert result["is_valid_entity"] is True
        assert result["status"] == "COMPLETED"
        assert "executive_summary" in result["ai_analysis"]


def test_fabricated_evidence_rejection():
    """Test 5: LLM attempts to hallucinate evidence IDs; validator must strip and flag them."""
    fake_payload = {
        "executive_summary": "Suspicious attack sequence detected.",
        "risk_explanation": "Attack in progress",
        "supporting_evidence": [
            "Critical breach observed in ALT-HALLUCINATED-999 during inspection.",
            "Secondary compromised node CAS-FABRICATED-404"
        ],
        "contradictory_evidence": [],
        "recommended_investigation_steps": ["Investigate"],
        "limitations": []
    }
    mock_resp = {
        "model": "qwen3.5:4b",
        "response": json.dumps(fake_payload),
        "done": True,
    }

    with patch.object(OllamaClient, "generate", return_value=mock_resp):
        result = run_investigation(entity_id="CSE-007", db_path=TEST_DB_PATH)

        citation_val = result["citation_validation"]
        # Fake IDs must be in rejected_ids
        assert "ALT-HALLUCINATED-999" in citation_val["rejected_ids"]
        assert "CAS-FABRICATED-404" in citation_val["rejected_ids"]

        # Fake IDs must be stripped from ai_analysis supporting_evidence
        for item in result["ai_analysis"]["supporting_evidence"]:
            assert "ALT-HALLUCINATED-999" not in item
            assert "CAS-FABRICATED-404" not in item
            assert "[UNVERIFIED_REFERENCE_STRIPPED]" in item


def test_deterministic_score_invariance():
    """Test 6: LLM analysis must NEVER alter or mutate the deterministic risk score."""
    # Run 1: Ollama returns a response claiming risk score is 0.0
    zero_claim_resp = {
        "model": "qwen3.5:4b",
        "response": json.dumps({
            "executive_summary": "No risk at all, score is zero.",
            "risk_explanation": "Entity is perfectly secure",
            "supporting_evidence": [],
            "contradictory_evidence": [],
            "recommended_investigation_steps": [],
            "limitations": []
        }),
        "done": True,
    }
    with patch.object(OllamaClient, "generate", return_value=zero_claim_resp):
        res1 = run_investigation(entity_id="CSE-007", db_path=TEST_DB_PATH)

    # Run 2: Ollama is offline (deterministic fallback)
    with patch.object(OllamaClient, "generate", side_effect=OllamaUnavailableError("Offline")):
        res2 = run_investigation(entity_id="CSE-007", db_path=TEST_DB_PATH)

    # Risk score must be identical regardless of LLM output
    assert res1["deterministic_risk_score"] == res2["deterministic_risk_score"]
    assert res1["deterministic_risk_level"] == res2["deterministic_risk_level"]
    assert res1["deterministic_risk_score"] > 0


def test_cli_runner_execution():
    """Test 7: CLI runner executes cleanly via subprocess."""
    cli_script = str(AGENTS_DIR / "run_investigation.py")
    python_bin = sys.executable

    # Test invalid entity via CLI
    proc = subprocess.run(
        [python_bin, cli_script, "--entity-id", "INVALID-CLI-999", "--db-path", TEST_DB_PATH],
        capture_output=True,
        text=True,
    )
    assert proc.returncode == 1
    data = json.loads(proc.stdout)
    assert data["status"] == "FAILED"
    assert data["is_valid_entity"] is False
