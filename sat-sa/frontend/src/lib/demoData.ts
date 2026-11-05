/* eslint-disable */
// Standalone precomputed fallback telemetry for Vercel / air-gapped demo mode
import type { DashboardMetrics, EntitySummary, Finding, AssessmentInfo, EvidenceIntegrityResponse } from "../types/api";

export const DEMO_DASHBOARD_METRICS: DashboardMetrics = {
  "success": true,
  "assessment_id": "ASM-20260930-AB33F0",
  "assessment_name": "Precomputed Regulatory Baseline",
  "dataset_version": "v20.40.115.91",
  "total_entities": 22,
  "risk_distribution": {
    "CRITICAL": 0,
    "HIGH": 1,
    "MEDIUM": 1,
    "LOW": 18
  },
  "high_critical_entities": [
    {
      "entity_id": "CSE-007",
      "entity_name": "Energy Entity 07",
      "sector": "Energy",
      "risk_score": 62.28,
      "risk_level": "HIGH",
      "finding_count": 7,
      "top_severity": "CRITICAL"
    }
  ],
  "finding_counts_by_type": {
    "EXECUTION_GAP": 2,
    "NEGATIVE_SPACE": 22,
    "ANOMALY": 3,
    "PEER_DEVIATION": 3,
    "REPEATED_INCIDENT": 2
  },
  "severity_distribution": {
    "CRITICAL": 2,
    "HIGH": 19,
    "MEDIUM": 11,
    "LOW": 0
  },
  "useful_aggregate_metrics": {
    "total_assets": 377,
    "total_alerts": 1185,
    "total_cases": 1061,
    "average_risk_score": 16.3,
    "escalated_cases_ratio": 0.182,
    "avg_investigation_duration_minutes": 48.5,
    "quick_closure_critical_count": 3,
    "stale_critical_assets_count": 5,
    "repeated_incident_clusters": 2,
    "telemetry_coverage_pct": 94.2,
    "peer_deviations_count": 3
  },
  "latest_analysis_timestamp": "2026-09-30T11:46:25.232904+00:00"
};

export const DEMO_ENTITIES: EntitySummary[] = [
  {
    "entity_id": "CSE-007",
    "entity_name": "Energy Entity 07",
    "sector": "Energy",
    "risk_score": 62.28,
    "final_risk_score": 62.28,
    "risk_level": "HIGH",
    "finding_count": 7,
    "top_severity": "CRITICAL",
    "primary_drivers": [
      "Negative Space",
      "Execution Gap",
      "Anomaly",
      "Repeated Incidents"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 72.85,
        "weighted_contribution": 21.86,
        "finding_count": 2,
        "top_severity": "CRITICAL",
        "finding_summaries": [
          {
            "finding_id": "EG-FAST-CSE-007",
            "title": "Critical Alerts Closed Unusually Quickly",
            "severity": "HIGH",
            "evidence_count": 4
          },
          {
            "finding_id": "EG-NOESC-CSE-007",
            "title": "Critical Alerts Closed Without Escalation",
            "severity": "CRITICAL",
            "evidence_count": 6
          }
        ]
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 94,
        "weighted_contribution": 23.5,
        "finding_count": 2,
        "top_severity": "CRITICAL",
        "finding_summaries": [
          {
            "finding_id": "NS-NOESC-CSE-007",
            "title": "Absence of Required Escalation Records for Critical Incidents",
            "severity": "HIGH",
            "evidence_count": 6
          },
          {
            "finding_id": "NS-NOINVEST-CSE-007",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "CRITICAL",
            "evidence_count": 5
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 70,
        "weighted_contribution": 14,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "ANOM-CSE-007",
            "title": "Statistical Anomaly Detected via Isolation Forest",
            "severity": "HIGH",
            "evidence_count": 12
          }
        ]
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 29.2,
        "weighted_contribution": 2.92,
        "finding_count": 2,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "RI-CSE-007-AST-013-MALWARE",
            "title": "Repeated MALWARE Incidents on AST-013 Without Remediation",
            "severity": "MEDIUM",
            "evidence_count": 5
          },
          {
            "finding_id": "RI-CSE-007-AST-014-MALWARE",
            "title": "Repeated MALWARE Incidents on AST-014 Without Remediation",
            "severity": "MEDIUM",
            "evidence_count": 5
          }
        ]
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 21.86,
      "negative_space": 23.5,
      "anomaly": 14,
      "peer_deviation": 0,
      "repeated_incidents": 2.92
    },
    "component_raw_scores": {
      "execution_gap": 72.85,
      "negative_space": 94,
      "anomaly": 70,
      "peer_deviation": 0,
      "repeated_incidents": 29.2
    },
    "explanation": {
      "entity_id": "CSE-007",
      "entity_name": "Energy Entity 07",
      "risk_score": 62.28,
      "final_risk_score": 62.28,
      "risk_level": "HIGH",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 94,
          "weight": 0.25,
          "weighted_contribution": 23.5,
          "finding_count": 2
        },
        {
          "component": "execution_gap",
          "name": "Execution Gap",
          "raw_score": 72.85,
          "weight": 0.3,
          "weighted_contribution": 21.86,
          "finding_count": 2
        },
        {
          "component": "anomaly",
          "name": "Anomaly",
          "raw_score": 70,
          "weight": 0.2,
          "weighted_contribution": 14,
          "finding_count": 1
        },
        {
          "component": "repeated_incidents",
          "name": "Repeated Incidents",
          "raw_score": 29.2,
          "weight": 0.1,
          "weighted_contribution": 2.92,
          "finding_count": 2
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 72.85,
          "weight": 0.3,
          "contribution": 21.86
        },
        "negative_space": {
          "raw_score": 94,
          "weight": 0.25,
          "contribution": 23.5
        },
        "anomaly": {
          "raw_score": 70,
          "weight": 0.2,
          "contribution": 14
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 29.2,
          "weight": 0.1,
          "contribution": 2.92
        },
        "repeated_incident": {
          "raw_score": 29.2,
          "weight": 0.1,
          "contribution": 2.92
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 94,
          "weighted_contribution": 23.5,
          "finding_count": 2,
          "top_severity": "CRITICAL",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-007",
              "severity": "CRITICAL",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "55.6% (5/9) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0034",
                "ALT-0035",
                "ALT-0037",
                "ALT-0038",
                "ALT-0042"
              ],
              "evidence_count": 5,
              "key_metrics": {
                "uninvestigated_pct": "55.6%",
                "uninvestigated_count": 5,
                "total_high_critical_alerts": 9
              }
            },
            {
              "finding_id": "NS-NOESC-CSE-007",
              "severity": "HIGH",
              "title": "Absence of Required Escalation Records for Critical Incidents",
              "what": "Absence of Required Escalation Records for Critical Incidents",
              "why": "100.0% (3/3) of closed CRITICAL alerts completely lack escalation records (escalated = 0). Procedural SOC standards mandate that severe critical incidents must be escalated.",
              "evidence_ids": [
                "ALT-0033",
                "ALT-0036",
                "ALT-0041",
                "CAS-0027",
                "CAS-0028",
                "CAS-0031"
              ],
              "evidence_count": 6,
              "key_metrics": {}
            }
          ]
        },
        {
          "module": "Execution Gap",
          "finding_type": "EXECUTION_GAP",
          "weight_pct": "30%",
          "raw_module_score": 72.85,
          "weighted_contribution": 21.86,
          "finding_count": 2,
          "top_severity": "CRITICAL",
          "findings": [
            {
              "finding_id": "EG-NOESC-CSE-007",
              "severity": "CRITICAL",
              "title": "Critical Alerts Closed Without Escalation",
              "what": "Critical Alerts Closed Without Escalation",
              "why": "100.0% of critical alerts (3/3) were closed without escalation. Critical-severity alerts are expected to follow formal escalation protocols per operational SOC baseline procedures.",
              "evidence_ids": [
                "ALT-0033",
                "CAS-0027",
                "ALT-0036",
                "CAS-0028",
                "ALT-0041",
                "CAS-0031"
              ],
              "evidence_count": 6,
              "key_metrics": {
                "no_escalation_pct": "100.0%",
                "no_escalation_count": 3,
                "total_critical_closed": 3
              }
            },
            {
              "finding_id": "EG-FAST-CSE-007",
              "severity": "HIGH",
              "title": "Critical Alerts Closed Unusually Quickly",
              "what": "Critical Alerts Closed Unusually Quickly",
              "why": "66.7% of critical alerts (2/3) were closed in under 10 minutes. Peer median closure time is 60.0 minutes. Entity average: 18.7 minutes. This pattern indicates superficial or premature closure without proper investigation.",
              "evidence_ids": [
                "ALT-0033",
                "CAS-0027",
                "ALT-0036",
                "CAS-0028"
              ],
              "evidence_count": 4,
              "key_metrics": {
                "quick_closure_pct": "66.7%",
                "entity_avg_duration_minutes": 18.67,
                "peer_median_duration_minutes": 60,
                "quick_closure_count": 2,
                "total_critical_closed": 3
              }
            }
          ]
        },
        {
          "module": "Statistical Anomaly",
          "finding_type": "ANOMALY",
          "weight_pct": "20%",
          "raw_module_score": 70,
          "weighted_contribution": 14,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "ANOM-CSE-007",
              "severity": "HIGH",
              "title": "Statistical Anomaly Detected via Isolation Forest",
              "what": "Statistical Anomaly Detected via Isolation Forest",
              "why": "Entity classified as anomalous by Isolation Forest (normalised score: 1.000). Top isolating features (Formal Tree Path Attribution): average_investigation_duration=38.200 (Tree isolating weight: 15.8%); critical_alert_ratio=0.700 (Tree isolating weight: 15.7%); repeat_alert_rate=0.333 (Tree isolating weight: 15.6%). This entity exhibits systemic behavioural departure from peer norms.",
              "evidence_ids": [
                "ALT-0033",
                "ALT-0034",
                "ALT-0035",
                "ALT-0036",
                "ALT-0037",
                "CAS-0027",
                "CAS-0028",
                "CAS-0029",
                "CAS-0030",
                "CAS-0031"
              ],
              "evidence_count": 12,
              "key_metrics": {
                "anomaly_score": 1,
                "top_deviating_features": {
                  "average_investigation_duration": {
                    "entity_value": 38.2,
                    "peer_mean": 79.9725,
                    "deviation": -43.9711
                  },
                  "median_closure_time": {
                    "entity_value": 45,
                    "peer_mean": 81.75,
                    "deviation": -38.6842
                  },
                  "alert_volume": {
                    "entity_value": 10,
                    "peer_mean": 5.75,
                    "deviation": 4.4737
                  },
                  "critical_alert_ratio": {
                    "entity_value": 0.7,
                    "peer_mean": 0.3864,
                    "deviation": 0.3301
                  }
                }
              }
            }
          ]
        },
        {
          "module": "Repeated Incident",
          "finding_type": "REPEATED_INCIDENT",
          "weight_pct": "10%",
          "raw_module_score": 29.2,
          "weighted_contribution": 2.92,
          "finding_count": 2,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "RI-CSE-007-AST-013-MALWARE",
              "severity": "MEDIUM",
              "title": "Repeated MALWARE Incidents on AST-013 Without Remediation",
              "what": "Repeated MALWARE Incidents on AST-013 Without Remediation",
              "why": "Asset AST-013 (SERVER, CRITICAL criticality) has experienced 3 recurring 'MALWARE' alerts between 2026-09-11T00:00:00Z and 2026-09-15T12:00:00Z (2026-09-11T00:00:00Z to 2026-09-15T12:00:00Z (4.5 days span)). Remediation is absent (1/1 cases unresolved, 0 completed) with 100.0% of associated cases unresolved. Recurrent incidents of the same category on the same asset without effective remediation indicate persistent root-cause vulnerabilities and inadequate supervisory follow-through.",
              "evidence_ids": [
                "AST-013",
                "ALT-0033",
                "ALT-0035",
                "ALT-0037",
                "CAS-0027"
              ],
              "evidence_count": 5,
              "key_metrics": {
                "asset_id": "AST-013",
                "asset_type": "SERVER",
                "asset_criticality": "CRITICAL",
                "category": "MALWARE",
                "alert_count": 3,
                "unremediated_pct": "100.0%",
                "first_seen": "2026-09-11T00:00:00Z",
                "last_seen": "2026-09-15T12:00:00Z"
              }
            },
            {
              "finding_id": "RI-CSE-007-AST-014-MALWARE",
              "severity": "MEDIUM",
              "title": "Repeated MALWARE Incidents on AST-014 Without Remediation",
              "what": "Repeated MALWARE Incidents on AST-014 Without Remediation",
              "why": "Asset AST-014 (DATABASE, MEDIUM criticality) has experienced 3 recurring 'MALWARE' alerts between 2026-09-09T21:00:00Z and 2026-09-14T09:00:00Z (2026-09-09T21:00:00Z to 2026-09-14T09:00:00Z (4.5 days span)). Remediation is absent (1/1 cases unresolved, 0 completed) with 100.0% of associated cases unresolved. Recurrent incidents of the same category on the same asset without effective remediation indicate persistent root-cause vulnerabilities and inadequate supervisory follow-through.",
              "evidence_ids": [
                "AST-014",
                "ALT-0034",
                "ALT-0036",
                "ALT-0038",
                "CAS-0028"
              ],
              "evidence_count": 5,
              "key_metrics": {
                "asset_id": "AST-014",
                "asset_type": "DATABASE",
                "asset_criticality": "MEDIUM",
                "category": "MALWARE",
                "alert_count": 3,
                "unremediated_pct": "100.0%",
                "first_seen": "2026-09-09T21:00:00Z",
                "last_seen": "2026-09-14T09:00:00Z"
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: HIGH. The primary driver is Negative Space (25% weight, contributing 23.5 points from 2 finding(s) with top severity CRITICAL). Additional contributors: Execution Gap (21.9 pts), Statistical Anomaly (14.0 pts).",
      "execution_gap": {
        "raw_score": 72.85,
        "weight": 0.3,
        "contribution": 21.86
      },
      "negative_space": {
        "raw_score": 94,
        "weight": 0.25,
        "contribution": 23.5
      },
      "anomaly": {
        "raw_score": 70,
        "weight": 0.2,
        "contribution": 14
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 29.2,
        "weight": 0.1,
        "contribution": 2.92
      },
      "repeated_incident": {
        "raw_score": 29.2,
        "weight": 0.1,
        "contribution": 2.92
      }
    }
  },
  {
    "entity_id": "CSE-003",
    "entity_name": "Healthcare Entity 03",
    "sector": "Healthcare",
    "risk_score": 31.5,
    "final_risk_score": 31.5,
    "risk_level": "MEDIUM",
    "finding_count": 3,
    "top_severity": "HIGH",
    "primary_drivers": [
      "Negative Space",
      "Anomaly"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 70,
        "weighted_contribution": 17.5,
        "finding_count": 2,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-003",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          },
          {
            "finding_id": "NS-TELEMETRY-CSE-003",
            "title": "Critical Assets Lacking Expected Telemetry (1 affected)",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 70,
        "weighted_contribution": 14,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "ANOM-CSE-003",
            "title": "Statistical Anomaly Detected via Isolation Forest",
            "severity": "HIGH",
            "evidence_count": 11
          }
        ]
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 17.5,
      "anomaly": 14,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 70,
      "anomaly": 70,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-003",
      "entity_name": "Healthcare Entity 03",
      "risk_score": 31.5,
      "final_risk_score": 31.5,
      "risk_level": "MEDIUM",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 70,
          "weight": 0.25,
          "weighted_contribution": 17.5,
          "finding_count": 2
        },
        {
          "component": "anomaly",
          "name": "Anomaly",
          "raw_score": 70,
          "weight": 0.2,
          "weighted_contribution": 14,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 70,
          "weight": 0.25,
          "contribution": 17.5
        },
        "anomaly": {
          "raw_score": 70,
          "weight": 0.2,
          "contribution": 14
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 70,
          "weighted_contribution": 17.5,
          "finding_count": 2,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-003",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0015"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            },
            {
              "finding_id": "NS-TELEMETRY-CSE-003",
              "severity": "HIGH",
              "title": "Critical Assets Lacking Expected Telemetry (1 affected)",
              "what": "Critical Assets Lacking Expected Telemetry (1 affected)",
              "why": "1 CRITICAL asset(s) have not reported expected telemetry within the 7-day threshold. Affected assets: AST-005 (SERVER, 16d stale). Missing telemetry from critical infrastructure indicates surveillance voids, sensor failure, or deliberate log suppression.",
              "evidence_ids": [
                "AST-005"
              ],
              "evidence_count": 1,
              "key_metrics": {}
            }
          ]
        },
        {
          "module": "Statistical Anomaly",
          "finding_type": "ANOMALY",
          "weight_pct": "20%",
          "raw_module_score": 70,
          "weighted_contribution": 14,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "ANOM-CSE-003",
              "severity": "HIGH",
              "title": "Statistical Anomaly Detected via Isolation Forest",
              "what": "Statistical Anomaly Detected via Isolation Forest",
              "why": "Entity classified as anomalous by Isolation Forest (normalised score: 0.733). Top isolating features (Formal Tree Path Attribution): telemetry_coverage=0.500 (Tree isolating weight: 19.3%); average_investigation_duration=97.500 (Tree isolating weight: 18.5%); median_closure_time=105.000 (Tree isolating weight: 17.5%). This entity exhibits systemic behavioural departure from peer norms.",
              "evidence_ids": [
                "ALT-0011",
                "ALT-0012",
                "ALT-0013",
                "ALT-0014",
                "ALT-0015",
                "CAS-0009",
                "CAS-0010",
                "CAS-0011",
                "CAS-0012",
                "AST-005"
              ],
              "evidence_count": 11,
              "key_metrics": {
                "anomaly_score": 0.7326,
                "top_deviating_features": {
                  "median_closure_time": {
                    "entity_value": 105,
                    "peer_mean": 81.75,
                    "deviation": 24.4737
                  },
                  "average_investigation_duration": {
                    "entity_value": 97.5,
                    "peer_mean": 79.9725,
                    "deviation": 18.45
                  },
                  "alert_volume": {
                    "entity_value": 5,
                    "peer_mean": 5.75,
                    "deviation": -0.7895
                  },
                  "telemetry_coverage": {
                    "entity_value": 0.5,
                    "peer_mean": 0.975,
                    "deviation": -0.5
                  }
                }
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: MEDIUM. The primary driver is Negative Space (25% weight, contributing 17.5 points from 2 finding(s) with top severity HIGH). Additional contributors: Statistical Anomaly (14.0 pts).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 70,
        "weight": 0.25,
        "contribution": 17.5
      },
      "anomaly": {
        "raw_score": 70,
        "weight": 0.2,
        "contribution": 14
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-012",
    "entity_name": "Energy Entity 12",
    "sector": "Energy",
    "risk_score": 15.75,
    "final_risk_score": 15.75,
    "risk_level": "LOW",
    "finding_count": 2,
    "top_severity": "MEDIUM",
    "primary_drivers": [
      "Anomaly",
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 31,
        "weighted_contribution": 7.75,
        "finding_count": 1,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-012",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "MEDIUM",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 40,
        "weighted_contribution": 8,
        "finding_count": 1,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "ANOM-CSE-012",
            "title": "Statistical Anomaly Detected via Isolation Forest",
            "severity": "MEDIUM",
            "evidence_count": 12
          }
        ]
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 7.75,
      "anomaly": 8,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 31,
      "anomaly": 40,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-012",
      "entity_name": "Energy Entity 12",
      "risk_score": 15.75,
      "final_risk_score": 15.75,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "anomaly",
          "name": "Anomaly",
          "raw_score": 40,
          "weight": 0.2,
          "weighted_contribution": 8,
          "finding_count": 1
        },
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 31,
          "weight": 0.25,
          "weighted_contribution": 7.75,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 31,
          "weight": 0.25,
          "contribution": 7.75
        },
        "anomaly": {
          "raw_score": 40,
          "weight": 0.2,
          "contribution": 8
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Statistical Anomaly",
          "finding_type": "ANOMALY",
          "weight_pct": "20%",
          "raw_module_score": 40,
          "weighted_contribution": 8,
          "finding_count": 1,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "ANOM-CSE-012",
              "severity": "MEDIUM",
              "title": "Statistical Anomaly Detected via Isolation Forest",
              "what": "Statistical Anomaly Detected via Isolation Forest",
              "why": "Entity classified as anomalous by Isolation Forest (normalised score: 0.611). Top isolating features (Formal Tree Path Attribution): average_investigation_duration=97.500 (Tree isolating weight: 18.5%); median_closure_time=120.000 (Tree isolating weight: 17.7%); escalation_rate=0.167 (Tree isolating weight: 14.1%). This entity exhibits systemic behavioural departure from peer norms.",
              "evidence_ids": [
                "ALT-0065",
                "ALT-0066",
                "ALT-0067",
                "ALT-0068",
                "ALT-0069",
                "CAS-0050",
                "CAS-0051",
                "CAS-0052",
                "CAS-0053",
                "CAS-0054"
              ],
              "evidence_count": 12,
              "key_metrics": {
                "anomaly_score": 0.6113,
                "top_deviating_features": {
                  "median_closure_time": {
                    "entity_value": 120,
                    "peer_mean": 81.75,
                    "deviation": 40.2632
                  },
                  "average_investigation_duration": {
                    "entity_value": 97.5,
                    "peer_mean": 79.9725,
                    "deviation": 18.45
                  },
                  "alert_volume": {
                    "entity_value": 7,
                    "peer_mean": 5.75,
                    "deviation": 1.3158
                  },
                  "repeat_alert_rate": {
                    "entity_value": 0.1667,
                    "peer_mean": 0.0583,
                    "deviation": 0.1141
                  }
                }
              }
            }
          ]
        },
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 31,
          "weighted_contribution": 7.75,
          "finding_count": 1,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-012",
              "severity": "MEDIUM",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0069"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "25.0%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 4
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Statistical Anomaly (20% weight, contributing 8.0 points from 1 finding(s) with top severity MEDIUM). Additional contributors: Negative Space (7.8 pts).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 31,
        "weight": 0.25,
        "contribution": 7.75
      },
      "anomaly": {
        "raw_score": 40,
        "weight": 0.2,
        "contribution": 8
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-001",
    "entity_name": "Banking Entity 01",
    "sector": "Banking",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "finding_count": 1,
    "top_severity": "HIGH",
    "primary_drivers": [
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-001",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-001",
      "entity_name": "Banking Entity 01",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-001",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0005"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-002",
    "entity_name": "Energy Entity 02",
    "sector": "Energy",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "finding_count": 1,
    "top_severity": "HIGH",
    "primary_drivers": [
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-002",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-002",
      "entity_name": "Energy Entity 02",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-002",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0010"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-005",
    "entity_name": "Transport Entity 05",
    "sector": "Transport",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "finding_count": 1,
    "top_severity": "HIGH",
    "primary_drivers": [
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-005",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-005",
      "entity_name": "Transport Entity 05",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-005",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0027"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-006",
    "entity_name": "Banking Entity 06",
    "sector": "Banking",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "finding_count": 1,
    "top_severity": "HIGH",
    "primary_drivers": [
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-006",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-006",
      "entity_name": "Banking Entity 06",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-006",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0032"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-009",
    "entity_name": "Telecom Entity 09",
    "sector": "Telecom",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "finding_count": 1,
    "top_severity": "HIGH",
    "primary_drivers": [
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-009",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-009",
      "entity_name": "Telecom Entity 09",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-009",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0054"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-010",
    "entity_name": "Transport Entity 10",
    "sector": "Transport",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "finding_count": 1,
    "top_severity": "HIGH",
    "primary_drivers": [
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-010",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-010",
      "entity_name": "Transport Entity 10",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-010",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0059"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-011",
    "entity_name": "Banking Entity 11",
    "sector": "Banking",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "finding_count": 1,
    "top_severity": "HIGH",
    "primary_drivers": [
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-011",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-011",
      "entity_name": "Banking Entity 11",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-011",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0064"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-013",
    "entity_name": "Healthcare Entity 13",
    "sector": "Healthcare",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "finding_count": 1,
    "top_severity": "HIGH",
    "primary_drivers": [
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-013",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-013",
      "entity_name": "Healthcare Entity 13",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-013",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0076"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-014",
    "entity_name": "Telecom Entity 14",
    "sector": "Telecom",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "finding_count": 1,
    "top_severity": "HIGH",
    "primary_drivers": [
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-014",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-014",
      "entity_name": "Telecom Entity 14",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-014",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0081"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-015",
    "entity_name": "Transport Entity 15",
    "sector": "Transport",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "finding_count": 1,
    "top_severity": "HIGH",
    "primary_drivers": [
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-015",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-015",
      "entity_name": "Transport Entity 15",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-015",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0086"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-017",
    "entity_name": "Energy Entity 17",
    "sector": "Energy",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "finding_count": 1,
    "top_severity": "HIGH",
    "primary_drivers": [
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-017",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-017",
      "entity_name": "Energy Entity 17",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-017",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0098"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-018",
    "entity_name": "Healthcare Entity 18",
    "sector": "Healthcare",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "finding_count": 1,
    "top_severity": "HIGH",
    "primary_drivers": [
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-018",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-018",
      "entity_name": "Healthcare Entity 18",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-018",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0103"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-019",
    "entity_name": "Telecom Entity 19",
    "sector": "Telecom",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "finding_count": 1,
    "top_severity": "HIGH",
    "primary_drivers": [
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-019",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-019",
      "entity_name": "Telecom Entity 19",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-019",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0108"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-020",
    "entity_name": "Transport Entity 20",
    "sector": "Transport",
    "risk_score": 12.4,
    "final_risk_score": 12.4,
    "risk_level": "LOW",
    "finding_count": 3,
    "top_severity": "MEDIUM",
    "primary_drivers": [
      "Negative Space",
      "Peer Deviation"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 31,
        "weighted_contribution": 7.75,
        "finding_count": 1,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-020",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "MEDIUM",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 31,
        "weighted_contribution": 4.65,
        "finding_count": 2,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "PEER-CLO-CSE-020",
            "title": "Suspiciously Fast Incident Closure Times",
            "severity": "MEDIUM",
            "evidence_count": 6
          },
          {
            "finding_id": "PEER-DUR-CSE-020",
            "title": "Superficial Investigation Durations",
            "severity": "MEDIUM",
            "evidence_count": 6
          }
        ]
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 7.75,
      "anomaly": 0,
      "peer_deviation": 4.65,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 31,
      "anomaly": 0,
      "peer_deviation": 31,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-020",
      "entity_name": "Transport Entity 20",
      "risk_score": 12.4,
      "final_risk_score": 12.4,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 31,
          "weight": 0.25,
          "weighted_contribution": 7.75,
          "finding_count": 1
        },
        {
          "component": "peer_deviation",
          "name": "Peer Deviation",
          "raw_score": 31,
          "weight": 0.15,
          "weighted_contribution": 4.65,
          "finding_count": 2
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 31,
          "weight": 0.25,
          "contribution": 7.75
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 31,
          "weight": 0.15,
          "contribution": 4.65
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 31,
          "weighted_contribution": 7.75,
          "finding_count": 1,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-020",
              "severity": "MEDIUM",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0113"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "25.0%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 4
              }
            }
          ]
        },
        {
          "module": "Peer Comparison Deviation",
          "finding_type": "PEER_DEVIATION",
          "weight_pct": "15%",
          "raw_module_score": 31,
          "weighted_contribution": 4.65,
          "finding_count": 2,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "PEER-CLO-CSE-020",
              "severity": "MEDIUM",
              "title": "Suspiciously Fast Incident Closure Times",
              "what": "Suspiciously Fast Incident Closure Times",
              "why": "Entity median closure time (37.5 mins) is unusually fast (27.8% of Sector (Transport) peer median 135.0 mins across 3 peers). Unusually fast closures may indicate superficial triage or automated closure without investigation.",
              "evidence_ids": [
                "CAS-0086",
                "CAS-0087",
                "CAS-0088",
                "CAS-0089",
                "CAS-0090",
                "CAS-0091"
              ],
              "evidence_count": 6,
              "key_metrics": {}
            },
            {
              "finding_id": "PEER-DUR-CSE-020",
              "severity": "MEDIUM",
              "title": "Superficial Investigation Durations",
              "what": "Superficial Investigation Durations",
              "why": "Entity mean investigation duration (40.0 mins) is significantly shorter than Sector (Transport) peer median (120.0 mins across 3 peers). Short investigation durations suggest inadequate forensic depth or insufficient resource allocation per incident.",
              "evidence_ids": [
                "CAS-0086",
                "CAS-0087",
                "CAS-0088",
                "CAS-0089",
                "CAS-0090",
                "CAS-0091"
              ],
              "evidence_count": 6,
              "key_metrics": {}
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 7.8 points from 1 finding(s) with top severity MEDIUM). Additional contributors: Peer Comparison Deviation (4.7 pts).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 31,
        "weight": 0.25,
        "contribution": 7.75
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 31,
        "weight": 0.15,
        "contribution": 4.65
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-008",
    "entity_name": "Healthcare Entity 08",
    "sector": "Healthcare",
    "risk_score": 11.73,
    "final_risk_score": 11.73,
    "risk_level": "LOW",
    "finding_count": 2,
    "top_severity": "MEDIUM",
    "primary_drivers": [
      "Negative Space",
      "Peer Deviation"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 31,
        "weighted_contribution": 7.75,
        "finding_count": 1,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-008",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "MEDIUM",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 26.5,
        "weighted_contribution": 3.98,
        "finding_count": 1,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "PEER-ESC-CSE-008",
            "title": "Significantly Low Escalation Rate Compared to Peers",
            "severity": "MEDIUM",
            "evidence_count": 6
          }
        ]
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 7.75,
      "anomaly": 0,
      "peer_deviation": 3.98,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 31,
      "anomaly": 0,
      "peer_deviation": 26.5,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-008",
      "entity_name": "Healthcare Entity 08",
      "risk_score": 11.73,
      "final_risk_score": 11.73,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 31,
          "weight": 0.25,
          "weighted_contribution": 7.75,
          "finding_count": 1
        },
        {
          "component": "peer_deviation",
          "name": "Peer Deviation",
          "raw_score": 26.5,
          "weight": 0.15,
          "weighted_contribution": 3.98,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 31,
          "weight": 0.25,
          "contribution": 7.75
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 26.5,
          "weight": 0.15,
          "contribution": 3.98
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 31,
          "weighted_contribution": 7.75,
          "finding_count": 1,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-008",
              "severity": "MEDIUM",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0047"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "25.0%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 4
              }
            }
          ]
        },
        {
          "module": "Peer Comparison Deviation",
          "finding_type": "PEER_DEVIATION",
          "weight_pct": "15%",
          "raw_module_score": 26.5,
          "weighted_contribution": 3.98,
          "finding_count": 1,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "PEER-ESC-CSE-008",
              "severity": "MEDIUM",
              "title": "Significantly Low Escalation Rate Compared to Peers",
              "what": "Significantly Low Escalation Rate Compared to Peers",
              "why": "Entity escalation rate is 25.0 percentage points below Sector (Healthcare) peer median (0.0% vs 25.0% across 3 peers). Persistently low escalation rate indicates potential incident suppression or failure to escalate severe threats.",
              "evidence_ids": [
                "CAS-0032",
                "CAS-0033",
                "CAS-0034",
                "CAS-0035",
                "CAS-0036",
                "CAS-0037"
              ],
              "evidence_count": 6,
              "key_metrics": {}
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 7.8 points from 1 finding(s) with top severity MEDIUM). Additional contributors: Peer Comparison Deviation (4.0 pts).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 31,
        "weight": 0.25,
        "contribution": 7.75
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 26.5,
        "weight": 0.15,
        "contribution": 3.98
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-004",
    "entity_name": "Telecom Entity 04",
    "sector": "Telecom",
    "risk_score": 7.75,
    "final_risk_score": 7.75,
    "risk_level": "LOW",
    "finding_count": 1,
    "top_severity": "MEDIUM",
    "primary_drivers": [
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 31,
        "weighted_contribution": 7.75,
        "finding_count": 1,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-004",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "MEDIUM",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 7.75,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 31,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-004",
      "entity_name": "Telecom Entity 04",
      "risk_score": 7.75,
      "final_risk_score": 7.75,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 31,
          "weight": 0.25,
          "weighted_contribution": 7.75,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 31,
          "weight": 0.25,
          "contribution": 7.75
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 31,
          "weighted_contribution": 7.75,
          "finding_count": 1,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-004",
              "severity": "MEDIUM",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0020"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "25.0%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 4
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 7.8 points from 1 finding(s) with top severity MEDIUM).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 31,
        "weight": 0.25,
        "contribution": 7.75
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  },
  {
    "entity_id": "CSE-016",
    "entity_name": "Banking Entity 16",
    "sector": "Banking",
    "risk_score": 7.75,
    "final_risk_score": 7.75,
    "risk_level": "LOW",
    "finding_count": 1,
    "top_severity": "MEDIUM",
    "primary_drivers": [
      "Negative Space"
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 31,
        "weighted_contribution": 7.75,
        "finding_count": 1,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-016",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "MEDIUM",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 7.75,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 31,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "explanation": {
      "entity_id": "CSE-016",
      "entity_name": "Banking Entity 16",
      "risk_score": 7.75,
      "final_risk_score": 7.75,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 31,
          "weight": 0.25,
          "weighted_contribution": 7.75,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 31,
          "weight": 0.25,
          "contribution": 7.75
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 31,
          "weighted_contribution": 7.75,
          "finding_count": 1,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-016",
              "severity": "MEDIUM",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0091"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "25.0%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 4
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 7.8 points from 1 finding(s) with top severity MEDIUM).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 31,
        "weight": 0.25,
        "contribution": 7.75
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    }
  }
];

export const DEMO_FINDINGS: Finding[] = [
  {
    "finding_id": "EG-FAST-CSE-007",
    "entity_id": "CSE-007",
    "finding_type": "EXECUTION_GAP",
    "severity": "HIGH",
    "title": "Critical Alerts Closed Unusually Quickly",
    "rationale": "66.7% of critical alerts (2/3) were closed in under 10 minutes. Peer median closure time is 60.0 minutes. Entity average: 18.7 minutes. This pattern indicates superficial or premature closure without proper investigation.",
    "evidence_ids": [
      "ALT-0033",
      "CAS-0027",
      "ALT-0036",
      "CAS-0028"
    ],
    "supporting_metrics": {
      "quick_closure_count": 2,
      "total_critical_closed": 3,
      "quick_closure_ratio": 0.6667,
      "entity_avg_duration_minutes": 18.67,
      "peer_median_duration_minutes": 60,
      "threshold_minutes": 10
    }
  },
  {
    "finding_id": "EG-NOESC-CSE-007",
    "entity_id": "CSE-007",
    "finding_type": "EXECUTION_GAP",
    "severity": "CRITICAL",
    "title": "Critical Alerts Closed Without Escalation",
    "rationale": "100.0% of critical alerts (3/3) were closed without escalation. Critical-severity alerts are expected to follow formal escalation protocols per operational SOC baseline procedures.",
    "evidence_ids": [
      "ALT-0033",
      "CAS-0027",
      "ALT-0036",
      "CAS-0028",
      "ALT-0041",
      "CAS-0031"
    ],
    "supporting_metrics": {
      "no_escalation_count": 3,
      "total_critical_closed": 3,
      "no_escalation_ratio": 1,
      "threshold_ratio": 0.4
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-001",
    "entity_id": "CSE-001",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0005"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-001",
      "affected_assets": [
        "AST-001"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 3,
      "missing_investigation_ratio": 0.3333
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-002",
    "entity_id": "CSE-002",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0010"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-002",
      "affected_assets": [
        "AST-003"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 3,
      "missing_investigation_ratio": 0.3333
    }
  },
  {
    "finding_id": "NS-TELEMETRY-CSE-003",
    "entity_id": "CSE-003",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "Critical Assets Lacking Expected Telemetry (1 affected)",
    "rationale": "1 CRITICAL asset(s) have not reported expected telemetry within the 7-day threshold. Affected assets: AST-005 (SERVER, 16d stale). Missing telemetry from critical infrastructure indicates surveillance voids, sensor failure, or deliberate log suppression.",
    "evidence_ids": [
      "AST-005"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-003",
      "affected_assets": [
        "AST-005"
      ],
      "expected_evidence": "Periodic telemetry received within 7 days per expected_telemetry cadence",
      "observed_evidence": "Telemetry is stale by up to 16.0 days across 1 critical asset(s)",
      "explanation": "Critical assets are operating without active supervisory telemetry, blinding security monitoring.",
      "stale_critical_count": 1,
      "threshold_days": 7,
      "assets": [
        {
          "asset_id": "AST-005",
          "asset_type": "SERVER",
          "days_stale": 16,
          "expected_telemetry": "HOURLY",
          "last_telemetry": "2026-09-11T12:00:00Z"
        }
      ]
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-003",
    "entity_id": "CSE-003",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0015"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-003",
      "affected_assets": [
        "AST-005"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 3,
      "missing_investigation_ratio": 0.3333
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-004",
    "entity_id": "CSE-004",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "MEDIUM",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0020"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-004",
      "affected_assets": [
        "AST-007"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 4,
      "missing_investigation_ratio": 0.25
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-005",
    "entity_id": "CSE-005",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0027"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-005",
      "affected_assets": [
        "AST-009"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 3,
      "missing_investigation_ratio": 0.3333
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-006",
    "entity_id": "CSE-006",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0032"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-006",
      "affected_assets": [
        "AST-011"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 3,
      "missing_investigation_ratio": 0.3333
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-007",
    "entity_id": "CSE-007",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "CRITICAL",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "55.6% (5/9) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0034",
      "ALT-0035",
      "ALT-0037",
      "ALT-0038",
      "ALT-0042"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-007",
      "affected_assets": [
        "AST-013",
        "AST-014"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "5 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 5,
      "total_high_critical_alerts": 9,
      "missing_investigation_ratio": 0.5556
    }
  },
  {
    "finding_id": "NS-NOESC-CSE-007",
    "entity_id": "CSE-007",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "Absence of Required Escalation Records for Critical Incidents",
    "rationale": "100.0% (3/3) of closed CRITICAL alerts completely lack escalation records (escalated = 0). Procedural SOC standards mandate that severe critical incidents must be escalated.",
    "evidence_ids": [
      "ALT-0033",
      "ALT-0036",
      "ALT-0041",
      "CAS-0027",
      "CAS-0028",
      "CAS-0031"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-007",
      "affected_assets": [
        "AST-013",
        "AST-014"
      ],
      "expected_evidence": "Escalation indicator (escalated = 1) recorded for critical incident cases",
      "observed_evidence": "3 out of 3 critical cases have escalated = 0",
      "explanation": "Critical security incidents were resolved at frontline tier with total absence of supervisory escalation.",
      "unescalated_count": 3,
      "total_critical_cases": 3,
      "missing_escalation_ratio": 1,
      "threshold_ratio": 0.8
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-008",
    "entity_id": "CSE-008",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "MEDIUM",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0047"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-008",
      "affected_assets": [
        "AST-015"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 4,
      "missing_investigation_ratio": 0.25
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-009",
    "entity_id": "CSE-009",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0054"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-009",
      "affected_assets": [
        "AST-017"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 3,
      "missing_investigation_ratio": 0.3333
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-010",
    "entity_id": "CSE-010",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0059"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-010",
      "affected_assets": [
        "AST-019"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 3,
      "missing_investigation_ratio": 0.3333
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-011",
    "entity_id": "CSE-011",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0064"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-011",
      "affected_assets": [
        "AST-021"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 3,
      "missing_investigation_ratio": 0.3333
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-012",
    "entity_id": "CSE-012",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "MEDIUM",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0069"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-012",
      "affected_assets": [
        "AST-023"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 4,
      "missing_investigation_ratio": 0.25
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-013",
    "entity_id": "CSE-013",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0076"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-013",
      "affected_assets": [
        "AST-025"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 3,
      "missing_investigation_ratio": 0.3333
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-014",
    "entity_id": "CSE-014",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0081"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-014",
      "affected_assets": [
        "AST-027"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 3,
      "missing_investigation_ratio": 0.3333
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-015",
    "entity_id": "CSE-015",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0086"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-015",
      "affected_assets": [
        "AST-029"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 3,
      "missing_investigation_ratio": 0.3333
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-016",
    "entity_id": "CSE-016",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "MEDIUM",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0091"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-016",
      "affected_assets": [
        "AST-031"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 4,
      "missing_investigation_ratio": 0.25
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-017",
    "entity_id": "CSE-017",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0098"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-017",
      "affected_assets": [
        "AST-033"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 3,
      "missing_investigation_ratio": 0.3333
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-018",
    "entity_id": "CSE-018",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0103"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-018",
      "affected_assets": [
        "AST-035"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 3,
      "missing_investigation_ratio": 0.3333
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-019",
    "entity_id": "CSE-019",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "HIGH",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0108"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-019",
      "affected_assets": [
        "AST-037"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 3,
      "missing_investigation_ratio": 0.3333
    }
  },
  {
    "finding_id": "NS-NOINVEST-CSE-020",
    "entity_id": "CSE-020",
    "finding_type": "NEGATIVE_SPACE",
    "severity": "MEDIUM",
    "title": "High/Critical Alerts Lacking Investigation Records",
    "rationale": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
    "evidence_ids": [
      "ALT-0113"
    ],
    "supporting_metrics": {
      "affected_entity": "CSE-020",
      "affected_assets": [
        "AST-039"
      ],
      "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
      "observed_evidence": "1 high/critical alerts lack any case record in database",
      "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
      "uninvestigated_count": 1,
      "total_high_critical_alerts": 4,
      "missing_investigation_ratio": 0.25
    }
  },
  {
    "finding_id": "ANOM-CSE-003",
    "entity_id": "CSE-003",
    "finding_type": "ANOMALY",
    "severity": "HIGH",
    "title": "Statistical Anomaly Detected via Isolation Forest",
    "rationale": "Entity classified as anomalous by Isolation Forest (normalised score: 0.733). Top isolating features (Formal Tree Path Attribution): telemetry_coverage=0.500 (Tree isolating weight: 19.3%); average_investigation_duration=97.500 (Tree isolating weight: 18.5%); median_closure_time=105.000 (Tree isolating weight: 17.5%). This entity exhibits systemic behavioural departure from peer norms.",
    "evidence_ids": [
      "ALT-0011",
      "ALT-0012",
      "ALT-0013",
      "ALT-0014",
      "ALT-0015",
      "CAS-0009",
      "CAS-0010",
      "CAS-0011",
      "CAS-0012",
      "AST-005",
      "AST-006"
    ],
    "supporting_metrics": {
      "anomaly_score_normalised": 0.7326,
      "anomaly_score_raw": -0.62029,
      "anomaly_classification": "ANOMALY",
      "model_version_id": "IForest-v1.0-fcd0a290dd98",
      "feature_values": {
        "alert_volume": 5,
        "critical_alert_ratio": 0.4,
        "median_closure_time": 105,
        "escalation_rate": 0.25,
        "repeat_alert_rate": 0,
        "telemetry_coverage": 0.5,
        "average_investigation_duration": 97.5
      },
      "peer_means": {
        "alert_volume": 5.75,
        "critical_alert_ratio": 0.3864,
        "median_closure_time": 81.75,
        "escalation_rate": 0.0708,
        "repeat_alert_rate": 0.0583,
        "telemetry_coverage": 0.975,
        "average_investigation_duration": 79.9725
      },
      "feature_deviations": {
        "alert_volume": -0.7895,
        "critical_alert_ratio": 0.0143,
        "median_closure_time": 24.4737,
        "escalation_rate": 0.1886,
        "repeat_alert_rate": -0.0614,
        "telemetry_coverage": -0.5,
        "average_investigation_duration": 18.45
      },
      "explanation": "Top isolating features (Formal Tree Path Attribution): telemetry_coverage=0.500 (Tree isolating weight: 19.3%); average_investigation_duration=97.500 (Tree isolating weight: 18.5%); median_closure_time=105.000 (Tree isolating weight: 17.5%)",
      "feature_attributions": [
        {
          "feature": "telemetry_coverage",
          "value": 0.5,
          "attribution": 0.1934,
          "rank": 1
        },
        {
          "feature": "average_investigation_duration",
          "value": 97.5,
          "attribution": 0.1848,
          "rank": 2
        },
        {
          "feature": "median_closure_time",
          "value": 105,
          "attribution": 0.1752,
          "rank": 3
        }
      ],
      "attribution_method": "isolation_forest_tree_path_attribution",
      "attribution_limitation": "Attribution based on inverse depth of splits in IsolationForest trees. Explains isolation mathematically.",
      "model_parameters": {
        "algorithm": "IsolationForest",
        "n_estimators": 150,
        "contamination": 0.15,
        "random_state": 42
      }
    }
  },
  {
    "finding_id": "ANOM-CSE-007",
    "entity_id": "CSE-007",
    "finding_type": "ANOMALY",
    "severity": "HIGH",
    "title": "Statistical Anomaly Detected via Isolation Forest",
    "rationale": "Entity classified as anomalous by Isolation Forest (normalised score: 1.000). Top isolating features (Formal Tree Path Attribution): average_investigation_duration=38.200 (Tree isolating weight: 15.8%); critical_alert_ratio=0.700 (Tree isolating weight: 15.7%); repeat_alert_rate=0.333 (Tree isolating weight: 15.6%). This entity exhibits systemic behavioural departure from peer norms.",
    "evidence_ids": [
      "ALT-0033",
      "ALT-0034",
      "ALT-0035",
      "ALT-0036",
      "ALT-0037",
      "CAS-0027",
      "CAS-0028",
      "CAS-0029",
      "CAS-0030",
      "CAS-0031",
      "AST-013",
      "AST-014"
    ],
    "supporting_metrics": {
      "anomaly_score_normalised": 1,
      "anomaly_score_raw": -0.711502,
      "anomaly_classification": "ANOMALY",
      "model_version_id": "IForest-v1.0-fcd0a290dd98",
      "feature_values": {
        "alert_volume": 10,
        "critical_alert_ratio": 0.7,
        "median_closure_time": 45,
        "escalation_rate": 0,
        "repeat_alert_rate": 0.3333,
        "telemetry_coverage": 1,
        "average_investigation_duration": 38.2
      },
      "peer_means": {
        "alert_volume": 5.75,
        "critical_alert_ratio": 0.3864,
        "median_closure_time": 81.75,
        "escalation_rate": 0.0708,
        "repeat_alert_rate": 0.0583,
        "telemetry_coverage": 0.975,
        "average_investigation_duration": 79.9725
      },
      "feature_deviations": {
        "alert_volume": 4.4737,
        "critical_alert_ratio": 0.3301,
        "median_closure_time": -38.6842,
        "escalation_rate": -0.0746,
        "repeat_alert_rate": 0.2894,
        "telemetry_coverage": 0.0263,
        "average_investigation_duration": -43.9711
      },
      "explanation": "Top isolating features (Formal Tree Path Attribution): average_investigation_duration=38.200 (Tree isolating weight: 15.8%); critical_alert_ratio=0.700 (Tree isolating weight: 15.7%); repeat_alert_rate=0.333 (Tree isolating weight: 15.6%)",
      "feature_attributions": [
        {
          "feature": "average_investigation_duration",
          "value": 38.2,
          "attribution": 0.1578,
          "rank": 1
        },
        {
          "feature": "critical_alert_ratio",
          "value": 0.7,
          "attribution": 0.1568,
          "rank": 2
        },
        {
          "feature": "repeat_alert_rate",
          "value": 0.3333,
          "attribution": 0.1555,
          "rank": 3
        }
      ],
      "attribution_method": "isolation_forest_tree_path_attribution",
      "attribution_limitation": "Attribution based on inverse depth of splits in IsolationForest trees. Explains isolation mathematically.",
      "model_parameters": {
        "algorithm": "IsolationForest",
        "n_estimators": 150,
        "contamination": 0.15,
        "random_state": 42
      }
    }
  },
  {
    "finding_id": "ANOM-CSE-012",
    "entity_id": "CSE-012",
    "finding_type": "ANOMALY",
    "severity": "MEDIUM",
    "title": "Statistical Anomaly Detected via Isolation Forest",
    "rationale": "Entity classified as anomalous by Isolation Forest (normalised score: 0.611). Top isolating features (Formal Tree Path Attribution): average_investigation_duration=97.500 (Tree isolating weight: 18.5%); median_closure_time=120.000 (Tree isolating weight: 17.7%); escalation_rate=0.167 (Tree isolating weight: 14.1%). This entity exhibits systemic behavioural departure from peer norms.",
    "evidence_ids": [
      "ALT-0065",
      "ALT-0066",
      "ALT-0067",
      "ALT-0068",
      "ALT-0069",
      "CAS-0050",
      "CAS-0051",
      "CAS-0052",
      "CAS-0053",
      "CAS-0054",
      "AST-023",
      "AST-024"
    ],
    "supporting_metrics": {
      "anomaly_score_normalised": 0.6113,
      "anomaly_score_raw": -0.578925,
      "anomaly_classification": "ANOMALY",
      "model_version_id": "IForest-v1.0-fcd0a290dd98",
      "feature_values": {
        "alert_volume": 7,
        "critical_alert_ratio": 0.2857,
        "median_closure_time": 120,
        "escalation_rate": 0.1667,
        "repeat_alert_rate": 0.1667,
        "telemetry_coverage": 1,
        "average_investigation_duration": 97.5
      },
      "peer_means": {
        "alert_volume": 5.75,
        "critical_alert_ratio": 0.3864,
        "median_closure_time": 81.75,
        "escalation_rate": 0.0708,
        "repeat_alert_rate": 0.0583,
        "telemetry_coverage": 0.975,
        "average_investigation_duration": 79.9725
      },
      "feature_deviations": {
        "alert_volume": 1.3158,
        "critical_alert_ratio": -0.106,
        "median_closure_time": 40.2632,
        "escalation_rate": 0.1009,
        "repeat_alert_rate": 0.1141,
        "telemetry_coverage": 0.0263,
        "average_investigation_duration": 18.45
      },
      "explanation": "Top isolating features (Formal Tree Path Attribution): average_investigation_duration=97.500 (Tree isolating weight: 18.5%); median_closure_time=120.000 (Tree isolating weight: 17.7%); escalation_rate=0.167 (Tree isolating weight: 14.1%)",
      "feature_attributions": [
        {
          "feature": "average_investigation_duration",
          "value": 97.5,
          "attribution": 0.1854,
          "rank": 1
        },
        {
          "feature": "median_closure_time",
          "value": 120,
          "attribution": 0.1773,
          "rank": 2
        },
        {
          "feature": "escalation_rate",
          "value": 0.1667,
          "attribution": 0.1405,
          "rank": 3
        }
      ],
      "attribution_method": "isolation_forest_tree_path_attribution",
      "attribution_limitation": "Attribution based on inverse depth of splits in IsolationForest trees. Explains isolation mathematically.",
      "model_parameters": {
        "algorithm": "IsolationForest",
        "n_estimators": 150,
        "contamination": 0.15,
        "random_state": 42
      }
    }
  },
  {
    "finding_id": "PEER-ESC-CSE-008",
    "entity_id": "CSE-008",
    "finding_type": "PEER_DEVIATION",
    "severity": "MEDIUM",
    "title": "Significantly Low Escalation Rate Compared to Peers",
    "rationale": "Entity escalation rate is 25.0 percentage points below Sector (Healthcare) peer median (0.0% vs 25.0% across 3 peers). Persistently low escalation rate indicates potential incident suppression or failure to escalate severe threats.",
    "evidence_ids": [
      "CAS-0032",
      "CAS-0033",
      "CAS-0034",
      "CAS-0035",
      "CAS-0036",
      "CAS-0037"
    ],
    "supporting_metrics": {
      "entity_value": 0,
      "peer_median": 0.25,
      "deviation": 0.25,
      "interpretation": "Entity escalation rate is 25.0 percentage points below Sector (Healthcare) peer median (0.0% vs 25.0% across 3 peers). Persistently low escalation rate indicates potential incident suppression or failure to escalate severe threats.",
      "peer_group": "Sector (Healthcare)",
      "peer_count": 3
    }
  },
  {
    "finding_id": "PEER-CLO-CSE-020",
    "entity_id": "CSE-020",
    "finding_type": "PEER_DEVIATION",
    "severity": "MEDIUM",
    "title": "Suspiciously Fast Incident Closure Times",
    "rationale": "Entity median closure time (37.5 mins) is unusually fast (27.8% of Sector (Transport) peer median 135.0 mins across 3 peers). Unusually fast closures may indicate superficial triage or automated closure without investigation.",
    "evidence_ids": [
      "CAS-0086",
      "CAS-0087",
      "CAS-0088",
      "CAS-0089",
      "CAS-0090",
      "CAS-0091"
    ],
    "supporting_metrics": {
      "entity_value": 37.5,
      "peer_median": 135,
      "deviation": 0.2778,
      "interpretation": "Entity median closure time (37.5 mins) is unusually fast (27.8% of Sector (Transport) peer median 135.0 mins across 3 peers). Unusually fast closures may indicate superficial triage or automated closure without investigation.",
      "peer_group": "Sector (Transport)",
      "peer_count": 3
    }
  },
  {
    "finding_id": "PEER-DUR-CSE-020",
    "entity_id": "CSE-020",
    "finding_type": "PEER_DEVIATION",
    "severity": "MEDIUM",
    "title": "Superficial Investigation Durations",
    "rationale": "Entity mean investigation duration (40.0 mins) is significantly shorter than Sector (Transport) peer median (120.0 mins across 3 peers). Short investigation durations suggest inadequate forensic depth or insufficient resource allocation per incident.",
    "evidence_ids": [
      "CAS-0086",
      "CAS-0087",
      "CAS-0088",
      "CAS-0089",
      "CAS-0090",
      "CAS-0091"
    ],
    "supporting_metrics": {
      "entity_value": 40,
      "peer_median": 120,
      "deviation": 0.3333,
      "interpretation": "Entity mean investigation duration (40.0 mins) is significantly shorter than Sector (Transport) peer median (120.0 mins across 3 peers). Short investigation durations suggest inadequate forensic depth or insufficient resource allocation per incident.",
      "peer_group": "Sector (Transport)",
      "peer_count": 3
    }
  },
  {
    "finding_id": "RI-CSE-007-AST-013-MALWARE",
    "entity_id": "CSE-007",
    "finding_type": "REPEATED_INCIDENT",
    "severity": "MEDIUM",
    "title": "Repeated MALWARE Incidents on AST-013 Without Remediation",
    "rationale": "Asset AST-013 (SERVER, CRITICAL criticality) has experienced 3 recurring 'MALWARE' alerts between 2026-09-11T00:00:00Z and 2026-09-15T12:00:00Z (2026-09-11T00:00:00Z to 2026-09-15T12:00:00Z (4.5 days span)). Remediation is absent (1/1 cases unresolved, 0 completed) with 100.0% of associated cases unresolved. Recurrent incidents of the same category on the same asset without effective remediation indicate persistent root-cause vulnerabilities and inadequate supervisory follow-through.",
    "evidence_ids": [
      "AST-013",
      "ALT-0033",
      "ALT-0035",
      "ALT-0037",
      "CAS-0027"
    ],
    "supporting_metrics": {
      "entity_id": "CSE-007",
      "asset_id": "AST-013",
      "asset_type": "SERVER",
      "asset_criticality": "CRITICAL",
      "category": "MALWARE",
      "repeat_count": 3,
      "alert_count": 3,
      "case_count": 1,
      "unremediated_cases": 1,
      "remediated_cases": 0,
      "unaddressed_cases": 1,
      "in_progress_cases": 0,
      "unremediated_ratio": 1,
      "remediation_status": "Absent (1/1 cases unresolved, 0 completed)",
      "time_window": "2026-09-11T00:00:00Z to 2026-09-15T12:00:00Z (4.5 days span)",
      "first_seen": "2026-09-11T00:00:00Z",
      "last_seen": "2026-09-15T12:00:00Z",
      "time_window_start": "2026-09-11T00:00:00Z",
      "time_window_end": "2026-09-15T12:00:00Z"
    }
  },
  {
    "finding_id": "RI-CSE-007-AST-014-MALWARE",
    "entity_id": "CSE-007",
    "finding_type": "REPEATED_INCIDENT",
    "severity": "MEDIUM",
    "title": "Repeated MALWARE Incidents on AST-014 Without Remediation",
    "rationale": "Asset AST-014 (DATABASE, MEDIUM criticality) has experienced 3 recurring 'MALWARE' alerts between 2026-09-09T21:00:00Z and 2026-09-14T09:00:00Z (2026-09-09T21:00:00Z to 2026-09-14T09:00:00Z (4.5 days span)). Remediation is absent (1/1 cases unresolved, 0 completed) with 100.0% of associated cases unresolved. Recurrent incidents of the same category on the same asset without effective remediation indicate persistent root-cause vulnerabilities and inadequate supervisory follow-through.",
    "evidence_ids": [
      "AST-014",
      "ALT-0034",
      "ALT-0036",
      "ALT-0038",
      "CAS-0028"
    ],
    "supporting_metrics": {
      "entity_id": "CSE-007",
      "asset_id": "AST-014",
      "asset_type": "DATABASE",
      "asset_criticality": "MEDIUM",
      "category": "MALWARE",
      "repeat_count": 3,
      "alert_count": 3,
      "case_count": 1,
      "unremediated_cases": 1,
      "remediated_cases": 0,
      "unaddressed_cases": 1,
      "in_progress_cases": 0,
      "unremediated_ratio": 1,
      "remediation_status": "Absent (1/1 cases unresolved, 0 completed)",
      "time_window": "2026-09-09T21:00:00Z to 2026-09-14T09:00:00Z (4.5 days span)",
      "first_seen": "2026-09-09T21:00:00Z",
      "last_seen": "2026-09-14T09:00:00Z",
      "time_window_start": "2026-09-09T21:00:00Z",
      "time_window_end": "2026-09-14T09:00:00Z"
    }
  }
];

export const DEMO_ASSESSMENTS: AssessmentInfo[] = [
  {
    "assessment_id": "ASM-20260930-AB33F0",
    "name": "Regulatory Baseline (Precomputed)",
    "description": "Full offline multi-entity benchmark dataset and verified analytics cache",
    "created_at": "2026-09-30T17:15:00Z",
    "updated_at": "2026-09-30T11:46:25.232904+00:00",
    "is_active": true,
    "dataset_version": "1.0",
    "status": "READY",
    "counts": {
      "entities": 22,
      "assets": 377,
      "alerts": 1185,
      "cases": 1061
    },
    "total_findings": 32
  }
];

export const DEMO_ENTITY_DETAILS: Record<string, any> = {
  "CSE-001": {
    "success": true,
    "entity_id": "CSE-001",
    "entity_name": "Banking Entity 01",
    "sector": "Banking",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 54.25,
        "weight": 0.25,
        "weighted_contribution": 13.56,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-001",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-001",
        "entity_id": "CSE-001",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0005"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-001",
          "affected_assets": [
            "AST-001"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 3,
          "missing_investigation_ratio": 0.3333
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-001",
      "entity_name": "Banking Entity 01",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-001",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0005"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-001-01",
          "entity_id": "CSE-001",
          "asset_type": "Router",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-001-02",
          "entity_id": "CSE-001",
          "asset_type": "Router",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-001-03",
          "entity_id": "CSE-001",
          "asset_type": "Database",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-001-04",
          "entity_id": "CSE-001",
          "asset_type": "Firewall",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-001-11",
          "entity_id": "CSE-001",
          "asset_type": "Server",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00001",
          "timestamp": "2026-09-20T18:28:00.159Z",
          "entity_id": "CSE-001",
          "asset_id": "AST-001-01",
          "severity": "MEDIUM",
          "category": "Unauthorized Access",
          "source_ip": "192.168.158.32",
          "destination_ip": "10.0.76.191",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00002",
          "timestamp": "2026-07-24T21:22:26.826Z",
          "entity_id": "CSE-001",
          "asset_id": "AST-001-20",
          "severity": "CRITICAL",
          "category": "Data Exfiltration",
          "source_ip": "192.168.41.74",
          "destination_ip": "10.0.115.73",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00003",
          "timestamp": "2026-07-24T23:10:46.826Z",
          "entity_id": "CSE-001",
          "asset_id": "AST-001-19",
          "severity": "MEDIUM",
          "category": "DDoS",
          "source_ip": "192.168.239.75",
          "destination_ip": "10.0.148.55",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00004",
          "timestamp": "2026-07-23T12:31:53.493Z",
          "entity_id": "CSE-001",
          "asset_id": "AST-001-14",
          "severity": "CRITICAL",
          "category": "Ransomware",
          "source_ip": "192.168.189.81",
          "destination_ip": "10.0.181.151",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00005",
          "timestamp": "2026-09-19T20:40:13.493Z",
          "entity_id": "CSE-001",
          "asset_id": "AST-001-02",
          "severity": "HIGH",
          "category": "Privilege Escalation",
          "source_ip": "192.168.195.101",
          "destination_ip": "10.0.159.148",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00006",
          "timestamp": "2026-09-20T23:08:00.159Z",
          "entity_id": "CSE-001",
          "asset_id": "AST-001-02",
          "severity": "HIGH",
          "category": "Phishing",
          "source_ip": "192.168.182.108",
          "destination_ip": "10.0.63.31",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00007",
          "timestamp": "2026-07-01T18:02:26.826Z",
          "entity_id": "CSE-001",
          "asset_id": "AST-001-23",
          "severity": "HIGH",
          "category": "DDoS",
          "source_ip": "192.168.226.197",
          "destination_ip": "10.0.205.244",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00008",
          "timestamp": "2026-07-26T00:03:33.493Z",
          "entity_id": "CSE-001",
          "asset_id": "AST-001-03",
          "severity": "LOW",
          "category": "Malware",
          "source_ip": "192.168.17.97",
          "destination_ip": "10.0.42.252",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00009",
          "timestamp": "2026-08-09T03:51:20.159Z",
          "entity_id": "CSE-001",
          "asset_id": "AST-001-17",
          "severity": "CRITICAL",
          "category": "DDoS",
          "source_ip": "192.168.60.152",
          "destination_ip": "10.0.124.248",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00010",
          "timestamp": "2026-07-30T12:19:40.159Z",
          "entity_id": "CSE-001",
          "asset_id": "AST-001-19",
          "severity": "HIGH",
          "category": "Phishing",
          "source_ip": "192.168.70.172",
          "destination_ip": "10.0.73.70",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-002": {
    "success": true,
    "entity_id": "CSE-002",
    "entity_name": "Energy Entity 02",
    "sector": "Energy",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 54.25,
        "weight": 0.25,
        "weighted_contribution": 13.56,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-002",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-002",
        "entity_id": "CSE-002",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0010"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-002",
          "affected_assets": [
            "AST-003"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 3,
          "missing_investigation_ratio": 0.3333
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-002",
      "entity_name": "Energy Entity 02",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-002",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0010"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-002-01",
          "entity_id": "CSE-002",
          "asset_type": "SCADA",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-002-11",
          "entity_id": "CSE-002",
          "asset_type": "Router",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-002-14",
          "entity_id": "CSE-002",
          "asset_type": "Database",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-002-15",
          "entity_id": "CSE-002",
          "asset_type": "SCADA",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00074",
          "timestamp": "2026-09-07T04:21:20.159Z",
          "entity_id": "CSE-002",
          "asset_id": "AST-002-15",
          "severity": "HIGH",
          "category": "Unauthorized Access",
          "source_ip": "192.168.97.99",
          "destination_ip": "10.0.196.146",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00075",
          "timestamp": "2026-09-19T20:35:46.826Z",
          "entity_id": "CSE-002",
          "asset_id": "AST-002-17",
          "severity": "CRITICAL",
          "category": "Privilege Escalation",
          "source_ip": "192.168.114.180",
          "destination_ip": "10.0.66.219",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00076",
          "timestamp": "2026-07-11T02:24:06.826Z",
          "entity_id": "CSE-002",
          "asset_id": "AST-002-04",
          "severity": "CRITICAL",
          "category": "Ransomware",
          "source_ip": "192.168.252.179",
          "destination_ip": "10.0.68.57",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00077",
          "timestamp": "2026-07-12T15:12:26.826Z",
          "entity_id": "CSE-002",
          "asset_id": "AST-002-02",
          "severity": "HIGH",
          "category": "Malware",
          "source_ip": "192.168.121.113",
          "destination_ip": "10.0.126.242",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00078",
          "timestamp": "2026-09-19T01:13:33.493Z",
          "entity_id": "CSE-002",
          "asset_id": "AST-002-25",
          "severity": "CRITICAL",
          "category": "DDoS",
          "source_ip": "192.168.9.251",
          "destination_ip": "10.0.3.7",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00079",
          "timestamp": "2026-07-03T08:21:53.493Z",
          "entity_id": "CSE-002",
          "asset_id": "AST-002-22",
          "severity": "MEDIUM",
          "category": "DDoS",
          "source_ip": "192.168.232.154",
          "destination_ip": "10.0.127.241",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00080",
          "timestamp": "2026-07-05T23:29:40.159Z",
          "entity_id": "CSE-002",
          "asset_id": "AST-002-16",
          "severity": "LOW",
          "category": "Privilege Escalation",
          "source_ip": "192.168.190.213",
          "destination_ip": "10.0.106.251",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00081",
          "timestamp": "2026-07-12T23:04:06.826Z",
          "entity_id": "CSE-002",
          "asset_id": "AST-002-15",
          "severity": "CRITICAL",
          "category": "Malware",
          "source_ip": "192.168.83.33",
          "destination_ip": "10.0.229.128",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00082",
          "timestamp": "2026-07-19T11:52:26.826Z",
          "entity_id": "CSE-002",
          "asset_id": "AST-002-13",
          "severity": "LOW",
          "category": "Phishing",
          "source_ip": "192.168.136.66",
          "destination_ip": "10.0.47.242",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00083",
          "timestamp": "2026-09-12T13:53:33.493Z",
          "entity_id": "CSE-002",
          "asset_id": "AST-002-17",
          "severity": "LOW",
          "category": "Privilege Escalation",
          "source_ip": "192.168.43.195",
          "destination_ip": "10.0.56.196",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-003": {
    "success": true,
    "entity_id": "CSE-003",
    "entity_name": "Healthcare Entity 03",
    "sector": "Healthcare",
    "risk_score": 31.5,
    "final_risk_score": 31.5,
    "risk_level": "MEDIUM",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 70,
        "weight": 0.25,
        "weighted_contribution": 17.5,
        "finding_count": 2
      },
      {
        "component": "anomaly",
        "name": "Anomaly",
        "raw_score": 70,
        "weight": 0.2,
        "weighted_contribution": 14,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 70,
        "weighted_contribution": 17.5,
        "finding_count": 2,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-003",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          },
          {
            "finding_id": "NS-TELEMETRY-CSE-003",
            "title": "Critical Assets Lacking Expected Telemetry (1 affected)",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 70,
        "weighted_contribution": 14,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "ANOM-CSE-003",
            "title": "Statistical Anomaly Detected via Isolation Forest",
            "severity": "HIGH",
            "evidence_count": 11
          }
        ]
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 17.5,
      "anomaly": 14,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 70,
      "anomaly": 70,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-TELEMETRY-CSE-003",
        "entity_id": "CSE-003",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "Critical Assets Lacking Expected Telemetry (1 affected)",
        "rationale": "1 CRITICAL asset(s) have not reported expected telemetry within the 7-day threshold. Affected assets: AST-005 (SERVER, 16d stale). Missing telemetry from critical infrastructure indicates surveillance voids, sensor failure, or deliberate log suppression.",
        "evidence_ids": [
          "AST-005"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-003",
          "affected_assets": [
            "AST-005"
          ],
          "expected_evidence": "Periodic telemetry received within 7 days per expected_telemetry cadence",
          "observed_evidence": "Telemetry is stale by up to 16.0 days across 1 critical asset(s)",
          "explanation": "Critical assets are operating without active supervisory telemetry, blinding security monitoring.",
          "stale_critical_count": 1,
          "threshold_days": 7,
          "assets": [
            {
              "asset_id": "AST-005",
              "asset_type": "SERVER",
              "days_stale": 16,
              "expected_telemetry": "HOURLY",
              "last_telemetry": "2026-09-11T12:00:00Z"
            }
          ]
        }
      },
      {
        "finding_id": "NS-NOINVEST-CSE-003",
        "entity_id": "CSE-003",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0015"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-003",
          "affected_assets": [
            "AST-005"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 3,
          "missing_investigation_ratio": 0.3333
        }
      },
      {
        "finding_id": "ANOM-CSE-003",
        "entity_id": "CSE-003",
        "finding_type": "ANOMALY",
        "severity": "HIGH",
        "title": "Statistical Anomaly Detected via Isolation Forest",
        "rationale": "Entity classified as anomalous by Isolation Forest (normalised score: 0.733). Top isolating features (Formal Tree Path Attribution): telemetry_coverage=0.500 (Tree isolating weight: 19.3%); average_investigation_duration=97.500 (Tree isolating weight: 18.5%); median_closure_time=105.000 (Tree isolating weight: 17.5%). This entity exhibits systemic behavioural departure from peer norms.",
        "evidence_ids": [
          "ALT-0011",
          "ALT-0012",
          "ALT-0013",
          "ALT-0014",
          "ALT-0015",
          "CAS-0009",
          "CAS-0010",
          "CAS-0011",
          "CAS-0012",
          "AST-005",
          "AST-006"
        ],
        "supporting_metrics": {
          "anomaly_score_normalised": 0.7326,
          "anomaly_score_raw": -0.62029,
          "anomaly_classification": "ANOMALY",
          "model_version_id": "IForest-v1.0-fcd0a290dd98",
          "feature_values": {
            "alert_volume": 5,
            "critical_alert_ratio": 0.4,
            "median_closure_time": 105,
            "escalation_rate": 0.25,
            "repeat_alert_rate": 0,
            "telemetry_coverage": 0.5,
            "average_investigation_duration": 97.5
          },
          "peer_means": {
            "alert_volume": 5.75,
            "critical_alert_ratio": 0.3864,
            "median_closure_time": 81.75,
            "escalation_rate": 0.0708,
            "repeat_alert_rate": 0.0583,
            "telemetry_coverage": 0.975,
            "average_investigation_duration": 79.9725
          },
          "feature_deviations": {
            "alert_volume": -0.7895,
            "critical_alert_ratio": 0.0143,
            "median_closure_time": 24.4737,
            "escalation_rate": 0.1886,
            "repeat_alert_rate": -0.0614,
            "telemetry_coverage": -0.5,
            "average_investigation_duration": 18.45
          },
          "explanation": "Top isolating features (Formal Tree Path Attribution): telemetry_coverage=0.500 (Tree isolating weight: 19.3%); average_investigation_duration=97.500 (Tree isolating weight: 18.5%); median_closure_time=105.000 (Tree isolating weight: 17.5%)",
          "feature_attributions": [
            {
              "feature": "telemetry_coverage",
              "value": 0.5,
              "attribution": 0.1934,
              "rank": 1
            },
            {
              "feature": "average_investigation_duration",
              "value": 97.5,
              "attribution": 0.1848,
              "rank": 2
            },
            {
              "feature": "median_closure_time",
              "value": 105,
              "attribution": 0.1752,
              "rank": 3
            }
          ],
          "attribution_method": "isolation_forest_tree_path_attribution",
          "attribution_limitation": "Attribution based on inverse depth of splits in IsolationForest trees. Explains isolation mathematically.",
          "model_parameters": {
            "algorithm": "IsolationForest",
            "n_estimators": 150,
            "contamination": 0.15,
            "random_state": 42
          }
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-003",
      "entity_name": "Healthcare Entity 03",
      "risk_score": 31.5,
      "final_risk_score": 31.5,
      "risk_level": "MEDIUM",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 70,
          "weight": 0.25,
          "weighted_contribution": 17.5,
          "finding_count": 2
        },
        {
          "component": "anomaly",
          "name": "Anomaly",
          "raw_score": 70,
          "weight": 0.2,
          "weighted_contribution": 14,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 70,
          "weight": 0.25,
          "contribution": 17.5
        },
        "anomaly": {
          "raw_score": 70,
          "weight": 0.2,
          "contribution": 14
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 70,
          "weighted_contribution": 17.5,
          "finding_count": 2,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-003",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0015"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            },
            {
              "finding_id": "NS-TELEMETRY-CSE-003",
              "severity": "HIGH",
              "title": "Critical Assets Lacking Expected Telemetry (1 affected)",
              "what": "Critical Assets Lacking Expected Telemetry (1 affected)",
              "why": "1 CRITICAL asset(s) have not reported expected telemetry within the 7-day threshold. Affected assets: AST-005 (SERVER, 16d stale). Missing telemetry from critical infrastructure indicates surveillance voids, sensor failure, or deliberate log suppression.",
              "evidence_ids": [
                "AST-005"
              ],
              "evidence_count": 1,
              "key_metrics": {}
            }
          ]
        },
        {
          "module": "Statistical Anomaly",
          "finding_type": "ANOMALY",
          "weight_pct": "20%",
          "raw_module_score": 70,
          "weighted_contribution": 14,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "ANOM-CSE-003",
              "severity": "HIGH",
              "title": "Statistical Anomaly Detected via Isolation Forest",
              "what": "Statistical Anomaly Detected via Isolation Forest",
              "why": "Entity classified as anomalous by Isolation Forest (normalised score: 0.733). Top isolating features (Formal Tree Path Attribution): telemetry_coverage=0.500 (Tree isolating weight: 19.3%); average_investigation_duration=97.500 (Tree isolating weight: 18.5%); median_closure_time=105.000 (Tree isolating weight: 17.5%). This entity exhibits systemic behavioural departure from peer norms.",
              "evidence_ids": [
                "ALT-0011",
                "ALT-0012",
                "ALT-0013",
                "ALT-0014",
                "ALT-0015",
                "CAS-0009",
                "CAS-0010",
                "CAS-0011",
                "CAS-0012",
                "AST-005"
              ],
              "evidence_count": 11,
              "key_metrics": {
                "anomaly_score": 0.7326,
                "top_deviating_features": {
                  "median_closure_time": {
                    "entity_value": 105,
                    "peer_mean": 81.75,
                    "deviation": 24.4737
                  },
                  "average_investigation_duration": {
                    "entity_value": 97.5,
                    "peer_mean": 79.9725,
                    "deviation": 18.45
                  },
                  "alert_volume": {
                    "entity_value": 5,
                    "peer_mean": 5.75,
                    "deviation": -0.7895
                  },
                  "telemetry_coverage": {
                    "entity_value": 0.5,
                    "peer_mean": 0.975,
                    "deviation": -0.5
                  }
                }
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: MEDIUM. The primary driver is Negative Space (25% weight, contributing 17.5 points from 2 finding(s) with top severity HIGH). Additional contributors: Statistical Anomaly (14.0 pts).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 70,
        "weight": 0.25,
        "contribution": 17.5
      },
      "anomaly": {
        "raw_score": 70,
        "weight": 0.2,
        "contribution": 14
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-003-08",
          "entity_id": "CSE-003",
          "asset_type": "Workstation",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-003-10",
          "entity_id": "CSE-003",
          "asset_type": "Workstation",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-003-13",
          "entity_id": "CSE-003",
          "asset_type": "Workstation",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-003-15",
          "entity_id": "CSE-003",
          "asset_type": "Server",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00121",
          "timestamp": "2026-09-01T08:30:46.826Z",
          "entity_id": "CSE-003",
          "asset_id": "AST-003-09",
          "severity": "LOW",
          "category": "Malware",
          "source_ip": "192.168.55.165",
          "destination_ip": "10.0.228.13",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00122",
          "timestamp": "2026-08-14T05:51:53.493Z",
          "entity_id": "CSE-003",
          "asset_id": "AST-003-15",
          "severity": "MEDIUM",
          "category": "Ransomware",
          "source_ip": "192.168.156.96",
          "destination_ip": "10.0.44.90",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00123",
          "timestamp": "2026-08-29T08:59:40.159Z",
          "entity_id": "CSE-003",
          "asset_id": "AST-003-13",
          "severity": "HIGH",
          "category": "Phishing",
          "source_ip": "192.168.65.20",
          "destination_ip": "10.0.58.51",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00124",
          "timestamp": "2026-07-19T20:34:06.826Z",
          "entity_id": "CSE-003",
          "asset_id": "AST-003-23",
          "severity": "MEDIUM",
          "category": "Data Exfiltration",
          "source_ip": "192.168.247.45",
          "destination_ip": "10.0.47.219",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00125",
          "timestamp": "2026-08-30T11:15:13.493Z",
          "entity_id": "CSE-003",
          "asset_id": "AST-003-16",
          "severity": "MEDIUM",
          "category": "DDoS",
          "source_ip": "192.168.83.183",
          "destination_ip": "10.0.89.2",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00126",
          "timestamp": "2026-09-17T15:43:00.159Z",
          "entity_id": "CSE-003",
          "asset_id": "AST-003-01",
          "severity": "LOW",
          "category": "DDoS",
          "source_ip": "192.168.190.211",
          "destination_ip": "10.0.253.217",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00127",
          "timestamp": "2026-08-04T12:37:26.826Z",
          "entity_id": "CSE-003",
          "asset_id": "AST-003-12",
          "severity": "MEDIUM",
          "category": "Privilege Escalation",
          "source_ip": "192.168.69.207",
          "destination_ip": "10.0.204.224",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00128",
          "timestamp": "2026-08-25T20:38:33.493Z",
          "entity_id": "CSE-003",
          "asset_id": "AST-003-19",
          "severity": "LOW",
          "category": "DDoS",
          "source_ip": "192.168.9.240",
          "destination_ip": "10.0.245.82",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00129",
          "timestamp": "2026-08-27T02:26:20.159Z",
          "entity_id": "CSE-003",
          "asset_id": "AST-003-10",
          "severity": "CRITICAL",
          "category": "Privilege Escalation",
          "source_ip": "192.168.86.230",
          "destination_ip": "10.0.248.69",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00130",
          "timestamp": "2026-08-10T13:54:40.159Z",
          "entity_id": "CSE-003",
          "asset_id": "AST-003-16",
          "severity": "MEDIUM",
          "category": "Unauthorized Access",
          "source_ip": "192.168.225.18",
          "destination_ip": "10.0.113.212",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-004": {
    "success": true,
    "entity_id": "CSE-004",
    "entity_name": "Telecom Entity 04",
    "sector": "Telecom",
    "risk_score": 7.75,
    "final_risk_score": 7.75,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 31,
        "weight": 0.25,
        "weighted_contribution": 7.75,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 31,
        "weighted_contribution": 7.75,
        "finding_count": 1,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-004",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "MEDIUM",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 7.75,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 31,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-004",
        "entity_id": "CSE-004",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "MEDIUM",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0020"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-004",
          "affected_assets": [
            "AST-007"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 4,
          "missing_investigation_ratio": 0.25
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-004",
      "entity_name": "Telecom Entity 04",
      "risk_score": 7.75,
      "final_risk_score": 7.75,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 31,
          "weight": 0.25,
          "weighted_contribution": 7.75,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 31,
          "weight": 0.25,
          "contribution": 7.75
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 31,
          "weighted_contribution": 7.75,
          "finding_count": 1,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-004",
              "severity": "MEDIUM",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0020"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "25.0%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 4
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 7.8 points from 1 finding(s) with top severity MEDIUM).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 31,
        "weight": 0.25,
        "contribution": 7.75
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-004-01",
          "entity_id": "CSE-004",
          "asset_type": "Firewall",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-004-02",
          "entity_id": "CSE-004",
          "asset_type": "Workstation",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-004-15",
          "entity_id": "CSE-004",
          "asset_type": "Workstation",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00184",
          "timestamp": "2026-07-27T20:37:26.826Z",
          "entity_id": "CSE-004",
          "asset_id": "AST-004-02",
          "severity": "CRITICAL",
          "category": "DDoS",
          "source_ip": "192.168.246.157",
          "destination_ip": "10.0.12.230",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00185",
          "timestamp": "2026-09-08T21:42:26.826Z",
          "entity_id": "CSE-004",
          "asset_id": "AST-004-14",
          "severity": "HIGH",
          "category": "Data Exfiltration",
          "source_ip": "192.168.112.143",
          "destination_ip": "10.0.153.223",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00186",
          "timestamp": "2026-09-14T19:43:33.493Z",
          "entity_id": "CSE-004",
          "asset_id": "AST-004-19",
          "severity": "LOW",
          "category": "Privilege Escalation",
          "source_ip": "192.168.249.190",
          "destination_ip": "10.0.108.236",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00187",
          "timestamp": "2026-07-22T15:31:20.159Z",
          "entity_id": "CSE-004",
          "asset_id": "AST-004-04",
          "severity": "CRITICAL",
          "category": "Data Exfiltration",
          "source_ip": "192.168.70.163",
          "destination_ip": "10.0.167.179",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00188",
          "timestamp": "2026-09-23T11:59:40.159Z",
          "entity_id": "CSE-004",
          "asset_id": "AST-004-01",
          "severity": "HIGH",
          "category": "Privilege Escalation",
          "source_ip": "192.168.200.219",
          "destination_ip": "10.0.66.122",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00189",
          "timestamp": "2026-09-27T23:34:06.826Z",
          "entity_id": "CSE-004",
          "asset_id": "AST-004-19",
          "severity": "CRITICAL",
          "category": "Ransomware",
          "source_ip": "192.168.255.117",
          "destination_ip": "10.0.182.162",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00190",
          "timestamp": "2026-09-15T18:22:26.826Z",
          "entity_id": "CSE-004",
          "asset_id": "AST-004-04",
          "severity": "LOW",
          "category": "Data Exfiltration",
          "source_ip": "192.168.127.96",
          "destination_ip": "10.0.74.223",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00191",
          "timestamp": "2026-09-08T08:23:33.493Z",
          "entity_id": "CSE-004",
          "asset_id": "AST-004-13",
          "severity": "MEDIUM",
          "category": "DDoS",
          "source_ip": "192.168.27.133",
          "destination_ip": "10.0.161.170",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00192",
          "timestamp": "2026-09-10T20:11:20.159Z",
          "entity_id": "CSE-004",
          "asset_id": "AST-004-15",
          "severity": "MEDIUM",
          "category": "Data Exfiltration",
          "source_ip": "192.168.151.211",
          "destination_ip": "10.0.40.76",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00193",
          "timestamp": "2026-08-17T04:16:20.159Z",
          "entity_id": "CSE-004",
          "asset_id": "AST-004-05",
          "severity": "HIGH",
          "category": "Phishing",
          "source_ip": "192.168.201.161",
          "destination_ip": "10.0.96.103",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-005": {
    "success": true,
    "entity_id": "CSE-005",
    "entity_name": "Transport Entity 05",
    "sector": "Transport",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 54.25,
        "weight": 0.25,
        "weighted_contribution": 13.56,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-005",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-005",
        "entity_id": "CSE-005",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0027"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-005",
          "affected_assets": [
            "AST-009"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 3,
          "missing_investigation_ratio": 0.3333
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-005",
      "entity_name": "Transport Entity 05",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-005",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0027"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-005-01",
          "entity_id": "CSE-005",
          "asset_type": "ICS",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-005-02",
          "entity_id": "CSE-005",
          "asset_type": "Server",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-005-05",
          "entity_id": "CSE-005",
          "asset_type": "SCADA",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-005-06",
          "entity_id": "CSE-005",
          "asset_type": "ICS",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-005-09",
          "entity_id": "CSE-005",
          "asset_type": "Router",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00205",
          "timestamp": "2026-09-01T20:59:40.159Z",
          "entity_id": "CSE-005",
          "asset_id": "AST-005-11",
          "severity": "LOW",
          "category": "Privilege Escalation",
          "source_ip": "192.168.245.115",
          "destination_ip": "10.0.68.231",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00206",
          "timestamp": "2026-08-22T08:34:06.826Z",
          "entity_id": "CSE-005",
          "asset_id": "AST-005-06",
          "severity": "CRITICAL",
          "category": "Data Exfiltration",
          "source_ip": "192.168.2.225",
          "destination_ip": "10.0.142.229",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00207",
          "timestamp": "2026-09-01T15:22:26.826Z",
          "entity_id": "CSE-005",
          "asset_id": "AST-005-16",
          "severity": "HIGH",
          "category": "Data Exfiltration",
          "source_ip": "192.168.193.14",
          "destination_ip": "10.0.97.98",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00208",
          "timestamp": "2026-08-10T05:23:33.493Z",
          "entity_id": "CSE-005",
          "asset_id": "AST-005-02",
          "severity": "LOW",
          "category": "Phishing",
          "source_ip": "192.168.51.8",
          "destination_ip": "10.0.142.3",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00209",
          "timestamp": "2026-07-28T17:11:20.159Z",
          "entity_id": "CSE-005",
          "asset_id": "AST-005-01",
          "severity": "LOW",
          "category": "DDoS",
          "source_ip": "192.168.132.44",
          "destination_ip": "10.0.234.121",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00210",
          "timestamp": "2026-08-06T05:25:46.826Z",
          "entity_id": "CSE-005",
          "asset_id": "AST-005-14",
          "severity": "HIGH",
          "category": "Privilege Escalation",
          "source_ip": "192.168.250.170",
          "destination_ip": "10.0.177.126",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00211",
          "timestamp": "2026-07-04T12:46:53.493Z",
          "entity_id": "CSE-005",
          "asset_id": "AST-005-13",
          "severity": "MEDIUM",
          "category": "DDoS",
          "source_ip": "192.168.69.3",
          "destination_ip": "10.0.249.218",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00212",
          "timestamp": "2026-08-14T01:54:40.159Z",
          "entity_id": "CSE-005",
          "asset_id": "AST-005-13",
          "severity": "LOW",
          "category": "Phishing",
          "source_ip": "192.168.150.113",
          "destination_ip": "10.0.123.137",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00213",
          "timestamp": "2026-08-08T23:29:06.826Z",
          "entity_id": "CSE-005",
          "asset_id": "AST-005-06",
          "severity": "HIGH",
          "category": "Data Exfiltration",
          "source_ip": "192.168.107.11",
          "destination_ip": "10.0.255.122",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00214",
          "timestamp": "2026-07-07T00:10:13.493Z",
          "entity_id": "CSE-005",
          "asset_id": "AST-005-01",
          "severity": "HIGH",
          "category": "Unauthorized Access",
          "source_ip": "192.168.255.137",
          "destination_ip": "10.0.128.6",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-006": {
    "success": true,
    "entity_id": "CSE-006",
    "entity_name": "Banking Entity 06",
    "sector": "Banking",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 54.25,
        "weight": 0.25,
        "weighted_contribution": 13.56,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-006",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-006",
        "entity_id": "CSE-006",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0032"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-006",
          "affected_assets": [
            "AST-011"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 3,
          "missing_investigation_ratio": 0.3333
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-006",
      "entity_name": "Banking Entity 06",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-006",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0032"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-006-02",
          "entity_id": "CSE-006",
          "asset_type": "Router",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-006-03",
          "entity_id": "CSE-006",
          "asset_type": "ICS",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-006-08",
          "entity_id": "CSE-006",
          "asset_type": "Workstation",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-006-10",
          "entity_id": "CSE-006",
          "asset_type": "ICS",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00267",
          "timestamp": "2026-09-27T13:25:46.826Z",
          "entity_id": "CSE-006",
          "asset_id": "AST-006-17",
          "severity": "HIGH",
          "category": "Privilege Escalation",
          "source_ip": "192.168.87.35",
          "destination_ip": "10.0.155.47",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00268",
          "timestamp": "2026-09-14T20:46:53.493Z",
          "entity_id": "CSE-006",
          "asset_id": "AST-006-03",
          "severity": "HIGH",
          "category": "DDoS",
          "source_ip": "192.168.133.9",
          "destination_ip": "10.0.29.111",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00269",
          "timestamp": "2026-09-15T09:54:40.159Z",
          "entity_id": "CSE-006",
          "asset_id": "AST-006-12",
          "severity": "MEDIUM",
          "category": "DDoS",
          "source_ip": "192.168.14.91",
          "destination_ip": "10.0.45.87",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00270",
          "timestamp": "2026-09-26T23:59:40.159Z",
          "entity_id": "CSE-006",
          "asset_id": "AST-006-02",
          "severity": "LOW",
          "category": "Data Exfiltration",
          "source_ip": "192.168.125.59",
          "destination_ip": "10.0.76.47",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00271",
          "timestamp": "2026-08-02T11:34:06.826Z",
          "entity_id": "CSE-006",
          "asset_id": "AST-006-06",
          "severity": "LOW",
          "category": "Privilege Escalation",
          "source_ip": "192.168.10.41",
          "destination_ip": "10.0.22.172",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00272",
          "timestamp": "2026-08-29T02:15:13.493Z",
          "entity_id": "CSE-006",
          "asset_id": "AST-006-15",
          "severity": "MEDIUM",
          "category": "Unauthorized Access",
          "source_ip": "192.168.58.137",
          "destination_ip": "10.0.21.169",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00273",
          "timestamp": "2026-08-15T11:20:13.493Z",
          "entity_id": "CSE-006",
          "asset_id": "AST-006-10",
          "severity": "HIGH",
          "category": "Phishing",
          "source_ip": "192.168.132.19",
          "destination_ip": "10.0.87.198",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00274",
          "timestamp": "2026-09-02T05:48:00.159Z",
          "entity_id": "CSE-006",
          "asset_id": "AST-006-02",
          "severity": "LOW",
          "category": "DDoS",
          "source_ip": "192.168.224.102",
          "destination_ip": "10.0.208.100",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00275",
          "timestamp": "2026-09-07T16:42:26.826Z",
          "entity_id": "CSE-006",
          "asset_id": "AST-006-06",
          "severity": "LOW",
          "category": "DDoS",
          "source_ip": "192.168.144.126",
          "destination_ip": "10.0.1.106",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00276",
          "timestamp": "2026-08-09T14:43:33.493Z",
          "entity_id": "CSE-006",
          "asset_id": "AST-006-03",
          "severity": "MEDIUM",
          "category": "Unauthorized Access",
          "source_ip": "192.168.11.243",
          "destination_ip": "10.0.112.105",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-007": {
    "success": true,
    "entity_id": "CSE-007",
    "entity_name": "Energy Entity 07",
    "sector": "Energy",
    "risk_score": 62.28,
    "final_risk_score": 62.28,
    "risk_level": "HIGH",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 94,
        "weight": 0.25,
        "weighted_contribution": 23.5,
        "finding_count": 2
      },
      {
        "component": "execution_gap",
        "name": "Execution Gap",
        "raw_score": 72.85,
        "weight": 0.3,
        "weighted_contribution": 21.86,
        "finding_count": 2
      },
      {
        "component": "anomaly",
        "name": "Anomaly",
        "raw_score": 70,
        "weight": 0.2,
        "weighted_contribution": 14,
        "finding_count": 1
      },
      {
        "component": "repeated_incidents",
        "name": "Repeated Incidents",
        "raw_score": 29.2,
        "weight": 0.1,
        "weighted_contribution": 2.92,
        "finding_count": 2
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 72.85,
        "weighted_contribution": 21.86,
        "finding_count": 2,
        "top_severity": "CRITICAL",
        "finding_summaries": [
          {
            "finding_id": "EG-FAST-CSE-007",
            "title": "Critical Alerts Closed Unusually Quickly",
            "severity": "HIGH",
            "evidence_count": 4
          },
          {
            "finding_id": "EG-NOESC-CSE-007",
            "title": "Critical Alerts Closed Without Escalation",
            "severity": "CRITICAL",
            "evidence_count": 6
          }
        ]
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 94,
        "weighted_contribution": 23.5,
        "finding_count": 2,
        "top_severity": "CRITICAL",
        "finding_summaries": [
          {
            "finding_id": "NS-NOESC-CSE-007",
            "title": "Absence of Required Escalation Records for Critical Incidents",
            "severity": "HIGH",
            "evidence_count": 6
          },
          {
            "finding_id": "NS-NOINVEST-CSE-007",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "CRITICAL",
            "evidence_count": 5
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 70,
        "weighted_contribution": 14,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "ANOM-CSE-007",
            "title": "Statistical Anomaly Detected via Isolation Forest",
            "severity": "HIGH",
            "evidence_count": 12
          }
        ]
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 29.2,
        "weighted_contribution": 2.92,
        "finding_count": 2,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "RI-CSE-007-AST-013-MALWARE",
            "title": "Repeated MALWARE Incidents on AST-013 Without Remediation",
            "severity": "MEDIUM",
            "evidence_count": 5
          },
          {
            "finding_id": "RI-CSE-007-AST-014-MALWARE",
            "title": "Repeated MALWARE Incidents on AST-014 Without Remediation",
            "severity": "MEDIUM",
            "evidence_count": 5
          }
        ]
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 21.86,
      "negative_space": 23.5,
      "anomaly": 14,
      "peer_deviation": 0,
      "repeated_incidents": 2.92
    },
    "component_raw_scores": {
      "execution_gap": 72.85,
      "negative_space": 94,
      "anomaly": 70,
      "peer_deviation": 0,
      "repeated_incidents": 29.2
    },
    "findings": [
      {
        "finding_id": "EG-FAST-CSE-007",
        "entity_id": "CSE-007",
        "finding_type": "EXECUTION_GAP",
        "severity": "HIGH",
        "title": "Critical Alerts Closed Unusually Quickly",
        "rationale": "66.7% of critical alerts (2/3) were closed in under 10 minutes. Peer median closure time is 60.0 minutes. Entity average: 18.7 minutes. This pattern indicates superficial or premature closure without proper investigation.",
        "evidence_ids": [
          "ALT-0033",
          "CAS-0027",
          "ALT-0036",
          "CAS-0028"
        ],
        "supporting_metrics": {
          "quick_closure_count": 2,
          "total_critical_closed": 3,
          "quick_closure_ratio": 0.6667,
          "entity_avg_duration_minutes": 18.67,
          "peer_median_duration_minutes": 60,
          "threshold_minutes": 10
        }
      },
      {
        "finding_id": "EG-NOESC-CSE-007",
        "entity_id": "CSE-007",
        "finding_type": "EXECUTION_GAP",
        "severity": "CRITICAL",
        "title": "Critical Alerts Closed Without Escalation",
        "rationale": "100.0% of critical alerts (3/3) were closed without escalation. Critical-severity alerts are expected to follow formal escalation protocols per operational SOC baseline procedures.",
        "evidence_ids": [
          "ALT-0033",
          "CAS-0027",
          "ALT-0036",
          "CAS-0028",
          "ALT-0041",
          "CAS-0031"
        ],
        "supporting_metrics": {
          "no_escalation_count": 3,
          "total_critical_closed": 3,
          "no_escalation_ratio": 1,
          "threshold_ratio": 0.4
        }
      },
      {
        "finding_id": "NS-NOINVEST-CSE-007",
        "entity_id": "CSE-007",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "CRITICAL",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "55.6% (5/9) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0034",
          "ALT-0035",
          "ALT-0037",
          "ALT-0038",
          "ALT-0042"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-007",
          "affected_assets": [
            "AST-013",
            "AST-014"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "5 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 5,
          "total_high_critical_alerts": 9,
          "missing_investigation_ratio": 0.5556
        }
      },
      {
        "finding_id": "NS-NOESC-CSE-007",
        "entity_id": "CSE-007",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "Absence of Required Escalation Records for Critical Incidents",
        "rationale": "100.0% (3/3) of closed CRITICAL alerts completely lack escalation records (escalated = 0). Procedural SOC standards mandate that severe critical incidents must be escalated.",
        "evidence_ids": [
          "ALT-0033",
          "ALT-0036",
          "ALT-0041",
          "CAS-0027",
          "CAS-0028",
          "CAS-0031"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-007",
          "affected_assets": [
            "AST-013",
            "AST-014"
          ],
          "expected_evidence": "Escalation indicator (escalated = 1) recorded for critical incident cases",
          "observed_evidence": "3 out of 3 critical cases have escalated = 0",
          "explanation": "Critical security incidents were resolved at frontline tier with total absence of supervisory escalation.",
          "unescalated_count": 3,
          "total_critical_cases": 3,
          "missing_escalation_ratio": 1,
          "threshold_ratio": 0.8
        }
      },
      {
        "finding_id": "ANOM-CSE-007",
        "entity_id": "CSE-007",
        "finding_type": "ANOMALY",
        "severity": "HIGH",
        "title": "Statistical Anomaly Detected via Isolation Forest",
        "rationale": "Entity classified as anomalous by Isolation Forest (normalised score: 1.000). Top isolating features (Formal Tree Path Attribution): average_investigation_duration=38.200 (Tree isolating weight: 15.8%); critical_alert_ratio=0.700 (Tree isolating weight: 15.7%); repeat_alert_rate=0.333 (Tree isolating weight: 15.6%). This entity exhibits systemic behavioural departure from peer norms.",
        "evidence_ids": [
          "ALT-0033",
          "ALT-0034",
          "ALT-0035",
          "ALT-0036",
          "ALT-0037",
          "CAS-0027",
          "CAS-0028",
          "CAS-0029",
          "CAS-0030",
          "CAS-0031",
          "AST-013",
          "AST-014"
        ],
        "supporting_metrics": {
          "anomaly_score_normalised": 1,
          "anomaly_score_raw": -0.711502,
          "anomaly_classification": "ANOMALY",
          "model_version_id": "IForest-v1.0-fcd0a290dd98",
          "feature_values": {
            "alert_volume": 10,
            "critical_alert_ratio": 0.7,
            "median_closure_time": 45,
            "escalation_rate": 0,
            "repeat_alert_rate": 0.3333,
            "telemetry_coverage": 1,
            "average_investigation_duration": 38.2
          },
          "peer_means": {
            "alert_volume": 5.75,
            "critical_alert_ratio": 0.3864,
            "median_closure_time": 81.75,
            "escalation_rate": 0.0708,
            "repeat_alert_rate": 0.0583,
            "telemetry_coverage": 0.975,
            "average_investigation_duration": 79.9725
          },
          "feature_deviations": {
            "alert_volume": 4.4737,
            "critical_alert_ratio": 0.3301,
            "median_closure_time": -38.6842,
            "escalation_rate": -0.0746,
            "repeat_alert_rate": 0.2894,
            "telemetry_coverage": 0.0263,
            "average_investigation_duration": -43.9711
          },
          "explanation": "Top isolating features (Formal Tree Path Attribution): average_investigation_duration=38.200 (Tree isolating weight: 15.8%); critical_alert_ratio=0.700 (Tree isolating weight: 15.7%); repeat_alert_rate=0.333 (Tree isolating weight: 15.6%)",
          "feature_attributions": [
            {
              "feature": "average_investigation_duration",
              "value": 38.2,
              "attribution": 0.1578,
              "rank": 1
            },
            {
              "feature": "critical_alert_ratio",
              "value": 0.7,
              "attribution": 0.1568,
              "rank": 2
            },
            {
              "feature": "repeat_alert_rate",
              "value": 0.3333,
              "attribution": 0.1555,
              "rank": 3
            }
          ],
          "attribution_method": "isolation_forest_tree_path_attribution",
          "attribution_limitation": "Attribution based on inverse depth of splits in IsolationForest trees. Explains isolation mathematically.",
          "model_parameters": {
            "algorithm": "IsolationForest",
            "n_estimators": 150,
            "contamination": 0.15,
            "random_state": 42
          }
        }
      },
      {
        "finding_id": "RI-CSE-007-AST-013-MALWARE",
        "entity_id": "CSE-007",
        "finding_type": "REPEATED_INCIDENT",
        "severity": "MEDIUM",
        "title": "Repeated MALWARE Incidents on AST-013 Without Remediation",
        "rationale": "Asset AST-013 (SERVER, CRITICAL criticality) has experienced 3 recurring 'MALWARE' alerts between 2026-09-11T00:00:00Z and 2026-09-15T12:00:00Z (2026-09-11T00:00:00Z to 2026-09-15T12:00:00Z (4.5 days span)). Remediation is absent (1/1 cases unresolved, 0 completed) with 100.0% of associated cases unresolved. Recurrent incidents of the same category on the same asset without effective remediation indicate persistent root-cause vulnerabilities and inadequate supervisory follow-through.",
        "evidence_ids": [
          "AST-013",
          "ALT-0033",
          "ALT-0035",
          "ALT-0037",
          "CAS-0027"
        ],
        "supporting_metrics": {
          "entity_id": "CSE-007",
          "asset_id": "AST-013",
          "asset_type": "SERVER",
          "asset_criticality": "CRITICAL",
          "category": "MALWARE",
          "repeat_count": 3,
          "alert_count": 3,
          "case_count": 1,
          "unremediated_cases": 1,
          "remediated_cases": 0,
          "unaddressed_cases": 1,
          "in_progress_cases": 0,
          "unremediated_ratio": 1,
          "remediation_status": "Absent (1/1 cases unresolved, 0 completed)",
          "time_window": "2026-09-11T00:00:00Z to 2026-09-15T12:00:00Z (4.5 days span)",
          "first_seen": "2026-09-11T00:00:00Z",
          "last_seen": "2026-09-15T12:00:00Z",
          "time_window_start": "2026-09-11T00:00:00Z",
          "time_window_end": "2026-09-15T12:00:00Z"
        }
      },
      {
        "finding_id": "RI-CSE-007-AST-014-MALWARE",
        "entity_id": "CSE-007",
        "finding_type": "REPEATED_INCIDENT",
        "severity": "MEDIUM",
        "title": "Repeated MALWARE Incidents on AST-014 Without Remediation",
        "rationale": "Asset AST-014 (DATABASE, MEDIUM criticality) has experienced 3 recurring 'MALWARE' alerts between 2026-09-09T21:00:00Z and 2026-09-14T09:00:00Z (2026-09-09T21:00:00Z to 2026-09-14T09:00:00Z (4.5 days span)). Remediation is absent (1/1 cases unresolved, 0 completed) with 100.0% of associated cases unresolved. Recurrent incidents of the same category on the same asset without effective remediation indicate persistent root-cause vulnerabilities and inadequate supervisory follow-through.",
        "evidence_ids": [
          "AST-014",
          "ALT-0034",
          "ALT-0036",
          "ALT-0038",
          "CAS-0028"
        ],
        "supporting_metrics": {
          "entity_id": "CSE-007",
          "asset_id": "AST-014",
          "asset_type": "DATABASE",
          "asset_criticality": "MEDIUM",
          "category": "MALWARE",
          "repeat_count": 3,
          "alert_count": 3,
          "case_count": 1,
          "unremediated_cases": 1,
          "remediated_cases": 0,
          "unaddressed_cases": 1,
          "in_progress_cases": 0,
          "unremediated_ratio": 1,
          "remediation_status": "Absent (1/1 cases unresolved, 0 completed)",
          "time_window": "2026-09-09T21:00:00Z to 2026-09-14T09:00:00Z (4.5 days span)",
          "first_seen": "2026-09-09T21:00:00Z",
          "last_seen": "2026-09-14T09:00:00Z",
          "time_window_start": "2026-09-09T21:00:00Z",
          "time_window_end": "2026-09-14T09:00:00Z"
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-007",
      "entity_name": "Energy Entity 07",
      "risk_score": 62.28,
      "final_risk_score": 62.28,
      "risk_level": "HIGH",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 94,
          "weight": 0.25,
          "weighted_contribution": 23.5,
          "finding_count": 2
        },
        {
          "component": "execution_gap",
          "name": "Execution Gap",
          "raw_score": 72.85,
          "weight": 0.3,
          "weighted_contribution": 21.86,
          "finding_count": 2
        },
        {
          "component": "anomaly",
          "name": "Anomaly",
          "raw_score": 70,
          "weight": 0.2,
          "weighted_contribution": 14,
          "finding_count": 1
        },
        {
          "component": "repeated_incidents",
          "name": "Repeated Incidents",
          "raw_score": 29.2,
          "weight": 0.1,
          "weighted_contribution": 2.92,
          "finding_count": 2
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 72.85,
          "weight": 0.3,
          "contribution": 21.86
        },
        "negative_space": {
          "raw_score": 94,
          "weight": 0.25,
          "contribution": 23.5
        },
        "anomaly": {
          "raw_score": 70,
          "weight": 0.2,
          "contribution": 14
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 29.2,
          "weight": 0.1,
          "contribution": 2.92
        },
        "repeated_incident": {
          "raw_score": 29.2,
          "weight": 0.1,
          "contribution": 2.92
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 94,
          "weighted_contribution": 23.5,
          "finding_count": 2,
          "top_severity": "CRITICAL",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-007",
              "severity": "CRITICAL",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "55.6% (5/9) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0034",
                "ALT-0035",
                "ALT-0037",
                "ALT-0038",
                "ALT-0042"
              ],
              "evidence_count": 5,
              "key_metrics": {
                "uninvestigated_pct": "55.6%",
                "uninvestigated_count": 5,
                "total_high_critical_alerts": 9
              }
            },
            {
              "finding_id": "NS-NOESC-CSE-007",
              "severity": "HIGH",
              "title": "Absence of Required Escalation Records for Critical Incidents",
              "what": "Absence of Required Escalation Records for Critical Incidents",
              "why": "100.0% (3/3) of closed CRITICAL alerts completely lack escalation records (escalated = 0). Procedural SOC standards mandate that severe critical incidents must be escalated.",
              "evidence_ids": [
                "ALT-0033",
                "ALT-0036",
                "ALT-0041",
                "CAS-0027",
                "CAS-0028",
                "CAS-0031"
              ],
              "evidence_count": 6,
              "key_metrics": {}
            }
          ]
        },
        {
          "module": "Execution Gap",
          "finding_type": "EXECUTION_GAP",
          "weight_pct": "30%",
          "raw_module_score": 72.85,
          "weighted_contribution": 21.86,
          "finding_count": 2,
          "top_severity": "CRITICAL",
          "findings": [
            {
              "finding_id": "EG-NOESC-CSE-007",
              "severity": "CRITICAL",
              "title": "Critical Alerts Closed Without Escalation",
              "what": "Critical Alerts Closed Without Escalation",
              "why": "100.0% of critical alerts (3/3) were closed without escalation. Critical-severity alerts are expected to follow formal escalation protocols per operational SOC baseline procedures.",
              "evidence_ids": [
                "ALT-0033",
                "CAS-0027",
                "ALT-0036",
                "CAS-0028",
                "ALT-0041",
                "CAS-0031"
              ],
              "evidence_count": 6,
              "key_metrics": {
                "no_escalation_pct": "100.0%",
                "no_escalation_count": 3,
                "total_critical_closed": 3
              }
            },
            {
              "finding_id": "EG-FAST-CSE-007",
              "severity": "HIGH",
              "title": "Critical Alerts Closed Unusually Quickly",
              "what": "Critical Alerts Closed Unusually Quickly",
              "why": "66.7% of critical alerts (2/3) were closed in under 10 minutes. Peer median closure time is 60.0 minutes. Entity average: 18.7 minutes. This pattern indicates superficial or premature closure without proper investigation.",
              "evidence_ids": [
                "ALT-0033",
                "CAS-0027",
                "ALT-0036",
                "CAS-0028"
              ],
              "evidence_count": 4,
              "key_metrics": {
                "quick_closure_pct": "66.7%",
                "entity_avg_duration_minutes": 18.67,
                "peer_median_duration_minutes": 60,
                "quick_closure_count": 2,
                "total_critical_closed": 3
              }
            }
          ]
        },
        {
          "module": "Statistical Anomaly",
          "finding_type": "ANOMALY",
          "weight_pct": "20%",
          "raw_module_score": 70,
          "weighted_contribution": 14,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "ANOM-CSE-007",
              "severity": "HIGH",
              "title": "Statistical Anomaly Detected via Isolation Forest",
              "what": "Statistical Anomaly Detected via Isolation Forest",
              "why": "Entity classified as anomalous by Isolation Forest (normalised score: 1.000). Top isolating features (Formal Tree Path Attribution): average_investigation_duration=38.200 (Tree isolating weight: 15.8%); critical_alert_ratio=0.700 (Tree isolating weight: 15.7%); repeat_alert_rate=0.333 (Tree isolating weight: 15.6%). This entity exhibits systemic behavioural departure from peer norms.",
              "evidence_ids": [
                "ALT-0033",
                "ALT-0034",
                "ALT-0035",
                "ALT-0036",
                "ALT-0037",
                "CAS-0027",
                "CAS-0028",
                "CAS-0029",
                "CAS-0030",
                "CAS-0031"
              ],
              "evidence_count": 12,
              "key_metrics": {
                "anomaly_score": 1,
                "top_deviating_features": {
                  "average_investigation_duration": {
                    "entity_value": 38.2,
                    "peer_mean": 79.9725,
                    "deviation": -43.9711
                  },
                  "median_closure_time": {
                    "entity_value": 45,
                    "peer_mean": 81.75,
                    "deviation": -38.6842
                  },
                  "alert_volume": {
                    "entity_value": 10,
                    "peer_mean": 5.75,
                    "deviation": 4.4737
                  },
                  "critical_alert_ratio": {
                    "entity_value": 0.7,
                    "peer_mean": 0.3864,
                    "deviation": 0.3301
                  }
                }
              }
            }
          ]
        },
        {
          "module": "Repeated Incident",
          "finding_type": "REPEATED_INCIDENT",
          "weight_pct": "10%",
          "raw_module_score": 29.2,
          "weighted_contribution": 2.92,
          "finding_count": 2,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "RI-CSE-007-AST-013-MALWARE",
              "severity": "MEDIUM",
              "title": "Repeated MALWARE Incidents on AST-013 Without Remediation",
              "what": "Repeated MALWARE Incidents on AST-013 Without Remediation",
              "why": "Asset AST-013 (SERVER, CRITICAL criticality) has experienced 3 recurring 'MALWARE' alerts between 2026-09-11T00:00:00Z and 2026-09-15T12:00:00Z (2026-09-11T00:00:00Z to 2026-09-15T12:00:00Z (4.5 days span)). Remediation is absent (1/1 cases unresolved, 0 completed) with 100.0% of associated cases unresolved. Recurrent incidents of the same category on the same asset without effective remediation indicate persistent root-cause vulnerabilities and inadequate supervisory follow-through.",
              "evidence_ids": [
                "AST-013",
                "ALT-0033",
                "ALT-0035",
                "ALT-0037",
                "CAS-0027"
              ],
              "evidence_count": 5,
              "key_metrics": {
                "asset_id": "AST-013",
                "asset_type": "SERVER",
                "asset_criticality": "CRITICAL",
                "category": "MALWARE",
                "alert_count": 3,
                "unremediated_pct": "100.0%",
                "first_seen": "2026-09-11T00:00:00Z",
                "last_seen": "2026-09-15T12:00:00Z"
              }
            },
            {
              "finding_id": "RI-CSE-007-AST-014-MALWARE",
              "severity": "MEDIUM",
              "title": "Repeated MALWARE Incidents on AST-014 Without Remediation",
              "what": "Repeated MALWARE Incidents on AST-014 Without Remediation",
              "why": "Asset AST-014 (DATABASE, MEDIUM criticality) has experienced 3 recurring 'MALWARE' alerts between 2026-09-09T21:00:00Z and 2026-09-14T09:00:00Z (2026-09-09T21:00:00Z to 2026-09-14T09:00:00Z (4.5 days span)). Remediation is absent (1/1 cases unresolved, 0 completed) with 100.0% of associated cases unresolved. Recurrent incidents of the same category on the same asset without effective remediation indicate persistent root-cause vulnerabilities and inadequate supervisory follow-through.",
              "evidence_ids": [
                "AST-014",
                "ALT-0034",
                "ALT-0036",
                "ALT-0038",
                "CAS-0028"
              ],
              "evidence_count": 5,
              "key_metrics": {
                "asset_id": "AST-014",
                "asset_type": "DATABASE",
                "asset_criticality": "MEDIUM",
                "category": "MALWARE",
                "alert_count": 3,
                "unremediated_pct": "100.0%",
                "first_seen": "2026-09-09T21:00:00Z",
                "last_seen": "2026-09-14T09:00:00Z"
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: HIGH. The primary driver is Negative Space (25% weight, contributing 23.5 points from 2 finding(s) with top severity CRITICAL). Additional contributors: Execution Gap (21.9 pts), Statistical Anomaly (14.0 pts).",
      "execution_gap": {
        "raw_score": 72.85,
        "weight": 0.3,
        "contribution": 21.86
      },
      "negative_space": {
        "raw_score": 94,
        "weight": 0.25,
        "contribution": 23.5
      },
      "anomaly": {
        "raw_score": 70,
        "weight": 0.2,
        "contribution": 14
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 29.2,
        "weight": 0.1,
        "contribution": 2.92
      },
      "repeated_incident": {
        "raw_score": 29.2,
        "weight": 0.1,
        "contribution": 2.92
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-007-01",
          "entity_id": "CSE-007",
          "asset_type": "SCADA",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-08-21T21:26:53.493Z"
        },
        {
          "asset_id": "AST-007-02",
          "entity_id": "CSE-007",
          "asset_type": "Firewall",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-08-07T21:26:53.493Z"
        },
        {
          "asset_id": "AST-007-03",
          "entity_id": "CSE-007",
          "asset_type": "Database",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-08-21T21:26:53.493Z"
        },
        {
          "asset_id": "AST-007-04",
          "entity_id": "CSE-007",
          "asset_type": "Database",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-08-14T21:26:53.493Z"
        },
        {
          "asset_id": "AST-007-05",
          "entity_id": "CSE-007",
          "asset_type": "Database",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-007-06",
          "entity_id": "CSE-007",
          "asset_type": "Router",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-007-09",
          "entity_id": "CSE-007",
          "asset_type": "Router",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-007-10",
          "entity_id": "CSE-007",
          "asset_type": "Database",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00303",
          "timestamp": "2026-07-15T02:04:06.826Z",
          "entity_id": "CSE-007",
          "asset_id": "AST-007-30",
          "severity": "LOW",
          "category": "Ransomware",
          "source_ip": "192.168.237.81",
          "destination_ip": "10.0.172.219",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00304",
          "timestamp": "2026-09-02T07:14:06.826Z",
          "entity_id": "CSE-007",
          "asset_id": "AST-007-30",
          "severity": "CRITICAL",
          "category": "Privilege Escalation",
          "source_ip": "192.168.14.247",
          "destination_ip": "10.0.31.184",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00305",
          "timestamp": "2026-07-09T14:18:00.159Z",
          "entity_id": "CSE-007",
          "asset_id": "AST-007-02",
          "severity": "CRITICAL",
          "category": "Data Exfiltration",
          "source_ip": "192.168.136.125",
          "destination_ip": "10.0.128.215",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00306",
          "timestamp": "2026-08-19T05:34:06.826Z",
          "entity_id": "CSE-007",
          "asset_id": "AST-007-01",
          "severity": "CRITICAL",
          "category": "Malware",
          "source_ip": "192.168.15.4",
          "destination_ip": "10.0.197.50",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00307",
          "timestamp": "2026-09-22T16:38:00.159Z",
          "entity_id": "CSE-007",
          "asset_id": "AST-007-28",
          "severity": "HIGH",
          "category": "Malware",
          "source_ip": "192.168.106.248",
          "destination_ip": "10.0.206.220",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00308",
          "timestamp": "2026-08-31T03:26:53.493Z",
          "entity_id": "CSE-007",
          "asset_id": "AST-007-01",
          "severity": "MEDIUM",
          "category": "Malware",
          "source_ip": "192.168.15.185",
          "destination_ip": "10.0.186.22",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00309",
          "timestamp": "2026-09-14T18:36:53.493Z",
          "entity_id": "CSE-007",
          "asset_id": "AST-007-10",
          "severity": "CRITICAL",
          "category": "Ransomware",
          "source_ip": "192.168.49.111",
          "destination_ip": "10.0.245.31",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00310",
          "timestamp": "2026-07-22T02:14:06.826Z",
          "entity_id": "CSE-007",
          "asset_id": "AST-007-09",
          "severity": "HIGH",
          "category": "Malware",
          "source_ip": "192.168.15.28",
          "destination_ip": "10.0.18.36",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00311",
          "timestamp": "2026-07-18T19:24:06.826Z",
          "entity_id": "CSE-007",
          "asset_id": "AST-007-22",
          "severity": "LOW",
          "category": "Data Exfiltration",
          "source_ip": "192.168.153.45",
          "destination_ip": "10.0.239.107",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00312",
          "timestamp": "2026-07-01T01:46:20.159Z",
          "entity_id": "CSE-007",
          "asset_id": "AST-007-01",
          "severity": "CRITICAL",
          "category": "Malware",
          "source_ip": "192.168.212.21",
          "destination_ip": "10.0.15.40",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-008": {
    "success": true,
    "entity_id": "CSE-008",
    "entity_name": "Healthcare Entity 08",
    "sector": "Healthcare",
    "risk_score": 11.73,
    "final_risk_score": 11.73,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 31,
        "weight": 0.25,
        "weighted_contribution": 7.75,
        "finding_count": 1
      },
      {
        "component": "peer_deviation",
        "name": "Peer Deviation",
        "raw_score": 26.5,
        "weight": 0.15,
        "weighted_contribution": 3.98,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 31,
        "weighted_contribution": 7.75,
        "finding_count": 1,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-008",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "MEDIUM",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 26.5,
        "weighted_contribution": 3.98,
        "finding_count": 1,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "PEER-ESC-CSE-008",
            "title": "Significantly Low Escalation Rate Compared to Peers",
            "severity": "MEDIUM",
            "evidence_count": 6
          }
        ]
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 7.75,
      "anomaly": 0,
      "peer_deviation": 3.98,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 31,
      "anomaly": 0,
      "peer_deviation": 26.5,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-008",
        "entity_id": "CSE-008",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "MEDIUM",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0047"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-008",
          "affected_assets": [
            "AST-015"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 4,
          "missing_investigation_ratio": 0.25
        }
      },
      {
        "finding_id": "PEER-ESC-CSE-008",
        "entity_id": "CSE-008",
        "finding_type": "PEER_DEVIATION",
        "severity": "MEDIUM",
        "title": "Significantly Low Escalation Rate Compared to Peers",
        "rationale": "Entity escalation rate is 25.0 percentage points below Sector (Healthcare) peer median (0.0% vs 25.0% across 3 peers). Persistently low escalation rate indicates potential incident suppression or failure to escalate severe threats.",
        "evidence_ids": [
          "CAS-0032",
          "CAS-0033",
          "CAS-0034",
          "CAS-0035",
          "CAS-0036",
          "CAS-0037"
        ],
        "supporting_metrics": {
          "entity_value": 0,
          "peer_median": 0.25,
          "deviation": 0.25,
          "interpretation": "Entity escalation rate is 25.0 percentage points below Sector (Healthcare) peer median (0.0% vs 25.0% across 3 peers). Persistently low escalation rate indicates potential incident suppression or failure to escalate severe threats.",
          "peer_group": "Sector (Healthcare)",
          "peer_count": 3
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-008",
      "entity_name": "Healthcare Entity 08",
      "risk_score": 11.73,
      "final_risk_score": 11.73,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 31,
          "weight": 0.25,
          "weighted_contribution": 7.75,
          "finding_count": 1
        },
        {
          "component": "peer_deviation",
          "name": "Peer Deviation",
          "raw_score": 26.5,
          "weight": 0.15,
          "weighted_contribution": 3.98,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 31,
          "weight": 0.25,
          "contribution": 7.75
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 26.5,
          "weight": 0.15,
          "contribution": 3.98
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 31,
          "weighted_contribution": 7.75,
          "finding_count": 1,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-008",
              "severity": "MEDIUM",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0047"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "25.0%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 4
              }
            }
          ]
        },
        {
          "module": "Peer Comparison Deviation",
          "finding_type": "PEER_DEVIATION",
          "weight_pct": "15%",
          "raw_module_score": 26.5,
          "weighted_contribution": 3.98,
          "finding_count": 1,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "PEER-ESC-CSE-008",
              "severity": "MEDIUM",
              "title": "Significantly Low Escalation Rate Compared to Peers",
              "what": "Significantly Low Escalation Rate Compared to Peers",
              "why": "Entity escalation rate is 25.0 percentage points below Sector (Healthcare) peer median (0.0% vs 25.0% across 3 peers). Persistently low escalation rate indicates potential incident suppression or failure to escalate severe threats.",
              "evidence_ids": [
                "CAS-0032",
                "CAS-0033",
                "CAS-0034",
                "CAS-0035",
                "CAS-0036",
                "CAS-0037"
              ],
              "evidence_count": 6,
              "key_metrics": {}
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 7.8 points from 1 finding(s) with top severity MEDIUM). Additional contributors: Peer Comparison Deviation (4.0 pts).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 31,
        "weight": 0.25,
        "contribution": 7.75
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 26.5,
        "weight": 0.15,
        "contribution": 3.98
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-008-04",
          "entity_id": "CSE-008",
          "asset_type": "Firewall",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00517",
          "timestamp": "2026-08-31T15:33:33.493Z",
          "entity_id": "CSE-008",
          "asset_id": "AST-008-05",
          "severity": "HIGH",
          "category": "Unauthorized Access",
          "source_ip": "192.168.54.24",
          "destination_ip": "10.0.72.87",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00518",
          "timestamp": "2026-09-27T07:21:20.159Z",
          "entity_id": "CSE-008",
          "asset_id": "AST-008-01",
          "severity": "CRITICAL",
          "category": "Unauthorized Access",
          "source_ip": "192.168.47.199",
          "destination_ip": "10.0.189.33",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00519",
          "timestamp": "2026-08-07T09:26:20.159Z",
          "entity_id": "CSE-008",
          "asset_id": "AST-008-12",
          "severity": "LOW",
          "category": "Ransomware",
          "source_ip": "192.168.150.74",
          "destination_ip": "10.0.43.240",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00520",
          "timestamp": "2026-08-24T15:40:46.826Z",
          "entity_id": "CSE-008",
          "asset_id": "AST-008-01",
          "severity": "HIGH",
          "category": "Malware",
          "source_ip": "192.168.81.55",
          "destination_ip": "10.0.139.185",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00521",
          "timestamp": "2026-08-30T17:01:53.493Z",
          "entity_id": "CSE-008",
          "asset_id": "AST-008-14",
          "severity": "CRITICAL",
          "category": "Data Exfiltration",
          "source_ip": "192.168.53.83",
          "destination_ip": "10.0.194.47",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00522",
          "timestamp": "2026-08-10T07:10:13.493Z",
          "entity_id": "CSE-008",
          "asset_id": "AST-008-15",
          "severity": "LOW",
          "category": "Privilege Escalation",
          "source_ip": "192.168.218.135",
          "destination_ip": "10.0.76.75",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00523",
          "timestamp": "2026-08-18T21:38:00.159Z",
          "entity_id": "CSE-008",
          "asset_id": "AST-008-02",
          "severity": "LOW",
          "category": "DDoS",
          "source_ip": "192.168.227.163",
          "destination_ip": "10.0.1.234",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00524",
          "timestamp": "2026-08-21T17:43:00.159Z",
          "entity_id": "CSE-008",
          "asset_id": "AST-008-14",
          "severity": "HIGH",
          "category": "Ransomware",
          "source_ip": "192.168.14.21",
          "destination_ip": "10.0.135.254",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00525",
          "timestamp": "2026-09-26T14:37:26.826Z",
          "entity_id": "CSE-008",
          "asset_id": "AST-008-04",
          "severity": "HIGH",
          "category": "Malware",
          "source_ip": "192.168.36.74",
          "destination_ip": "10.0.57.148",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00526",
          "timestamp": "2026-08-08T22:38:33.493Z",
          "entity_id": "CSE-008",
          "asset_id": "AST-008-12",
          "severity": "CRITICAL",
          "category": "Phishing",
          "source_ip": "192.168.201.249",
          "destination_ip": "10.0.154.233",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-009": {
    "success": true,
    "entity_id": "CSE-009",
    "entity_name": "Telecom Entity 09",
    "sector": "Telecom",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 54.25,
        "weight": 0.25,
        "weighted_contribution": 13.56,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-009",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-009",
        "entity_id": "CSE-009",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0054"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-009",
          "affected_assets": [
            "AST-017"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 3,
          "missing_investigation_ratio": 0.3333
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-009",
      "entity_name": "Telecom Entity 09",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-009",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0054"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 12,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-009-04",
          "entity_id": "CSE-009",
          "asset_type": "SCADA",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-009-05",
          "entity_id": "CSE-009",
          "asset_type": "Firewall",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00555",
          "timestamp": "2026-07-14T21:36:20.159Z",
          "entity_id": "CSE-009",
          "asset_id": "AST-009-08",
          "severity": "MEDIUM",
          "category": "Phishing",
          "source_ip": "192.168.182.105",
          "destination_ip": "10.0.58.56",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00556",
          "timestamp": "2026-08-30T07:50:46.826Z",
          "entity_id": "CSE-009",
          "asset_id": "AST-009-08",
          "severity": "CRITICAL",
          "category": "Malware",
          "source_ip": "192.168.167.27",
          "destination_ip": "10.0.152.224",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00557",
          "timestamp": "2026-07-18T16:39:06.826Z",
          "entity_id": "CSE-009",
          "asset_id": "AST-009-09",
          "severity": "CRITICAL",
          "category": "Data Exfiltration",
          "source_ip": "192.168.194.232",
          "destination_ip": "10.0.170.142",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00558",
          "timestamp": "2026-07-25T20:27:26.826Z",
          "entity_id": "CSE-009",
          "asset_id": "AST-009-11",
          "severity": "CRITICAL",
          "category": "Data Exfiltration",
          "source_ip": "192.168.142.54",
          "destination_ip": "10.0.180.88",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00559",
          "timestamp": "2026-09-28T07:15:46.826Z",
          "entity_id": "CSE-009",
          "asset_id": "AST-009-04",
          "severity": "HIGH",
          "category": "Ransomware",
          "source_ip": "192.168.34.25",
          "destination_ip": "10.0.204.82",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00560",
          "timestamp": "2026-09-16T10:36:53.493Z",
          "entity_id": "CSE-009",
          "asset_id": "AST-009-02",
          "severity": "MEDIUM",
          "category": "Malware",
          "source_ip": "192.168.110.144",
          "destination_ip": "10.0.165.7",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00561",
          "timestamp": "2026-09-07T19:44:40.159Z",
          "entity_id": "CSE-009",
          "asset_id": "AST-009-04",
          "severity": "CRITICAL",
          "category": "Unauthorized Access",
          "source_ip": "192.168.164.171",
          "destination_ip": "10.0.239.240",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00562",
          "timestamp": "2026-08-23T08:13:00.159Z",
          "entity_id": "CSE-009",
          "asset_id": "AST-009-08",
          "severity": "MEDIUM",
          "category": "Ransomware",
          "source_ip": "192.168.214.203",
          "destination_ip": "10.0.86.18",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00563",
          "timestamp": "2026-09-15T17:07:26.826Z",
          "entity_id": "CSE-009",
          "asset_id": "AST-009-11",
          "severity": "HIGH",
          "category": "Phishing",
          "source_ip": "192.168.30.135",
          "destination_ip": "10.0.228.216",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00564",
          "timestamp": "2026-09-14T13:08:33.493Z",
          "entity_id": "CSE-009",
          "asset_id": "AST-009-11",
          "severity": "CRITICAL",
          "category": "DDoS",
          "source_ip": "192.168.160.105",
          "destination_ip": "10.0.205.11",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-010": {
    "success": true,
    "entity_id": "CSE-010",
    "entity_name": "Transport Entity 10",
    "sector": "Transport",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 54.25,
        "weight": 0.25,
        "weighted_contribution": 13.56,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-010",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-010",
        "entity_id": "CSE-010",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0059"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-010",
          "affected_assets": [
            "AST-019"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 3,
          "missing_investigation_ratio": 0.3333
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-010",
      "entity_name": "Transport Entity 10",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-010",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0059"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-010-04",
          "entity_id": "CSE-010",
          "asset_type": "SCADA",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-010-05",
          "entity_id": "CSE-010",
          "asset_type": "Router",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-010-09",
          "entity_id": "CSE-010",
          "asset_type": "Workstation",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-010-11",
          "entity_id": "CSE-010",
          "asset_type": "Database",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-010-14",
          "entity_id": "CSE-010",
          "asset_type": "Firewall",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00611",
          "timestamp": "2026-07-18T07:14:06.826Z",
          "entity_id": "CSE-010",
          "asset_id": "AST-010-08",
          "severity": "CRITICAL",
          "category": "Malware",
          "source_ip": "192.168.54.201",
          "destination_ip": "10.0.156.224",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00612",
          "timestamp": "2026-08-17T14:02:26.826Z",
          "entity_id": "CSE-010",
          "asset_id": "AST-010-03",
          "severity": "MEDIUM",
          "category": "Malware",
          "source_ip": "192.168.217.132",
          "destination_ip": "10.0.168.65",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00613",
          "timestamp": "2026-08-01T20:03:33.493Z",
          "entity_id": "CSE-010",
          "asset_id": "AST-010-13",
          "severity": "CRITICAL",
          "category": "Privilege Escalation",
          "source_ip": "192.168.65.4",
          "destination_ip": "10.0.147.130",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00614",
          "timestamp": "2026-09-26T21:11:53.493Z",
          "entity_id": "CSE-010",
          "asset_id": "AST-010-11",
          "severity": "HIGH",
          "category": "Data Exfiltration",
          "source_ip": "192.168.114.200",
          "destination_ip": "10.0.12.63",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00615",
          "timestamp": "2026-07-24T00:16:53.493Z",
          "entity_id": "CSE-010",
          "asset_id": "AST-010-05",
          "severity": "CRITICAL",
          "category": "DDoS",
          "source_ip": "192.168.86.23",
          "destination_ip": "10.0.60.117",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00616",
          "timestamp": "2026-07-02T06:21:53.493Z",
          "entity_id": "CSE-010",
          "asset_id": "AST-010-11",
          "severity": "CRITICAL",
          "category": "Phishing",
          "source_ip": "192.168.243.94",
          "destination_ip": "10.0.167.39",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00617",
          "timestamp": "2026-08-20T20:30:13.493Z",
          "entity_id": "CSE-010",
          "asset_id": "AST-010-09",
          "severity": "HIGH",
          "category": "Data Exfiltration",
          "source_ip": "192.168.182.4",
          "destination_ip": "10.0.248.96",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00618",
          "timestamp": "2026-08-22T18:58:00.159Z",
          "entity_id": "CSE-010",
          "asset_id": "AST-010-04",
          "severity": "MEDIUM",
          "category": "Data Exfiltration",
          "source_ip": "192.168.200.156",
          "destination_ip": "10.0.239.94",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00619",
          "timestamp": "2026-08-22T09:52:26.826Z",
          "entity_id": "CSE-010",
          "asset_id": "AST-010-11",
          "severity": "CRITICAL",
          "category": "Malware",
          "source_ip": "192.168.161.190",
          "destination_ip": "10.0.185.55",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00620",
          "timestamp": "2026-08-14T19:57:26.826Z",
          "entity_id": "CSE-010",
          "asset_id": "AST-010-09",
          "severity": "CRITICAL",
          "category": "DDoS",
          "source_ip": "192.168.75.161",
          "destination_ip": "10.0.247.159",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-011": {
    "success": true,
    "entity_id": "CSE-011",
    "entity_name": "Banking Entity 11",
    "sector": "Banking",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 54.25,
        "weight": 0.25,
        "weighted_contribution": 13.56,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-011",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-011",
        "entity_id": "CSE-011",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0064"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-011",
          "affected_assets": [
            "AST-021"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 3,
          "missing_investigation_ratio": 0.3333
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-011",
      "entity_name": "Banking Entity 11",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-011",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0064"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-011-01",
          "entity_id": "CSE-011",
          "asset_type": "Firewall",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-011-03",
          "entity_id": "CSE-011",
          "asset_type": "Router",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-011-05",
          "entity_id": "CSE-011",
          "asset_type": "SCADA",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-011-13",
          "entity_id": "CSE-011",
          "asset_type": "SCADA",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-011-14",
          "entity_id": "CSE-011",
          "asset_type": "Server",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00680",
          "timestamp": "2026-09-19T13:23:00.159Z",
          "entity_id": "CSE-011",
          "asset_id": "AST-011-08",
          "severity": "HIGH",
          "category": "Malware",
          "source_ip": "192.168.98.136",
          "destination_ip": "10.0.138.90",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00681",
          "timestamp": "2026-09-17T02:17:26.826Z",
          "entity_id": "CSE-011",
          "asset_id": "AST-011-12",
          "severity": "MEDIUM",
          "category": "Malware",
          "source_ip": "192.168.238.193",
          "destination_ip": "10.0.122.17",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00682",
          "timestamp": "2026-07-02T02:18:33.493Z",
          "entity_id": "CSE-011",
          "asset_id": "AST-011-05",
          "severity": "MEDIUM",
          "category": "Data Exfiltration",
          "source_ip": "192.168.125.62",
          "destination_ip": "10.0.54.248",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00683",
          "timestamp": "2026-07-05T00:06:20.159Z",
          "entity_id": "CSE-011",
          "asset_id": "AST-011-04",
          "severity": "CRITICAL",
          "category": "Ransomware",
          "source_ip": "192.168.9.84",
          "destination_ip": "10.0.232.212",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00684",
          "timestamp": "2026-08-14T23:34:40.159Z",
          "entity_id": "CSE-011",
          "asset_id": "AST-011-03",
          "severity": "LOW",
          "category": "Data Exfiltration",
          "source_ip": "192.168.225.120",
          "destination_ip": "10.0.5.178",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00685",
          "timestamp": "2026-07-20T01:39:40.159Z",
          "entity_id": "CSE-011",
          "asset_id": "AST-011-02",
          "severity": "MEDIUM",
          "category": "Unauthorized Access",
          "source_ip": "192.168.229.237",
          "destination_ip": "10.0.185.31",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00686",
          "timestamp": "2026-08-15T05:14:06.826Z",
          "entity_id": "CSE-011",
          "asset_id": "AST-011-10",
          "severity": "HIGH",
          "category": "Privilege Escalation",
          "source_ip": "192.168.62.54",
          "destination_ip": "10.0.23.20",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00687",
          "timestamp": "2026-09-12T11:55:13.493Z",
          "entity_id": "CSE-011",
          "asset_id": "AST-011-08",
          "severity": "MEDIUM",
          "category": "Phishing",
          "source_ip": "192.168.172.183",
          "destination_ip": "10.0.197.247",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00688",
          "timestamp": "2026-08-28T08:23:00.159Z",
          "entity_id": "CSE-011",
          "asset_id": "AST-011-13",
          "severity": "MEDIUM",
          "category": "Data Exfiltration",
          "source_ip": "192.168.71.59",
          "destination_ip": "10.0.182.169",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00689",
          "timestamp": "2026-07-21T21:17:26.826Z",
          "entity_id": "CSE-011",
          "asset_id": "AST-011-12",
          "severity": "HIGH",
          "category": "Unauthorized Access",
          "source_ip": "192.168.196.187",
          "destination_ip": "10.0.66.81",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-012": {
    "success": true,
    "entity_id": "CSE-012",
    "entity_name": "Energy Entity 12",
    "sector": "Energy",
    "risk_score": 15.75,
    "final_risk_score": 15.75,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "anomaly",
        "name": "Anomaly",
        "raw_score": 40,
        "weight": 0.2,
        "weighted_contribution": 8,
        "finding_count": 1
      },
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 31,
        "weight": 0.25,
        "weighted_contribution": 7.75,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 31,
        "weighted_contribution": 7.75,
        "finding_count": 1,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-012",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "MEDIUM",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 40,
        "weighted_contribution": 8,
        "finding_count": 1,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "ANOM-CSE-012",
            "title": "Statistical Anomaly Detected via Isolation Forest",
            "severity": "MEDIUM",
            "evidence_count": 12
          }
        ]
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 7.75,
      "anomaly": 8,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 31,
      "anomaly": 40,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-012",
        "entity_id": "CSE-012",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "MEDIUM",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0069"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-012",
          "affected_assets": [
            "AST-023"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 4,
          "missing_investigation_ratio": 0.25
        }
      },
      {
        "finding_id": "ANOM-CSE-012",
        "entity_id": "CSE-012",
        "finding_type": "ANOMALY",
        "severity": "MEDIUM",
        "title": "Statistical Anomaly Detected via Isolation Forest",
        "rationale": "Entity classified as anomalous by Isolation Forest (normalised score: 0.611). Top isolating features (Formal Tree Path Attribution): average_investigation_duration=97.500 (Tree isolating weight: 18.5%); median_closure_time=120.000 (Tree isolating weight: 17.7%); escalation_rate=0.167 (Tree isolating weight: 14.1%). This entity exhibits systemic behavioural departure from peer norms.",
        "evidence_ids": [
          "ALT-0065",
          "ALT-0066",
          "ALT-0067",
          "ALT-0068",
          "ALT-0069",
          "CAS-0050",
          "CAS-0051",
          "CAS-0052",
          "CAS-0053",
          "CAS-0054",
          "AST-023",
          "AST-024"
        ],
        "supporting_metrics": {
          "anomaly_score_normalised": 0.6113,
          "anomaly_score_raw": -0.578925,
          "anomaly_classification": "ANOMALY",
          "model_version_id": "IForest-v1.0-fcd0a290dd98",
          "feature_values": {
            "alert_volume": 7,
            "critical_alert_ratio": 0.2857,
            "median_closure_time": 120,
            "escalation_rate": 0.1667,
            "repeat_alert_rate": 0.1667,
            "telemetry_coverage": 1,
            "average_investigation_duration": 97.5
          },
          "peer_means": {
            "alert_volume": 5.75,
            "critical_alert_ratio": 0.3864,
            "median_closure_time": 81.75,
            "escalation_rate": 0.0708,
            "repeat_alert_rate": 0.0583,
            "telemetry_coverage": 0.975,
            "average_investigation_duration": 79.9725
          },
          "feature_deviations": {
            "alert_volume": 1.3158,
            "critical_alert_ratio": -0.106,
            "median_closure_time": 40.2632,
            "escalation_rate": 0.1009,
            "repeat_alert_rate": 0.1141,
            "telemetry_coverage": 0.0263,
            "average_investigation_duration": 18.45
          },
          "explanation": "Top isolating features (Formal Tree Path Attribution): average_investigation_duration=97.500 (Tree isolating weight: 18.5%); median_closure_time=120.000 (Tree isolating weight: 17.7%); escalation_rate=0.167 (Tree isolating weight: 14.1%)",
          "feature_attributions": [
            {
              "feature": "average_investigation_duration",
              "value": 97.5,
              "attribution": 0.1854,
              "rank": 1
            },
            {
              "feature": "median_closure_time",
              "value": 120,
              "attribution": 0.1773,
              "rank": 2
            },
            {
              "feature": "escalation_rate",
              "value": 0.1667,
              "attribution": 0.1405,
              "rank": 3
            }
          ],
          "attribution_method": "isolation_forest_tree_path_attribution",
          "attribution_limitation": "Attribution based on inverse depth of splits in IsolationForest trees. Explains isolation mathematically.",
          "model_parameters": {
            "algorithm": "IsolationForest",
            "n_estimators": 150,
            "contamination": 0.15,
            "random_state": 42
          }
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-012",
      "entity_name": "Energy Entity 12",
      "risk_score": 15.75,
      "final_risk_score": 15.75,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "anomaly",
          "name": "Anomaly",
          "raw_score": 40,
          "weight": 0.2,
          "weighted_contribution": 8,
          "finding_count": 1
        },
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 31,
          "weight": 0.25,
          "weighted_contribution": 7.75,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 31,
          "weight": 0.25,
          "contribution": 7.75
        },
        "anomaly": {
          "raw_score": 40,
          "weight": 0.2,
          "contribution": 8
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Statistical Anomaly",
          "finding_type": "ANOMALY",
          "weight_pct": "20%",
          "raw_module_score": 40,
          "weighted_contribution": 8,
          "finding_count": 1,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "ANOM-CSE-012",
              "severity": "MEDIUM",
              "title": "Statistical Anomaly Detected via Isolation Forest",
              "what": "Statistical Anomaly Detected via Isolation Forest",
              "why": "Entity classified as anomalous by Isolation Forest (normalised score: 0.611). Top isolating features (Formal Tree Path Attribution): average_investigation_duration=97.500 (Tree isolating weight: 18.5%); median_closure_time=120.000 (Tree isolating weight: 17.7%); escalation_rate=0.167 (Tree isolating weight: 14.1%). This entity exhibits systemic behavioural departure from peer norms.",
              "evidence_ids": [
                "ALT-0065",
                "ALT-0066",
                "ALT-0067",
                "ALT-0068",
                "ALT-0069",
                "CAS-0050",
                "CAS-0051",
                "CAS-0052",
                "CAS-0053",
                "CAS-0054"
              ],
              "evidence_count": 12,
              "key_metrics": {
                "anomaly_score": 0.6113,
                "top_deviating_features": {
                  "median_closure_time": {
                    "entity_value": 120,
                    "peer_mean": 81.75,
                    "deviation": 40.2632
                  },
                  "average_investigation_duration": {
                    "entity_value": 97.5,
                    "peer_mean": 79.9725,
                    "deviation": 18.45
                  },
                  "alert_volume": {
                    "entity_value": 7,
                    "peer_mean": 5.75,
                    "deviation": 1.3158
                  },
                  "repeat_alert_rate": {
                    "entity_value": 0.1667,
                    "peer_mean": 0.0583,
                    "deviation": 0.1141
                  }
                }
              }
            }
          ]
        },
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 31,
          "weighted_contribution": 7.75,
          "finding_count": 1,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-012",
              "severity": "MEDIUM",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0069"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "25.0%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 4
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Statistical Anomaly (20% weight, contributing 8.0 points from 1 finding(s) with top severity MEDIUM). Additional contributors: Negative Space (7.8 pts).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 31,
        "weight": 0.25,
        "contribution": 7.75
      },
      "anomaly": {
        "raw_score": 40,
        "weight": 0.2,
        "contribution": 8
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-012-01",
          "entity_id": "CSE-012",
          "asset_type": "Firewall",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-012-02",
          "entity_id": "CSE-012",
          "asset_type": "Firewall",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-012-05",
          "entity_id": "CSE-012",
          "asset_type": "Router",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-012-10",
          "entity_id": "CSE-012",
          "asset_type": "Workstation",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-012-11",
          "entity_id": "CSE-012",
          "asset_type": "ICS",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-012-12",
          "entity_id": "CSE-012",
          "asset_type": "SCADA",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-012-14",
          "entity_id": "CSE-012",
          "asset_type": "Server",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00741",
          "timestamp": "2026-08-19T14:31:53.493Z",
          "entity_id": "CSE-012",
          "asset_id": "AST-012-02",
          "severity": "CRITICAL",
          "category": "Privilege Escalation",
          "source_ip": "192.168.166.45",
          "destination_ip": "10.0.215.87",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00742",
          "timestamp": "2026-08-02T22:40:13.493Z",
          "entity_id": "CSE-012",
          "asset_id": "AST-012-12",
          "severity": "MEDIUM",
          "category": "Phishing",
          "source_ip": "192.168.215.107",
          "destination_ip": "10.0.236.125",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00743",
          "timestamp": "2026-07-25T01:08:00.159Z",
          "entity_id": "CSE-012",
          "asset_id": "AST-012-11",
          "severity": "LOW",
          "category": "Malware",
          "source_ip": "192.168.89.171",
          "destination_ip": "10.0.111.150",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00744",
          "timestamp": "2026-08-22T20:02:26.826Z",
          "entity_id": "CSE-012",
          "asset_id": "AST-012-13",
          "severity": "HIGH",
          "category": "Malware",
          "source_ip": "192.168.104.147",
          "destination_ip": "10.0.55.80",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00745",
          "timestamp": "2026-08-11T12:07:26.826Z",
          "entity_id": "CSE-012",
          "asset_id": "AST-012-01",
          "severity": "MEDIUM",
          "category": "Phishing",
          "source_ip": "192.168.135.106",
          "destination_ip": "10.0.234.173",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00746",
          "timestamp": "2026-08-05T08:08:33.493Z",
          "entity_id": "CSE-012",
          "asset_id": "AST-012-17",
          "severity": "HIGH",
          "category": "Data Exfiltration",
          "source_ip": "192.168.81.232",
          "destination_ip": "10.0.197.38",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00747",
          "timestamp": "2026-09-08T01:56:20.159Z",
          "entity_id": "CSE-012",
          "asset_id": "AST-012-17",
          "severity": "HIGH",
          "category": "Privilege Escalation",
          "source_ip": "192.168.81.228",
          "destination_ip": "10.0.37.203",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00748",
          "timestamp": "2026-09-02T20:10:46.826Z",
          "entity_id": "CSE-012",
          "asset_id": "AST-012-01",
          "severity": "MEDIUM",
          "category": "Privilege Escalation",
          "source_ip": "192.168.203.145",
          "destination_ip": "10.0.69.83",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00749",
          "timestamp": "2026-08-17T09:31:53.493Z",
          "entity_id": "CSE-012",
          "asset_id": "AST-012-11",
          "severity": "CRITICAL",
          "category": "Phishing",
          "source_ip": "192.168.110.109",
          "destination_ip": "10.0.60.137",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00750",
          "timestamp": "2026-08-08T05:40:13.493Z",
          "entity_id": "CSE-012",
          "asset_id": "AST-012-06",
          "severity": "HIGH",
          "category": "Data Exfiltration",
          "source_ip": "192.168.180.192",
          "destination_ip": "10.0.102.197",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-013": {
    "success": true,
    "entity_id": "CSE-013",
    "entity_name": "Healthcare Entity 13",
    "sector": "Healthcare",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 54.25,
        "weight": 0.25,
        "weighted_contribution": 13.56,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-013",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-013",
        "entity_id": "CSE-013",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0076"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-013",
          "affected_assets": [
            "AST-025"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 3,
          "missing_investigation_ratio": 0.3333
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-013",
      "entity_name": "Healthcare Entity 13",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-013",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0076"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-013-01",
          "entity_id": "CSE-013",
          "asset_type": "Router",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-013-06",
          "entity_id": "CSE-013",
          "asset_type": "SCADA",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00799",
          "timestamp": "2026-07-31T04:18:00.159Z",
          "entity_id": "CSE-013",
          "asset_id": "AST-013-02",
          "severity": "HIGH",
          "category": "DDoS",
          "source_ip": "192.168.13.158",
          "destination_ip": "10.0.146.49",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00800",
          "timestamp": "2026-08-13T03:12:26.826Z",
          "entity_id": "CSE-013",
          "asset_id": "AST-013-08",
          "severity": "MEDIUM",
          "category": "Unauthorized Access",
          "source_ip": "192.168.210.202",
          "destination_ip": "10.0.216.76",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00801",
          "timestamp": "2026-07-22T13:13:33.493Z",
          "entity_id": "CSE-013",
          "asset_id": "AST-013-07",
          "severity": "HIGH",
          "category": "Ransomware",
          "source_ip": "192.168.98.85",
          "destination_ip": "10.0.93.96",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00802",
          "timestamp": "2026-09-28T21:01:20.159Z",
          "entity_id": "CSE-013",
          "asset_id": "AST-013-18",
          "severity": "MEDIUM",
          "category": "Phishing",
          "source_ip": "192.168.97.66",
          "destination_ip": "10.0.243.217",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00803",
          "timestamp": "2026-07-20T05:15:46.826Z",
          "entity_id": "CSE-013",
          "asset_id": "AST-013-08",
          "severity": "CRITICAL",
          "category": "Privilege Escalation",
          "source_ip": "192.168.104.25",
          "destination_ip": "10.0.48.195",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00804",
          "timestamp": "2026-08-13T11:04:06.826Z",
          "entity_id": "CSE-013",
          "asset_id": "AST-013-19",
          "severity": "MEDIUM",
          "category": "Unauthorized Access",
          "source_ip": "192.168.172.122",
          "destination_ip": "10.0.64.218",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00805",
          "timestamp": "2026-07-13T13:45:13.493Z",
          "entity_id": "CSE-013",
          "asset_id": "AST-013-17",
          "severity": "MEDIUM",
          "category": "Privilege Escalation",
          "source_ip": "192.168.142.225",
          "destination_ip": "10.0.155.136",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00806",
          "timestamp": "2026-07-19T06:13:00.159Z",
          "entity_id": "CSE-013",
          "asset_id": "AST-013-01",
          "severity": "HIGH",
          "category": "Privilege Escalation",
          "source_ip": "192.168.44.132",
          "destination_ip": "10.0.29.145",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00807",
          "timestamp": "2026-07-22T15:07:26.826Z",
          "entity_id": "CSE-013",
          "asset_id": "AST-013-02",
          "severity": "CRITICAL",
          "category": "Unauthorized Access",
          "source_ip": "192.168.143.178",
          "destination_ip": "10.0.114.116",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00808",
          "timestamp": "2026-09-15T01:55:46.826Z",
          "entity_id": "CSE-013",
          "asset_id": "AST-013-08",
          "severity": "MEDIUM",
          "category": "DDoS",
          "source_ip": "192.168.176.205",
          "destination_ip": "10.0.109.253",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-014": {
    "success": true,
    "entity_id": "CSE-014",
    "entity_name": "Telecom Entity 14",
    "sector": "Telecom",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 54.25,
        "weight": 0.25,
        "weighted_contribution": 13.56,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-014",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-014",
        "entity_id": "CSE-014",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0081"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-014",
          "affected_assets": [
            "AST-027"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 3,
          "missing_investigation_ratio": 0.3333
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-014",
      "entity_name": "Telecom Entity 14",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-014",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0081"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-014-05",
          "entity_id": "CSE-014",
          "asset_type": "Database",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-014-13",
          "entity_id": "CSE-014",
          "asset_type": "Server",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00849",
          "timestamp": "2026-09-17T00:06:53.493Z",
          "entity_id": "CSE-014",
          "asset_id": "AST-014-13",
          "severity": "LOW",
          "category": "Phishing",
          "source_ip": "192.168.143.82",
          "destination_ip": "10.0.135.136",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00850",
          "timestamp": "2026-07-02T21:14:40.159Z",
          "entity_id": "CSE-014",
          "asset_id": "AST-014-03",
          "severity": "LOW",
          "category": "Privilege Escalation",
          "source_ip": "192.168.6.173",
          "destination_ip": "10.0.18.178",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00851",
          "timestamp": "2026-07-21T02:49:06.826Z",
          "entity_id": "CSE-014",
          "asset_id": "AST-014-13",
          "severity": "MEDIUM",
          "category": "DDoS",
          "source_ip": "192.168.58.24",
          "destination_ip": "10.0.45.88",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00852",
          "timestamp": "2026-07-01T11:30:13.493Z",
          "entity_id": "CSE-014",
          "asset_id": "AST-014-05",
          "severity": "HIGH",
          "category": "Ransomware",
          "source_ip": "192.168.188.159",
          "destination_ip": "10.0.41.38",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00853",
          "timestamp": "2026-07-18T09:58:00.159Z",
          "entity_id": "CSE-014",
          "asset_id": "AST-014-02",
          "severity": "MEDIUM",
          "category": "Malware",
          "source_ip": "192.168.248.98",
          "destination_ip": "10.0.75.79",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00854",
          "timestamp": "2026-08-02T00:52:26.826Z",
          "entity_id": "CSE-014",
          "asset_id": "AST-014-13",
          "severity": "HIGH",
          "category": "Ransomware",
          "source_ip": "192.168.252.175",
          "destination_ip": "10.0.64.82",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00855",
          "timestamp": "2026-09-21T02:53:33.493Z",
          "entity_id": "CSE-014",
          "asset_id": "AST-014-14",
          "severity": "LOW",
          "category": "Ransomware",
          "source_ip": "192.168.230.205",
          "destination_ip": "10.0.59.107",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00856",
          "timestamp": "2026-09-21T02:41:20.159Z",
          "entity_id": "CSE-014",
          "asset_id": "AST-014-16",
          "severity": "HIGH",
          "category": "Data Exfiltration",
          "source_ip": "192.168.6.106",
          "destination_ip": "10.0.186.176",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00857",
          "timestamp": "2026-08-16T04:46:20.159Z",
          "entity_id": "CSE-014",
          "asset_id": "AST-014-14",
          "severity": "HIGH",
          "category": "Malware",
          "source_ip": "192.168.152.24",
          "destination_ip": "10.0.82.171",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00858",
          "timestamp": "2026-09-25T19:00:46.826Z",
          "entity_id": "CSE-014",
          "asset_id": "AST-014-01",
          "severity": "HIGH",
          "category": "DDoS",
          "source_ip": "192.168.177.213",
          "destination_ip": "10.0.74.40",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-015": {
    "success": true,
    "entity_id": "CSE-015",
    "entity_name": "Transport Entity 15",
    "sector": "Transport",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 54.25,
        "weight": 0.25,
        "weighted_contribution": 13.56,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-015",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-015",
        "entity_id": "CSE-015",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0086"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-015",
          "affected_assets": [
            "AST-029"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 3,
          "missing_investigation_ratio": 0.3333
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-015",
      "entity_name": "Transport Entity 15",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-015",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0086"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-015-03",
          "entity_id": "CSE-015",
          "asset_type": "Router",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-015-05",
          "entity_id": "CSE-015",
          "asset_type": "Workstation",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00906",
          "timestamp": "2026-08-04T05:14:40.159Z",
          "entity_id": "CSE-015",
          "asset_id": "AST-015-04",
          "severity": "HIGH",
          "category": "Malware",
          "source_ip": "192.168.126.151",
          "destination_ip": "10.0.194.128",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00907",
          "timestamp": "2026-08-12T10:49:06.826Z",
          "entity_id": "CSE-015",
          "asset_id": "AST-015-13",
          "severity": "MEDIUM",
          "category": "Malware",
          "source_ip": "192.168.65.59",
          "destination_ip": "10.0.194.179",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00908",
          "timestamp": "2026-08-12T19:30:13.493Z",
          "entity_id": "CSE-015",
          "asset_id": "AST-015-08",
          "severity": "MEDIUM",
          "category": "Unauthorized Access",
          "source_ip": "192.168.166.80",
          "destination_ip": "10.0.246.101",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00909",
          "timestamp": "2026-07-20T17:58:00.159Z",
          "entity_id": "CSE-015",
          "asset_id": "AST-015-16",
          "severity": "LOW",
          "category": "Privilege Escalation",
          "source_ip": "192.168.28.246",
          "destination_ip": "10.0.166.199",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00910",
          "timestamp": "2026-07-25T08:52:26.826Z",
          "entity_id": "CSE-015",
          "asset_id": "AST-015-07",
          "severity": "LOW",
          "category": "Malware",
          "source_ip": "192.168.173.125",
          "destination_ip": "10.0.127.89",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00911",
          "timestamp": "2026-07-05T10:53:33.493Z",
          "entity_id": "CSE-015",
          "asset_id": "AST-015-13",
          "severity": "CRITICAL",
          "category": "Privilege Escalation",
          "source_ip": "192.168.123.42",
          "destination_ip": "10.0.179.85",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00912",
          "timestamp": "2026-09-13T06:01:53.493Z",
          "entity_id": "CSE-015",
          "asset_id": "AST-015-03",
          "severity": "MEDIUM",
          "category": "Phishing",
          "source_ip": "192.168.169.193",
          "destination_ip": "10.0.211.142",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00913",
          "timestamp": "2026-09-27T13:09:40.159Z",
          "entity_id": "CSE-015",
          "asset_id": "AST-015-07",
          "severity": "CRITICAL",
          "category": "Ransomware",
          "source_ip": "192.168.47.228",
          "destination_ip": "10.0.137.242",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00914",
          "timestamp": "2026-07-20T22:38:00.159Z",
          "entity_id": "CSE-015",
          "asset_id": "AST-015-17",
          "severity": "MEDIUM",
          "category": "Ransomware",
          "source_ip": "192.168.52.67",
          "destination_ip": "10.0.153.39",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00915",
          "timestamp": "2026-07-02T05:32:26.826Z",
          "entity_id": "CSE-015",
          "asset_id": "AST-015-10",
          "severity": "LOW",
          "category": "Privilege Escalation",
          "source_ip": "192.168.103.248",
          "destination_ip": "10.0.217.4",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-016": {
    "success": true,
    "entity_id": "CSE-016",
    "entity_name": "Banking Entity 16",
    "sector": "Banking",
    "risk_score": 7.75,
    "final_risk_score": 7.75,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 31,
        "weight": 0.25,
        "weighted_contribution": 7.75,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 31,
        "weighted_contribution": 7.75,
        "finding_count": 1,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-016",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "MEDIUM",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 7.75,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 31,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-016",
        "entity_id": "CSE-016",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "MEDIUM",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0091"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-016",
          "affected_assets": [
            "AST-031"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 4,
          "missing_investigation_ratio": 0.25
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-016",
      "entity_name": "Banking Entity 16",
      "risk_score": 7.75,
      "final_risk_score": 7.75,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 31,
          "weight": 0.25,
          "weighted_contribution": 7.75,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 31,
          "weight": 0.25,
          "contribution": 7.75
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 31,
          "weighted_contribution": 7.75,
          "finding_count": 1,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-016",
              "severity": "MEDIUM",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0091"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "25.0%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 4
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 7.8 points from 1 finding(s) with top severity MEDIUM).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 31,
        "weight": 0.25,
        "contribution": 7.75
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-016-03",
          "entity_id": "CSE-016",
          "asset_type": "ICS",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-016-04",
          "entity_id": "CSE-016",
          "asset_type": "ICS",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-016-06",
          "entity_id": "CSE-016",
          "asset_type": "Database",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-016-09",
          "entity_id": "CSE-016",
          "asset_type": "ICS",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-016-10",
          "entity_id": "CSE-016",
          "asset_type": "Server",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-016-12",
          "entity_id": "CSE-016",
          "asset_type": "Router",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-016-13",
          "entity_id": "CSE-016",
          "asset_type": "Firewall",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00954",
          "timestamp": "2026-09-24T04:05:46.826Z",
          "entity_id": "CSE-016",
          "asset_id": "AST-016-16",
          "severity": "CRITICAL",
          "category": "Phishing",
          "source_ip": "192.168.30.129",
          "destination_ip": "10.0.174.104",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00955",
          "timestamp": "2026-07-04T03:54:06.826Z",
          "entity_id": "CSE-016",
          "asset_id": "AST-016-14",
          "severity": "HIGH",
          "category": "Privilege Escalation",
          "source_ip": "192.168.9.95",
          "destination_ip": "10.0.17.165",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00956",
          "timestamp": "2026-08-08T02:35:13.493Z",
          "entity_id": "CSE-016",
          "asset_id": "AST-016-19",
          "severity": "MEDIUM",
          "category": "Unauthorized Access",
          "source_ip": "192.168.110.101",
          "destination_ip": "10.0.125.43",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00957",
          "timestamp": "2026-08-09T15:03:00.159Z",
          "entity_id": "CSE-016",
          "asset_id": "AST-016-17",
          "severity": "CRITICAL",
          "category": "Data Exfiltration",
          "source_ip": "192.168.112.53",
          "destination_ip": "10.0.72.239",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00958",
          "timestamp": "2026-08-10T04:31:20.159Z",
          "entity_id": "CSE-016",
          "asset_id": "AST-016-09",
          "severity": "LOW",
          "category": "Privilege Escalation",
          "source_ip": "192.168.115.117",
          "destination_ip": "10.0.198.203",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00959",
          "timestamp": "2026-09-21T00:45:46.826Z",
          "entity_id": "CSE-016",
          "asset_id": "AST-016-04",
          "severity": "LOW",
          "category": "Privilege Escalation",
          "source_ip": "192.168.187.139",
          "destination_ip": "10.0.66.246",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00960",
          "timestamp": "2026-08-12T16:06:53.493Z",
          "entity_id": "CSE-016",
          "asset_id": "AST-016-14",
          "severity": "HIGH",
          "category": "Malware",
          "source_ip": "192.168.15.95",
          "destination_ip": "10.0.204.178",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00961",
          "timestamp": "2026-09-08T16:11:53.493Z",
          "entity_id": "CSE-016",
          "asset_id": "AST-016-02",
          "severity": "HIGH",
          "category": "Unauthorized Access",
          "source_ip": "192.168.183.50",
          "destination_ip": "10.0.67.238",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00962",
          "timestamp": "2026-07-04T03:19:40.159Z",
          "entity_id": "CSE-016",
          "asset_id": "AST-016-15",
          "severity": "HIGH",
          "category": "Data Exfiltration",
          "source_ip": "192.168.144.140",
          "destination_ip": "10.0.189.80",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00963",
          "timestamp": "2026-08-20T22:54:06.826Z",
          "entity_id": "CSE-016",
          "asset_id": "AST-016-16",
          "severity": "CRITICAL",
          "category": "Unauthorized Access",
          "source_ip": "192.168.10.132",
          "destination_ip": "10.0.3.17",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-017": {
    "success": true,
    "entity_id": "CSE-017",
    "entity_name": "Energy Entity 17",
    "sector": "Energy",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 54.25,
        "weight": 0.25,
        "weighted_contribution": 13.56,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-017",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-017",
        "entity_id": "CSE-017",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0098"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-017",
          "affected_assets": [
            "AST-033"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 3,
          "missing_investigation_ratio": 0.3333
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-017",
      "entity_name": "Energy Entity 17",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-017",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0098"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-017-03",
          "entity_id": "CSE-017",
          "asset_type": "SCADA",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-017-06",
          "entity_id": "CSE-017",
          "asset_type": "SCADA",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-017-07",
          "entity_id": "CSE-017",
          "asset_type": "Workstation",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-017-09",
          "entity_id": "CSE-017",
          "asset_type": "SCADA",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-017-12",
          "entity_id": "CSE-017",
          "asset_type": "Database",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-00978",
          "timestamp": "2026-09-15T19:15:46.826Z",
          "entity_id": "CSE-017",
          "asset_id": "AST-017-04",
          "severity": "LOW",
          "category": "Malware",
          "source_ip": "192.168.83.160",
          "destination_ip": "10.0.168.132",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00979",
          "timestamp": "2026-08-04T22:36:53.493Z",
          "entity_id": "CSE-017",
          "asset_id": "AST-017-16",
          "severity": "MEDIUM",
          "category": "Privilege Escalation",
          "source_ip": "192.168.75.193",
          "destination_ip": "10.0.44.227",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00980",
          "timestamp": "2026-09-25T07:44:40.159Z",
          "entity_id": "CSE-017",
          "asset_id": "AST-017-11",
          "severity": "LOW",
          "category": "Malware",
          "source_ip": "192.168.44.136",
          "destination_ip": "10.0.34.120",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00981",
          "timestamp": "2026-08-22T01:19:06.826Z",
          "entity_id": "CSE-017",
          "asset_id": "AST-017-11",
          "severity": "HIGH",
          "category": "Ransomware",
          "source_ip": "192.168.202.93",
          "destination_ip": "10.0.168.136",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00982",
          "timestamp": "2026-09-08T22:00:13.493Z",
          "entity_id": "CSE-017",
          "asset_id": "AST-017-10",
          "severity": "HIGH",
          "category": "Data Exfiltration",
          "source_ip": "192.168.183.79",
          "destination_ip": "10.0.15.192",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00983",
          "timestamp": "2026-08-04T08:28:00.159Z",
          "entity_id": "CSE-017",
          "asset_id": "AST-017-16",
          "severity": "CRITICAL",
          "category": "DDoS",
          "source_ip": "192.168.94.125",
          "destination_ip": "10.0.155.85",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00984",
          "timestamp": "2026-07-19T10:33:00.159Z",
          "entity_id": "CSE-017",
          "asset_id": "AST-017-18",
          "severity": "LOW",
          "category": "Data Exfiltration",
          "source_ip": "192.168.212.184",
          "destination_ip": "10.0.108.51",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00985",
          "timestamp": "2026-09-07T03:38:00.159Z",
          "entity_id": "CSE-017",
          "asset_id": "AST-017-20",
          "severity": "LOW",
          "category": "Phishing",
          "source_ip": "192.168.69.48",
          "destination_ip": "10.0.183.204",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00986",
          "timestamp": "2026-07-25T10:32:26.826Z",
          "entity_id": "CSE-017",
          "asset_id": "AST-017-04",
          "severity": "HIGH",
          "category": "Ransomware",
          "source_ip": "192.168.219.243",
          "destination_ip": "10.0.177.13",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-00987",
          "timestamp": "2026-09-25T04:33:33.493Z",
          "entity_id": "CSE-017",
          "asset_id": "AST-017-17",
          "severity": "HIGH",
          "category": "Ransomware",
          "source_ip": "192.168.116.250",
          "destination_ip": "10.0.120.128",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-018": {
    "success": true,
    "entity_id": "CSE-018",
    "entity_name": "Healthcare Entity 18",
    "sector": "Healthcare",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 54.25,
        "weight": 0.25,
        "weighted_contribution": 13.56,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-018",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-018",
        "entity_id": "CSE-018",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0103"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-018",
          "affected_assets": [
            "AST-035"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 3,
          "missing_investigation_ratio": 0.3333
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-018",
      "entity_name": "Healthcare Entity 18",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-018",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0103"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-018-12",
          "entity_id": "CSE-018",
          "asset_type": "Firewall",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-01011",
          "timestamp": "2026-08-21T06:31:53.493Z",
          "entity_id": "CSE-018",
          "asset_id": "AST-018-08",
          "severity": "MEDIUM",
          "category": "Unauthorized Access",
          "source_ip": "192.168.228.78",
          "destination_ip": "10.0.135.63",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01012",
          "timestamp": "2026-08-03T01:39:40.159Z",
          "entity_id": "CSE-018",
          "asset_id": "AST-018-05",
          "severity": "CRITICAL",
          "category": "DDoS",
          "source_ip": "192.168.184.106",
          "destination_ip": "10.0.225.241",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01013",
          "timestamp": "2026-08-05T17:08:00.159Z",
          "entity_id": "CSE-018",
          "asset_id": "AST-018-02",
          "severity": "LOW",
          "category": "Malware",
          "source_ip": "192.168.9.147",
          "destination_ip": "10.0.59.239",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01014",
          "timestamp": "2026-07-15T12:02:26.826Z",
          "entity_id": "CSE-018",
          "asset_id": "AST-018-11",
          "severity": "MEDIUM",
          "category": "Privilege Escalation",
          "source_ip": "192.168.222.151",
          "destination_ip": "10.0.117.113",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01015",
          "timestamp": "2026-07-09T18:03:33.493Z",
          "entity_id": "CSE-018",
          "asset_id": "AST-018-08",
          "severity": "LOW",
          "category": "Phishing",
          "source_ip": "192.168.184.221",
          "destination_ip": "10.0.124.36",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01016",
          "timestamp": "2026-09-21T21:51:20.159Z",
          "entity_id": "CSE-018",
          "asset_id": "AST-018-12",
          "severity": "MEDIUM",
          "category": "Malware",
          "source_ip": "192.168.142.190",
          "destination_ip": "10.0.121.202",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01017",
          "timestamp": "2026-08-08T02:05:46.826Z",
          "entity_id": "CSE-018",
          "asset_id": "AST-018-03",
          "severity": "HIGH",
          "category": "Phishing",
          "source_ip": "192.168.81.24",
          "destination_ip": "10.0.83.197",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01018",
          "timestamp": "2026-08-22T01:26:53.493Z",
          "entity_id": "CSE-018",
          "asset_id": "AST-018-16",
          "severity": "LOW",
          "category": "Ransomware",
          "source_ip": "192.168.89.18",
          "destination_ip": "10.0.203.138",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01019",
          "timestamp": "2026-07-30T06:34:40.159Z",
          "entity_id": "CSE-018",
          "asset_id": "AST-018-10",
          "severity": "HIGH",
          "category": "Privilege Escalation",
          "source_ip": "192.168.131.146",
          "destination_ip": "10.0.67.190",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01020",
          "timestamp": "2026-07-01T20:09:06.826Z",
          "entity_id": "CSE-018",
          "asset_id": "AST-018-05",
          "severity": "HIGH",
          "category": "Phishing",
          "source_ip": "192.168.249.92",
          "destination_ip": "10.0.47.250",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-019": {
    "success": true,
    "entity_id": "CSE-019",
    "entity_name": "Telecom Entity 19",
    "sector": "Telecom",
    "risk_score": 13.56,
    "final_risk_score": 13.56,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 54.25,
        "weight": 0.25,
        "weighted_contribution": 13.56,
        "finding_count": 1
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 54.25,
        "weighted_contribution": 13.56,
        "finding_count": 1,
        "top_severity": "HIGH",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-019",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "HIGH",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 13.56,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 54.25,
      "anomaly": 0,
      "peer_deviation": 0,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-019",
        "entity_id": "CSE-019",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "HIGH",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0108"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-019",
          "affected_assets": [
            "AST-037"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 3,
          "missing_investigation_ratio": 0.3333
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-019",
      "entity_name": "Telecom Entity 19",
      "risk_score": 13.56,
      "final_risk_score": 13.56,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 54.25,
          "weight": 0.25,
          "weighted_contribution": 13.56,
          "finding_count": 1
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 54.25,
          "weight": 0.25,
          "contribution": 13.56
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 0,
          "weight": 0.15,
          "contribution": 0
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 54.25,
          "weighted_contribution": 13.56,
          "finding_count": 1,
          "top_severity": "HIGH",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-019",
              "severity": "HIGH",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "33.3% (1/3) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0108"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "33.3%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 3
              }
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 13.6 points from 1 finding(s) with top severity HIGH).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 54.25,
        "weight": 0.25,
        "contribution": 13.56
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 0,
        "weight": 0.15,
        "contribution": 0
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 11,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-019-02",
          "entity_id": "CSE-019",
          "asset_type": "Firewall",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-01056",
          "timestamp": "2026-09-13T12:44:40.159Z",
          "entity_id": "CSE-019",
          "asset_id": "AST-019-09",
          "severity": "MEDIUM",
          "category": "Ransomware",
          "source_ip": "192.168.145.201",
          "destination_ip": "10.0.149.115",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01057",
          "timestamp": "2026-07-16T06:19:06.826Z",
          "entity_id": "CSE-019",
          "asset_id": "AST-019-05",
          "severity": "CRITICAL",
          "category": "Privilege Escalation",
          "source_ip": "192.168.147.173",
          "destination_ip": "10.0.212.230",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01058",
          "timestamp": "2026-07-20T22:07:26.826Z",
          "entity_id": "CSE-019",
          "asset_id": "AST-019-07",
          "severity": "HIGH",
          "category": "Unauthorized Access",
          "source_ip": "192.168.3.74",
          "destination_ip": "10.0.215.83",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01059",
          "timestamp": "2026-09-22T18:08:33.493Z",
          "entity_id": "CSE-019",
          "asset_id": "AST-019-04",
          "severity": "HIGH",
          "category": "Malware",
          "source_ip": "192.168.233.57",
          "destination_ip": "10.0.122.232",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01060",
          "timestamp": "2026-07-13T15:13:33.493Z",
          "entity_id": "CSE-019",
          "asset_id": "AST-019-05",
          "severity": "LOW",
          "category": "Unauthorized Access",
          "source_ip": "192.168.229.202",
          "destination_ip": "10.0.25.184",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01061",
          "timestamp": "2026-09-09T23:01:20.159Z",
          "entity_id": "CSE-019",
          "asset_id": "AST-019-10",
          "severity": "MEDIUM",
          "category": "Unauthorized Access",
          "source_ip": "192.168.114.239",
          "destination_ip": "10.0.147.191",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01062",
          "timestamp": "2026-07-21T07:15:46.826Z",
          "entity_id": "CSE-019",
          "asset_id": "AST-019-06",
          "severity": "MEDIUM",
          "category": "Malware",
          "source_ip": "192.168.93.84",
          "destination_ip": "10.0.8.142",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01063",
          "timestamp": "2026-07-09T10:36:53.493Z",
          "entity_id": "CSE-019",
          "asset_id": "AST-019-05",
          "severity": "LOW",
          "category": "Phishing",
          "source_ip": "192.168.170.203",
          "destination_ip": "10.0.224.67",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01064",
          "timestamp": "2026-09-28T19:44:40.159Z",
          "entity_id": "CSE-019",
          "asset_id": "AST-019-06",
          "severity": "HIGH",
          "category": "Data Exfiltration",
          "source_ip": "192.168.224.231",
          "destination_ip": "10.0.44.45",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01065",
          "timestamp": "2026-09-24T13:19:06.826Z",
          "entity_id": "CSE-019",
          "asset_id": "AST-019-09",
          "severity": "CRITICAL",
          "category": "Ransomware",
          "source_ip": "192.168.211.18",
          "destination_ip": "10.0.8.146",
          "status": "CLOSED"
        }
      ]
    }
  },
  "CSE-020": {
    "success": true,
    "entity_id": "CSE-020",
    "entity_name": "Transport Entity 20",
    "sector": "Transport",
    "risk_score": 12.4,
    "final_risk_score": 12.4,
    "risk_level": "LOW",
    "primary_drivers": [
      {
        "component": "negative_space",
        "name": "Negative Space",
        "raw_score": 31,
        "weight": 0.25,
        "weighted_contribution": 7.75,
        "finding_count": 1
      },
      {
        "component": "peer_deviation",
        "name": "Peer Deviation",
        "raw_score": 31,
        "weight": 0.15,
        "weighted_contribution": 4.65,
        "finding_count": 2
      }
    ],
    "component_scores": {
      "EXECUTION_GAP": {
        "finding_type": "EXECUTION_GAP",
        "weight": 0.3,
        "weight_pct": "30%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "NEGATIVE_SPACE": {
        "finding_type": "NEGATIVE_SPACE",
        "weight": 0.25,
        "weight_pct": "25%",
        "raw_module_score": 31,
        "weighted_contribution": 7.75,
        "finding_count": 1,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "NS-NOINVEST-CSE-020",
            "title": "High/Critical Alerts Lacking Investigation Records",
            "severity": "MEDIUM",
            "evidence_count": 1
          }
        ]
      },
      "ANOMALY": {
        "finding_type": "ANOMALY",
        "weight": 0.2,
        "weight_pct": "20%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      },
      "PEER_DEVIATION": {
        "finding_type": "PEER_DEVIATION",
        "weight": 0.15,
        "weight_pct": "15%",
        "raw_module_score": 31,
        "weighted_contribution": 4.65,
        "finding_count": 2,
        "top_severity": "MEDIUM",
        "finding_summaries": [
          {
            "finding_id": "PEER-CLO-CSE-020",
            "title": "Suspiciously Fast Incident Closure Times",
            "severity": "MEDIUM",
            "evidence_count": 6
          },
          {
            "finding_id": "PEER-DUR-CSE-020",
            "title": "Superficial Investigation Durations",
            "severity": "MEDIUM",
            "evidence_count": 6
          }
        ]
      },
      "REPEATED_INCIDENT": {
        "finding_type": "REPEATED_INCIDENT",
        "weight": 0.1,
        "weight_pct": "10%",
        "raw_module_score": 0,
        "weighted_contribution": 0,
        "finding_count": 0,
        "top_severity": "",
        "finding_summaries": []
      }
    },
    "component_weighted_contributions": {
      "execution_gap": 0,
      "negative_space": 7.75,
      "anomaly": 0,
      "peer_deviation": 4.65,
      "repeated_incidents": 0
    },
    "component_raw_scores": {
      "execution_gap": 0,
      "negative_space": 31,
      "anomaly": 0,
      "peer_deviation": 31,
      "repeated_incidents": 0
    },
    "findings": [
      {
        "finding_id": "NS-NOINVEST-CSE-020",
        "entity_id": "CSE-020",
        "finding_type": "NEGATIVE_SPACE",
        "severity": "MEDIUM",
        "title": "High/Critical Alerts Lacking Investigation Records",
        "rationale": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
        "evidence_ids": [
          "ALT-0113"
        ],
        "supporting_metrics": {
          "affected_entity": "CSE-020",
          "affected_assets": [
            "AST-039"
          ],
          "expected_evidence": "Formal case investigation record (CAS-*) for each high/critical alert",
          "observed_evidence": "1 high/critical alerts lack any case record in database",
          "explanation": "High severity alerts were logged but entirely abandoned with zero forensic follow-up.",
          "uninvestigated_count": 1,
          "total_high_critical_alerts": 4,
          "missing_investigation_ratio": 0.25
        }
      },
      {
        "finding_id": "PEER-CLO-CSE-020",
        "entity_id": "CSE-020",
        "finding_type": "PEER_DEVIATION",
        "severity": "MEDIUM",
        "title": "Suspiciously Fast Incident Closure Times",
        "rationale": "Entity median closure time (37.5 mins) is unusually fast (27.8% of Sector (Transport) peer median 135.0 mins across 3 peers). Unusually fast closures may indicate superficial triage or automated closure without investigation.",
        "evidence_ids": [
          "CAS-0086",
          "CAS-0087",
          "CAS-0088",
          "CAS-0089",
          "CAS-0090",
          "CAS-0091"
        ],
        "supporting_metrics": {
          "entity_value": 37.5,
          "peer_median": 135,
          "deviation": 0.2778,
          "interpretation": "Entity median closure time (37.5 mins) is unusually fast (27.8% of Sector (Transport) peer median 135.0 mins across 3 peers). Unusually fast closures may indicate superficial triage or automated closure without investigation.",
          "peer_group": "Sector (Transport)",
          "peer_count": 3
        }
      },
      {
        "finding_id": "PEER-DUR-CSE-020",
        "entity_id": "CSE-020",
        "finding_type": "PEER_DEVIATION",
        "severity": "MEDIUM",
        "title": "Superficial Investigation Durations",
        "rationale": "Entity mean investigation duration (40.0 mins) is significantly shorter than Sector (Transport) peer median (120.0 mins across 3 peers). Short investigation durations suggest inadequate forensic depth or insufficient resource allocation per incident.",
        "evidence_ids": [
          "CAS-0086",
          "CAS-0087",
          "CAS-0088",
          "CAS-0089",
          "CAS-0090",
          "CAS-0091"
        ],
        "supporting_metrics": {
          "entity_value": 40,
          "peer_median": 120,
          "deviation": 0.3333,
          "interpretation": "Entity mean investigation duration (40.0 mins) is significantly shorter than Sector (Transport) peer median (120.0 mins across 3 peers). Short investigation durations suggest inadequate forensic depth or insufficient resource allocation per incident.",
          "peer_group": "Sector (Transport)",
          "peer_count": 3
        }
      }
    ],
    "explanation": {
      "entity_id": "CSE-020",
      "entity_name": "Transport Entity 20",
      "risk_score": 12.4,
      "final_risk_score": 12.4,
      "risk_level": "LOW",
      "score_formula": "risk_score = 0.30 * execution_gap + 0.25 * negative_space + 0.20 * anomaly + 0.15 * peer_deviation + 0.10 * repeated_incidents",
      "primary_drivers": [
        {
          "component": "negative_space",
          "name": "Negative Space",
          "raw_score": 31,
          "weight": 0.25,
          "weighted_contribution": 7.75,
          "finding_count": 1
        },
        {
          "component": "peer_deviation",
          "name": "Peer Deviation",
          "raw_score": 31,
          "weight": 0.15,
          "weighted_contribution": 4.65,
          "finding_count": 2
        }
      ],
      "components": {
        "execution_gap": {
          "raw_score": 0,
          "weight": 0.3,
          "contribution": 0
        },
        "negative_space": {
          "raw_score": 31,
          "weight": 0.25,
          "contribution": 7.75
        },
        "anomaly": {
          "raw_score": 0,
          "weight": 0.2,
          "contribution": 0
        },
        "peer_deviation": {
          "raw_score": 31,
          "weight": 0.15,
          "contribution": 4.65
        },
        "repeated_incidents": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        },
        "repeated_incident": {
          "raw_score": 0,
          "weight": 0.1,
          "contribution": 0
        }
      },
      "module_breakdown": [
        {
          "module": "Negative Space",
          "finding_type": "NEGATIVE_SPACE",
          "weight_pct": "25%",
          "raw_module_score": 31,
          "weighted_contribution": 7.75,
          "finding_count": 1,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "NS-NOINVEST-CSE-020",
              "severity": "MEDIUM",
              "title": "High/Critical Alerts Lacking Investigation Records",
              "what": "High/Critical Alerts Lacking Investigation Records",
              "why": "25.0% (1/4) of CRITICAL/HIGH severity alerts have no associated investigation case. SOC procedures mandate that all high-severity alerts must be formally opened and investigated.",
              "evidence_ids": [
                "ALT-0113"
              ],
              "evidence_count": 1,
              "key_metrics": {
                "uninvestigated_pct": "25.0%",
                "uninvestigated_count": 1,
                "total_high_critical_alerts": 4
              }
            }
          ]
        },
        {
          "module": "Peer Comparison Deviation",
          "finding_type": "PEER_DEVIATION",
          "weight_pct": "15%",
          "raw_module_score": 31,
          "weighted_contribution": 4.65,
          "finding_count": 2,
          "top_severity": "MEDIUM",
          "findings": [
            {
              "finding_id": "PEER-CLO-CSE-020",
              "severity": "MEDIUM",
              "title": "Suspiciously Fast Incident Closure Times",
              "what": "Suspiciously Fast Incident Closure Times",
              "why": "Entity median closure time (37.5 mins) is unusually fast (27.8% of Sector (Transport) peer median 135.0 mins across 3 peers). Unusually fast closures may indicate superficial triage or automated closure without investigation.",
              "evidence_ids": [
                "CAS-0086",
                "CAS-0087",
                "CAS-0088",
                "CAS-0089",
                "CAS-0090",
                "CAS-0091"
              ],
              "evidence_count": 6,
              "key_metrics": {}
            },
            {
              "finding_id": "PEER-DUR-CSE-020",
              "severity": "MEDIUM",
              "title": "Superficial Investigation Durations",
              "what": "Superficial Investigation Durations",
              "why": "Entity mean investigation duration (40.0 mins) is significantly shorter than Sector (Transport) peer median (120.0 mins across 3 peers). Short investigation durations suggest inadequate forensic depth or insufficient resource allocation per incident.",
              "evidence_ids": [
                "CAS-0086",
                "CAS-0087",
                "CAS-0088",
                "CAS-0089",
                "CAS-0090",
                "CAS-0091"
              ],
              "evidence_count": 6,
              "key_metrics": {}
            }
          ]
        }
      ],
      "summary": "Overall risk level: LOW. The primary driver is Negative Space (25% weight, contributing 7.8 points from 1 finding(s) with top severity MEDIUM). Additional contributors: Peer Comparison Deviation (4.7 pts).",
      "execution_gap": {
        "raw_score": 0,
        "weight": 0.3,
        "contribution": 0
      },
      "negative_space": {
        "raw_score": 31,
        "weight": 0.25,
        "contribution": 7.75
      },
      "anomaly": {
        "raw_score": 0,
        "weight": 0.2,
        "contribution": 0
      },
      "peer_deviation": {
        "raw_score": 31,
        "weight": 0.15,
        "contribution": 4.65
      },
      "repeated_incidents": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      },
      "repeated_incident": {
        "raw_score": 0,
        "weight": 0.1,
        "contribution": 0
      }
    },
    "evidence_references": {
      "total_assets": 15,
      "total_alerts": 20,
      "critical_assets": [
        {
          "asset_id": "AST-020-03",
          "entity_id": "CSE-020",
          "asset_type": "Workstation",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 day",
          "last_telemetry": "2026-09-28T21:26:53.493Z"
        },
        {
          "asset_id": "AST-020-07",
          "entity_id": "CSE-020",
          "asset_type": "ICS",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        },
        {
          "asset_id": "AST-020-09",
          "entity_id": "CSE-020",
          "asset_type": "Workstation",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 hour",
          "last_telemetry": "2026-09-26T21:26:53.493Z"
        },
        {
          "asset_id": "AST-020-13",
          "entity_id": "CSE-020",
          "asset_type": "Server",
          "criticality": "CRITICAL",
          "expected_telemetry": "1 week",
          "last_telemetry": "2026-09-27T21:26:53.493Z"
        }
      ],
      "recent_alerts": [
        {
          "alert_id": "ALT-01101",
          "timestamp": "2026-09-02T19:06:53.493Z",
          "entity_id": "CSE-020",
          "asset_id": "AST-020-04",
          "severity": "MEDIUM",
          "category": "Unauthorized Access",
          "source_ip": "192.168.54.112",
          "destination_ip": "10.0.201.153",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01102",
          "timestamp": "2026-09-11T16:14:40.159Z",
          "entity_id": "CSE-020",
          "asset_id": "AST-020-09",
          "severity": "CRITICAL",
          "category": "Unauthorized Access",
          "source_ip": "192.168.242.104",
          "destination_ip": "10.0.70.11",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01103",
          "timestamp": "2026-07-09T10:43:00.159Z",
          "entity_id": "CSE-020",
          "asset_id": "AST-020-13",
          "severity": "MEDIUM",
          "category": "DDoS",
          "source_ip": "192.168.26.253",
          "destination_ip": "10.0.161.160",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01104",
          "timestamp": "2026-07-20T07:37:26.826Z",
          "entity_id": "CSE-020",
          "asset_id": "AST-020-15",
          "severity": "MEDIUM",
          "category": "Privilege Escalation",
          "source_ip": "192.168.147.65",
          "destination_ip": "10.0.12.152",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01105",
          "timestamp": "2026-09-04T15:38:33.493Z",
          "entity_id": "CSE-020",
          "asset_id": "AST-020-08",
          "severity": "LOW",
          "category": "Ransomware",
          "source_ip": "192.168.242.84",
          "destination_ip": "10.0.124.167",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01106",
          "timestamp": "2026-08-31T21:26:20.159Z",
          "entity_id": "CSE-020",
          "asset_id": "AST-020-01",
          "severity": "MEDIUM",
          "category": "Ransomware",
          "source_ip": "192.168.135.229",
          "destination_ip": "10.0.113.225",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01107",
          "timestamp": "2026-07-20T03:40:46.826Z",
          "entity_id": "CSE-020",
          "asset_id": "AST-020-11",
          "severity": "HIGH",
          "category": "DDoS",
          "source_ip": "192.168.151.40",
          "destination_ip": "10.0.38.254",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01108",
          "timestamp": "2026-08-25T05:01:53.493Z",
          "entity_id": "CSE-020",
          "asset_id": "AST-020-14",
          "severity": "HIGH",
          "category": "Phishing",
          "source_ip": "192.168.207.153",
          "destination_ip": "10.0.178.202",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01109",
          "timestamp": "2026-07-15T12:09:40.159Z",
          "entity_id": "CSE-020",
          "asset_id": "AST-020-08",
          "severity": "MEDIUM",
          "category": "Privilege Escalation",
          "source_ip": "192.168.99.117",
          "destination_ip": "10.0.204.61",
          "status": "CLOSED"
        },
        {
          "alert_id": "ALT-01110",
          "timestamp": "2026-08-18T03:44:06.826Z",
          "entity_id": "CSE-020",
          "asset_id": "AST-020-01",
          "severity": "HIGH",
          "category": "DDoS",
          "source_ip": "192.168.209.211",
          "destination_ip": "10.0.63.70",
          "status": "CLOSED"
        }
      ]
    }
  }
};

export const DEMO_ALERT_PRIORITIES = [
  {
    "alert_id": "ALT-00304",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Entity flagged for operational anomalies (+5)"
    ],
    "evidence_ids": [
      "ALT-00304",
      "CAS-00269",
      "AST-007-30"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00305",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)",
      "Entity flagged for operational anomalies (+5)"
    ],
    "evidence_ids": [
      "ALT-00305",
      "CAS-00270",
      "AST-007-02"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00306",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)",
      "Entity flagged for operational anomalies (+5)"
    ],
    "evidence_ids": [
      "ALT-00306",
      "CAS-00271",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00309",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)",
      "Entity flagged for operational anomalies (+5)"
    ],
    "evidence_ids": [
      "ALT-00309",
      "CAS-00274",
      "AST-007-10"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00312",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)",
      "Entity flagged for operational anomalies (+5)"
    ],
    "evidence_ids": [
      "ALT-00312",
      "CAS-00277",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00315",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Entity flagged for operational anomalies (+5)"
    ],
    "evidence_ids": [
      "ALT-00315",
      "CAS-00280",
      "AST-007-02"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00316",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)",
      "Entity flagged for operational anomalies (+5)"
    ],
    "evidence_ids": [
      "ALT-00316",
      "CAS-00281",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00317",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Entity flagged for operational anomalies (+5)"
    ],
    "evidence_ids": [
      "ALT-00317",
      "CAS-00282",
      "AST-007-09"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00319",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)",
      "Entity flagged for operational anomalies (+5)"
    ],
    "evidence_ids": [
      "ALT-00319",
      "CAS-00284",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00321",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)",
      "Entity flagged for operational anomalies (+5)"
    ],
    "evidence_ids": [
      "ALT-00321",
      "CAS-00286",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00324",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)",
      "Entity flagged for operational anomalies (+5)"
    ],
    "evidence_ids": [
      "ALT-00324",
      "CAS-00289",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00327",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Entity flagged for operational anomalies (+5)"
    ],
    "evidence_ids": [
      "ALT-00327",
      "CAS-00292",
      "AST-007-03"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00329",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as Ignored (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Entity flagged for operational anomalies (+5)"
    ],
    "evidence_ids": [
      "ALT-00329",
      "CAS-00294",
      "AST-007-05"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00336",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Entity flagged for operational anomalies (+5)"
    ],
    "evidence_ids": [
      "ALT-00336",
      "CAS-00300",
      "AST-007-24"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00344",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)",
      "Entity flagged for operational anomalies (+5)"
    ],
    "evidence_ids": [
      "ALT-00344",
      "CAS-00308",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00345",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00345",
      "CAS-00309",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00353",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00353",
      "CAS-00316",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00354",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00354",
      "CAS-00317",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00364",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00364",
      "CAS-00326",
      "AST-007-09"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00367",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00367",
      "CAS-00328",
      "AST-007-02"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00373",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00373",
      "CAS-00332",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00376",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00376",
      "CAS-00335",
      "AST-007-17"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00378",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00378",
      "CAS-00336",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00380",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00380",
      "CAS-00338",
      "AST-007-17"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00381",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00381",
      "CAS-00339",
      "AST-007-03"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00387",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00387",
      "CAS-00345",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00398",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00398",
      "CAS-00356",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00399",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00399",
      "CAS-00357",
      "AST-007-24"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00404",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00404",
      "CAS-00361",
      "AST-007-05"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00412",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00412",
      "CAS-00368",
      "AST-007-04"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00418",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00418",
      "CAS-00374",
      "AST-007-10"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00421",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00421",
      "CAS-00377",
      "AST-007-24"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00424",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00424",
      "CAS-00379",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00425",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00425",
      "CAS-00380",
      "AST-007-04"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00429",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00429",
      "CAS-00384",
      "AST-007-02"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00431",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00431",
      "CAS-00385",
      "AST-007-30"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00434",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00434",
      "CAS-00388",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00438",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00438",
      "CAS-00391",
      "AST-007-04"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00440",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00440",
      "CAS-00393",
      "AST-007-05"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00442",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00442",
      "CAS-00395",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00446",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00446",
      "CAS-00399",
      "AST-007-04"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00447",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00447",
      "CAS-00400",
      "AST-007-10"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00453",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00453",
      "CAS-00406",
      "AST-007-06"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00461",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00461",
      "CAS-00412",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00462",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00462",
      "CAS-00413",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00468",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00468",
      "CAS-00417",
      "AST-007-30"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00473",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)"
    ],
    "evidence_ids": [
      "ALT-00473",
      "CAS-00421",
      "AST-007-23"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00474",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00474",
      "CAS-00422",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00481",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00481",
      "CAS-00428",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  },
  {
    "alert_id": "ALT-00486",
    "entity_id": "CSE-007",
    "priority_score": 96.3,
    "priority_level": "CRITICAL",
    "primary_signal": "Execution Gap Flagged",
    "reasons": [
      "Alert is CRITICAL severity (+30)",
      "Target asset is CRITICAL (+15)",
      "Entity risk context (CRITICAL, score 81.5) (+16.3)",
      "CRITICAL alert closed without escalation (+10)",
      "Remediation marked as None (+10)",
      "Flagged in Execution Gap analytics (+15)",
      "Part of a Repeated Incident cluster (+10)"
    ],
    "evidence_ids": [
      "ALT-00486",
      "CAS-00433",
      "AST-007-01"
    ],
    "calculated_at": "2026-11-05T15:50:45.083963+00:00"
  }
];

export const DEMO_TRENDS = [
  {
    "date": "2026-06-30",
    "alerts": 1
  },
  {
    "date": "2026-07-01",
    "alerts": 15
  },
  {
    "date": "2026-07-02",
    "alerts": 19
  },
  {
    "date": "2026-07-03",
    "alerts": 13
  },
  {
    "date": "2026-07-04",
    "alerts": 13
  },
  {
    "date": "2026-07-05",
    "alerts": 10
  },
  {
    "date": "2026-07-06",
    "alerts": 7
  },
  {
    "date": "2026-07-07",
    "alerts": 12
  },
  {
    "date": "2026-07-08",
    "alerts": 12
  },
  {
    "date": "2026-07-09",
    "alerts": 14
  },
  {
    "date": "2026-07-10",
    "alerts": 10
  },
  {
    "date": "2026-07-11",
    "alerts": 12
  },
  {
    "date": "2026-07-12",
    "alerts": 16
  },
  {
    "date": "2026-07-13",
    "alerts": 17
  },
  {
    "date": "2026-07-14",
    "alerts": 11
  },
  {
    "date": "2026-07-15",
    "alerts": 10
  },
  {
    "date": "2026-07-16",
    "alerts": 13
  },
  {
    "date": "2026-07-17",
    "alerts": 15
  },
  {
    "date": "2026-07-18",
    "alerts": 18
  },
  {
    "date": "2026-07-19",
    "alerts": 13
  },
  {
    "date": "2026-07-20",
    "alerts": 23
  },
  {
    "date": "2026-07-21",
    "alerts": 19
  },
  {
    "date": "2026-07-22",
    "alerts": 13
  },
  {
    "date": "2026-07-23",
    "alerts": 11
  },
  {
    "date": "2026-07-24",
    "alerts": 14
  },
  {
    "date": "2026-07-25",
    "alerts": 11
  },
  {
    "date": "2026-07-26",
    "alerts": 6
  },
  {
    "date": "2026-07-27",
    "alerts": 19
  },
  {
    "date": "2026-07-28",
    "alerts": 15
  },
  {
    "date": "2026-07-29",
    "alerts": 14
  },
  {
    "date": "2026-07-30",
    "alerts": 14
  },
  {
    "date": "2026-07-31",
    "alerts": 15
  },
  {
    "date": "2026-08-01",
    "alerts": 10
  },
  {
    "date": "2026-08-02",
    "alerts": 22
  },
  {
    "date": "2026-08-03",
    "alerts": 13
  },
  {
    "date": "2026-08-04",
    "alerts": 14
  },
  {
    "date": "2026-08-05",
    "alerts": 15
  },
  {
    "date": "2026-08-06",
    "alerts": 12
  },
  {
    "date": "2026-08-07",
    "alerts": 12
  },
  {
    "date": "2026-08-08",
    "alerts": 13
  },
  {
    "date": "2026-08-09",
    "alerts": 14
  },
  {
    "date": "2026-08-10",
    "alerts": 19
  },
  {
    "date": "2026-08-11",
    "alerts": 8
  },
  {
    "date": "2026-08-12",
    "alerts": 10
  },
  {
    "date": "2026-08-13",
    "alerts": 11
  },
  {
    "date": "2026-08-14",
    "alerts": 18
  },
  {
    "date": "2026-08-15",
    "alerts": 15
  },
  {
    "date": "2026-08-16",
    "alerts": 11
  },
  {
    "date": "2026-08-17",
    "alerts": 13
  },
  {
    "date": "2026-08-18",
    "alerts": 13
  },
  {
    "date": "2026-08-19",
    "alerts": 14
  },
  {
    "date": "2026-08-20",
    "alerts": 15
  },
  {
    "date": "2026-08-21",
    "alerts": 8
  },
  {
    "date": "2026-08-22",
    "alerts": 15
  },
  {
    "date": "2026-08-23",
    "alerts": 10
  },
  {
    "date": "2026-08-24",
    "alerts": 11
  },
  {
    "date": "2026-08-25",
    "alerts": 16
  },
  {
    "date": "2026-08-26",
    "alerts": 8
  },
  {
    "date": "2026-08-27",
    "alerts": 16
  },
  {
    "date": "2026-08-28",
    "alerts": 11
  },
  {
    "date": "2026-08-29",
    "alerts": 18
  },
  {
    "date": "2026-08-30",
    "alerts": 13
  },
  {
    "date": "2026-08-31",
    "alerts": 16
  },
  {
    "date": "2026-09-01",
    "alerts": 9
  },
  {
    "date": "2026-09-02",
    "alerts": 15
  },
  {
    "date": "2026-09-03",
    "alerts": 9
  },
  {
    "date": "2026-09-04",
    "alerts": 14
  },
  {
    "date": "2026-09-05",
    "alerts": 11
  },
  {
    "date": "2026-09-06",
    "alerts": 4
  },
  {
    "date": "2026-09-07",
    "alerts": 14
  },
  {
    "date": "2026-09-08",
    "alerts": 11
  },
  {
    "date": "2026-09-09",
    "alerts": 15
  },
  {
    "date": "2026-09-10",
    "alerts": 14
  },
  {
    "date": "2026-09-11",
    "alerts": 10
  },
  {
    "date": "2026-09-12",
    "alerts": 8
  },
  {
    "date": "2026-09-13",
    "alerts": 16
  },
  {
    "date": "2026-09-14",
    "alerts": 17
  },
  {
    "date": "2026-09-15",
    "alerts": 21
  },
  {
    "date": "2026-09-16",
    "alerts": 12
  },
  {
    "date": "2026-09-17",
    "alerts": 8
  },
  {
    "date": "2026-09-18",
    "alerts": 5
  },
  {
    "date": "2026-09-19",
    "alerts": 14
  },
  {
    "date": "2026-09-20",
    "alerts": 10
  },
  {
    "date": "2026-09-21",
    "alerts": 15
  },
  {
    "date": "2026-09-22",
    "alerts": 13
  },
  {
    "date": "2026-09-23",
    "alerts": 9
  },
  {
    "date": "2026-09-24",
    "alerts": 16
  },
  {
    "date": "2026-09-25",
    "alerts": 7
  },
  {
    "date": "2026-09-26",
    "alerts": 14
  },
  {
    "date": "2026-09-27",
    "alerts": 23
  },
  {
    "date": "2026-09-28",
    "alerts": 10
  },
  {
    "date": "2026-11-05",
    "alerts": 2
  }
];

export const DEMO_EVIDENCE_INTEGRITY: EvidenceIntegrityResponse = {
  "success": true,
  "total_findings": 32,
  "total_references": 104,
  "valid_references": 104,
  "broken_references": 0,
  "integrity_passed": true,
  "broken_details": []
};

export const DEMO_VALIDATION_METRICS = {
  "success": true,
  "available": true,
  "label_count": 45,
  "validation_run_count": 1,
  "latest_run": {
    "validation_run_id": "VAL-20261105-01",
    "created_at": "2026-11-05T22:30:00Z",
    "metrics": {
      "accuracy": 0.933,
      "precision": 0.917,
      "recall": 0.956,
      "f1_score": 0.936,
      "roc_auc": 0.942
    }
  }
};

export const DEMO_ALERTS_SAMPLE = {
  "ALT-00001": {
    "alert_id": "ALT-00001",
    "timestamp": "2026-09-20T18:28:00.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-01",
    "severity": "MEDIUM",
    "category": "Unauthorized Access",
    "source_ip": "192.168.158.32",
    "destination_ip": "10.0.76.191",
    "status": "CLOSED"
  },
  "ALT-00002": {
    "alert_id": "ALT-00002",
    "timestamp": "2026-07-24T21:22:26.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-20",
    "severity": "CRITICAL",
    "category": "Data Exfiltration",
    "source_ip": "192.168.41.74",
    "destination_ip": "10.0.115.73",
    "status": "CLOSED"
  },
  "ALT-00003": {
    "alert_id": "ALT-00003",
    "timestamp": "2026-07-24T23:10:46.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-19",
    "severity": "MEDIUM",
    "category": "DDoS",
    "source_ip": "192.168.239.75",
    "destination_ip": "10.0.148.55",
    "status": "CLOSED"
  },
  "ALT-00004": {
    "alert_id": "ALT-00004",
    "timestamp": "2026-07-23T12:31:53.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-14",
    "severity": "CRITICAL",
    "category": "Ransomware",
    "source_ip": "192.168.189.81",
    "destination_ip": "10.0.181.151",
    "status": "CLOSED"
  },
  "ALT-00005": {
    "alert_id": "ALT-00005",
    "timestamp": "2026-09-19T20:40:13.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-02",
    "severity": "HIGH",
    "category": "Privilege Escalation",
    "source_ip": "192.168.195.101",
    "destination_ip": "10.0.159.148",
    "status": "CLOSED"
  },
  "ALT-00006": {
    "alert_id": "ALT-00006",
    "timestamp": "2026-09-20T23:08:00.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-02",
    "severity": "HIGH",
    "category": "Phishing",
    "source_ip": "192.168.182.108",
    "destination_ip": "10.0.63.31",
    "status": "CLOSED"
  },
  "ALT-00007": {
    "alert_id": "ALT-00007",
    "timestamp": "2026-07-01T18:02:26.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-23",
    "severity": "HIGH",
    "category": "DDoS",
    "source_ip": "192.168.226.197",
    "destination_ip": "10.0.205.244",
    "status": "CLOSED"
  },
  "ALT-00008": {
    "alert_id": "ALT-00008",
    "timestamp": "2026-07-26T00:03:33.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-03",
    "severity": "LOW",
    "category": "Malware",
    "source_ip": "192.168.17.97",
    "destination_ip": "10.0.42.252",
    "status": "CLOSED"
  },
  "ALT-00009": {
    "alert_id": "ALT-00009",
    "timestamp": "2026-08-09T03:51:20.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-17",
    "severity": "CRITICAL",
    "category": "DDoS",
    "source_ip": "192.168.60.152",
    "destination_ip": "10.0.124.248",
    "status": "CLOSED"
  },
  "ALT-00010": {
    "alert_id": "ALT-00010",
    "timestamp": "2026-07-30T12:19:40.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-19",
    "severity": "HIGH",
    "category": "Phishing",
    "source_ip": "192.168.70.172",
    "destination_ip": "10.0.73.70",
    "status": "CLOSED"
  },
  "ALT-00011": {
    "alert_id": "ALT-00011",
    "timestamp": "2026-09-01T07:54:06.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-16",
    "severity": "LOW",
    "category": "Ransomware",
    "source_ip": "192.168.149.121",
    "destination_ip": "10.0.99.219",
    "status": "CLOSED"
  },
  "ALT-00012": {
    "alert_id": "ALT-00012",
    "timestamp": "2026-07-18T06:35:13.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-03",
    "severity": "LOW",
    "category": "Ransomware",
    "source_ip": "192.168.107.70",
    "destination_ip": "10.0.236.211",
    "status": "CLOSED"
  },
  "ALT-00013": {
    "alert_id": "ALT-00013",
    "timestamp": "2026-09-27T19:03:00.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-17",
    "severity": "LOW",
    "category": "Malware",
    "source_ip": "192.168.138.136",
    "destination_ip": "10.0.126.180",
    "status": "CLOSED"
  },
  "ALT-00014": {
    "alert_id": "ALT-00014",
    "timestamp": "2026-09-26T23:57:26.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-09",
    "severity": "MEDIUM",
    "category": "Data Exfiltration",
    "source_ip": "192.168.84.226",
    "destination_ip": "10.0.29.83",
    "status": "CLOSED"
  },
  "ALT-00015": {
    "alert_id": "ALT-00015",
    "timestamp": "2026-09-21T15:58:33.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-23",
    "severity": "HIGH",
    "category": "Ransomware",
    "source_ip": "192.168.61.241",
    "destination_ip": "10.0.80.64",
    "status": "CLOSED"
  },
  "ALT-00016": {
    "alert_id": "ALT-00016",
    "timestamp": "2026-07-18T05:46:20.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-13",
    "severity": "CRITICAL",
    "category": "Unauthorized Access",
    "source_ip": "192.168.233.183",
    "destination_ip": "10.0.234.230",
    "status": "CLOSED"
  },
  "ALT-00017": {
    "alert_id": "ALT-00017",
    "timestamp": "2026-09-24T17:14:40.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-18",
    "severity": "HIGH",
    "category": "DDoS",
    "source_ip": "192.168.187.127",
    "destination_ip": "10.0.85.189",
    "status": "CLOSED"
  },
  "ALT-00018": {
    "alert_id": "ALT-00018",
    "timestamp": "2026-08-03T22:49:06.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-13",
    "severity": "MEDIUM",
    "category": "Data Exfiltration",
    "source_ip": "192.168.210.120",
    "destination_ip": "10.0.170.70",
    "status": "CLOSED"
  },
  "ALT-00019": {
    "alert_id": "ALT-00019",
    "timestamp": "2026-07-21T02:54:06.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-19",
    "severity": "HIGH",
    "category": "DDoS",
    "source_ip": "192.168.149.158",
    "destination_ip": "10.0.86.71",
    "status": "CLOSED"
  },
  "ALT-00020": {
    "alert_id": "ALT-00020",
    "timestamp": "2026-07-01T01:35:13.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-12",
    "severity": "MEDIUM",
    "category": "Privilege Escalation",
    "source_ip": "192.168.9.93",
    "destination_ip": "10.0.38.219",
    "status": "CLOSED"
  },
  "ALT-00021": {
    "alert_id": "ALT-00021",
    "timestamp": "2026-09-05T14:03:00.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-02",
    "severity": "CRITICAL",
    "category": "Data Exfiltration",
    "source_ip": "192.168.111.59",
    "destination_ip": "10.0.170.3",
    "status": "CLOSED"
  },
  "ALT-00022": {
    "alert_id": "ALT-00022",
    "timestamp": "2026-07-15T15:31:20.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-02",
    "severity": "HIGH",
    "category": "Phishing",
    "source_ip": "192.168.220.228",
    "destination_ip": "10.0.147.74",
    "status": "CLOSED"
  },
  "ALT-00023": {
    "alert_id": "ALT-00023",
    "timestamp": "2026-08-31T11:45:46.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-20",
    "severity": "MEDIUM",
    "category": "Privilege Escalation",
    "source_ip": "192.168.220.95",
    "destination_ip": "10.0.29.46",
    "status": "CLOSED"
  },
  "ALT-00024": {
    "alert_id": "ALT-00024",
    "timestamp": "2026-08-27T03:06:53.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-18",
    "severity": "LOW",
    "category": "Phishing",
    "source_ip": "192.168.63.235",
    "destination_ip": "10.0.12.247",
    "status": "CLOSED"
  },
  "ALT-00025": {
    "alert_id": "ALT-00025",
    "timestamp": "2026-08-26T00:14:40.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-23",
    "severity": "HIGH",
    "category": "Ransomware",
    "source_ip": "192.168.138.28",
    "destination_ip": "10.0.107.247",
    "status": "CLOSED"
  },
  "ALT-00026": {
    "alert_id": "ALT-00026",
    "timestamp": "2026-08-29T05:49:06.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-10",
    "severity": "CRITICAL",
    "category": "Privilege Escalation",
    "source_ip": "192.168.148.92",
    "destination_ip": "10.0.92.114",
    "status": "CLOSED"
  },
  "ALT-00027": {
    "alert_id": "ALT-00027",
    "timestamp": "2026-09-21T15:37:26.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-07",
    "severity": "HIGH",
    "category": "Data Exfiltration",
    "source_ip": "192.168.185.46",
    "destination_ip": "10.0.21.20",
    "status": "CLOSED"
  },
  "ALT-00028": {
    "alert_id": "ALT-00028",
    "timestamp": "2026-09-27T23:38:33.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-09",
    "severity": "HIGH",
    "category": "Privilege Escalation",
    "source_ip": "192.168.81.37",
    "destination_ip": "10.0.20.91",
    "status": "CLOSED"
  },
  "ALT-00029": {
    "alert_id": "ALT-00029",
    "timestamp": "2026-09-14T05:26:20.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-20",
    "severity": "HIGH",
    "category": "DDoS",
    "source_ip": "192.168.116.238",
    "destination_ip": "10.0.236.36",
    "status": "CLOSED"
  },
  "ALT-00030": {
    "alert_id": "ALT-00030",
    "timestamp": "2026-08-22T11:40:46.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-16",
    "severity": "MEDIUM",
    "category": "Ransomware",
    "source_ip": "192.168.103.191",
    "destination_ip": "10.0.218.37",
    "status": "CLOSED"
  },
  "ALT-00031": {
    "alert_id": "ALT-00031",
    "timestamp": "2026-08-18T13:01:53.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-10",
    "severity": "MEDIUM",
    "category": "Privilege Escalation",
    "source_ip": "192.168.216.21",
    "destination_ip": "10.0.244.41",
    "status": "CLOSED"
  },
  "ALT-00032": {
    "alert_id": "ALT-00032",
    "timestamp": "2026-09-26T20:09:40.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-22",
    "severity": "LOW",
    "category": "Phishing",
    "source_ip": "192.168.251.42",
    "destination_ip": "10.0.242.42",
    "status": "CLOSED"
  },
  "ALT-00033": {
    "alert_id": "ALT-00033",
    "timestamp": "2026-07-27T07:14:40.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-06",
    "severity": "MEDIUM",
    "category": "Phishing",
    "source_ip": "192.168.90.185",
    "destination_ip": "10.0.129.49",
    "status": "CLOSED"
  },
  "ALT-00034": {
    "alert_id": "ALT-00034",
    "timestamp": "2026-09-23T12:49:06.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-07",
    "severity": "MEDIUM",
    "category": "DDoS",
    "source_ip": "192.168.85.65",
    "destination_ip": "10.0.15.157",
    "status": "CLOSED"
  },
  "ALT-00035": {
    "alert_id": "ALT-00035",
    "timestamp": "2026-09-13T21:30:13.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-21",
    "severity": "CRITICAL",
    "category": "Phishing",
    "source_ip": "192.168.73.143",
    "destination_ip": "10.0.40.220",
    "status": "CLOSED"
  },
  "ALT-00036": {
    "alert_id": "ALT-00036",
    "timestamp": "2026-08-26T18:38:33.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-14",
    "severity": "LOW",
    "category": "Privilege Escalation",
    "source_ip": "192.168.195.16",
    "destination_ip": "10.0.35.56",
    "status": "CLOSED"
  },
  "ALT-00037": {
    "alert_id": "ALT-00037",
    "timestamp": "2026-08-08T00:26:20.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-01",
    "severity": "HIGH",
    "category": "Data Exfiltration",
    "source_ip": "192.168.46.119",
    "destination_ip": "10.0.236.72",
    "status": "CLOSED"
  },
  "ALT-00038": {
    "alert_id": "ALT-00038",
    "timestamp": "2026-09-09T06:40:46.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-11",
    "severity": "CRITICAL",
    "category": "Malware",
    "source_ip": "192.168.19.142",
    "destination_ip": "10.0.120.59",
    "status": "CLOSED"
  },
  "ALT-00039": {
    "alert_id": "ALT-00039",
    "timestamp": "2026-07-12T09:29:06.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-20",
    "severity": "CRITICAL",
    "category": "Ransomware",
    "source_ip": "192.168.213.217",
    "destination_ip": "10.0.219.16",
    "status": "CLOSED"
  },
  "ALT-00040": {
    "alert_id": "ALT-00040",
    "timestamp": "2026-08-17T07:17:26.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-20",
    "severity": "MEDIUM",
    "category": "DDoS",
    "source_ip": "192.168.200.35",
    "destination_ip": "10.0.183.128",
    "status": "CLOSED"
  },
  "ALT-00041": {
    "alert_id": "ALT-00041",
    "timestamp": "2026-09-04T07:18:33.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-10",
    "severity": "LOW",
    "category": "Data Exfiltration",
    "source_ip": "192.168.16.3",
    "destination_ip": "10.0.130.33",
    "status": "CLOSED"
  },
  "ALT-00042": {
    "alert_id": "ALT-00042",
    "timestamp": "2026-07-14T05:06:20.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-19",
    "severity": "CRITICAL",
    "category": "Ransomware",
    "source_ip": "192.168.169.209",
    "destination_ip": "10.0.152.11",
    "status": "CLOSED"
  },
  "ALT-00043": {
    "alert_id": "ALT-00043",
    "timestamp": "2026-08-16T16:34:40.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-14",
    "severity": "MEDIUM",
    "category": "Data Exfiltration",
    "source_ip": "192.168.110.224",
    "destination_ip": "10.0.159.211",
    "status": "CLOSED"
  },
  "ALT-00044": {
    "alert_id": "ALT-00044",
    "timestamp": "2026-09-27T06:39:40.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-07",
    "severity": "CRITICAL",
    "category": "Phishing",
    "source_ip": "192.168.50.22",
    "destination_ip": "10.0.20.255",
    "status": "CLOSED"
  },
  "ALT-00045": {
    "alert_id": "ALT-00045",
    "timestamp": "2026-07-16T11:44:40.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-01",
    "severity": "HIGH",
    "category": "Malware",
    "source_ip": "192.168.240.133",
    "destination_ip": "10.0.3.231",
    "status": "CLOSED"
  },
  "ALT-00046": {
    "alert_id": "ALT-00046",
    "timestamp": "2026-07-31T19:49:40.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-22",
    "severity": "CRITICAL",
    "category": "DDoS",
    "source_ip": "192.168.233.112",
    "destination_ip": "10.0.172.201",
    "status": "CLOSED"
  },
  "ALT-00047": {
    "alert_id": "ALT-00047",
    "timestamp": "2026-08-12T05:18:00.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-08",
    "severity": "LOW",
    "category": "Privilege Escalation",
    "source_ip": "192.168.125.8",
    "destination_ip": "10.0.159.140",
    "status": "CLOSED"
  },
  "ALT-00048": {
    "alert_id": "ALT-00048",
    "timestamp": "2026-08-20T04:12:26.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-13",
    "severity": "MEDIUM",
    "category": "Phishing",
    "source_ip": "192.168.138.208",
    "destination_ip": "10.0.214.237",
    "status": "CLOSED"
  },
  "ALT-00049": {
    "alert_id": "ALT-00049",
    "timestamp": "2026-09-22T14:13:33.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-03",
    "severity": "LOW",
    "category": "Unauthorized Access",
    "source_ip": "192.168.12.162",
    "destination_ip": "10.0.247.243",
    "status": "CLOSED"
  },
  "ALT-00050": {
    "alert_id": "ALT-00050",
    "timestamp": "2026-09-25T22:01:20.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-22",
    "severity": "LOW",
    "category": "Unauthorized Access",
    "source_ip": "192.168.166.129",
    "destination_ip": "10.0.214.10",
    "status": "CLOSED"
  },
  "ALT-00051": {
    "alert_id": "ALT-00051",
    "timestamp": "2026-07-12T06:15:46.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-09",
    "severity": "CRITICAL",
    "category": "Data Exfiltration",
    "source_ip": "192.168.245.243",
    "destination_ip": "10.0.4.59",
    "status": "CLOSED"
  },
  "ALT-00052": {
    "alert_id": "ALT-00052",
    "timestamp": "2026-09-27T00:04:06.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-12",
    "severity": "CRITICAL",
    "category": "Data Exfiltration",
    "source_ip": "192.168.206.234",
    "destination_ip": "10.0.169.230",
    "status": "CLOSED"
  },
  "ALT-00053": {
    "alert_id": "ALT-00053",
    "timestamp": "2026-08-27T00:52:26.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-01",
    "severity": "CRITICAL",
    "category": "DDoS",
    "source_ip": "192.168.153.161",
    "destination_ip": "10.0.135.238",
    "status": "CLOSED"
  },
  "ALT-00054": {
    "alert_id": "ALT-00054",
    "timestamp": "2026-07-16T20:40:46.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-01",
    "severity": "LOW",
    "category": "Data Exfiltration",
    "source_ip": "192.168.106.45",
    "destination_ip": "10.0.178.103",
    "status": "CLOSED"
  },
  "ALT-00055": {
    "alert_id": "ALT-00055",
    "timestamp": "2026-09-25T22:01:53.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-14",
    "severity": "MEDIUM",
    "category": "Unauthorized Access",
    "source_ip": "192.168.176.87",
    "destination_ip": "10.0.162.65",
    "status": "CLOSED"
  },
  "ALT-00056": {
    "alert_id": "ALT-00056",
    "timestamp": "2026-07-22T05:09:40.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-22",
    "severity": "LOW",
    "category": "Data Exfiltration",
    "source_ip": "192.168.168.66",
    "destination_ip": "10.0.117.23",
    "status": "CLOSED"
  },
  "ALT-00057": {
    "alert_id": "ALT-00057",
    "timestamp": "2026-08-29T20:44:06.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-14",
    "severity": "LOW",
    "category": "Ransomware",
    "source_ip": "192.168.207.3",
    "destination_ip": "10.0.245.217",
    "status": "CLOSED"
  },
  "ALT-00058": {
    "alert_id": "ALT-00058",
    "timestamp": "2026-08-10T15:25:13.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-22",
    "severity": "CRITICAL",
    "category": "Phishing",
    "source_ip": "192.168.97.82",
    "destination_ip": "10.0.29.225",
    "status": "CLOSED"
  },
  "ALT-00059": {
    "alert_id": "ALT-00059",
    "timestamp": "2026-08-10T15:33:33.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-02",
    "severity": "CRITICAL",
    "category": "Phishing",
    "source_ip": "192.168.249.220",
    "destination_ip": "10.0.12.27",
    "status": "CLOSED"
  },
  "ALT-00060": {
    "alert_id": "ALT-00060",
    "timestamp": "2026-09-24T10:41:53.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-08",
    "severity": "MEDIUM",
    "category": "Ransomware",
    "source_ip": "192.168.139.130",
    "destination_ip": "10.0.228.183",
    "status": "CLOSED"
  },
  "ALT-00061": {
    "alert_id": "ALT-00061",
    "timestamp": "2026-07-17T09:49:40.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-22",
    "severity": "CRITICAL",
    "category": "Data Exfiltration",
    "source_ip": "192.168.8.43",
    "destination_ip": "10.0.89.189",
    "status": "CLOSED"
  },
  "ALT-00062": {
    "alert_id": "ALT-00062",
    "timestamp": "2026-08-12T19:18:00.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-12",
    "severity": "CRITICAL",
    "category": "DDoS",
    "source_ip": "192.168.197.236",
    "destination_ip": "10.0.118.170",
    "status": "CLOSED"
  },
  "ALT-00063": {
    "alert_id": "ALT-00063",
    "timestamp": "2026-09-02T23:46:20.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-14",
    "severity": "LOW",
    "category": "DDoS",
    "source_ip": "192.168.68.230",
    "destination_ip": "10.0.239.193",
    "status": "CLOSED"
  },
  "ALT-00064": {
    "alert_id": "ALT-00064",
    "timestamp": "2026-08-09T14:00:46.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-02",
    "severity": "MEDIUM",
    "category": "Phishing",
    "source_ip": "192.168.249.150",
    "destination_ip": "10.0.47.218",
    "status": "CLOSED"
  },
  "ALT-00065": {
    "alert_id": "ALT-00065",
    "timestamp": "2026-08-23T23:21:53.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-16",
    "severity": "MEDIUM",
    "category": "Ransomware",
    "source_ip": "192.168.17.88",
    "destination_ip": "10.0.210.217",
    "status": "CLOSED"
  },
  "ALT-00066": {
    "alert_id": "ALT-00066",
    "timestamp": "2026-09-10T14:29:40.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-14",
    "severity": "CRITICAL",
    "category": "Unauthorized Access",
    "source_ip": "192.168.18.190",
    "destination_ip": "10.0.231.15",
    "status": "CLOSED"
  },
  "ALT-00067": {
    "alert_id": "ALT-00067",
    "timestamp": "2026-08-17T13:34:40.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-08",
    "severity": "CRITICAL",
    "category": "Ransomware",
    "source_ip": "192.168.218.184",
    "destination_ip": "10.0.225.128",
    "status": "CLOSED"
  },
  "ALT-00068": {
    "alert_id": "ALT-00068",
    "timestamp": "2026-07-24T08:03:00.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-02",
    "severity": "LOW",
    "category": "DDoS",
    "source_ip": "192.168.201.106",
    "destination_ip": "10.0.175.221",
    "status": "CLOSED"
  },
  "ALT-00069": {
    "alert_id": "ALT-00069",
    "timestamp": "2026-08-17T12:57:26.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-01",
    "severity": "MEDIUM",
    "category": "Data Exfiltration",
    "source_ip": "192.168.47.182",
    "destination_ip": "10.0.148.25",
    "status": "CLOSED"
  },
  "ALT-00070": {
    "alert_id": "ALT-00070",
    "timestamp": "2026-08-07T04:58:33.493Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-14",
    "severity": "LOW",
    "category": "Malware",
    "source_ip": "192.168.95.98",
    "destination_ip": "10.0.185.77",
    "status": "CLOSED"
  },
  "ALT-00071": {
    "alert_id": "ALT-00071",
    "timestamp": "2026-07-27T18:46:20.159Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-18",
    "severity": "LOW",
    "category": "Data Exfiltration",
    "source_ip": "192.168.253.111",
    "destination_ip": "10.0.240.229",
    "status": "CLOSED"
  },
  "ALT-00072": {
    "alert_id": "ALT-00072",
    "timestamp": "2026-08-27T09:00:46.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-20",
    "severity": "CRITICAL",
    "category": "Unauthorized Access",
    "source_ip": "192.168.164.101",
    "destination_ip": "10.0.203.240",
    "status": "CLOSED"
  },
  "ALT-00073": {
    "alert_id": "ALT-00073",
    "timestamp": "2026-07-31T23:49:06.826Z",
    "entity_id": "CSE-001",
    "asset_id": "AST-001-14",
    "severity": "CRITICAL",
    "category": "Privilege Escalation",
    "source_ip": "192.168.25.182",
    "destination_ip": "10.0.140.119",
    "status": "CLOSED"
  },
  "ALT-00074": {
    "alert_id": "ALT-00074",
    "timestamp": "2026-09-07T04:21:20.159Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-15",
    "severity": "HIGH",
    "category": "Unauthorized Access",
    "source_ip": "192.168.97.99",
    "destination_ip": "10.0.196.146",
    "status": "CLOSED"
  },
  "ALT-00075": {
    "alert_id": "ALT-00075",
    "timestamp": "2026-09-19T20:35:46.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-17",
    "severity": "CRITICAL",
    "category": "Privilege Escalation",
    "source_ip": "192.168.114.180",
    "destination_ip": "10.0.66.219",
    "status": "CLOSED"
  },
  "ALT-00076": {
    "alert_id": "ALT-00076",
    "timestamp": "2026-07-11T02:24:06.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-04",
    "severity": "CRITICAL",
    "category": "Ransomware",
    "source_ip": "192.168.252.179",
    "destination_ip": "10.0.68.57",
    "status": "CLOSED"
  },
  "ALT-00077": {
    "alert_id": "ALT-00077",
    "timestamp": "2026-07-12T15:12:26.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-02",
    "severity": "HIGH",
    "category": "Malware",
    "source_ip": "192.168.121.113",
    "destination_ip": "10.0.126.242",
    "status": "CLOSED"
  },
  "ALT-00078": {
    "alert_id": "ALT-00078",
    "timestamp": "2026-09-19T01:13:33.493Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-25",
    "severity": "CRITICAL",
    "category": "DDoS",
    "source_ip": "192.168.9.251",
    "destination_ip": "10.0.3.7",
    "status": "CLOSED"
  },
  "ALT-00079": {
    "alert_id": "ALT-00079",
    "timestamp": "2026-07-03T08:21:53.493Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-22",
    "severity": "MEDIUM",
    "category": "DDoS",
    "source_ip": "192.168.232.154",
    "destination_ip": "10.0.127.241",
    "status": "CLOSED"
  },
  "ALT-00080": {
    "alert_id": "ALT-00080",
    "timestamp": "2026-07-05T23:29:40.159Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-16",
    "severity": "LOW",
    "category": "Privilege Escalation",
    "source_ip": "192.168.190.213",
    "destination_ip": "10.0.106.251",
    "status": "CLOSED"
  },
  "ALT-00081": {
    "alert_id": "ALT-00081",
    "timestamp": "2026-07-12T23:04:06.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-15",
    "severity": "CRITICAL",
    "category": "Malware",
    "source_ip": "192.168.83.33",
    "destination_ip": "10.0.229.128",
    "status": "CLOSED"
  },
  "ALT-00082": {
    "alert_id": "ALT-00082",
    "timestamp": "2026-07-19T11:52:26.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-13",
    "severity": "LOW",
    "category": "Phishing",
    "source_ip": "192.168.136.66",
    "destination_ip": "10.0.47.242",
    "status": "CLOSED"
  },
  "ALT-00083": {
    "alert_id": "ALT-00083",
    "timestamp": "2026-09-12T13:53:33.493Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-17",
    "severity": "LOW",
    "category": "Privilege Escalation",
    "source_ip": "192.168.43.195",
    "destination_ip": "10.0.56.196",
    "status": "CLOSED"
  },
  "ALT-00084": {
    "alert_id": "ALT-00084",
    "timestamp": "2026-07-19T13:41:20.159Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-04",
    "severity": "LOW",
    "category": "Privilege Escalation",
    "source_ip": "192.168.88.25",
    "destination_ip": "10.0.27.24",
    "status": "CLOSED"
  },
  "ALT-00085": {
    "alert_id": "ALT-00085",
    "timestamp": "2026-08-14T13:55:46.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-01",
    "severity": "HIGH",
    "category": "Privilege Escalation",
    "source_ip": "192.168.86.115",
    "destination_ip": "10.0.20.163",
    "status": "CLOSED"
  },
  "ALT-00086": {
    "alert_id": "ALT-00086",
    "timestamp": "2026-07-21T18:00:46.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-05",
    "severity": "HIGH",
    "category": "Phishing",
    "source_ip": "192.168.167.210",
    "destination_ip": "10.0.163.51",
    "status": "CLOSED"
  },
  "ALT-00087": {
    "alert_id": "ALT-00087",
    "timestamp": "2026-07-18T13:05:46.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-21",
    "severity": "CRITICAL",
    "category": "DDoS",
    "source_ip": "192.168.115.235",
    "destination_ip": "10.0.46.252",
    "status": "CLOSED"
  },
  "ALT-00088": {
    "alert_id": "ALT-00088",
    "timestamp": "2026-08-18T00:54:06.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-24",
    "severity": "MEDIUM",
    "category": "Phishing",
    "source_ip": "192.168.158.10",
    "destination_ip": "10.0.208.122",
    "status": "CLOSED"
  },
  "ALT-00089": {
    "alert_id": "ALT-00089",
    "timestamp": "2026-07-08T23:35:13.493Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-11",
    "severity": "CRITICAL",
    "category": "Privilege Escalation",
    "source_ip": "192.168.46.58",
    "destination_ip": "10.0.103.43",
    "status": "CLOSED"
  },
  "ALT-00090": {
    "alert_id": "ALT-00090",
    "timestamp": "2026-08-01T17:43:33.493Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-09",
    "severity": "HIGH",
    "category": "Privilege Escalation",
    "source_ip": "192.168.53.93",
    "destination_ip": "10.0.26.82",
    "status": "CLOSED"
  },
  "ALT-00091": {
    "alert_id": "ALT-00091",
    "timestamp": "2026-08-17T13:31:20.159Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-08",
    "severity": "LOW",
    "category": "Ransomware",
    "source_ip": "192.168.157.180",
    "destination_ip": "10.0.28.54",
    "status": "CLOSED"
  },
  "ALT-00092": {
    "alert_id": "ALT-00092",
    "timestamp": "2026-07-15T09:45:46.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-05",
    "severity": "LOW",
    "category": "Privilege Escalation",
    "source_ip": "192.168.16.245",
    "destination_ip": "10.0.193.139",
    "status": "CLOSED"
  },
  "ALT-00093": {
    "alert_id": "ALT-00093",
    "timestamp": "2026-09-19T01:06:53.493Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-22",
    "severity": "MEDIUM",
    "category": "DDoS",
    "source_ip": "192.168.142.243",
    "destination_ip": "10.0.119.114",
    "status": "CLOSED"
  },
  "ALT-00094": {
    "alert_id": "ALT-00094",
    "timestamp": "2026-07-29T22:14:40.159Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-14",
    "severity": "HIGH",
    "category": "Data Exfiltration",
    "source_ip": "192.168.161.65",
    "destination_ip": "10.0.73.57",
    "status": "CLOSED"
  },
  "ALT-00095": {
    "alert_id": "ALT-00095",
    "timestamp": "2026-08-12T03:49:06.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-02",
    "severity": "LOW",
    "category": "DDoS",
    "source_ip": "192.168.28.72",
    "destination_ip": "10.0.87.37",
    "status": "CLOSED"
  },
  "ALT-00096": {
    "alert_id": "ALT-00096",
    "timestamp": "2026-09-16T12:30:13.493Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-05",
    "severity": "LOW",
    "category": "Ransomware",
    "source_ip": "192.168.144.23",
    "destination_ip": "10.0.238.228",
    "status": "CLOSED"
  },
  "ALT-00097": {
    "alert_id": "ALT-00097",
    "timestamp": "2026-07-30T10:58:00.159Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-08",
    "severity": "CRITICAL",
    "category": "Data Exfiltration",
    "source_ip": "192.168.105.203",
    "destination_ip": "10.0.88.170",
    "status": "CLOSED"
  },
  "ALT-00098": {
    "alert_id": "ALT-00098",
    "timestamp": "2026-07-03T07:03:00.159Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-20",
    "severity": "CRITICAL",
    "category": "Ransomware",
    "source_ip": "192.168.63.231",
    "destination_ip": "10.0.136.105",
    "status": "CLOSED"
  },
  "ALT-00099": {
    "alert_id": "ALT-00099",
    "timestamp": "2026-08-02T20:31:20.159Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-18",
    "severity": "HIGH",
    "category": "DDoS",
    "source_ip": "192.168.151.124",
    "destination_ip": "10.0.92.154",
    "status": "CLOSED"
  },
  "ALT-00100": {
    "alert_id": "ALT-00100",
    "timestamp": "2026-08-24T16:45:46.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-06",
    "severity": "MEDIUM",
    "category": "Unauthorized Access",
    "source_ip": "192.168.251.5",
    "destination_ip": "10.0.159.225",
    "status": "CLOSED"
  },
  "ALT-00101": {
    "alert_id": "ALT-00101",
    "timestamp": "2026-08-25T08:06:53.493Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-05",
    "severity": "CRITICAL",
    "category": "Unauthorized Access",
    "source_ip": "192.168.23.244",
    "destination_ip": "10.0.155.100",
    "status": "CLOSED"
  },
  "ALT-00102": {
    "alert_id": "ALT-00102",
    "timestamp": "2026-08-09T07:15:13.493Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-02",
    "severity": "LOW",
    "category": "Data Exfiltration",
    "source_ip": "192.168.222.95",
    "destination_ip": "10.0.114.226",
    "status": "CLOSED"
  },
  "ALT-00103": {
    "alert_id": "ALT-00103",
    "timestamp": "2026-09-16T11:43:00.159Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-17",
    "severity": "LOW",
    "category": "Unauthorized Access",
    "source_ip": "192.168.45.9",
    "destination_ip": "10.0.80.157",
    "status": "CLOSED"
  },
  "ALT-00104": {
    "alert_id": "ALT-00104",
    "timestamp": "2026-09-22T08:37:26.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-18",
    "severity": "HIGH",
    "category": "DDoS",
    "source_ip": "192.168.236.232",
    "destination_ip": "10.0.172.220",
    "status": "CLOSED"
  },
  "ALT-00105": {
    "alert_id": "ALT-00105",
    "timestamp": "2026-07-05T16:38:33.493Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-22",
    "severity": "LOW",
    "category": "Phishing",
    "source_ip": "192.168.62.67",
    "destination_ip": "10.0.185.221",
    "status": "CLOSED"
  },
  "ALT-00106": {
    "alert_id": "ALT-00106",
    "timestamp": "2026-07-26T22:26:20.159Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-18",
    "severity": "MEDIUM",
    "category": "Ransomware",
    "source_ip": "192.168.111.198",
    "destination_ip": "10.0.245.180",
    "status": "CLOSED"
  },
  "ALT-00107": {
    "alert_id": "ALT-00107",
    "timestamp": "2026-09-07T04:40:46.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-07",
    "severity": "LOW",
    "category": "Data Exfiltration",
    "source_ip": "192.168.197.165",
    "destination_ip": "10.0.156.25",
    "status": "CLOSED"
  },
  "ALT-00108": {
    "alert_id": "ALT-00108",
    "timestamp": "2026-07-05T23:45:46.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-06",
    "severity": "HIGH",
    "category": "Privilege Escalation",
    "source_ip": "192.168.230.20",
    "destination_ip": "10.0.124.56",
    "status": "CLOSED"
  },
  "ALT-00109": {
    "alert_id": "ALT-00109",
    "timestamp": "2026-07-31T15:06:53.493Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-13",
    "severity": "LOW",
    "category": "Data Exfiltration",
    "source_ip": "192.168.158.245",
    "destination_ip": "10.0.192.87",
    "status": "CLOSED"
  },
  "ALT-00110": {
    "alert_id": "ALT-00110",
    "timestamp": "2026-08-29T12:14:40.159Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-01",
    "severity": "LOW",
    "category": "Unauthorized Access",
    "source_ip": "192.168.63.123",
    "destination_ip": "10.0.117.172",
    "status": "CLOSED"
  },
  "ALT-00111": {
    "alert_id": "ALT-00111",
    "timestamp": "2026-07-19T14:19:40.159Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-21",
    "severity": "MEDIUM",
    "category": "Phishing",
    "source_ip": "192.168.25.198",
    "destination_ip": "10.0.255.237",
    "status": "CLOSED"
  },
  "ALT-00112": {
    "alert_id": "ALT-00112",
    "timestamp": "2026-07-12T09:54:06.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-08",
    "severity": "LOW",
    "category": "Malware",
    "source_ip": "192.168.160.119",
    "destination_ip": "10.0.168.188",
    "status": "CLOSED"
  },
  "ALT-00113": {
    "alert_id": "ALT-00113",
    "timestamp": "2026-08-10T16:59:06.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-08",
    "severity": "LOW",
    "category": "Ransomware",
    "source_ip": "192.168.30.151",
    "destination_ip": "10.0.143.56",
    "status": "CLOSED"
  },
  "ALT-00114": {
    "alert_id": "ALT-00114",
    "timestamp": "2026-09-09T05:40:13.493Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-18",
    "severity": "CRITICAL",
    "category": "Data Exfiltration",
    "source_ip": "192.168.186.113",
    "destination_ip": "10.0.193.202",
    "status": "CLOSED"
  },
  "ALT-00115": {
    "alert_id": "ALT-00115",
    "timestamp": "2026-09-14T20:48:33.493Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-04",
    "severity": "LOW",
    "category": "DDoS",
    "source_ip": "192.168.163.139",
    "destination_ip": "10.0.128.21",
    "status": "CLOSED"
  },
  "ALT-00116": {
    "alert_id": "ALT-00116",
    "timestamp": "2026-07-17T06:36:20.159Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-12",
    "severity": "CRITICAL",
    "category": "Unauthorized Access",
    "source_ip": "192.168.40.69",
    "destination_ip": "10.0.129.232",
    "status": "CLOSED"
  },
  "ALT-00117": {
    "alert_id": "ALT-00117",
    "timestamp": "2026-09-22T12:04:40.159Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-03",
    "severity": "MEDIUM",
    "category": "Data Exfiltration",
    "source_ip": "192.168.203.180",
    "destination_ip": "10.0.104.18",
    "status": "CLOSED"
  },
  "ALT-00118": {
    "alert_id": "ALT-00118",
    "timestamp": "2026-07-28T13:39:06.826Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-14",
    "severity": "LOW",
    "category": "Privilege Escalation",
    "source_ip": "192.168.73.218",
    "destination_ip": "10.0.6.85",
    "status": "CLOSED"
  },
  "ALT-00119": {
    "alert_id": "ALT-00119",
    "timestamp": "2026-07-14T18:20:13.493Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-20",
    "severity": "CRITICAL",
    "category": "Privilege Escalation",
    "source_ip": "192.168.163.85",
    "destination_ip": "10.0.104.80",
    "status": "CLOSED"
  },
  "ALT-00120": {
    "alert_id": "ALT-00120",
    "timestamp": "2026-08-24T09:28:33.493Z",
    "entity_id": "CSE-002",
    "asset_id": "AST-002-17",
    "severity": "MEDIUM",
    "category": "Data Exfiltration",
    "source_ip": "192.168.154.40",
    "destination_ip": "10.0.138.168",
    "status": "CLOSED"
  },
  "ALT-00121": {
    "alert_id": "ALT-00121",
    "timestamp": "2026-09-01T08:30:46.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-09",
    "severity": "LOW",
    "category": "Malware",
    "source_ip": "192.168.55.165",
    "destination_ip": "10.0.228.13",
    "status": "CLOSED"
  },
  "ALT-00122": {
    "alert_id": "ALT-00122",
    "timestamp": "2026-08-14T05:51:53.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-15",
    "severity": "MEDIUM",
    "category": "Ransomware",
    "source_ip": "192.168.156.96",
    "destination_ip": "10.0.44.90",
    "status": "CLOSED"
  },
  "ALT-00123": {
    "alert_id": "ALT-00123",
    "timestamp": "2026-08-29T08:59:40.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-13",
    "severity": "HIGH",
    "category": "Phishing",
    "source_ip": "192.168.65.20",
    "destination_ip": "10.0.58.51",
    "status": "CLOSED"
  },
  "ALT-00124": {
    "alert_id": "ALT-00124",
    "timestamp": "2026-07-19T20:34:06.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-23",
    "severity": "MEDIUM",
    "category": "Data Exfiltration",
    "source_ip": "192.168.247.45",
    "destination_ip": "10.0.47.219",
    "status": "CLOSED"
  },
  "ALT-00125": {
    "alert_id": "ALT-00125",
    "timestamp": "2026-08-30T11:15:13.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-16",
    "severity": "MEDIUM",
    "category": "DDoS",
    "source_ip": "192.168.83.183",
    "destination_ip": "10.0.89.2",
    "status": "CLOSED"
  },
  "ALT-00126": {
    "alert_id": "ALT-00126",
    "timestamp": "2026-09-17T15:43:00.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-01",
    "severity": "LOW",
    "category": "DDoS",
    "source_ip": "192.168.190.211",
    "destination_ip": "10.0.253.217",
    "status": "CLOSED"
  },
  "ALT-00127": {
    "alert_id": "ALT-00127",
    "timestamp": "2026-08-04T12:37:26.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-12",
    "severity": "MEDIUM",
    "category": "Privilege Escalation",
    "source_ip": "192.168.69.207",
    "destination_ip": "10.0.204.224",
    "status": "CLOSED"
  },
  "ALT-00128": {
    "alert_id": "ALT-00128",
    "timestamp": "2026-08-25T20:38:33.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-19",
    "severity": "LOW",
    "category": "DDoS",
    "source_ip": "192.168.9.240",
    "destination_ip": "10.0.245.82",
    "status": "CLOSED"
  },
  "ALT-00129": {
    "alert_id": "ALT-00129",
    "timestamp": "2026-08-27T02:26:20.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-10",
    "severity": "CRITICAL",
    "category": "Privilege Escalation",
    "source_ip": "192.168.86.230",
    "destination_ip": "10.0.248.69",
    "status": "CLOSED"
  },
  "ALT-00130": {
    "alert_id": "ALT-00130",
    "timestamp": "2026-08-10T13:54:40.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-16",
    "severity": "MEDIUM",
    "category": "Unauthorized Access",
    "source_ip": "192.168.225.18",
    "destination_ip": "10.0.113.212",
    "status": "CLOSED"
  },
  "ALT-00131": {
    "alert_id": "ALT-00131",
    "timestamp": "2026-07-06T11:29:06.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-23",
    "severity": "MEDIUM",
    "category": "Unauthorized Access",
    "source_ip": "192.168.97.87",
    "destination_ip": "10.0.160.112",
    "status": "CLOSED"
  },
  "ALT-00132": {
    "alert_id": "ALT-00132",
    "timestamp": "2026-08-02T12:10:13.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-08",
    "severity": "HIGH",
    "category": "Malware",
    "source_ip": "192.168.161.127",
    "destination_ip": "10.0.203.166",
    "status": "CLOSED"
  },
  "ALT-00133": {
    "alert_id": "ALT-00133",
    "timestamp": "2026-09-15T02:38:00.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-20",
    "severity": "CRITICAL",
    "category": "Data Exfiltration",
    "source_ip": "192.168.183.85",
    "destination_ip": "10.0.227.85",
    "status": "CLOSED"
  },
  "ALT-00134": {
    "alert_id": "ALT-00134",
    "timestamp": "2026-08-02T07:06:20.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-04",
    "severity": "LOW",
    "category": "Phishing",
    "source_ip": "192.168.209.65",
    "destination_ip": "10.0.163.9",
    "status": "CLOSED"
  },
  "ALT-00135": {
    "alert_id": "ALT-00135",
    "timestamp": "2026-08-01T05:20:46.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-14",
    "severity": "CRITICAL",
    "category": "Malware",
    "source_ip": "192.168.230.192",
    "destination_ip": "10.0.122.213",
    "status": "CLOSED"
  },
  "ALT-00136": {
    "alert_id": "ALT-00136",
    "timestamp": "2026-08-13T00:25:46.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-10",
    "severity": "HIGH",
    "category": "DDoS",
    "source_ip": "192.168.220.5",
    "destination_ip": "10.0.48.201",
    "status": "CLOSED"
  },
  "ALT-00137": {
    "alert_id": "ALT-00137",
    "timestamp": "2026-07-06T07:46:53.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-07",
    "severity": "CRITICAL",
    "category": "Malware",
    "source_ip": "192.168.110.249",
    "destination_ip": "10.0.106.110",
    "status": "CLOSED"
  },
  "ALT-00138": {
    "alert_id": "ALT-00138",
    "timestamp": "2026-08-31T18:55:13.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-23",
    "severity": "CRITICAL",
    "category": "Ransomware",
    "source_ip": "192.168.174.135",
    "destination_ip": "10.0.15.101",
    "status": "CLOSED"
  },
  "ALT-00139": {
    "alert_id": "ALT-00139",
    "timestamp": "2026-07-21T13:03:33.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-04",
    "severity": "CRITICAL",
    "category": "DDoS",
    "source_ip": "192.168.83.156",
    "destination_ip": "10.0.8.41",
    "status": "CLOSED"
  },
  "ALT-00140": {
    "alert_id": "ALT-00140",
    "timestamp": "2026-09-08T02:11:53.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-23",
    "severity": "HIGH",
    "category": "Privilege Escalation",
    "source_ip": "192.168.111.76",
    "destination_ip": "10.0.108.208",
    "status": "CLOSED"
  },
  "ALT-00141": {
    "alert_id": "ALT-00141",
    "timestamp": "2026-09-11T13:19:40.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-09",
    "severity": "LOW",
    "category": "DDoS",
    "source_ip": "192.168.100.25",
    "destination_ip": "10.0.174.79",
    "status": "CLOSED"
  },
  "ALT-00142": {
    "alert_id": "ALT-00142",
    "timestamp": "2026-09-09T08:54:06.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-21",
    "severity": "MEDIUM",
    "category": "Privilege Escalation",
    "source_ip": "192.168.164.45",
    "destination_ip": "10.0.101.214",
    "status": "CLOSED"
  },
  "ALT-00143": {
    "alert_id": "ALT-00143",
    "timestamp": "2026-08-20T07:35:13.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-14",
    "severity": "MEDIUM",
    "category": "Unauthorized Access",
    "source_ip": "192.168.24.235",
    "destination_ip": "10.0.53.106",
    "status": "CLOSED"
  },
  "ALT-00144": {
    "alert_id": "ALT-00144",
    "timestamp": "2026-07-27T20:03:00.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-03",
    "severity": "CRITICAL",
    "category": "Malware",
    "source_ip": "192.168.126.201",
    "destination_ip": "10.0.185.146",
    "status": "CLOSED"
  },
  "ALT-00145": {
    "alert_id": "ALT-00145",
    "timestamp": "2026-07-20T21:31:20.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-16",
    "severity": "LOW",
    "category": "DDoS",
    "source_ip": "192.168.107.243",
    "destination_ip": "10.0.34.89",
    "status": "CLOSED"
  },
  "ALT-00146": {
    "alert_id": "ALT-00146",
    "timestamp": "2026-08-25T05:36:20.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-20",
    "severity": "HIGH",
    "category": "Unauthorized Access",
    "source_ip": "192.168.72.109",
    "destination_ip": "10.0.5.31",
    "status": "CLOSED"
  },
  "ALT-00147": {
    "alert_id": "ALT-00147",
    "timestamp": "2026-07-02T15:50:46.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-15",
    "severity": "CRITICAL",
    "category": "Privilege Escalation",
    "source_ip": "192.168.199.87",
    "destination_ip": "10.0.70.87",
    "status": "CLOSED"
  },
  "ALT-00148": {
    "alert_id": "ALT-00148",
    "timestamp": "2026-07-20T00:39:06.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-09",
    "severity": "MEDIUM",
    "category": "Phishing",
    "source_ip": "192.168.141.208",
    "destination_ip": "10.0.3.174",
    "status": "CLOSED"
  },
  "ALT-00149": {
    "alert_id": "ALT-00149",
    "timestamp": "2026-08-10T05:20:13.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-01",
    "severity": "MEDIUM",
    "category": "Phishing",
    "source_ip": "192.168.245.4",
    "destination_ip": "10.0.200.184",
    "status": "CLOSED"
  },
  "ALT-00150": {
    "alert_id": "ALT-00150",
    "timestamp": "2026-08-27T23:48:00.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-13",
    "severity": "HIGH",
    "category": "Phishing",
    "source_ip": "192.168.81.88",
    "destination_ip": "10.0.66.85",
    "status": "CLOSED"
  },
  "ALT-00151": {
    "alert_id": "ALT-00151",
    "timestamp": "2026-09-02T10:42:26.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-18",
    "severity": "HIGH",
    "category": "Phishing",
    "source_ip": "192.168.2.111",
    "destination_ip": "10.0.114.91",
    "status": "CLOSED"
  },
  "ALT-00152": {
    "alert_id": "ALT-00152",
    "timestamp": "2026-08-04T08:43:33.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-15",
    "severity": "CRITICAL",
    "category": "Unauthorized Access",
    "source_ip": "192.168.124.228",
    "destination_ip": "10.0.225.90",
    "status": "CLOSED"
  },
  "ALT-00153": {
    "alert_id": "ALT-00153",
    "timestamp": "2026-08-05T09:51:53.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-21",
    "severity": "CRITICAL",
    "category": "Phishing",
    "source_ip": "192.168.187.99",
    "destination_ip": "10.0.189.37",
    "status": "CLOSED"
  },
  "ALT-00154": {
    "alert_id": "ALT-00154",
    "timestamp": "2026-08-13T18:00:13.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-19",
    "severity": "HIGH",
    "category": "Phishing",
    "source_ip": "192.168.137.147",
    "destination_ip": "10.0.26.231",
    "status": "CLOSED"
  },
  "ALT-00155": {
    "alert_id": "ALT-00155",
    "timestamp": "2026-09-27T04:28:00.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-23",
    "severity": "HIGH",
    "category": "DDoS",
    "source_ip": "192.168.190.249",
    "destination_ip": "10.0.137.10",
    "status": "CLOSED"
  },
  "ALT-00156": {
    "alert_id": "ALT-00156",
    "timestamp": "2026-09-09T07:22:26.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-06",
    "severity": "LOW",
    "category": "DDoS",
    "source_ip": "192.168.17.64",
    "destination_ip": "10.0.34.91",
    "status": "CLOSED"
  },
  "ALT-00157": {
    "alert_id": "ALT-00157",
    "timestamp": "2026-07-28T21:23:33.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-07",
    "severity": "LOW",
    "category": "Privilege Escalation",
    "source_ip": "192.168.158.172",
    "destination_ip": "10.0.22.24",
    "status": "CLOSED"
  },
  "ALT-00158": {
    "alert_id": "ALT-00158",
    "timestamp": "2026-08-25T09:11:20.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-17",
    "severity": "LOW",
    "category": "Privilege Escalation",
    "source_ip": "192.168.182.235",
    "destination_ip": "10.0.227.86",
    "status": "CLOSED"
  },
  "ALT-00159": {
    "alert_id": "ALT-00159",
    "timestamp": "2026-07-09T05:16:20.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-22",
    "severity": "HIGH",
    "category": "Phishing",
    "source_ip": "192.168.168.122",
    "destination_ip": "10.0.219.49",
    "status": "CLOSED"
  },
  "ALT-00160": {
    "alert_id": "ALT-00160",
    "timestamp": "2026-07-17T07:30:46.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-19",
    "severity": "HIGH",
    "category": "Ransomware",
    "source_ip": "192.168.16.48",
    "destination_ip": "10.0.119.251",
    "status": "CLOSED"
  },
  "ALT-00161": {
    "alert_id": "ALT-00161",
    "timestamp": "2026-08-03T04:51:53.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-10",
    "severity": "LOW",
    "category": "Data Exfiltration",
    "source_ip": "192.168.132.164",
    "destination_ip": "10.0.34.87",
    "status": "CLOSED"
  },
  "ALT-00162": {
    "alert_id": "ALT-00162",
    "timestamp": "2026-07-24T07:59:40.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-01",
    "severity": "MEDIUM",
    "category": "DDoS",
    "source_ip": "192.168.140.102",
    "destination_ip": "10.0.233.147",
    "status": "CLOSED"
  },
  "ALT-00163": {
    "alert_id": "ALT-00163",
    "timestamp": "2026-09-16T19:34:06.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-13",
    "severity": "CRITICAL",
    "category": "Unauthorized Access",
    "source_ip": "192.168.251.227",
    "destination_ip": "10.0.235.244",
    "status": "CLOSED"
  },
  "ALT-00164": {
    "alert_id": "ALT-00164",
    "timestamp": "2026-08-05T14:22:26.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-10",
    "severity": "MEDIUM",
    "category": "Malware",
    "source_ip": "192.168.39.121",
    "destination_ip": "10.0.42.220",
    "status": "CLOSED"
  },
  "ALT-00165": {
    "alert_id": "ALT-00165",
    "timestamp": "2026-07-19T04:23:33.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-18",
    "severity": "MEDIUM",
    "category": "Phishing",
    "source_ip": "192.168.81.215",
    "destination_ip": "10.0.101.53",
    "status": "CLOSED"
  },
  "ALT-00166": {
    "alert_id": "ALT-00166",
    "timestamp": "2026-08-10T16:11:20.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-03",
    "severity": "CRITICAL",
    "category": "Unauthorized Access",
    "source_ip": "192.168.176.179",
    "destination_ip": "10.0.37.186",
    "status": "CLOSED"
  },
  "ALT-00167": {
    "alert_id": "ALT-00167",
    "timestamp": "2026-08-18T12:39:40.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-09",
    "severity": "HIGH",
    "category": "Ransomware",
    "source_ip": "192.168.65.164",
    "destination_ip": "10.0.35.143",
    "status": "CLOSED"
  },
  "ALT-00168": {
    "alert_id": "ALT-00168",
    "timestamp": "2026-08-19T16:14:06.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-14",
    "severity": "LOW",
    "category": "Unauthorized Access",
    "source_ip": "192.168.252.251",
    "destination_ip": "10.0.56.231",
    "status": "CLOSED"
  },
  "ALT-00169": {
    "alert_id": "ALT-00169",
    "timestamp": "2026-07-27T11:19:06.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-24",
    "severity": "HIGH",
    "category": "Ransomware",
    "source_ip": "192.168.228.134",
    "destination_ip": "10.0.138.205",
    "status": "CLOSED"
  },
  "ALT-00170": {
    "alert_id": "ALT-00170",
    "timestamp": "2026-08-16T09:24:06.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-04",
    "severity": "LOW",
    "category": "Privilege Escalation",
    "source_ip": "192.168.135.12",
    "destination_ip": "10.0.22.46",
    "status": "CLOSED"
  },
  "ALT-00171": {
    "alert_id": "ALT-00171",
    "timestamp": "2026-07-24T20:05:13.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-20",
    "severity": "HIGH",
    "category": "Malware",
    "source_ip": "192.168.158.25",
    "destination_ip": "10.0.223.102",
    "status": "CLOSED"
  },
  "ALT-00172": {
    "alert_id": "ALT-00172",
    "timestamp": "2026-07-14T23:10:13.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-01",
    "severity": "HIGH",
    "category": "Privilege Escalation",
    "source_ip": "192.168.115.173",
    "destination_ip": "10.0.172.142",
    "status": "CLOSED"
  },
  "ALT-00173": {
    "alert_id": "ALT-00173",
    "timestamp": "2026-08-02T13:38:00.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-06",
    "severity": "CRITICAL",
    "category": "Data Exfiltration",
    "source_ip": "192.168.237.145",
    "destination_ip": "10.0.125.160",
    "status": "CLOSED"
  },
  "ALT-00174": {
    "alert_id": "ALT-00174",
    "timestamp": "2026-07-27T06:06:20.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-01",
    "severity": "HIGH",
    "category": "Data Exfiltration",
    "source_ip": "192.168.114.232",
    "destination_ip": "10.0.168.190",
    "status": "CLOSED"
  },
  "ALT-00175": {
    "alert_id": "ALT-00175",
    "timestamp": "2026-07-31T04:20:46.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-12",
    "severity": "CRITICAL",
    "category": "DDoS",
    "source_ip": "192.168.64.203",
    "destination_ip": "10.0.141.68",
    "status": "CLOSED"
  },
  "ALT-00176": {
    "alert_id": "ALT-00176",
    "timestamp": "2026-07-29T19:09:06.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-13",
    "severity": "CRITICAL",
    "category": "Unauthorized Access",
    "source_ip": "192.168.80.16",
    "destination_ip": "10.0.148.103",
    "status": "CLOSED"
  },
  "ALT-00177": {
    "alert_id": "ALT-00177",
    "timestamp": "2026-08-02T04:57:26.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-05",
    "severity": "MEDIUM",
    "category": "DDoS",
    "source_ip": "192.168.145.82",
    "destination_ip": "10.0.20.38",
    "status": "CLOSED"
  },
  "ALT-00178": {
    "alert_id": "ALT-00178",
    "timestamp": "2026-09-06T18:02:26.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-18",
    "severity": "MEDIUM",
    "category": "Unauthorized Access",
    "source_ip": "192.168.246.47",
    "destination_ip": "10.0.140.9",
    "status": "CLOSED"
  },
  "ALT-00179": {
    "alert_id": "ALT-00179",
    "timestamp": "2026-09-01T00:03:33.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-13",
    "severity": "LOW",
    "category": "Ransomware",
    "source_ip": "192.168.207.117",
    "destination_ip": "10.0.147.187",
    "status": "CLOSED"
  },
  "ALT-00180": {
    "alert_id": "ALT-00180",
    "timestamp": "2026-08-16T03:51:20.159Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-20",
    "severity": "LOW",
    "category": "Ransomware",
    "source_ip": "192.168.165.86",
    "destination_ip": "10.0.144.98",
    "status": "CLOSED"
  },
  "ALT-00181": {
    "alert_id": "ALT-00181",
    "timestamp": "2026-07-02T08:05:46.826Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-06",
    "severity": "MEDIUM",
    "category": "Privilege Escalation",
    "source_ip": "192.168.104.175",
    "destination_ip": "10.0.107.93",
    "status": "CLOSED"
  },
  "ALT-00182": {
    "alert_id": "ALT-00182",
    "timestamp": "2026-07-16T07:26:53.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-01",
    "severity": "LOW",
    "category": "Unauthorized Access",
    "source_ip": "192.168.112.168",
    "destination_ip": "10.0.226.34",
    "status": "CLOSED"
  },
  "ALT-00183": {
    "alert_id": "ALT-00183",
    "timestamp": "2026-08-27T07:31:53.493Z",
    "entity_id": "CSE-003",
    "asset_id": "AST-003-14",
    "severity": "CRITICAL",
    "category": "Privilege Escalation",
    "source_ip": "192.168.68.166",
    "destination_ip": "10.0.131.137",
    "status": "CLOSED"
  },
  "ALT-00184": {
    "alert_id": "ALT-00184",
    "timestamp": "2026-07-27T20:37:26.826Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-02",
    "severity": "CRITICAL",
    "category": "DDoS",
    "source_ip": "192.168.246.157",
    "destination_ip": "10.0.12.230",
    "status": "CLOSED"
  },
  "ALT-00185": {
    "alert_id": "ALT-00185",
    "timestamp": "2026-09-08T21:42:26.826Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-14",
    "severity": "HIGH",
    "category": "Data Exfiltration",
    "source_ip": "192.168.112.143",
    "destination_ip": "10.0.153.223",
    "status": "CLOSED"
  },
  "ALT-00186": {
    "alert_id": "ALT-00186",
    "timestamp": "2026-09-14T19:43:33.493Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-19",
    "severity": "LOW",
    "category": "Privilege Escalation",
    "source_ip": "192.168.249.190",
    "destination_ip": "10.0.108.236",
    "status": "CLOSED"
  },
  "ALT-00187": {
    "alert_id": "ALT-00187",
    "timestamp": "2026-07-22T15:31:20.159Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-04",
    "severity": "CRITICAL",
    "category": "Data Exfiltration",
    "source_ip": "192.168.70.163",
    "destination_ip": "10.0.167.179",
    "status": "CLOSED"
  },
  "ALT-00188": {
    "alert_id": "ALT-00188",
    "timestamp": "2026-09-23T11:59:40.159Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-01",
    "severity": "HIGH",
    "category": "Privilege Escalation",
    "source_ip": "192.168.200.219",
    "destination_ip": "10.0.66.122",
    "status": "CLOSED"
  },
  "ALT-00189": {
    "alert_id": "ALT-00189",
    "timestamp": "2026-09-27T23:34:06.826Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-19",
    "severity": "CRITICAL",
    "category": "Ransomware",
    "source_ip": "192.168.255.117",
    "destination_ip": "10.0.182.162",
    "status": "CLOSED"
  },
  "ALT-00190": {
    "alert_id": "ALT-00190",
    "timestamp": "2026-09-15T18:22:26.826Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-04",
    "severity": "LOW",
    "category": "Data Exfiltration",
    "source_ip": "192.168.127.96",
    "destination_ip": "10.0.74.223",
    "status": "CLOSED"
  },
  "ALT-00191": {
    "alert_id": "ALT-00191",
    "timestamp": "2026-09-08T08:23:33.493Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-13",
    "severity": "MEDIUM",
    "category": "DDoS",
    "source_ip": "192.168.27.133",
    "destination_ip": "10.0.161.170",
    "status": "CLOSED"
  },
  "ALT-00192": {
    "alert_id": "ALT-00192",
    "timestamp": "2026-09-10T20:11:20.159Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-15",
    "severity": "MEDIUM",
    "category": "Data Exfiltration",
    "source_ip": "192.168.151.211",
    "destination_ip": "10.0.40.76",
    "status": "CLOSED"
  },
  "ALT-00193": {
    "alert_id": "ALT-00193",
    "timestamp": "2026-08-17T04:16:20.159Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-05",
    "severity": "HIGH",
    "category": "Phishing",
    "source_ip": "192.168.201.161",
    "destination_ip": "10.0.96.103",
    "status": "CLOSED"
  },
  "ALT-00194": {
    "alert_id": "ALT-00194",
    "timestamp": "2026-08-30T06:30:46.826Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-04",
    "severity": "MEDIUM",
    "category": "Data Exfiltration",
    "source_ip": "192.168.233.187",
    "destination_ip": "10.0.10.234",
    "status": "CLOSED"
  },
  "ALT-00195": {
    "alert_id": "ALT-00195",
    "timestamp": "2026-07-23T03:51:53.493Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-04",
    "severity": "CRITICAL",
    "category": "Unauthorized Access",
    "source_ip": "192.168.107.232",
    "destination_ip": "10.0.24.84",
    "status": "CLOSED"
  },
  "ALT-00196": {
    "alert_id": "ALT-00196",
    "timestamp": "2026-09-14T12:00:13.493Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-12",
    "severity": "LOW",
    "category": "Privilege Escalation",
    "source_ip": "192.168.184.152",
    "destination_ip": "10.0.243.151",
    "status": "CLOSED"
  },
  "ALT-00197": {
    "alert_id": "ALT-00197",
    "timestamp": "2026-06-30T22:28:00.159Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-09",
    "severity": "MEDIUM",
    "category": "Ransomware",
    "source_ip": "192.168.153.169",
    "destination_ip": "10.0.15.100",
    "status": "CLOSED"
  },
  "ALT-00198": {
    "alert_id": "ALT-00198",
    "timestamp": "2026-07-30T00:33:00.159Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-01",
    "severity": "MEDIUM",
    "category": "Data Exfiltration",
    "source_ip": "192.168.142.101",
    "destination_ip": "10.0.95.195",
    "status": "CLOSED"
  },
  "ALT-00199": {
    "alert_id": "ALT-00199",
    "timestamp": "2026-07-01T17:27:26.826Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-07",
    "severity": "LOW",
    "category": "Phishing",
    "source_ip": "192.168.95.29",
    "destination_ip": "10.0.175.104",
    "status": "CLOSED"
  },
  "ALT-00200": {
    "alert_id": "ALT-00200",
    "timestamp": "2026-07-28T21:28:33.493Z",
    "entity_id": "CSE-004",
    "asset_id": "AST-004-07",
    "severity": "MEDIUM",
    "category": "Malware",
    "source_ip": "192.168.249.50",
    "destination_ip": "10.0.63.8",
    "status": "CLOSED"
  }
};

export const DEMO_ASSETS_SAMPLE = {
  "AST-001-01": {
    "asset_id": "AST-001-01",
    "entity_id": "CSE-001",
    "asset_type": "Router",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-001-02": {
    "asset_id": "AST-001-02",
    "entity_id": "CSE-001",
    "asset_type": "Router",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-001-03": {
    "asset_id": "AST-001-03",
    "entity_id": "CSE-001",
    "asset_type": "Database",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-001-04": {
    "asset_id": "AST-001-04",
    "entity_id": "CSE-001",
    "asset_type": "Firewall",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-001-05": {
    "asset_id": "AST-001-05",
    "entity_id": "CSE-001",
    "asset_type": "Workstation",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-001-06": {
    "asset_id": "AST-001-06",
    "entity_id": "CSE-001",
    "asset_type": "Server",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-001-07": {
    "asset_id": "AST-001-07",
    "entity_id": "CSE-001",
    "asset_type": "Firewall",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-001-08": {
    "asset_id": "AST-001-08",
    "entity_id": "CSE-001",
    "asset_type": "Firewall",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-001-09": {
    "asset_id": "AST-001-09",
    "entity_id": "CSE-001",
    "asset_type": "ICS",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-001-10": {
    "asset_id": "AST-001-10",
    "entity_id": "CSE-001",
    "asset_type": "SCADA",
    "criticality": "HIGH",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-001-11": {
    "asset_id": "AST-001-11",
    "entity_id": "CSE-001",
    "asset_type": "Server",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-001-12": {
    "asset_id": "AST-001-12",
    "entity_id": "CSE-001",
    "asset_type": "Server",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-001-13": {
    "asset_id": "AST-001-13",
    "entity_id": "CSE-001",
    "asset_type": "Workstation",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-001-14": {
    "asset_id": "AST-001-14",
    "entity_id": "CSE-001",
    "asset_type": "Firewall",
    "criticality": "HIGH",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-001-15": {
    "asset_id": "AST-001-15",
    "entity_id": "CSE-001",
    "asset_type": "Server",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-001-16": {
    "asset_id": "AST-001-16",
    "entity_id": "CSE-001",
    "asset_type": "Server",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-001-17": {
    "asset_id": "AST-001-17",
    "entity_id": "CSE-001",
    "asset_type": "Router",
    "criticality": "HIGH",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-001-18": {
    "asset_id": "AST-001-18",
    "entity_id": "CSE-001",
    "asset_type": "ICS",
    "criticality": "HIGH",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-001-19": {
    "asset_id": "AST-001-19",
    "entity_id": "CSE-001",
    "asset_type": "Router",
    "criticality": "LOW",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-001-20": {
    "asset_id": "AST-001-20",
    "entity_id": "CSE-001",
    "asset_type": "Router",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-001-21": {
    "asset_id": "AST-001-21",
    "entity_id": "CSE-001",
    "asset_type": "Router",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-001-22": {
    "asset_id": "AST-001-22",
    "entity_id": "CSE-001",
    "asset_type": "Router",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-001-23": {
    "asset_id": "AST-001-23",
    "entity_id": "CSE-001",
    "asset_type": "Firewall",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-002-01": {
    "asset_id": "AST-002-01",
    "entity_id": "CSE-002",
    "asset_type": "SCADA",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-002-02": {
    "asset_id": "AST-002-02",
    "entity_id": "CSE-002",
    "asset_type": "SCADA",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-002-03": {
    "asset_id": "AST-002-03",
    "entity_id": "CSE-002",
    "asset_type": "Firewall",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-002-04": {
    "asset_id": "AST-002-04",
    "entity_id": "CSE-002",
    "asset_type": "ICS",
    "criticality": "HIGH",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-002-05": {
    "asset_id": "AST-002-05",
    "entity_id": "CSE-002",
    "asset_type": "Firewall",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-002-06": {
    "asset_id": "AST-002-06",
    "entity_id": "CSE-002",
    "asset_type": "Server",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-002-07": {
    "asset_id": "AST-002-07",
    "entity_id": "CSE-002",
    "asset_type": "ICS",
    "criticality": "HIGH",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-002-08": {
    "asset_id": "AST-002-08",
    "entity_id": "CSE-002",
    "asset_type": "Server",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-002-09": {
    "asset_id": "AST-002-09",
    "entity_id": "CSE-002",
    "asset_type": "Firewall",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-002-10": {
    "asset_id": "AST-002-10",
    "entity_id": "CSE-002",
    "asset_type": "SCADA",
    "criticality": "HIGH",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-002-11": {
    "asset_id": "AST-002-11",
    "entity_id": "CSE-002",
    "asset_type": "Router",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-002-12": {
    "asset_id": "AST-002-12",
    "entity_id": "CSE-002",
    "asset_type": "Workstation",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-002-13": {
    "asset_id": "AST-002-13",
    "entity_id": "CSE-002",
    "asset_type": "Firewall",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-002-14": {
    "asset_id": "AST-002-14",
    "entity_id": "CSE-002",
    "asset_type": "Database",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-002-15": {
    "asset_id": "AST-002-15",
    "entity_id": "CSE-002",
    "asset_type": "SCADA",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-002-16": {
    "asset_id": "AST-002-16",
    "entity_id": "CSE-002",
    "asset_type": "Server",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-002-17": {
    "asset_id": "AST-002-17",
    "entity_id": "CSE-002",
    "asset_type": "Firewall",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-002-18": {
    "asset_id": "AST-002-18",
    "entity_id": "CSE-002",
    "asset_type": "ICS",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-002-19": {
    "asset_id": "AST-002-19",
    "entity_id": "CSE-002",
    "asset_type": "ICS",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-002-20": {
    "asset_id": "AST-002-20",
    "entity_id": "CSE-002",
    "asset_type": "ICS",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-002-21": {
    "asset_id": "AST-002-21",
    "entity_id": "CSE-002",
    "asset_type": "ICS",
    "criticality": "HIGH",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-002-22": {
    "asset_id": "AST-002-22",
    "entity_id": "CSE-002",
    "asset_type": "ICS",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-002-23": {
    "asset_id": "AST-002-23",
    "entity_id": "CSE-002",
    "asset_type": "SCADA",
    "criticality": "HIGH",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-002-24": {
    "asset_id": "AST-002-24",
    "entity_id": "CSE-002",
    "asset_type": "Router",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-002-25": {
    "asset_id": "AST-002-25",
    "entity_id": "CSE-002",
    "asset_type": "Database",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-003-01": {
    "asset_id": "AST-003-01",
    "entity_id": "CSE-003",
    "asset_type": "SCADA",
    "criticality": "HIGH",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-003-02": {
    "asset_id": "AST-003-02",
    "entity_id": "CSE-003",
    "asset_type": "Firewall",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-003-03": {
    "asset_id": "AST-003-03",
    "entity_id": "CSE-003",
    "asset_type": "ICS",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-003-04": {
    "asset_id": "AST-003-04",
    "entity_id": "CSE-003",
    "asset_type": "Database",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-003-05": {
    "asset_id": "AST-003-05",
    "entity_id": "CSE-003",
    "asset_type": "Database",
    "criticality": "HIGH",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-003-06": {
    "asset_id": "AST-003-06",
    "entity_id": "CSE-003",
    "asset_type": "Database",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-003-07": {
    "asset_id": "AST-003-07",
    "entity_id": "CSE-003",
    "asset_type": "ICS",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-003-08": {
    "asset_id": "AST-003-08",
    "entity_id": "CSE-003",
    "asset_type": "Workstation",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-003-09": {
    "asset_id": "AST-003-09",
    "entity_id": "CSE-003",
    "asset_type": "Server",
    "criticality": "HIGH",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-003-10": {
    "asset_id": "AST-003-10",
    "entity_id": "CSE-003",
    "asset_type": "Workstation",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-003-11": {
    "asset_id": "AST-003-11",
    "entity_id": "CSE-003",
    "asset_type": "Router",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-003-12": {
    "asset_id": "AST-003-12",
    "entity_id": "CSE-003",
    "asset_type": "Database",
    "criticality": "LOW",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-003-13": {
    "asset_id": "AST-003-13",
    "entity_id": "CSE-003",
    "asset_type": "Workstation",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-003-14": {
    "asset_id": "AST-003-14",
    "entity_id": "CSE-003",
    "asset_type": "ICS",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-003-15": {
    "asset_id": "AST-003-15",
    "entity_id": "CSE-003",
    "asset_type": "Server",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-003-16": {
    "asset_id": "AST-003-16",
    "entity_id": "CSE-003",
    "asset_type": "Database",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-003-17": {
    "asset_id": "AST-003-17",
    "entity_id": "CSE-003",
    "asset_type": "Workstation",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-003-18": {
    "asset_id": "AST-003-18",
    "entity_id": "CSE-003",
    "asset_type": "Server",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-003-19": {
    "asset_id": "AST-003-19",
    "entity_id": "CSE-003",
    "asset_type": "Router",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-003-20": {
    "asset_id": "AST-003-20",
    "entity_id": "CSE-003",
    "asset_type": "ICS",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-003-21": {
    "asset_id": "AST-003-21",
    "entity_id": "CSE-003",
    "asset_type": "Router",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-003-22": {
    "asset_id": "AST-003-22",
    "entity_id": "CSE-003",
    "asset_type": "Database",
    "criticality": "HIGH",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-003-23": {
    "asset_id": "AST-003-23",
    "entity_id": "CSE-003",
    "asset_type": "Router",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-003-24": {
    "asset_id": "AST-003-24",
    "entity_id": "CSE-003",
    "asset_type": "Server",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-004-01": {
    "asset_id": "AST-004-01",
    "entity_id": "CSE-004",
    "asset_type": "Firewall",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-004-02": {
    "asset_id": "AST-004-02",
    "entity_id": "CSE-004",
    "asset_type": "Workstation",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-004-03": {
    "asset_id": "AST-004-03",
    "entity_id": "CSE-004",
    "asset_type": "Router",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-004-04": {
    "asset_id": "AST-004-04",
    "entity_id": "CSE-004",
    "asset_type": "SCADA",
    "criticality": "HIGH",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-004-05": {
    "asset_id": "AST-004-05",
    "entity_id": "CSE-004",
    "asset_type": "SCADA",
    "criticality": "HIGH",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-004-06": {
    "asset_id": "AST-004-06",
    "entity_id": "CSE-004",
    "asset_type": "Server",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-004-07": {
    "asset_id": "AST-004-07",
    "entity_id": "CSE-004",
    "asset_type": "Firewall",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-004-08": {
    "asset_id": "AST-004-08",
    "entity_id": "CSE-004",
    "asset_type": "Firewall",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-004-09": {
    "asset_id": "AST-004-09",
    "entity_id": "CSE-004",
    "asset_type": "Firewall",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-004-10": {
    "asset_id": "AST-004-10",
    "entity_id": "CSE-004",
    "asset_type": "Database",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-004-11": {
    "asset_id": "AST-004-11",
    "entity_id": "CSE-004",
    "asset_type": "Router",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-004-12": {
    "asset_id": "AST-004-12",
    "entity_id": "CSE-004",
    "asset_type": "Firewall",
    "criticality": "HIGH",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-004-13": {
    "asset_id": "AST-004-13",
    "entity_id": "CSE-004",
    "asset_type": "Workstation",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-004-14": {
    "asset_id": "AST-004-14",
    "entity_id": "CSE-004",
    "asset_type": "Server",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-004-15": {
    "asset_id": "AST-004-15",
    "entity_id": "CSE-004",
    "asset_type": "Workstation",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-004-16": {
    "asset_id": "AST-004-16",
    "entity_id": "CSE-004",
    "asset_type": "Firewall",
    "criticality": "HIGH",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-004-17": {
    "asset_id": "AST-004-17",
    "entity_id": "CSE-004",
    "asset_type": "Workstation",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-004-18": {
    "asset_id": "AST-004-18",
    "entity_id": "CSE-004",
    "asset_type": "Database",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-004-19": {
    "asset_id": "AST-004-19",
    "entity_id": "CSE-004",
    "asset_type": "Router",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-005-01": {
    "asset_id": "AST-005-01",
    "entity_id": "CSE-005",
    "asset_type": "ICS",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-005-02": {
    "asset_id": "AST-005-02",
    "entity_id": "CSE-005",
    "asset_type": "Server",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-005-03": {
    "asset_id": "AST-005-03",
    "entity_id": "CSE-005",
    "asset_type": "Workstation",
    "criticality": "LOW",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-005-04": {
    "asset_id": "AST-005-04",
    "entity_id": "CSE-005",
    "asset_type": "Database",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-005-05": {
    "asset_id": "AST-005-05",
    "entity_id": "CSE-005",
    "asset_type": "SCADA",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-005-06": {
    "asset_id": "AST-005-06",
    "entity_id": "CSE-005",
    "asset_type": "ICS",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-005-07": {
    "asset_id": "AST-005-07",
    "entity_id": "CSE-005",
    "asset_type": "SCADA",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-005-08": {
    "asset_id": "AST-005-08",
    "entity_id": "CSE-005",
    "asset_type": "Database",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-005-09": {
    "asset_id": "AST-005-09",
    "entity_id": "CSE-005",
    "asset_type": "Router",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-005-10": {
    "asset_id": "AST-005-10",
    "entity_id": "CSE-005",
    "asset_type": "ICS",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-005-11": {
    "asset_id": "AST-005-11",
    "entity_id": "CSE-005",
    "asset_type": "SCADA",
    "criticality": "HIGH",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-005-12": {
    "asset_id": "AST-005-12",
    "entity_id": "CSE-005",
    "asset_type": "SCADA",
    "criticality": "LOW",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-005-13": {
    "asset_id": "AST-005-13",
    "entity_id": "CSE-005",
    "asset_type": "SCADA",
    "criticality": "HIGH",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-005-14": {
    "asset_id": "AST-005-14",
    "entity_id": "CSE-005",
    "asset_type": "Workstation",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-005-15": {
    "asset_id": "AST-005-15",
    "entity_id": "CSE-005",
    "asset_type": "Server",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-005-16": {
    "asset_id": "AST-005-16",
    "entity_id": "CSE-005",
    "asset_type": "Firewall",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-005-17": {
    "asset_id": "AST-005-17",
    "entity_id": "CSE-005",
    "asset_type": "Firewall",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-005-18": {
    "asset_id": "AST-005-18",
    "entity_id": "CSE-005",
    "asset_type": "Database",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-005-19": {
    "asset_id": "AST-005-19",
    "entity_id": "CSE-005",
    "asset_type": "ICS",
    "criticality": "LOW",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-006-01": {
    "asset_id": "AST-006-01",
    "entity_id": "CSE-006",
    "asset_type": "ICS",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-006-02": {
    "asset_id": "AST-006-02",
    "entity_id": "CSE-006",
    "asset_type": "Router",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-006-03": {
    "asset_id": "AST-006-03",
    "entity_id": "CSE-006",
    "asset_type": "ICS",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-006-04": {
    "asset_id": "AST-006-04",
    "entity_id": "CSE-006",
    "asset_type": "Server",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-006-05": {
    "asset_id": "AST-006-05",
    "entity_id": "CSE-006",
    "asset_type": "Database",
    "criticality": "HIGH",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-006-06": {
    "asset_id": "AST-006-06",
    "entity_id": "CSE-006",
    "asset_type": "Database",
    "criticality": "HIGH",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-006-07": {
    "asset_id": "AST-006-07",
    "entity_id": "CSE-006",
    "asset_type": "Server",
    "criticality": "HIGH",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-006-08": {
    "asset_id": "AST-006-08",
    "entity_id": "CSE-006",
    "asset_type": "Workstation",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-006-09": {
    "asset_id": "AST-006-09",
    "entity_id": "CSE-006",
    "asset_type": "Router",
    "criticality": "HIGH",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-006-10": {
    "asset_id": "AST-006-10",
    "entity_id": "CSE-006",
    "asset_type": "ICS",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-006-11": {
    "asset_id": "AST-006-11",
    "entity_id": "CSE-006",
    "asset_type": "Firewall",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-006-12": {
    "asset_id": "AST-006-12",
    "entity_id": "CSE-006",
    "asset_type": "SCADA",
    "criticality": "HIGH",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-006-13": {
    "asset_id": "AST-006-13",
    "entity_id": "CSE-006",
    "asset_type": "SCADA",
    "criticality": "LOW",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-006-14": {
    "asset_id": "AST-006-14",
    "entity_id": "CSE-006",
    "asset_type": "Router",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-006-15": {
    "asset_id": "AST-006-15",
    "entity_id": "CSE-006",
    "asset_type": "Router",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-006-16": {
    "asset_id": "AST-006-16",
    "entity_id": "CSE-006",
    "asset_type": "Firewall",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-006-17": {
    "asset_id": "AST-006-17",
    "entity_id": "CSE-006",
    "asset_type": "SCADA",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-007-01": {
    "asset_id": "AST-007-01",
    "entity_id": "CSE-007",
    "asset_type": "SCADA",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-08-21T21:26:53.493Z"
  },
  "AST-007-02": {
    "asset_id": "AST-007-02",
    "entity_id": "CSE-007",
    "asset_type": "Firewall",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-08-07T21:26:53.493Z"
  },
  "AST-007-03": {
    "asset_id": "AST-007-03",
    "entity_id": "CSE-007",
    "asset_type": "Database",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-08-21T21:26:53.493Z"
  },
  "AST-007-04": {
    "asset_id": "AST-007-04",
    "entity_id": "CSE-007",
    "asset_type": "Database",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-08-14T21:26:53.493Z"
  },
  "AST-007-05": {
    "asset_id": "AST-007-05",
    "entity_id": "CSE-007",
    "asset_type": "Database",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-007-06": {
    "asset_id": "AST-007-06",
    "entity_id": "CSE-007",
    "asset_type": "Router",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-007-07": {
    "asset_id": "AST-007-07",
    "entity_id": "CSE-007",
    "asset_type": "ICS",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-007-08": {
    "asset_id": "AST-007-08",
    "entity_id": "CSE-007",
    "asset_type": "Router",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-007-09": {
    "asset_id": "AST-007-09",
    "entity_id": "CSE-007",
    "asset_type": "Router",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-007-10": {
    "asset_id": "AST-007-10",
    "entity_id": "CSE-007",
    "asset_type": "Database",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-007-11": {
    "asset_id": "AST-007-11",
    "entity_id": "CSE-007",
    "asset_type": "Workstation",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-007-12": {
    "asset_id": "AST-007-12",
    "entity_id": "CSE-007",
    "asset_type": "Server",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-007-13": {
    "asset_id": "AST-007-13",
    "entity_id": "CSE-007",
    "asset_type": "SCADA",
    "criticality": "LOW",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-007-14": {
    "asset_id": "AST-007-14",
    "entity_id": "CSE-007",
    "asset_type": "Workstation",
    "criticality": "HIGH",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-007-15": {
    "asset_id": "AST-007-15",
    "entity_id": "CSE-007",
    "asset_type": "Workstation",
    "criticality": "HIGH",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-007-16": {
    "asset_id": "AST-007-16",
    "entity_id": "CSE-007",
    "asset_type": "Database",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-007-17": {
    "asset_id": "AST-007-17",
    "entity_id": "CSE-007",
    "asset_type": "Firewall",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-007-18": {
    "asset_id": "AST-007-18",
    "entity_id": "CSE-007",
    "asset_type": "Database",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-007-19": {
    "asset_id": "AST-007-19",
    "entity_id": "CSE-007",
    "asset_type": "Database",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-007-20": {
    "asset_id": "AST-007-20",
    "entity_id": "CSE-007",
    "asset_type": "Server",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-007-21": {
    "asset_id": "AST-007-21",
    "entity_id": "CSE-007",
    "asset_type": "Firewall",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-007-22": {
    "asset_id": "AST-007-22",
    "entity_id": "CSE-007",
    "asset_type": "ICS",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-007-23": {
    "asset_id": "AST-007-23",
    "entity_id": "CSE-007",
    "asset_type": "Workstation",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-007-24": {
    "asset_id": "AST-007-24",
    "entity_id": "CSE-007",
    "asset_type": "SCADA",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-007-25": {
    "asset_id": "AST-007-25",
    "entity_id": "CSE-007",
    "asset_type": "Firewall",
    "criticality": "LOW",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-007-26": {
    "asset_id": "AST-007-26",
    "entity_id": "CSE-007",
    "asset_type": "ICS",
    "criticality": "LOW",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-007-27": {
    "asset_id": "AST-007-27",
    "entity_id": "CSE-007",
    "asset_type": "Database",
    "criticality": "HIGH",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-007-28": {
    "asset_id": "AST-007-28",
    "entity_id": "CSE-007",
    "asset_type": "Server",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-007-29": {
    "asset_id": "AST-007-29",
    "entity_id": "CSE-007",
    "asset_type": "Server",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-007-30": {
    "asset_id": "AST-007-30",
    "entity_id": "CSE-007",
    "asset_type": "Workstation",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-008-01": {
    "asset_id": "AST-008-01",
    "entity_id": "CSE-008",
    "asset_type": "SCADA",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-008-02": {
    "asset_id": "AST-008-02",
    "entity_id": "CSE-008",
    "asset_type": "ICS",
    "criticality": "HIGH",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-008-03": {
    "asset_id": "AST-008-03",
    "entity_id": "CSE-008",
    "asset_type": "Database",
    "criticality": "HIGH",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-008-04": {
    "asset_id": "AST-008-04",
    "entity_id": "CSE-008",
    "asset_type": "Firewall",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-008-05": {
    "asset_id": "AST-008-05",
    "entity_id": "CSE-008",
    "asset_type": "ICS",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-008-06": {
    "asset_id": "AST-008-06",
    "entity_id": "CSE-008",
    "asset_type": "Router",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-008-07": {
    "asset_id": "AST-008-07",
    "entity_id": "CSE-008",
    "asset_type": "ICS",
    "criticality": "HIGH",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-008-08": {
    "asset_id": "AST-008-08",
    "entity_id": "CSE-008",
    "asset_type": "Router",
    "criticality": "LOW",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-008-09": {
    "asset_id": "AST-008-09",
    "entity_id": "CSE-008",
    "asset_type": "Router",
    "criticality": "HIGH",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-008-10": {
    "asset_id": "AST-008-10",
    "entity_id": "CSE-008",
    "asset_type": "Server",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-008-11": {
    "asset_id": "AST-008-11",
    "entity_id": "CSE-008",
    "asset_type": "Server",
    "criticality": "LOW",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-008-12": {
    "asset_id": "AST-008-12",
    "entity_id": "CSE-008",
    "asset_type": "Server",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-008-13": {
    "asset_id": "AST-008-13",
    "entity_id": "CSE-008",
    "asset_type": "Workstation",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-008-14": {
    "asset_id": "AST-008-14",
    "entity_id": "CSE-008",
    "asset_type": "Router",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-008-15": {
    "asset_id": "AST-008-15",
    "entity_id": "CSE-008",
    "asset_type": "Firewall",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-009-01": {
    "asset_id": "AST-009-01",
    "entity_id": "CSE-009",
    "asset_type": "Workstation",
    "criticality": "HIGH",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-009-02": {
    "asset_id": "AST-009-02",
    "entity_id": "CSE-009",
    "asset_type": "Database",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-009-03": {
    "asset_id": "AST-009-03",
    "entity_id": "CSE-009",
    "asset_type": "Database",
    "criticality": "HIGH",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-009-04": {
    "asset_id": "AST-009-04",
    "entity_id": "CSE-009",
    "asset_type": "SCADA",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-009-05": {
    "asset_id": "AST-009-05",
    "entity_id": "CSE-009",
    "asset_type": "Firewall",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-009-06": {
    "asset_id": "AST-009-06",
    "entity_id": "CSE-009",
    "asset_type": "Firewall",
    "criticality": "HIGH",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-009-07": {
    "asset_id": "AST-009-07",
    "entity_id": "CSE-009",
    "asset_type": "Server",
    "criticality": "HIGH",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-009-08": {
    "asset_id": "AST-009-08",
    "entity_id": "CSE-009",
    "asset_type": "Firewall",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-009-09": {
    "asset_id": "AST-009-09",
    "entity_id": "CSE-009",
    "asset_type": "SCADA",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-009-10": {
    "asset_id": "AST-009-10",
    "entity_id": "CSE-009",
    "asset_type": "Firewall",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-009-11": {
    "asset_id": "AST-009-11",
    "entity_id": "CSE-009",
    "asset_type": "Server",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-009-12": {
    "asset_id": "AST-009-12",
    "entity_id": "CSE-009",
    "asset_type": "ICS",
    "criticality": "LOW",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-010-01": {
    "asset_id": "AST-010-01",
    "entity_id": "CSE-010",
    "asset_type": "Router",
    "criticality": "HIGH",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-010-02": {
    "asset_id": "AST-010-02",
    "entity_id": "CSE-010",
    "asset_type": "Workstation",
    "criticality": "LOW",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-010-03": {
    "asset_id": "AST-010-03",
    "entity_id": "CSE-010",
    "asset_type": "Database",
    "criticality": "HIGH",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-010-04": {
    "asset_id": "AST-010-04",
    "entity_id": "CSE-010",
    "asset_type": "SCADA",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-010-05": {
    "asset_id": "AST-010-05",
    "entity_id": "CSE-010",
    "asset_type": "Router",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-010-06": {
    "asset_id": "AST-010-06",
    "entity_id": "CSE-010",
    "asset_type": "SCADA",
    "criticality": "HIGH",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-010-07": {
    "asset_id": "AST-010-07",
    "entity_id": "CSE-010",
    "asset_type": "Firewall",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-010-08": {
    "asset_id": "AST-010-08",
    "entity_id": "CSE-010",
    "asset_type": "ICS",
    "criticality": "MEDIUM",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-010-09": {
    "asset_id": "AST-010-09",
    "entity_id": "CSE-010",
    "asset_type": "Workstation",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-010-10": {
    "asset_id": "AST-010-10",
    "entity_id": "CSE-010",
    "asset_type": "SCADA",
    "criticality": "HIGH",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-010-11": {
    "asset_id": "AST-010-11",
    "entity_id": "CSE-010",
    "asset_type": "Database",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 day",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-010-12": {
    "asset_id": "AST-010-12",
    "entity_id": "CSE-010",
    "asset_type": "ICS",
    "criticality": "LOW",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-010-13": {
    "asset_id": "AST-010-13",
    "entity_id": "CSE-010",
    "asset_type": "SCADA",
    "criticality": "HIGH",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-28T21:26:53.493Z"
  },
  "AST-010-14": {
    "asset_id": "AST-010-14",
    "entity_id": "CSE-010",
    "asset_type": "Firewall",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-27T21:26:53.493Z"
  },
  "AST-010-15": {
    "asset_id": "AST-010-15",
    "entity_id": "CSE-010",
    "asset_type": "Router",
    "criticality": "HIGH",
    "expected_telemetry": "1 week",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  },
  "AST-011-01": {
    "asset_id": "AST-011-01",
    "entity_id": "CSE-011",
    "asset_type": "Firewall",
    "criticality": "CRITICAL",
    "expected_telemetry": "1 hour",
    "last_telemetry": "2026-09-26T21:26:53.493Z"
  }
};

export const DEMO_CASES_SAMPLE = {
  "CAS-00001": {
    "case_id": "CAS-00001",
    "alert_id": "ALT-00001",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-20T18:28:00.159Z",
    "investigation_duration": 192,
    "escalated": 0,
    "closed_at": "2026-09-20T21:40:00.159Z",
    "closure_reason": "False Positive",
    "remediation_status": "Ignored"
  },
  "CAS-00002": {
    "case_id": "CAS-00002",
    "alert_id": "ALT-00002",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-24T21:22:26.826Z",
    "investigation_duration": 253,
    "escalated": 0,
    "closed_at": "2026-07-25T01:35:26.826Z",
    "closure_reason": "Ignored",
    "remediation_status": "Completed"
  },
  "CAS-00003": {
    "case_id": "CAS-00003",
    "alert_id": "ALT-00003",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-24T23:10:46.826Z",
    "investigation_duration": 74,
    "escalated": 0,
    "closed_at": "2026-07-25T00:24:46.826Z",
    "closure_reason": "Ignored",
    "remediation_status": "In Progress"
  },
  "CAS-00004": {
    "case_id": "CAS-00004",
    "alert_id": "ALT-00004",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-23T12:31:53.493Z",
    "investigation_duration": 134,
    "escalated": 0,
    "closed_at": "2026-07-23T14:45:53.493Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Completed"
  },
  "CAS-00005": {
    "case_id": "CAS-00005",
    "alert_id": "ALT-00005",
    "entity_id": "CSE-001",
    "investigator": "SOC_Lead",
    "opened_at": "2026-09-19T20:40:13.493Z",
    "investigation_duration": 205,
    "escalated": 0,
    "closed_at": "2026-09-20T00:05:13.493Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "In Progress"
  },
  "CAS-00006": {
    "case_id": "CAS-00006",
    "alert_id": "ALT-00006",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-20T23:08:00.159Z",
    "investigation_duration": 163,
    "escalated": 1,
    "closed_at": "2026-09-21T01:51:00.159Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "In Progress"
  },
  "CAS-00007": {
    "case_id": "CAS-00007",
    "alert_id": "ALT-00007",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-01T18:02:26.826Z",
    "investigation_duration": 243,
    "escalated": 0,
    "closed_at": "2026-07-01T22:05:26.826Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "In Progress"
  },
  "CAS-00008": {
    "case_id": "CAS-00008",
    "alert_id": "ALT-00008",
    "entity_id": "CSE-001",
    "investigator": "Analyst_A",
    "opened_at": "2026-07-26T00:03:33.493Z",
    "investigation_duration": 80,
    "escalated": 0,
    "closed_at": "2026-07-26T01:23:33.493Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Ignored"
  },
  "CAS-00009": {
    "case_id": "CAS-00009",
    "alert_id": "ALT-00009",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-09T03:51:20.159Z",
    "investigation_duration": 106,
    "escalated": 1,
    "closed_at": "2026-08-09T05:37:20.159Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Ignored"
  },
  "CAS-00010": {
    "case_id": "CAS-00010",
    "alert_id": "ALT-00010",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-30T12:19:40.159Z",
    "investigation_duration": 48,
    "escalated": 0,
    "closed_at": "2026-07-30T13:07:40.159Z",
    "closure_reason": "Ignored",
    "remediation_status": "Ignored"
  },
  "CAS-00011": {
    "case_id": "CAS-00011",
    "alert_id": "ALT-00011",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-01T07:54:06.826Z",
    "investigation_duration": 81,
    "escalated": 0,
    "closed_at": "2026-09-01T09:15:06.826Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Completed"
  },
  "CAS-00012": {
    "case_id": "CAS-00012",
    "alert_id": "ALT-00012",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-18T06:35:13.493Z",
    "investigation_duration": 221,
    "escalated": 0,
    "closed_at": "2026-07-18T10:16:13.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "In Progress"
  },
  "CAS-00013": {
    "case_id": "CAS-00013",
    "alert_id": "ALT-00013",
    "entity_id": "CSE-001",
    "investigator": "SOC_Lead",
    "opened_at": "2026-09-27T19:03:00.159Z",
    "investigation_duration": 209,
    "escalated": 0,
    "closed_at": "2026-09-27T22:32:00.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Ignored"
  },
  "CAS-00014": {
    "case_id": "CAS-00014",
    "alert_id": "ALT-00014",
    "entity_id": "CSE-001",
    "investigator": "SOC_Lead",
    "opened_at": "2026-09-26T23:57:26.826Z",
    "investigation_duration": 81,
    "escalated": 0,
    "closed_at": "2026-09-27T01:18:26.826Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Completed"
  },
  "CAS-00015": {
    "case_id": "CAS-00015",
    "alert_id": "ALT-00015",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-09-21T15:58:33.493Z",
    "investigation_duration": 189,
    "escalated": 0,
    "closed_at": "2026-09-21T19:07:33.493Z",
    "closure_reason": "False Positive",
    "remediation_status": "None"
  },
  "CAS-00016": {
    "case_id": "CAS-00016",
    "alert_id": "ALT-00016",
    "entity_id": "CSE-001",
    "investigator": "Analyst_B",
    "opened_at": "2026-07-18T05:46:20.159Z",
    "investigation_duration": 67,
    "escalated": 1,
    "closed_at": "2026-07-18T06:53:20.159Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "In Progress"
  },
  "CAS-00017": {
    "case_id": "CAS-00017",
    "alert_id": "ALT-00017",
    "entity_id": "CSE-001",
    "investigator": "Analyst_B",
    "opened_at": "2026-09-24T17:14:40.159Z",
    "investigation_duration": 109,
    "escalated": 0,
    "closed_at": "2026-09-24T19:03:40.159Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "None"
  },
  "CAS-00018": {
    "case_id": "CAS-00018",
    "alert_id": "ALT-00019",
    "entity_id": "CSE-001",
    "investigator": "SOC_Lead",
    "opened_at": "2026-07-21T02:54:06.826Z",
    "investigation_duration": 180,
    "escalated": 0,
    "closed_at": "2026-07-21T05:54:06.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Completed"
  },
  "CAS-00019": {
    "case_id": "CAS-00019",
    "alert_id": "ALT-00020",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-01T01:35:13.493Z",
    "investigation_duration": 124,
    "escalated": 1,
    "closed_at": "2026-07-01T03:39:13.493Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Completed"
  },
  "CAS-00020": {
    "case_id": "CAS-00020",
    "alert_id": "ALT-00021",
    "entity_id": "CSE-001",
    "investigator": "Analyst_B",
    "opened_at": "2026-09-05T14:03:00.159Z",
    "investigation_duration": 97,
    "escalated": 0,
    "closed_at": "2026-09-05T15:40:00.159Z",
    "closure_reason": "Duplicate",
    "remediation_status": "In Progress"
  },
  "CAS-00021": {
    "case_id": "CAS-00021",
    "alert_id": "ALT-00022",
    "entity_id": "CSE-001",
    "investigator": "Analyst_B",
    "opened_at": "2026-07-15T15:31:20.159Z",
    "investigation_duration": 228,
    "escalated": 1,
    "closed_at": "2026-07-15T19:19:20.159Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Completed"
  },
  "CAS-00022": {
    "case_id": "CAS-00022",
    "alert_id": "ALT-00023",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-31T11:45:46.826Z",
    "investigation_duration": 183,
    "escalated": 0,
    "closed_at": "2026-08-31T14:48:46.826Z",
    "closure_reason": "False Positive",
    "remediation_status": "Completed"
  },
  "CAS-00023": {
    "case_id": "CAS-00023",
    "alert_id": "ALT-00024",
    "entity_id": "CSE-001",
    "investigator": "Analyst_A",
    "opened_at": "2026-08-27T03:06:53.493Z",
    "investigation_duration": 144,
    "escalated": 0,
    "closed_at": "2026-08-27T05:30:53.493Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Completed"
  },
  "CAS-00024": {
    "case_id": "CAS-00024",
    "alert_id": "ALT-00025",
    "entity_id": "CSE-001",
    "investigator": "Analyst_B",
    "opened_at": "2026-08-26T00:14:40.159Z",
    "investigation_duration": 245,
    "escalated": 0,
    "closed_at": "2026-08-26T04:19:40.159Z",
    "closure_reason": "Ignored",
    "remediation_status": "Completed"
  },
  "CAS-00025": {
    "case_id": "CAS-00025",
    "alert_id": "ALT-00026",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-29T05:49:06.826Z",
    "investigation_duration": 279,
    "escalated": 1,
    "closed_at": "2026-08-29T10:28:06.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Completed"
  },
  "CAS-00026": {
    "case_id": "CAS-00026",
    "alert_id": "ALT-00027",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-21T15:37:26.826Z",
    "investigation_duration": 80,
    "escalated": 0,
    "closed_at": "2026-09-21T16:57:26.826Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Ignored"
  },
  "CAS-00027": {
    "case_id": "CAS-00027",
    "alert_id": "ALT-00028",
    "entity_id": "CSE-001",
    "investigator": "SOC_Lead",
    "opened_at": "2026-09-27T23:38:33.493Z",
    "investigation_duration": 43,
    "escalated": 0,
    "closed_at": "2026-09-28T00:21:33.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "In Progress"
  },
  "CAS-00028": {
    "case_id": "CAS-00028",
    "alert_id": "ALT-00029",
    "entity_id": "CSE-001",
    "investigator": "SOC_Lead",
    "opened_at": "2026-09-14T05:26:20.159Z",
    "investigation_duration": 166,
    "escalated": 1,
    "closed_at": "2026-09-14T08:12:20.159Z",
    "closure_reason": "Duplicate",
    "remediation_status": "None"
  },
  "CAS-00029": {
    "case_id": "CAS-00029",
    "alert_id": "ALT-00030",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-22T11:40:46.826Z",
    "investigation_duration": 272,
    "escalated": 0,
    "closed_at": "2026-08-22T16:12:46.826Z",
    "closure_reason": "Ignored",
    "remediation_status": "Completed"
  },
  "CAS-00030": {
    "case_id": "CAS-00030",
    "alert_id": "ALT-00031",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-18T13:01:53.493Z",
    "investigation_duration": 54,
    "escalated": 0,
    "closed_at": "2026-08-18T13:55:53.493Z",
    "closure_reason": "False Positive",
    "remediation_status": "In Progress"
  },
  "CAS-00031": {
    "case_id": "CAS-00031",
    "alert_id": "ALT-00033",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-27T07:14:40.159Z",
    "investigation_duration": 110,
    "escalated": 1,
    "closed_at": "2026-07-27T09:04:40.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "None"
  },
  "CAS-00032": {
    "case_id": "CAS-00032",
    "alert_id": "ALT-00034",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-23T12:49:06.826Z",
    "investigation_duration": 39,
    "escalated": 0,
    "closed_at": "2026-09-23T13:28:06.826Z",
    "closure_reason": "Ignored",
    "remediation_status": "Ignored"
  },
  "CAS-00033": {
    "case_id": "CAS-00033",
    "alert_id": "ALT-00035",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-13T21:30:13.493Z",
    "investigation_duration": 104,
    "escalated": 1,
    "closed_at": "2026-09-13T23:14:13.493Z",
    "closure_reason": "False Positive",
    "remediation_status": "Ignored"
  },
  "CAS-00034": {
    "case_id": "CAS-00034",
    "alert_id": "ALT-00036",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-26T18:38:33.493Z",
    "investigation_duration": 172,
    "escalated": 0,
    "closed_at": "2026-08-26T21:30:33.493Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Completed"
  },
  "CAS-00035": {
    "case_id": "CAS-00035",
    "alert_id": "ALT-00037",
    "entity_id": "CSE-001",
    "investigator": "SOC_Lead",
    "opened_at": "2026-08-08T00:26:20.159Z",
    "investigation_duration": 280,
    "escalated": 0,
    "closed_at": "2026-08-08T05:06:20.159Z",
    "closure_reason": "False Positive",
    "remediation_status": "Completed"
  },
  "CAS-00036": {
    "case_id": "CAS-00036",
    "alert_id": "ALT-00038",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-09T06:40:46.826Z",
    "investigation_duration": 281,
    "escalated": 0,
    "closed_at": "2026-09-09T11:21:46.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Ignored"
  },
  "CAS-00037": {
    "case_id": "CAS-00037",
    "alert_id": "ALT-00039",
    "entity_id": "CSE-001",
    "investigator": "Analyst_B",
    "opened_at": "2026-07-12T09:29:06.826Z",
    "investigation_duration": 150,
    "escalated": 0,
    "closed_at": "2026-07-12T11:59:06.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Completed"
  },
  "CAS-00038": {
    "case_id": "CAS-00038",
    "alert_id": "ALT-00040",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-17T07:17:26.826Z",
    "investigation_duration": 259,
    "escalated": 0,
    "closed_at": "2026-08-17T11:36:26.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Completed"
  },
  "CAS-00039": {
    "case_id": "CAS-00039",
    "alert_id": "ALT-00041",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-09-04T07:18:33.493Z",
    "investigation_duration": 77,
    "escalated": 0,
    "closed_at": "2026-09-04T08:35:33.493Z",
    "closure_reason": "False Positive",
    "remediation_status": "Completed"
  },
  "CAS-00040": {
    "case_id": "CAS-00040",
    "alert_id": "ALT-00042",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-14T05:06:20.159Z",
    "investigation_duration": 175,
    "escalated": 1,
    "closed_at": "2026-07-14T08:01:20.159Z",
    "closure_reason": "False Positive",
    "remediation_status": "None"
  },
  "CAS-00041": {
    "case_id": "CAS-00041",
    "alert_id": "ALT-00046",
    "entity_id": "CSE-001",
    "investigator": "Analyst_A",
    "opened_at": "2026-07-31T19:49:40.159Z",
    "investigation_duration": 120,
    "escalated": 1,
    "closed_at": "2026-07-31T21:49:40.159Z",
    "closure_reason": "Ignored",
    "remediation_status": "Ignored"
  },
  "CAS-00042": {
    "case_id": "CAS-00042",
    "alert_id": "ALT-00047",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-12T05:18:00.159Z",
    "investigation_duration": 80,
    "escalated": 0,
    "closed_at": "2026-08-12T06:38:00.159Z",
    "closure_reason": "Ignored",
    "remediation_status": "In Progress"
  },
  "CAS-00043": {
    "case_id": "CAS-00043",
    "alert_id": "ALT-00048",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-20T04:12:26.826Z",
    "investigation_duration": 249,
    "escalated": 0,
    "closed_at": "2026-08-20T08:21:26.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Completed"
  },
  "CAS-00044": {
    "case_id": "CAS-00044",
    "alert_id": "ALT-00049",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-22T14:13:33.493Z",
    "investigation_duration": 203,
    "escalated": 0,
    "closed_at": "2026-09-22T17:36:33.493Z",
    "closure_reason": "Duplicate",
    "remediation_status": "In Progress"
  },
  "CAS-00045": {
    "case_id": "CAS-00045",
    "alert_id": "ALT-00050",
    "entity_id": "CSE-001",
    "investigator": "Analyst_B",
    "opened_at": "2026-09-25T22:01:20.159Z",
    "investigation_duration": 288,
    "escalated": 0,
    "closed_at": "2026-09-26T02:49:20.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "In Progress"
  },
  "CAS-00046": {
    "case_id": "CAS-00046",
    "alert_id": "ALT-00051",
    "entity_id": "CSE-001",
    "investigator": "Analyst_B",
    "opened_at": "2026-07-12T06:15:46.826Z",
    "investigation_duration": 144,
    "escalated": 1,
    "closed_at": "2026-07-12T08:39:46.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Completed"
  },
  "CAS-00047": {
    "case_id": "CAS-00047",
    "alert_id": "ALT-00052",
    "entity_id": "CSE-001",
    "investigator": "Analyst_A",
    "opened_at": "2026-09-27T00:04:06.826Z",
    "investigation_duration": 286,
    "escalated": 0,
    "closed_at": "2026-09-27T04:50:06.826Z",
    "closure_reason": "Ignored",
    "remediation_status": "In Progress"
  },
  "CAS-00048": {
    "case_id": "CAS-00048",
    "alert_id": "ALT-00053",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-27T00:52:26.826Z",
    "investigation_duration": 59,
    "escalated": 1,
    "closed_at": "2026-08-27T01:51:26.826Z",
    "closure_reason": "Duplicate",
    "remediation_status": "In Progress"
  },
  "CAS-00049": {
    "case_id": "CAS-00049",
    "alert_id": "ALT-00054",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-16T20:40:46.826Z",
    "investigation_duration": 298,
    "escalated": 0,
    "closed_at": "2026-07-17T01:38:46.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Completed"
  },
  "CAS-00050": {
    "case_id": "CAS-00050",
    "alert_id": "ALT-00055",
    "entity_id": "CSE-001",
    "investigator": "Analyst_B",
    "opened_at": "2026-09-25T22:01:53.493Z",
    "investigation_duration": 34,
    "escalated": 0,
    "closed_at": "2026-09-25T22:35:53.493Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Completed"
  },
  "CAS-00051": {
    "case_id": "CAS-00051",
    "alert_id": "ALT-00056",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-22T05:09:40.159Z",
    "investigation_duration": 31,
    "escalated": 0,
    "closed_at": "2026-07-22T05:40:40.159Z",
    "closure_reason": "False Positive",
    "remediation_status": "Completed"
  },
  "CAS-00052": {
    "case_id": "CAS-00052",
    "alert_id": "ALT-00057",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-29T20:44:06.826Z",
    "investigation_duration": 262,
    "escalated": 0,
    "closed_at": "2026-08-30T01:06:06.826Z",
    "closure_reason": "False Positive",
    "remediation_status": "Completed"
  },
  "CAS-00053": {
    "case_id": "CAS-00053",
    "alert_id": "ALT-00058",
    "entity_id": "CSE-001",
    "investigator": "Analyst_A",
    "opened_at": "2026-08-10T15:25:13.493Z",
    "investigation_duration": 118,
    "escalated": 1,
    "closed_at": "2026-08-10T17:23:13.493Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "In Progress"
  },
  "CAS-00054": {
    "case_id": "CAS-00054",
    "alert_id": "ALT-00059",
    "entity_id": "CSE-001",
    "investigator": "SOC_Lead",
    "opened_at": "2026-08-10T15:33:33.493Z",
    "investigation_duration": 104,
    "escalated": 1,
    "closed_at": "2026-08-10T17:17:33.493Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "In Progress"
  },
  "CAS-00055": {
    "case_id": "CAS-00055",
    "alert_id": "ALT-00060",
    "entity_id": "CSE-001",
    "investigator": "Analyst_A",
    "opened_at": "2026-09-24T10:41:53.493Z",
    "investigation_duration": 180,
    "escalated": 0,
    "closed_at": "2026-09-24T13:41:53.493Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Completed"
  },
  "CAS-00056": {
    "case_id": "CAS-00056",
    "alert_id": "ALT-00061",
    "entity_id": "CSE-001",
    "investigator": "Analyst_B",
    "opened_at": "2026-07-17T09:49:40.159Z",
    "investigation_duration": 257,
    "escalated": 1,
    "closed_at": "2026-07-17T14:06:40.159Z",
    "closure_reason": "False Positive",
    "remediation_status": "In Progress"
  },
  "CAS-00057": {
    "case_id": "CAS-00057",
    "alert_id": "ALT-00062",
    "entity_id": "CSE-001",
    "investigator": "SOC_Lead",
    "opened_at": "2026-08-12T19:18:00.159Z",
    "investigation_duration": 263,
    "escalated": 1,
    "closed_at": "2026-08-12T23:41:00.159Z",
    "closure_reason": "Ignored",
    "remediation_status": "Ignored"
  },
  "CAS-00058": {
    "case_id": "CAS-00058",
    "alert_id": "ALT-00063",
    "entity_id": "CSE-001",
    "investigator": "Analyst_A",
    "opened_at": "2026-09-02T23:46:20.159Z",
    "investigation_duration": 207,
    "escalated": 0,
    "closed_at": "2026-09-03T03:13:20.159Z",
    "closure_reason": "False Positive",
    "remediation_status": "None"
  },
  "CAS-00059": {
    "case_id": "CAS-00059",
    "alert_id": "ALT-00064",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-09T14:00:46.826Z",
    "investigation_duration": 218,
    "escalated": 0,
    "closed_at": "2026-08-09T17:38:46.826Z",
    "closure_reason": "False Positive",
    "remediation_status": "None"
  },
  "CAS-00060": {
    "case_id": "CAS-00060",
    "alert_id": "ALT-00065",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-23T23:21:53.493Z",
    "investigation_duration": 236,
    "escalated": 0,
    "closed_at": "2026-08-24T03:17:53.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "Ignored"
  },
  "CAS-00061": {
    "case_id": "CAS-00061",
    "alert_id": "ALT-00067",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-17T13:34:40.159Z",
    "investigation_duration": 250,
    "escalated": 1,
    "closed_at": "2026-08-17T17:44:40.159Z",
    "closure_reason": "False Positive",
    "remediation_status": "None"
  },
  "CAS-00062": {
    "case_id": "CAS-00062",
    "alert_id": "ALT-00068",
    "entity_id": "CSE-001",
    "investigator": "SOC_Lead",
    "opened_at": "2026-07-24T08:03:00.159Z",
    "investigation_duration": 238,
    "escalated": 0,
    "closed_at": "2026-07-24T12:01:00.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "None"
  },
  "CAS-00063": {
    "case_id": "CAS-00063",
    "alert_id": "ALT-00069",
    "entity_id": "CSE-001",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-17T12:57:26.826Z",
    "investigation_duration": 185,
    "escalated": 0,
    "closed_at": "2026-08-17T16:02:26.826Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Ignored"
  },
  "CAS-00064": {
    "case_id": "CAS-00064",
    "alert_id": "ALT-00070",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-07T04:58:33.493Z",
    "investigation_duration": 278,
    "escalated": 0,
    "closed_at": "2026-08-07T09:36:33.493Z",
    "closure_reason": "False Positive",
    "remediation_status": "Ignored"
  },
  "CAS-00065": {
    "case_id": "CAS-00065",
    "alert_id": "ALT-00071",
    "entity_id": "CSE-001",
    "investigator": "Analyst_A",
    "opened_at": "2026-07-27T18:46:20.159Z",
    "investigation_duration": 50,
    "escalated": 0,
    "closed_at": "2026-07-27T19:36:20.159Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Ignored"
  },
  "CAS-00066": {
    "case_id": "CAS-00066",
    "alert_id": "ALT-00072",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-27T09:00:46.826Z",
    "investigation_duration": 227,
    "escalated": 0,
    "closed_at": "2026-08-27T12:47:46.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "In Progress"
  },
  "CAS-00067": {
    "case_id": "CAS-00067",
    "alert_id": "ALT-00073",
    "entity_id": "CSE-001",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-31T23:49:06.826Z",
    "investigation_duration": 194,
    "escalated": 0,
    "closed_at": "2026-08-01T03:03:06.826Z",
    "closure_reason": "Ignored",
    "remediation_status": "None"
  },
  "CAS-00068": {
    "case_id": "CAS-00068",
    "alert_id": "ALT-00074",
    "entity_id": "CSE-002",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-07T04:21:20.159Z",
    "investigation_duration": 36,
    "escalated": 0,
    "closed_at": "2026-09-07T04:57:20.159Z",
    "closure_reason": "Ignored",
    "remediation_status": "Completed"
  },
  "CAS-00069": {
    "case_id": "CAS-00069",
    "alert_id": "ALT-00075",
    "entity_id": "CSE-002",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-19T20:35:46.826Z",
    "investigation_duration": 68,
    "escalated": 1,
    "closed_at": "2026-09-19T21:43:46.826Z",
    "closure_reason": "Duplicate",
    "remediation_status": "In Progress"
  },
  "CAS-00070": {
    "case_id": "CAS-00070",
    "alert_id": "ALT-00076",
    "entity_id": "CSE-002",
    "investigator": "Analyst_B",
    "opened_at": "2026-07-11T02:24:06.826Z",
    "investigation_duration": 37,
    "escalated": 1,
    "closed_at": "2026-07-11T03:01:06.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Ignored"
  },
  "CAS-00071": {
    "case_id": "CAS-00071",
    "alert_id": "ALT-00077",
    "entity_id": "CSE-002",
    "investigator": "SOC_Lead",
    "opened_at": "2026-07-12T15:12:26.826Z",
    "investigation_duration": 178,
    "escalated": 0,
    "closed_at": "2026-07-12T18:10:26.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Ignored"
  },
  "CAS-00072": {
    "case_id": "CAS-00072",
    "alert_id": "ALT-00078",
    "entity_id": "CSE-002",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-19T01:13:33.493Z",
    "investigation_duration": 238,
    "escalated": 0,
    "closed_at": "2026-09-19T05:11:33.493Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Ignored"
  },
  "CAS-00073": {
    "case_id": "CAS-00073",
    "alert_id": "ALT-00079",
    "entity_id": "CSE-002",
    "investigator": "Analyst_A",
    "opened_at": "2026-07-03T08:21:53.493Z",
    "investigation_duration": 216,
    "escalated": 1,
    "closed_at": "2026-07-03T11:57:53.493Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "None"
  },
  "CAS-00074": {
    "case_id": "CAS-00074",
    "alert_id": "ALT-00080",
    "entity_id": "CSE-002",
    "investigator": "Analyst_B",
    "opened_at": "2026-07-05T23:29:40.159Z",
    "investigation_duration": 57,
    "escalated": 0,
    "closed_at": "2026-07-06T00:26:40.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Ignored"
  },
  "CAS-00075": {
    "case_id": "CAS-00075",
    "alert_id": "ALT-00081",
    "entity_id": "CSE-002",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-12T23:04:06.826Z",
    "investigation_duration": 103,
    "escalated": 1,
    "closed_at": "2026-07-13T00:47:06.826Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Ignored"
  },
  "CAS-00076": {
    "case_id": "CAS-00076",
    "alert_id": "ALT-00082",
    "entity_id": "CSE-002",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-19T11:52:26.826Z",
    "investigation_duration": 259,
    "escalated": 0,
    "closed_at": "2026-07-19T16:11:26.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "In Progress"
  },
  "CAS-00077": {
    "case_id": "CAS-00077",
    "alert_id": "ALT-00083",
    "entity_id": "CSE-002",
    "investigator": "Analyst_D",
    "opened_at": "2026-09-12T13:53:33.493Z",
    "investigation_duration": 98,
    "escalated": 0,
    "closed_at": "2026-09-12T15:31:33.493Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "In Progress"
  },
  "CAS-00078": {
    "case_id": "CAS-00078",
    "alert_id": "ALT-00084",
    "entity_id": "CSE-002",
    "investigator": "Analyst_A",
    "opened_at": "2026-07-19T13:41:20.159Z",
    "investigation_duration": 97,
    "escalated": 1,
    "closed_at": "2026-07-19T15:18:20.159Z",
    "closure_reason": "Ignored",
    "remediation_status": "Completed"
  },
  "CAS-00079": {
    "case_id": "CAS-00079",
    "alert_id": "ALT-00087",
    "entity_id": "CSE-002",
    "investigator": "SOC_Lead",
    "opened_at": "2026-07-18T13:05:46.826Z",
    "investigation_duration": 81,
    "escalated": 0,
    "closed_at": "2026-07-18T14:26:46.826Z",
    "closure_reason": "False Positive",
    "remediation_status": "In Progress"
  },
  "CAS-00080": {
    "case_id": "CAS-00080",
    "alert_id": "ALT-00088",
    "entity_id": "CSE-002",
    "investigator": "Analyst_B",
    "opened_at": "2026-08-18T00:54:06.826Z",
    "investigation_duration": 83,
    "escalated": 0,
    "closed_at": "2026-08-18T02:17:06.826Z",
    "closure_reason": "False Positive",
    "remediation_status": "Ignored"
  },
  "CAS-00081": {
    "case_id": "CAS-00081",
    "alert_id": "ALT-00089",
    "entity_id": "CSE-002",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-08T23:35:13.493Z",
    "investigation_duration": 238,
    "escalated": 1,
    "closed_at": "2026-07-09T03:33:13.493Z",
    "closure_reason": "False Positive",
    "remediation_status": "In Progress"
  },
  "CAS-00082": {
    "case_id": "CAS-00082",
    "alert_id": "ALT-00090",
    "entity_id": "CSE-002",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-01T17:43:33.493Z",
    "investigation_duration": 296,
    "escalated": 0,
    "closed_at": "2026-08-01T22:39:33.493Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Ignored"
  },
  "CAS-00083": {
    "case_id": "CAS-00083",
    "alert_id": "ALT-00091",
    "entity_id": "CSE-002",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-17T13:31:20.159Z",
    "investigation_duration": 147,
    "escalated": 0,
    "closed_at": "2026-08-17T15:58:20.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "In Progress"
  },
  "CAS-00084": {
    "case_id": "CAS-00084",
    "alert_id": "ALT-00092",
    "entity_id": "CSE-002",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-15T09:45:46.826Z",
    "investigation_duration": 131,
    "escalated": 0,
    "closed_at": "2026-07-15T11:56:46.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Ignored"
  },
  "CAS-00085": {
    "case_id": "CAS-00085",
    "alert_id": "ALT-00093",
    "entity_id": "CSE-002",
    "investigator": "SOC_Lead",
    "opened_at": "2026-09-19T01:06:53.493Z",
    "investigation_duration": 32,
    "escalated": 0,
    "closed_at": "2026-09-19T01:38:53.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "In Progress"
  },
  "CAS-00086": {
    "case_id": "CAS-00086",
    "alert_id": "ALT-00094",
    "entity_id": "CSE-002",
    "investigator": "SOC_Lead",
    "opened_at": "2026-07-29T22:14:40.159Z",
    "investigation_duration": 254,
    "escalated": 0,
    "closed_at": "2026-07-30T02:28:40.159Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "None"
  },
  "CAS-00087": {
    "case_id": "CAS-00087",
    "alert_id": "ALT-00095",
    "entity_id": "CSE-002",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-12T03:49:06.826Z",
    "investigation_duration": 47,
    "escalated": 1,
    "closed_at": "2026-08-12T04:36:06.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "In Progress"
  },
  "CAS-00088": {
    "case_id": "CAS-00088",
    "alert_id": "ALT-00096",
    "entity_id": "CSE-002",
    "investigator": "Analyst_D",
    "opened_at": "2026-09-16T12:30:13.493Z",
    "investigation_duration": 248,
    "escalated": 0,
    "closed_at": "2026-09-16T16:38:13.493Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Ignored"
  },
  "CAS-00089": {
    "case_id": "CAS-00089",
    "alert_id": "ALT-00098",
    "entity_id": "CSE-002",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-03T07:03:00.159Z",
    "investigation_duration": 220,
    "escalated": 1,
    "closed_at": "2026-07-03T10:43:00.159Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Completed"
  },
  "CAS-00090": {
    "case_id": "CAS-00090",
    "alert_id": "ALT-00099",
    "entity_id": "CSE-002",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-02T20:31:20.159Z",
    "investigation_duration": 57,
    "escalated": 1,
    "closed_at": "2026-08-02T21:28:20.159Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Ignored"
  },
  "CAS-00091": {
    "case_id": "CAS-00091",
    "alert_id": "ALT-00100",
    "entity_id": "CSE-002",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-24T16:45:46.826Z",
    "investigation_duration": 208,
    "escalated": 0,
    "closed_at": "2026-08-24T20:13:46.826Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Ignored"
  },
  "CAS-00092": {
    "case_id": "CAS-00092",
    "alert_id": "ALT-00101",
    "entity_id": "CSE-002",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-25T08:06:53.493Z",
    "investigation_duration": 184,
    "escalated": 0,
    "closed_at": "2026-08-25T11:10:53.493Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "In Progress"
  },
  "CAS-00093": {
    "case_id": "CAS-00093",
    "alert_id": "ALT-00102",
    "entity_id": "CSE-002",
    "investigator": "SOC_Lead",
    "opened_at": "2026-08-09T07:15:13.493Z",
    "investigation_duration": 167,
    "escalated": 1,
    "closed_at": "2026-08-09T10:02:13.493Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "In Progress"
  },
  "CAS-00094": {
    "case_id": "CAS-00094",
    "alert_id": "ALT-00103",
    "entity_id": "CSE-002",
    "investigator": "Analyst_B",
    "opened_at": "2026-09-16T11:43:00.159Z",
    "investigation_duration": 145,
    "escalated": 0,
    "closed_at": "2026-09-16T14:08:00.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "None"
  },
  "CAS-00095": {
    "case_id": "CAS-00095",
    "alert_id": "ALT-00104",
    "entity_id": "CSE-002",
    "investigator": "Analyst_B",
    "opened_at": "2026-09-22T08:37:26.826Z",
    "investigation_duration": 127,
    "escalated": 0,
    "closed_at": "2026-09-22T10:44:26.826Z",
    "closure_reason": "Ignored",
    "remediation_status": "None"
  },
  "CAS-00096": {
    "case_id": "CAS-00096",
    "alert_id": "ALT-00105",
    "entity_id": "CSE-002",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-05T16:38:33.493Z",
    "investigation_duration": 105,
    "escalated": 0,
    "closed_at": "2026-07-05T18:23:33.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "Ignored"
  },
  "CAS-00097": {
    "case_id": "CAS-00097",
    "alert_id": "ALT-00106",
    "entity_id": "CSE-002",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-26T22:26:20.159Z",
    "investigation_duration": 63,
    "escalated": 0,
    "closed_at": "2026-07-26T23:29:20.159Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "None"
  },
  "CAS-00098": {
    "case_id": "CAS-00098",
    "alert_id": "ALT-00108",
    "entity_id": "CSE-002",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-05T23:45:46.826Z",
    "investigation_duration": 284,
    "escalated": 0,
    "closed_at": "2026-07-06T04:29:46.826Z",
    "closure_reason": "False Positive",
    "remediation_status": "Ignored"
  },
  "CAS-00099": {
    "case_id": "CAS-00099",
    "alert_id": "ALT-00109",
    "entity_id": "CSE-002",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-31T15:06:53.493Z",
    "investigation_duration": 64,
    "escalated": 0,
    "closed_at": "2026-07-31T16:10:53.493Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Completed"
  },
  "CAS-00100": {
    "case_id": "CAS-00100",
    "alert_id": "ALT-00111",
    "entity_id": "CSE-002",
    "investigator": "SOC_Lead",
    "opened_at": "2026-07-19T14:19:40.159Z",
    "investigation_duration": 196,
    "escalated": 0,
    "closed_at": "2026-07-19T17:35:40.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "None"
  },
  "CAS-00101": {
    "case_id": "CAS-00101",
    "alert_id": "ALT-00113",
    "entity_id": "CSE-002",
    "investigator": "Analyst_B",
    "opened_at": "2026-08-10T16:59:06.826Z",
    "investigation_duration": 35,
    "escalated": 0,
    "closed_at": "2026-08-10T17:34:06.826Z",
    "closure_reason": "Ignored",
    "remediation_status": "Completed"
  },
  "CAS-00102": {
    "case_id": "CAS-00102",
    "alert_id": "ALT-00114",
    "entity_id": "CSE-002",
    "investigator": "SOC_Lead",
    "opened_at": "2026-09-09T05:40:13.493Z",
    "investigation_duration": 38,
    "escalated": 1,
    "closed_at": "2026-09-09T06:18:13.493Z",
    "closure_reason": "False Positive",
    "remediation_status": "Ignored"
  },
  "CAS-00103": {
    "case_id": "CAS-00103",
    "alert_id": "ALT-00115",
    "entity_id": "CSE-002",
    "investigator": "SOC_Lead",
    "opened_at": "2026-09-14T20:48:33.493Z",
    "investigation_duration": 176,
    "escalated": 0,
    "closed_at": "2026-09-14T23:44:33.493Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Ignored"
  },
  "CAS-00104": {
    "case_id": "CAS-00104",
    "alert_id": "ALT-00116",
    "entity_id": "CSE-002",
    "investigator": "Analyst_B",
    "opened_at": "2026-07-17T06:36:20.159Z",
    "investigation_duration": 252,
    "escalated": 1,
    "closed_at": "2026-07-17T10:48:20.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "In Progress"
  },
  "CAS-00105": {
    "case_id": "CAS-00105",
    "alert_id": "ALT-00117",
    "entity_id": "CSE-002",
    "investigator": "Analyst_D",
    "opened_at": "2026-09-22T12:04:40.159Z",
    "investigation_duration": 290,
    "escalated": 1,
    "closed_at": "2026-09-22T16:54:40.159Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "In Progress"
  },
  "CAS-00106": {
    "case_id": "CAS-00106",
    "alert_id": "ALT-00118",
    "entity_id": "CSE-002",
    "investigator": "Analyst_B",
    "opened_at": "2026-07-28T13:39:06.826Z",
    "investigation_duration": 56,
    "escalated": 0,
    "closed_at": "2026-07-28T14:35:06.826Z",
    "closure_reason": "Ignored",
    "remediation_status": "Ignored"
  },
  "CAS-00107": {
    "case_id": "CAS-00107",
    "alert_id": "ALT-00119",
    "entity_id": "CSE-002",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-14T18:20:13.493Z",
    "investigation_duration": 289,
    "escalated": 1,
    "closed_at": "2026-07-14T23:09:13.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "None"
  },
  "CAS-00108": {
    "case_id": "CAS-00108",
    "alert_id": "ALT-00120",
    "entity_id": "CSE-002",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-24T09:28:33.493Z",
    "investigation_duration": 262,
    "escalated": 0,
    "closed_at": "2026-08-24T13:50:33.493Z",
    "closure_reason": "False Positive",
    "remediation_status": "In Progress"
  },
  "CAS-00109": {
    "case_id": "CAS-00109",
    "alert_id": "ALT-00121",
    "entity_id": "CSE-003",
    "investigator": "Analyst_B",
    "opened_at": "2026-09-01T08:30:46.826Z",
    "investigation_duration": 129,
    "escalated": 0,
    "closed_at": "2026-09-01T10:39:46.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Completed"
  },
  "CAS-00110": {
    "case_id": "CAS-00110",
    "alert_id": "ALT-00122",
    "entity_id": "CSE-003",
    "investigator": "Analyst_B",
    "opened_at": "2026-08-14T05:51:53.493Z",
    "investigation_duration": 49,
    "escalated": 0,
    "closed_at": "2026-08-14T06:40:53.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "In Progress"
  },
  "CAS-00111": {
    "case_id": "CAS-00111",
    "alert_id": "ALT-00123",
    "entity_id": "CSE-003",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-29T08:59:40.159Z",
    "investigation_duration": 199,
    "escalated": 0,
    "closed_at": "2026-08-29T12:18:40.159Z",
    "closure_reason": "Ignored",
    "remediation_status": "Ignored"
  },
  "CAS-00112": {
    "case_id": "CAS-00112",
    "alert_id": "ALT-00124",
    "entity_id": "CSE-003",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-19T20:34:06.826Z",
    "investigation_duration": 101,
    "escalated": 0,
    "closed_at": "2026-07-19T22:15:06.826Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Ignored"
  },
  "CAS-00113": {
    "case_id": "CAS-00113",
    "alert_id": "ALT-00125",
    "entity_id": "CSE-003",
    "investigator": "Analyst_B",
    "opened_at": "2026-08-30T11:15:13.493Z",
    "investigation_duration": 50,
    "escalated": 0,
    "closed_at": "2026-08-30T12:05:13.493Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Ignored"
  },
  "CAS-00114": {
    "case_id": "CAS-00114",
    "alert_id": "ALT-00126",
    "entity_id": "CSE-003",
    "investigator": "SOC_Lead",
    "opened_at": "2026-09-17T15:43:00.159Z",
    "investigation_duration": 239,
    "escalated": 0,
    "closed_at": "2026-09-17T19:42:00.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "None"
  },
  "CAS-00115": {
    "case_id": "CAS-00115",
    "alert_id": "ALT-00127",
    "entity_id": "CSE-003",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-04T12:37:26.826Z",
    "investigation_duration": 70,
    "escalated": 0,
    "closed_at": "2026-08-04T13:47:26.826Z",
    "closure_reason": "False Positive",
    "remediation_status": "Ignored"
  },
  "CAS-00116": {
    "case_id": "CAS-00116",
    "alert_id": "ALT-00128",
    "entity_id": "CSE-003",
    "investigator": "Analyst_B",
    "opened_at": "2026-08-25T20:38:33.493Z",
    "investigation_duration": 78,
    "escalated": 0,
    "closed_at": "2026-08-25T21:56:33.493Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Ignored"
  },
  "CAS-00117": {
    "case_id": "CAS-00117",
    "alert_id": "ALT-00129",
    "entity_id": "CSE-003",
    "investigator": "Analyst_B",
    "opened_at": "2026-08-27T02:26:20.159Z",
    "investigation_duration": 247,
    "escalated": 1,
    "closed_at": "2026-08-27T06:33:20.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Completed"
  },
  "CAS-00118": {
    "case_id": "CAS-00118",
    "alert_id": "ALT-00130",
    "entity_id": "CSE-003",
    "investigator": "Analyst_B",
    "opened_at": "2026-08-10T13:54:40.159Z",
    "investigation_duration": 33,
    "escalated": 0,
    "closed_at": "2026-08-10T14:27:40.159Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Ignored"
  },
  "CAS-00119": {
    "case_id": "CAS-00119",
    "alert_id": "ALT-00131",
    "entity_id": "CSE-003",
    "investigator": "SOC_Lead",
    "opened_at": "2026-07-06T11:29:06.826Z",
    "investigation_duration": 42,
    "escalated": 0,
    "closed_at": "2026-07-06T12:11:06.826Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Completed"
  },
  "CAS-00120": {
    "case_id": "CAS-00120",
    "alert_id": "ALT-00132",
    "entity_id": "CSE-003",
    "investigator": "SOC_Lead",
    "opened_at": "2026-08-02T12:10:13.493Z",
    "investigation_duration": 37,
    "escalated": 0,
    "closed_at": "2026-08-02T12:47:13.493Z",
    "closure_reason": "Duplicate",
    "remediation_status": "In Progress"
  },
  "CAS-00121": {
    "case_id": "CAS-00121",
    "alert_id": "ALT-00133",
    "entity_id": "CSE-003",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-15T02:38:00.159Z",
    "investigation_duration": 122,
    "escalated": 0,
    "closed_at": "2026-09-15T04:40:00.159Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Completed"
  },
  "CAS-00122": {
    "case_id": "CAS-00122",
    "alert_id": "ALT-00134",
    "entity_id": "CSE-003",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-02T07:06:20.159Z",
    "investigation_duration": 142,
    "escalated": 0,
    "closed_at": "2026-08-02T09:28:20.159Z",
    "closure_reason": "False Positive",
    "remediation_status": "None"
  },
  "CAS-00123": {
    "case_id": "CAS-00123",
    "alert_id": "ALT-00136",
    "entity_id": "CSE-003",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-13T00:25:46.826Z",
    "investigation_duration": 278,
    "escalated": 1,
    "closed_at": "2026-08-13T05:03:46.826Z",
    "closure_reason": "Ignored",
    "remediation_status": "None"
  },
  "CAS-00124": {
    "case_id": "CAS-00124",
    "alert_id": "ALT-00137",
    "entity_id": "CSE-003",
    "investigator": "SOC_Lead",
    "opened_at": "2026-07-06T07:46:53.493Z",
    "investigation_duration": 229,
    "escalated": 1,
    "closed_at": "2026-07-06T11:35:53.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "In Progress"
  },
  "CAS-00125": {
    "case_id": "CAS-00125",
    "alert_id": "ALT-00138",
    "entity_id": "CSE-003",
    "investigator": "SOC_Lead",
    "opened_at": "2026-08-31T18:55:13.493Z",
    "investigation_duration": 159,
    "escalated": 0,
    "closed_at": "2026-08-31T21:34:13.493Z",
    "closure_reason": "False Positive",
    "remediation_status": "None"
  },
  "CAS-00126": {
    "case_id": "CAS-00126",
    "alert_id": "ALT-00139",
    "entity_id": "CSE-003",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-21T13:03:33.493Z",
    "investigation_duration": 292,
    "escalated": 1,
    "closed_at": "2026-07-21T17:55:33.493Z",
    "closure_reason": "False Positive",
    "remediation_status": "Ignored"
  },
  "CAS-00127": {
    "case_id": "CAS-00127",
    "alert_id": "ALT-00140",
    "entity_id": "CSE-003",
    "investigator": "Analyst_A",
    "opened_at": "2026-09-08T02:11:53.493Z",
    "investigation_duration": 108,
    "escalated": 0,
    "closed_at": "2026-09-08T03:59:53.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "Ignored"
  },
  "CAS-00128": {
    "case_id": "CAS-00128",
    "alert_id": "ALT-00141",
    "entity_id": "CSE-003",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-11T13:19:40.159Z",
    "investigation_duration": 133,
    "escalated": 0,
    "closed_at": "2026-09-11T15:32:40.159Z",
    "closure_reason": "Ignored",
    "remediation_status": "Completed"
  },
  "CAS-00129": {
    "case_id": "CAS-00129",
    "alert_id": "ALT-00142",
    "entity_id": "CSE-003",
    "investigator": "Analyst_B",
    "opened_at": "2026-09-09T08:54:06.826Z",
    "investigation_duration": 60,
    "escalated": 0,
    "closed_at": "2026-09-09T09:54:06.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Ignored"
  },
  "CAS-00130": {
    "case_id": "CAS-00130",
    "alert_id": "ALT-00143",
    "entity_id": "CSE-003",
    "investigator": "Analyst_A",
    "opened_at": "2026-08-20T07:35:13.493Z",
    "investigation_duration": 275,
    "escalated": 1,
    "closed_at": "2026-08-20T12:10:13.493Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Ignored"
  },
  "CAS-00131": {
    "case_id": "CAS-00131",
    "alert_id": "ALT-00144",
    "entity_id": "CSE-003",
    "investigator": "Analyst_B",
    "opened_at": "2026-07-27T20:03:00.159Z",
    "investigation_duration": 249,
    "escalated": 1,
    "closed_at": "2026-07-28T00:12:00.159Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Ignored"
  },
  "CAS-00132": {
    "case_id": "CAS-00132",
    "alert_id": "ALT-00146",
    "entity_id": "CSE-003",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-25T05:36:20.159Z",
    "investigation_duration": 143,
    "escalated": 0,
    "closed_at": "2026-08-25T07:59:20.159Z",
    "closure_reason": "Ignored",
    "remediation_status": "None"
  },
  "CAS-00133": {
    "case_id": "CAS-00133",
    "alert_id": "ALT-00147",
    "entity_id": "CSE-003",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-02T15:50:46.826Z",
    "investigation_duration": 247,
    "escalated": 1,
    "closed_at": "2026-07-02T19:57:46.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "None"
  },
  "CAS-00134": {
    "case_id": "CAS-00134",
    "alert_id": "ALT-00148",
    "entity_id": "CSE-003",
    "investigator": "SOC_Lead",
    "opened_at": "2026-07-20T00:39:06.826Z",
    "investigation_duration": 75,
    "escalated": 0,
    "closed_at": "2026-07-20T01:54:06.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Completed"
  },
  "CAS-00135": {
    "case_id": "CAS-00135",
    "alert_id": "ALT-00149",
    "entity_id": "CSE-003",
    "investigator": "SOC_Lead",
    "opened_at": "2026-08-10T05:20:13.493Z",
    "investigation_duration": 143,
    "escalated": 0,
    "closed_at": "2026-08-10T07:43:13.493Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "None"
  },
  "CAS-00136": {
    "case_id": "CAS-00136",
    "alert_id": "ALT-00150",
    "entity_id": "CSE-003",
    "investigator": "SOC_Lead",
    "opened_at": "2026-08-27T23:48:00.159Z",
    "investigation_duration": 241,
    "escalated": 0,
    "closed_at": "2026-08-28T03:49:00.159Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Completed"
  },
  "CAS-00137": {
    "case_id": "CAS-00137",
    "alert_id": "ALT-00151",
    "entity_id": "CSE-003",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-02T10:42:26.826Z",
    "investigation_duration": 131,
    "escalated": 0,
    "closed_at": "2026-09-02T12:53:26.826Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Completed"
  },
  "CAS-00138": {
    "case_id": "CAS-00138",
    "alert_id": "ALT-00152",
    "entity_id": "CSE-003",
    "investigator": "Analyst_A",
    "opened_at": "2026-08-04T08:43:33.493Z",
    "investigation_duration": 168,
    "escalated": 1,
    "closed_at": "2026-08-04T11:31:33.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "Ignored"
  },
  "CAS-00139": {
    "case_id": "CAS-00139",
    "alert_id": "ALT-00153",
    "entity_id": "CSE-003",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-05T09:51:53.493Z",
    "investigation_duration": 112,
    "escalated": 1,
    "closed_at": "2026-08-05T11:43:53.493Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "None"
  },
  "CAS-00140": {
    "case_id": "CAS-00140",
    "alert_id": "ALT-00154",
    "entity_id": "CSE-003",
    "investigator": "Analyst_B",
    "opened_at": "2026-08-13T18:00:13.493Z",
    "investigation_duration": 33,
    "escalated": 0,
    "closed_at": "2026-08-13T18:33:13.493Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Ignored"
  },
  "CAS-00141": {
    "case_id": "CAS-00141",
    "alert_id": "ALT-00155",
    "entity_id": "CSE-003",
    "investigator": "Analyst_B",
    "opened_at": "2026-09-27T04:28:00.159Z",
    "investigation_duration": 31,
    "escalated": 0,
    "closed_at": "2026-09-27T04:59:00.159Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Ignored"
  },
  "CAS-00142": {
    "case_id": "CAS-00142",
    "alert_id": "ALT-00156",
    "entity_id": "CSE-003",
    "investigator": "Analyst_B",
    "opened_at": "2026-09-09T07:22:26.826Z",
    "investigation_duration": 212,
    "escalated": 0,
    "closed_at": "2026-09-09T10:54:26.826Z",
    "closure_reason": "Duplicate",
    "remediation_status": "None"
  },
  "CAS-00143": {
    "case_id": "CAS-00143",
    "alert_id": "ALT-00157",
    "entity_id": "CSE-003",
    "investigator": "Analyst_B",
    "opened_at": "2026-07-28T21:23:33.493Z",
    "investigation_duration": 299,
    "escalated": 0,
    "closed_at": "2026-07-29T02:22:33.493Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "None"
  },
  "CAS-00144": {
    "case_id": "CAS-00144",
    "alert_id": "ALT-00159",
    "entity_id": "CSE-003",
    "investigator": "Analyst_A",
    "opened_at": "2026-07-09T05:16:20.159Z",
    "investigation_duration": 198,
    "escalated": 0,
    "closed_at": "2026-07-09T08:34:20.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Ignored"
  },
  "CAS-00145": {
    "case_id": "CAS-00145",
    "alert_id": "ALT-00160",
    "entity_id": "CSE-003",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-17T07:30:46.826Z",
    "investigation_duration": 35,
    "escalated": 0,
    "closed_at": "2026-07-17T08:05:46.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Ignored"
  },
  "CAS-00146": {
    "case_id": "CAS-00146",
    "alert_id": "ALT-00161",
    "entity_id": "CSE-003",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-03T04:51:53.493Z",
    "investigation_duration": 60,
    "escalated": 0,
    "closed_at": "2026-08-03T05:51:53.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "Ignored"
  },
  "CAS-00147": {
    "case_id": "CAS-00147",
    "alert_id": "ALT-00162",
    "entity_id": "CSE-003",
    "investigator": "SOC_Lead",
    "opened_at": "2026-07-24T07:59:40.159Z",
    "investigation_duration": 135,
    "escalated": 0,
    "closed_at": "2026-07-24T10:14:40.159Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "In Progress"
  },
  "CAS-00148": {
    "case_id": "CAS-00148",
    "alert_id": "ALT-00163",
    "entity_id": "CSE-003",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-16T19:34:06.826Z",
    "investigation_duration": 53,
    "escalated": 1,
    "closed_at": "2026-09-16T20:27:06.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "None"
  },
  "CAS-00149": {
    "case_id": "CAS-00149",
    "alert_id": "ALT-00164",
    "entity_id": "CSE-003",
    "investigator": "Analyst_D",
    "opened_at": "2026-08-05T14:22:26.826Z",
    "investigation_duration": 62,
    "escalated": 0,
    "closed_at": "2026-08-05T15:24:26.826Z",
    "closure_reason": "Ignored",
    "remediation_status": "None"
  },
  "CAS-00150": {
    "case_id": "CAS-00150",
    "alert_id": "ALT-00165",
    "entity_id": "CSE-003",
    "investigator": "Analyst_B",
    "opened_at": "2026-07-19T04:23:33.493Z",
    "investigation_duration": 225,
    "escalated": 0,
    "closed_at": "2026-07-19T08:08:33.493Z",
    "closure_reason": "False Positive",
    "remediation_status": "None"
  },
  "CAS-00151": {
    "case_id": "CAS-00151",
    "alert_id": "ALT-00166",
    "entity_id": "CSE-003",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-10T16:11:20.159Z",
    "investigation_duration": 186,
    "escalated": 0,
    "closed_at": "2026-08-10T19:17:20.159Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Ignored"
  },
  "CAS-00152": {
    "case_id": "CAS-00152",
    "alert_id": "ALT-00167",
    "entity_id": "CSE-003",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-18T12:39:40.159Z",
    "investigation_duration": 181,
    "escalated": 0,
    "closed_at": "2026-08-18T15:40:40.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Ignored"
  },
  "CAS-00153": {
    "case_id": "CAS-00153",
    "alert_id": "ALT-00170",
    "entity_id": "CSE-003",
    "investigator": "Analyst_A",
    "opened_at": "2026-08-16T09:24:06.826Z",
    "investigation_duration": 101,
    "escalated": 0,
    "closed_at": "2026-08-16T11:05:06.826Z",
    "closure_reason": "False Positive",
    "remediation_status": "Completed"
  },
  "CAS-00154": {
    "case_id": "CAS-00154",
    "alert_id": "ALT-00172",
    "entity_id": "CSE-003",
    "investigator": "Analyst_A",
    "opened_at": "2026-07-14T23:10:13.493Z",
    "investigation_duration": 297,
    "escalated": 0,
    "closed_at": "2026-07-15T04:07:13.493Z",
    "closure_reason": "Duplicate",
    "remediation_status": "None"
  },
  "CAS-00155": {
    "case_id": "CAS-00155",
    "alert_id": "ALT-00173",
    "entity_id": "CSE-003",
    "investigator": "Analyst_A",
    "opened_at": "2026-08-02T13:38:00.159Z",
    "investigation_duration": 36,
    "escalated": 1,
    "closed_at": "2026-08-02T14:14:00.159Z",
    "closure_reason": "False Positive",
    "remediation_status": "None"
  },
  "CAS-00156": {
    "case_id": "CAS-00156",
    "alert_id": "ALT-00174",
    "entity_id": "CSE-003",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-27T06:06:20.159Z",
    "investigation_duration": 169,
    "escalated": 0,
    "closed_at": "2026-07-27T08:55:20.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "None"
  },
  "CAS-00157": {
    "case_id": "CAS-00157",
    "alert_id": "ALT-00175",
    "entity_id": "CSE-003",
    "investigator": "Analyst_B",
    "opened_at": "2026-07-31T04:20:46.826Z",
    "investigation_duration": 175,
    "escalated": 1,
    "closed_at": "2026-07-31T07:15:46.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "In Progress"
  },
  "CAS-00158": {
    "case_id": "CAS-00158",
    "alert_id": "ALT-00176",
    "entity_id": "CSE-003",
    "investigator": "Analyst_A",
    "opened_at": "2026-07-29T19:09:06.826Z",
    "investigation_duration": 217,
    "escalated": 1,
    "closed_at": "2026-07-29T22:46:06.826Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "None"
  },
  "CAS-00159": {
    "case_id": "CAS-00159",
    "alert_id": "ALT-00178",
    "entity_id": "CSE-003",
    "investigator": "Analyst_C",
    "opened_at": "2026-09-06T18:02:26.826Z",
    "investigation_duration": 174,
    "escalated": 0,
    "closed_at": "2026-09-06T20:56:26.826Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "None"
  },
  "CAS-00160": {
    "case_id": "CAS-00160",
    "alert_id": "ALT-00179",
    "entity_id": "CSE-003",
    "investigator": "SOC_Lead",
    "opened_at": "2026-09-01T00:03:33.493Z",
    "investigation_duration": 191,
    "escalated": 0,
    "closed_at": "2026-09-01T03:14:33.493Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Ignored"
  },
  "CAS-00161": {
    "case_id": "CAS-00161",
    "alert_id": "ALT-00180",
    "entity_id": "CSE-003",
    "investigator": "SOC_Lead",
    "opened_at": "2026-08-16T03:51:20.159Z",
    "investigation_duration": 127,
    "escalated": 0,
    "closed_at": "2026-08-16T05:58:20.159Z",
    "closure_reason": "False Positive",
    "remediation_status": "None"
  },
  "CAS-00162": {
    "case_id": "CAS-00162",
    "alert_id": "ALT-00181",
    "entity_id": "CSE-003",
    "investigator": "Analyst_A",
    "opened_at": "2026-07-02T08:05:46.826Z",
    "investigation_duration": 258,
    "escalated": 0,
    "closed_at": "2026-07-02T12:23:46.826Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Ignored"
  },
  "CAS-00163": {
    "case_id": "CAS-00163",
    "alert_id": "ALT-00185",
    "entity_id": "CSE-004",
    "investigator": "Analyst_A",
    "opened_at": "2026-09-08T21:42:26.826Z",
    "investigation_duration": 196,
    "escalated": 0,
    "closed_at": "2026-09-09T00:58:26.826Z",
    "closure_reason": "False Positive",
    "remediation_status": "In Progress"
  },
  "CAS-00164": {
    "case_id": "CAS-00164",
    "alert_id": "ALT-00186",
    "entity_id": "CSE-004",
    "investigator": "Analyst_A",
    "opened_at": "2026-09-14T19:43:33.493Z",
    "investigation_duration": 67,
    "escalated": 0,
    "closed_at": "2026-09-14T20:50:33.493Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Ignored"
  },
  "CAS-00165": {
    "case_id": "CAS-00165",
    "alert_id": "ALT-00187",
    "entity_id": "CSE-004",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-22T15:31:20.159Z",
    "investigation_duration": 249,
    "escalated": 0,
    "closed_at": "2026-07-22T19:40:20.159Z",
    "closure_reason": "False Positive",
    "remediation_status": "Ignored"
  },
  "CAS-00166": {
    "case_id": "CAS-00166",
    "alert_id": "ALT-00188",
    "entity_id": "CSE-004",
    "investigator": "Analyst_A",
    "opened_at": "2026-09-23T11:59:40.159Z",
    "investigation_duration": 139,
    "escalated": 0,
    "closed_at": "2026-09-23T14:18:40.159Z",
    "closure_reason": "Ignored",
    "remediation_status": "Completed"
  },
  "CAS-00167": {
    "case_id": "CAS-00167",
    "alert_id": "ALT-00189",
    "entity_id": "CSE-004",
    "investigator": "Analyst_A",
    "opened_at": "2026-09-27T23:34:06.826Z",
    "investigation_duration": 177,
    "escalated": 1,
    "closed_at": "2026-09-28T02:31:06.826Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "None"
  },
  "CAS-00168": {
    "case_id": "CAS-00168",
    "alert_id": "ALT-00190",
    "entity_id": "CSE-004",
    "investigator": "Analyst_A",
    "opened_at": "2026-09-15T18:22:26.826Z",
    "investigation_duration": 276,
    "escalated": 0,
    "closed_at": "2026-09-15T22:58:26.826Z",
    "closure_reason": "False Positive",
    "remediation_status": "Ignored"
  },
  "CAS-00169": {
    "case_id": "CAS-00169",
    "alert_id": "ALT-00191",
    "entity_id": "CSE-004",
    "investigator": "Analyst_A",
    "opened_at": "2026-09-08T08:23:33.493Z",
    "investigation_duration": 198,
    "escalated": 0,
    "closed_at": "2026-09-08T11:41:33.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "None"
  },
  "CAS-00170": {
    "case_id": "CAS-00170",
    "alert_id": "ALT-00193",
    "entity_id": "CSE-004",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-17T04:16:20.159Z",
    "investigation_duration": 89,
    "escalated": 0,
    "closed_at": "2026-08-17T05:45:20.159Z",
    "closure_reason": "Ignored",
    "remediation_status": "Completed"
  },
  "CAS-00171": {
    "case_id": "CAS-00171",
    "alert_id": "ALT-00194",
    "entity_id": "CSE-004",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-30T06:30:46.826Z",
    "investigation_duration": 213,
    "escalated": 1,
    "closed_at": "2026-08-30T10:03:46.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "None"
  },
  "CAS-00172": {
    "case_id": "CAS-00172",
    "alert_id": "ALT-00195",
    "entity_id": "CSE-004",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-23T03:51:53.493Z",
    "investigation_duration": 72,
    "escalated": 0,
    "closed_at": "2026-07-23T05:03:53.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "Completed"
  },
  "CAS-00173": {
    "case_id": "CAS-00173",
    "alert_id": "ALT-00196",
    "entity_id": "CSE-004",
    "investigator": "Analyst_A",
    "opened_at": "2026-09-14T12:00:13.493Z",
    "investigation_duration": 129,
    "escalated": 0,
    "closed_at": "2026-09-14T14:09:13.493Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Ignored"
  },
  "CAS-00174": {
    "case_id": "CAS-00174",
    "alert_id": "ALT-00198",
    "entity_id": "CSE-004",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-30T00:33:00.159Z",
    "investigation_duration": 188,
    "escalated": 0,
    "closed_at": "2026-07-30T03:41:00.159Z",
    "closure_reason": "Duplicate",
    "remediation_status": "In Progress"
  },
  "CAS-00175": {
    "case_id": "CAS-00175",
    "alert_id": "ALT-00199",
    "entity_id": "CSE-004",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-01T17:27:26.826Z",
    "investigation_duration": 247,
    "escalated": 0,
    "closed_at": "2026-07-01T21:34:26.826Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Ignored"
  },
  "CAS-00176": {
    "case_id": "CAS-00176",
    "alert_id": "ALT-00200",
    "entity_id": "CSE-004",
    "investigator": "Analyst_A",
    "opened_at": "2026-07-28T21:28:33.493Z",
    "investigation_duration": 182,
    "escalated": 0,
    "closed_at": "2026-07-29T00:30:33.493Z",
    "closure_reason": "Duplicate",
    "remediation_status": "In Progress"
  },
  "CAS-00177": {
    "case_id": "CAS-00177",
    "alert_id": "ALT-00201",
    "entity_id": "CSE-004",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-24T23:16:20.159Z",
    "investigation_duration": 67,
    "escalated": 0,
    "closed_at": "2026-08-25T00:23:20.159Z",
    "closure_reason": "Ignored",
    "remediation_status": "Ignored"
  },
  "CAS-00178": {
    "case_id": "CAS-00178",
    "alert_id": "ALT-00202",
    "entity_id": "CSE-004",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-08T04:44:40.159Z",
    "investigation_duration": 30,
    "escalated": 1,
    "closed_at": "2026-07-08T05:14:40.159Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Ignored"
  },
  "CAS-00179": {
    "case_id": "CAS-00179",
    "alert_id": "ALT-00204",
    "entity_id": "CSE-004",
    "investigator": "Analyst_B",
    "opened_at": "2026-08-30T08:24:06.826Z",
    "investigation_duration": 188,
    "escalated": 0,
    "closed_at": "2026-08-30T11:32:06.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "In Progress"
  },
  "CAS-00180": {
    "case_id": "CAS-00180",
    "alert_id": "ALT-00205",
    "entity_id": "CSE-005",
    "investigator": "Analyst_A",
    "opened_at": "2026-09-01T20:59:40.159Z",
    "investigation_duration": 209,
    "escalated": 0,
    "closed_at": "2026-09-02T00:28:40.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "In Progress"
  },
  "CAS-00181": {
    "case_id": "CAS-00181",
    "alert_id": "ALT-00206",
    "entity_id": "CSE-005",
    "investigator": "Analyst_B",
    "opened_at": "2026-08-22T08:34:06.826Z",
    "investigation_duration": 202,
    "escalated": 0,
    "closed_at": "2026-08-22T11:56:06.826Z",
    "closure_reason": "Duplicate",
    "remediation_status": "None"
  },
  "CAS-00182": {
    "case_id": "CAS-00182",
    "alert_id": "ALT-00207",
    "entity_id": "CSE-005",
    "investigator": "Analyst_A",
    "opened_at": "2026-09-01T15:22:26.826Z",
    "investigation_duration": 98,
    "escalated": 0,
    "closed_at": "2026-09-01T17:00:26.826Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Ignored"
  },
  "CAS-00183": {
    "case_id": "CAS-00183",
    "alert_id": "ALT-00208",
    "entity_id": "CSE-005",
    "investigator": "SOC_Lead",
    "opened_at": "2026-08-10T05:23:33.493Z",
    "investigation_duration": 246,
    "escalated": 0,
    "closed_at": "2026-08-10T09:29:33.493Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "None"
  },
  "CAS-00184": {
    "case_id": "CAS-00184",
    "alert_id": "ALT-00209",
    "entity_id": "CSE-005",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-28T17:11:20.159Z",
    "investigation_duration": 102,
    "escalated": 0,
    "closed_at": "2026-07-28T18:53:20.159Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Completed"
  },
  "CAS-00185": {
    "case_id": "CAS-00185",
    "alert_id": "ALT-00210",
    "entity_id": "CSE-005",
    "investigator": "Analyst_C",
    "opened_at": "2026-08-06T05:25:46.826Z",
    "investigation_duration": 31,
    "escalated": 0,
    "closed_at": "2026-08-06T05:56:46.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "In Progress"
  },
  "CAS-00186": {
    "case_id": "CAS-00186",
    "alert_id": "ALT-00211",
    "entity_id": "CSE-005",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-04T12:46:53.493Z",
    "investigation_duration": 268,
    "escalated": 0,
    "closed_at": "2026-07-04T17:14:53.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "None"
  },
  "CAS-00187": {
    "case_id": "CAS-00187",
    "alert_id": "ALT-00212",
    "entity_id": "CSE-005",
    "investigator": "Analyst_A",
    "opened_at": "2026-08-14T01:54:40.159Z",
    "investigation_duration": 43,
    "escalated": 0,
    "closed_at": "2026-08-14T02:37:40.159Z",
    "closure_reason": "Ignored",
    "remediation_status": "Completed"
  },
  "CAS-00188": {
    "case_id": "CAS-00188",
    "alert_id": "ALT-00213",
    "entity_id": "CSE-005",
    "investigator": "Analyst_A",
    "opened_at": "2026-08-08T23:29:06.826Z",
    "investigation_duration": 143,
    "escalated": 0,
    "closed_at": "2026-08-09T01:52:06.826Z",
    "closure_reason": "False Positive",
    "remediation_status": "Ignored"
  },
  "CAS-00189": {
    "case_id": "CAS-00189",
    "alert_id": "ALT-00214",
    "entity_id": "CSE-005",
    "investigator": "Analyst_B",
    "opened_at": "2026-07-07T00:10:13.493Z",
    "investigation_duration": 228,
    "escalated": 0,
    "closed_at": "2026-07-07T03:58:13.493Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "In Progress"
  },
  "CAS-00190": {
    "case_id": "CAS-00190",
    "alert_id": "ALT-00215",
    "entity_id": "CSE-005",
    "investigator": "Analyst_B",
    "opened_at": "2026-09-18T14:38:00.159Z",
    "investigation_duration": 133,
    "escalated": 0,
    "closed_at": "2026-09-18T16:51:00.159Z",
    "closure_reason": "Ignored",
    "remediation_status": "None"
  },
  "CAS-00191": {
    "case_id": "CAS-00191",
    "alert_id": "ALT-00216",
    "entity_id": "CSE-005",
    "investigator": "Analyst_A",
    "opened_at": "2026-07-11T21:32:26.826Z",
    "investigation_duration": 251,
    "escalated": 0,
    "closed_at": "2026-07-12T01:43:26.826Z",
    "closure_reason": "Ignored",
    "remediation_status": "Ignored"
  },
  "CAS-00192": {
    "case_id": "CAS-00192",
    "alert_id": "ALT-00217",
    "entity_id": "CSE-005",
    "investigator": "SOC_Lead",
    "opened_at": "2026-09-16T15:33:33.493Z",
    "investigation_duration": 216,
    "escalated": 0,
    "closed_at": "2026-09-16T19:09:33.493Z",
    "closure_reason": "Duplicate",
    "remediation_status": "In Progress"
  },
  "CAS-00193": {
    "case_id": "CAS-00193",
    "alert_id": "ALT-00218",
    "entity_id": "CSE-005",
    "investigator": "SOC_Lead",
    "opened_at": "2026-08-02T10:41:53.493Z",
    "investigation_duration": 292,
    "escalated": 0,
    "closed_at": "2026-08-02T15:33:53.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "In Progress"
  },
  "CAS-00194": {
    "case_id": "CAS-00194",
    "alert_id": "ALT-00219",
    "entity_id": "CSE-005",
    "investigator": "Analyst_B",
    "opened_at": "2026-07-24T09:49:40.159Z",
    "investigation_duration": 279,
    "escalated": 0,
    "closed_at": "2026-07-24T14:28:40.159Z",
    "closure_reason": "Duplicate",
    "remediation_status": "Completed"
  },
  "CAS-00195": {
    "case_id": "CAS-00195",
    "alert_id": "ALT-00220",
    "entity_id": "CSE-005",
    "investigator": "Analyst_A",
    "opened_at": "2026-09-07T17:24:06.826Z",
    "investigation_duration": 78,
    "escalated": 0,
    "closed_at": "2026-09-07T18:42:06.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "Ignored"
  },
  "CAS-00196": {
    "case_id": "CAS-00196",
    "alert_id": "ALT-00221",
    "entity_id": "CSE-005",
    "investigator": "Analyst_B",
    "opened_at": "2026-09-05T04:05:13.493Z",
    "investigation_duration": 74,
    "escalated": 0,
    "closed_at": "2026-09-05T05:19:13.493Z",
    "closure_reason": "Ignored",
    "remediation_status": "None"
  },
  "CAS-00197": {
    "case_id": "CAS-00197",
    "alert_id": "ALT-00223",
    "entity_id": "CSE-005",
    "investigator": "Analyst_B",
    "opened_at": "2026-08-04T21:38:00.159Z",
    "investigation_duration": 224,
    "escalated": 0,
    "closed_at": "2026-08-05T01:22:00.159Z",
    "closure_reason": "True Positive - Remediated",
    "remediation_status": "Ignored"
  },
  "CAS-00198": {
    "case_id": "CAS-00198",
    "alert_id": "ALT-00224",
    "entity_id": "CSE-005",
    "investigator": "Analyst_C",
    "opened_at": "2026-07-22T04:32:26.826Z",
    "investigation_duration": 237,
    "escalated": 0,
    "closed_at": "2026-07-22T08:29:26.826Z",
    "closure_reason": "Policy Exception",
    "remediation_status": "In Progress"
  },
  "CAS-00199": {
    "case_id": "CAS-00199",
    "alert_id": "ALT-00226",
    "entity_id": "CSE-005",
    "investigator": "Analyst_D",
    "opened_at": "2026-07-27T19:25:46.826Z",
    "investigation_duration": 184,
    "escalated": 0,
    "closed_at": "2026-07-27T22:29:46.826Z",
    "closure_reason": "False Positive",
    "remediation_status": "Completed"
  },
  "CAS-00200": {
    "case_id": "CAS-00200",
    "alert_id": "ALT-00227",
    "entity_id": "CSE-005",
    "investigator": "Analyst_B",
    "opened_at": "2026-08-14T02:46:53.493Z",
    "investigation_duration": 300,
    "escalated": 0,
    "closed_at": "2026-08-14T07:46:53.493Z",
    "closure_reason": "False Positive",
    "remediation_status": "In Progress"
  }
};
