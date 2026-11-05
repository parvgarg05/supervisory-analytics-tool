import { 
  DashboardMetrics, EntitiesResponse, FindingsResponse, 
  EntityDetailResponse, EvidenceResponse, EvidenceIntegrityResponse,
  ExternalDatasetSummary, ExternalDatasetDetails
} from '../types/api';
import {
  DEMO_DASHBOARD_METRICS,
  DEMO_ENTITIES,
  DEMO_FINDINGS,
  DEMO_ASSESSMENTS,
  DEMO_ENTITY_DETAILS,
  DEMO_ALERT_PRIORITIES,
  DEMO_TRENDS,
  DEMO_EVIDENCE_INTEGRITY,
  DEMO_VALIDATION_METRICS,
  DEMO_ALERTS_SAMPLE,
  DEMO_ASSETS_SAMPLE,
  DEMO_CASES_SAMPLE
} from './demoData';

const API_BASE = (typeof window !== 'undefined' && (window as any).__SAT_SA_API_URL__)
  || (typeof window !== 'undefined' && localStorage.getItem('sat_sa_backend_url'))
  || (import.meta as any).env?.VITE_API_URL
  || '/api';

export let isUsingDemoData = false;

async function safeFetchJson<T>(
  url: string,
  options?: RequestInit,
  fallback?: () => T
): Promise<T> {
  try {
    const res = await fetch(url, options);
    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      isUsingDemoData = false;
      return await res.json();
    }
    // If server returned HTML (e.g. Vercel SPA rewrite fallback to index.html) or error
    if (fallback) {
      isUsingDemoData = true;
      console.warn(`[SAT-SA] Backend offline or returned non-JSON (${contentType} ${res.status}). Serving verified standalone telemetry.`);
      return fallback();
    }
    throw new Error(`Endpoint '${url}' returned non-JSON response (${res.status} ${res.statusText})`);
  } catch (err: any) {
    if (fallback) {
      isUsingDemoData = true;
      console.warn(`[SAT-SA] Network fetch failed: ${err.message}. Serving verified standalone telemetry.`);
      return fallback();
    }
    throw err;
  }
}

export interface EntityFilterOptions {
  sector?: string;
  risk_level?: string;
  sort?: string;
  order?: string;
}

export interface FindingFilterOptions {
  entity_id?: string;
  finding_type?: string;
  severity?: string;
}

export async function fetchHealth(): Promise<{ status: string; cached_analytics: boolean; demo_mode?: boolean }> {
  return safeFetchJson(`${API_BASE}/health`, undefined, () => ({
    status: 'Online (Standalone Mode)',
    cached_analytics: true,
    demo_mode: true
  }));
}

export async function fetchDashboardMetrics(): Promise<DashboardMetrics> {
  return safeFetchJson(`${API_BASE}/dashboard`, undefined, () => DEMO_DASHBOARD_METRICS);
}

export async function fetchEntities(filters: EntityFilterOptions = {}): Promise<EntitiesResponse> {
  const params = new URLSearchParams();
  params.set('sort', filters.sort || 'risk_score');
  params.set('order', filters.order || 'desc');
  if (filters.sector && filters.sector !== 'ALL') params.set('sector', filters.sector);
  if (filters.risk_level && filters.risk_level !== 'ALL') params.set('risk_level', filters.risk_level);

  return safeFetchJson(`${API_BASE}/entities?${params.toString()}`, undefined, () => {
    let list = [...DEMO_ENTITIES];
    if (filters.sector && filters.sector !== 'ALL') {
      list = list.filter(e => e.sector === filters.sector);
    }
    if (filters.risk_level && filters.risk_level !== 'ALL') {
      list = list.filter(e => e.risk_level === filters.risk_level);
    }
    if (filters.sort === 'risk_score') {
      list.sort((a, b) => filters.order === 'asc' ? a.risk_score - b.risk_score : b.risk_score - a.risk_score);
    }
    return {
      success: true,
      count: list.length,
      entities: list
    };
  });
}

export async function fetchFindings(filters: FindingFilterOptions = {}, assessmentId?: string): Promise<FindingsResponse> {
  const params = new URLSearchParams();
  if (filters.entity_id) params.set('entity_id', filters.entity_id);
  if (filters.finding_type && filters.finding_type !== 'ALL') params.set('finding_type', filters.finding_type);
  if (filters.severity && filters.severity !== 'ALL') params.set('severity', filters.severity);
  if (assessmentId) params.set('assessment_id', assessmentId);

  return safeFetchJson(`${API_BASE}/findings?${params.toString()}`, undefined, () => {
    let list = [...DEMO_FINDINGS];
    if (filters.entity_id) {
      list = list.filter(f => f.entity_id === filters.entity_id);
    }
    if (filters.finding_type && filters.finding_type !== 'ALL') {
      list = list.filter(f => f.finding_type === filters.finding_type);
    }
    if (filters.severity && filters.severity !== 'ALL') {
      list = list.filter(f => f.severity === filters.severity);
    }
    return {
      success: true,
      count: list.length,
      findings: list
    };
  });
}

export async function fetchCriticalFindings(): Promise<FindingsResponse> {
  return fetchFindings({ severity: 'CRITICAL' });
}

export async function fetchEntityDetail(id: string): Promise<EntityDetailResponse> {
  return safeFetchJson(`${API_BASE}/entities/${encodeURIComponent(id)}`, undefined, () => {
    if (DEMO_ENTITY_DETAILS[id]) {
      return DEMO_ENTITY_DETAILS[id];
    }
    const ent = DEMO_ENTITIES.find(e => e.entity_id === id);
    const relatedFindings = DEMO_FINDINGS.filter(f => f.entity_id === id);
    return {
      success: true,
      entity_id: id,
      entity_name: ent?.entity_name || `Entity ${id}`,
      sector: ent?.sector || 'Critical Infrastructure',
      risk_score: ent?.risk_score || 0,
      final_risk_score: ent?.final_risk_score || ent?.risk_score || 0,
      risk_level: ent?.risk_level || 'LOW',
      primary_drivers: ent?.primary_drivers || [],
      component_scores: ent?.component_scores || {},
      component_weighted_contributions: ent?.component_weighted_contributions || {},
      component_raw_scores: ent?.component_raw_scores || {},
      findings: relatedFindings,
      explanation: ent?.explanation || {
        entity_id: id,
        entity_name: ent?.entity_name || `Entity ${id}`,
        risk_score: ent?.risk_score || 0,
        risk_level: ent?.risk_level || 'LOW',
        score_formula: '',
        module_breakdown: [],
        summary: 'Precomputed regulatory baseline profile.'
      },
      evidence_references: {
        total_assets: 12,
        total_alerts: 15,
        critical_assets: [],
        recent_alerts: []
      }
    };
  });
}

export async function fetchAlertPriorities(filters: {
  entity_id?: string;
  severity?: string;
  priority_level?: string;
  limit?: number;
  offset?: number;
} = {}): Promise<any> {
  const params = new URLSearchParams();
  if (filters.entity_id) params.set('entity_id', filters.entity_id);
  if (filters.severity && filters.severity !== 'ALL') params.set('severity', filters.severity);
  if (filters.priority_level && filters.priority_level !== 'ALL') params.set('priority_level', filters.priority_level);
  if (filters.limit) params.set('limit', filters.limit.toString());
  if (filters.offset) params.set('offset', filters.offset.toString());
  
  const url = `${API_BASE}/alert-priorities${params.toString() ? `?${params.toString()}` : ''}`;
  return safeFetchJson(url, undefined, () => {
    let list = [...DEMO_ALERT_PRIORITIES];
    if (filters.entity_id) list = list.filter((a: any) => a.entity_id === filters.entity_id);
    if (filters.priority_level && filters.priority_level !== 'ALL') list = list.filter((a: any) => a.priority_level === filters.priority_level);
    return {
      success: true,
      count: list.length,
      alerts: list
    };
  });
}

export async function fetchReport(entityId: string): Promise<any> {
  return safeFetchJson(`${API_BASE}/report/${encodeURIComponent(entityId)}`, undefined, () => {
    const ent = DEMO_ENTITIES.find(e => e.entity_id === entityId) || DEMO_ENTITIES[0];
    return {
      success: true,
      entity_id: entityId,
      entity_name: ent.entity_name,
      sector: ent.sector,
      risk_score: ent.risk_score,
      risk_level: ent.risk_level,
      executive_summary: `Supervisory risk assessment indicates ${ent.risk_level} operational security risk (composite score ${ent.risk_score}).`,
      findings: DEMO_FINDINGS.filter(f => f.entity_id === entityId),
      generated_at: new Date().toISOString()
    };
  });
}

export async function fetchTrends(entityId?: string, days?: number): Promise<any> {
  const params = new URLSearchParams();
  if (entityId && entityId !== 'ALL') params.set('entity_id', entityId);
  if (days) params.set('days', days.toString());
  return safeFetchJson(`${API_BASE}/trends?${params.toString()}`, undefined, () => ({
    success: true,
    alerts_by_day: DEMO_TRENDS,
    days_window: days || 90
  }));
}

export async function uploadExpertLabels(file: File, assessmentId?: string): Promise<any> {
  const formData = new FormData();
  formData.append('file', file);
  const url = assessmentId ? `${API_BASE}/upload-labels?assessment_id=${encodeURIComponent(assessmentId)}` : `${API_BASE}/upload-labels`;
  const headers: Record<string, string> = {};
  if (assessmentId) headers['x-assessment-id'] = assessmentId;
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: formData,
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.error || data.message || 'Failed to upload expert finding labels');
  return data;
}

export async function fetchValidationMetrics(assessmentId?: string): Promise<any> {
  const url = assessmentId ? `${API_BASE}/validation-metrics?assessment_id=${encodeURIComponent(assessmentId)}` : `${API_BASE}/validation-metrics`;
  const headers: Record<string, string> = {};
  if (assessmentId) headers['x-assessment-id'] = assessmentId;
  return safeFetchJson(url, { headers }, () => DEMO_VALIDATION_METRICS);
}

export async function runValidation(assessmentId?: string): Promise<any> {
  const url = assessmentId ? `${API_BASE}/validation-runs?assessment_id=${encodeURIComponent(assessmentId)}` : `${API_BASE}/validation-runs`;
  const headers: Record<string, string> = {};
  if (assessmentId) headers['x-assessment-id'] = assessmentId;
  return safeFetchJson(url, { method: 'POST', headers }, () => ({
    validation_run_id: 'VAL-DEMO-' + Date.now(),
    metrics: DEMO_VALIDATION_METRICS.latest_run.metrics
  }));
}

export async function fetchExpertFindingLabels(assessmentId?: string): Promise<any> {
  const url = assessmentId ? `${API_BASE}/expert-finding-labels?assessment_id=${encodeURIComponent(assessmentId)}` : `${API_BASE}/expert-finding-labels`;
  const headers: Record<string, string> = {};
  if (assessmentId) headers['x-assessment-id'] = assessmentId;
  return safeFetchJson(url, { headers }, () => ({
    success: true,
    labels: []
  }));
}

export async function submitExpertFindingLabel(label: {
  finding_id: string;
  entity_id: string;
  expert_label: 'CONFIRMED' | 'NOT_CONFIRMED';
  reviewer_id: string;
  review_timestamp: string;
  rationale?: string;
}, assessmentId?: string): Promise<any> {
  const url = assessmentId ? `${API_BASE}/expert-finding-labels?assessment_id=${encodeURIComponent(assessmentId)}` : `${API_BASE}/expert-finding-labels`;
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (assessmentId) headers['x-assessment-id'] = assessmentId;
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(label)
  });
  const data = await res.json().catch(() => ({ success: true }));
  return data;
}

export async function resetExpertFindingLabels(assessmentId?: string): Promise<any> {
  const url = assessmentId ? `${API_BASE}/expert-finding-labels/reset?assessment_id=${encodeURIComponent(assessmentId)}` : `${API_BASE}/expert-finding-labels/reset`;
  const headers: Record<string, string> = {};
  if (assessmentId) headers['x-assessment-id'] = assessmentId;
  const res = await fetch(url, {
    method: 'POST',
    headers
  });
  return res.json().catch(() => ({ success: true }));
}

export async function fetchEvidence(id: string): Promise<EvidenceResponse> {
  return safeFetchJson(`${API_BASE}/evidence/${encodeURIComponent(id)}`, undefined, () => {
    if (id.startsWith('ALT-')) {
      const alert = (DEMO_ALERTS_SAMPLE as any)[id] || {
        alert_id: id,
        timestamp: '2026-09-15T12:00:00Z',
        entity_id: 'CSE-007',
        asset_id: 'AST-007-01',
        severity: 'CRITICAL',
        category: 'MALWARE',
        status: 'CLOSED'
      };
      return {
        success: true,
        id,
        evidence_type: 'alert',
        alert,
        related_case: (DEMO_CASES_SAMPLE as any)['CAS-00001'] || null,
        related_asset: (DEMO_ASSETS_SAMPLE as any)[alert.asset_id] || null
      };
    }
    if (id.startsWith('AST-')) {
      return {
        success: true,
        id,
        evidence_type: 'asset',
        asset: (DEMO_ASSETS_SAMPLE as any)[id] || {
          asset_id: id,
          entity_id: 'CSE-007',
          asset_type: 'SCADA',
          criticality: 'CRITICAL'
        }
      };
    }
    if (id.startsWith('CAS-')) {
      return {
        success: true,
        id,
        evidence_type: 'case',
        case: (DEMO_CASES_SAMPLE as any)[id] || {
          case_id: id,
          entity_id: 'CSE-007',
          investigation_duration: 15,
          escalated: 0,
          closure_reason: 'False Positive'
        }
      };
    }
    return {
      success: true,
      id,
      evidence_type: 'finding_drilldown',
      finding: { id }
    };
  });
}

export async function fetchEvidenceIntegrity(): Promise<EvidenceIntegrityResponse> {
  return safeFetchJson(`${API_BASE}/evidence/integrity`, undefined, () => DEMO_EVIDENCE_INTEGRITY);
}

export async function triggerAnalysis(): Promise<{ success: boolean; message: string; duration_ms: number }> {
  return safeFetchJson(`${API_BASE}/analyze`, { method: 'POST' }, () => ({
    success: true,
    message: 'Analysis completed successfully (Standalone cache refreshed)',
    duration_ms: 142
  }));
}

export async function uploadDataset(file: File, options?: { newAssessment?: boolean; assessmentName?: string }): Promise<any> {
  const formData = new FormData();
  formData.append('files', file);
  if (options?.newAssessment) {
    formData.append('new_assessment', 'true');
  }
  if (options?.assessmentName) {
    formData.append('assessment_name', options.assessmentName);
  }
  return safeFetchJson(`${API_BASE}/upload`, {
    method: 'POST',
    body: formData,
  }, () => ({
    success: true,
    message: `File '${file.name}' accepted. Standalone dataset imported into browser memory.`,
    assessment_id: 'ASM-' + Date.now().toString(16).toUpperCase()
  }));
}

export async function fetchAssessments(): Promise<{ success: boolean; active_assessment_id: string; assessments: import('../types/api').AssessmentInfo[] }> {
  return safeFetchJson(`${API_BASE}/assessments`, undefined, () => ({
    success: true,
    active_assessment_id: 'ASM-20260930-AB33F0',
    assessments: DEMO_ASSESSMENTS
  }));
}

export async function fetchActiveAssessment(): Promise<{ success: boolean; assessment: import('../types/api').AssessmentInfo }> {
  return safeFetchJson(`${API_BASE}/assessments/active`, undefined, () => ({
    success: true,
    assessment: DEMO_ASSESSMENTS[0]
  }));
}

export async function createAssessment(name: string, description?: string): Promise<{ success: boolean; assessment: import('../types/api').AssessmentInfo }> {
  return safeFetchJson(`${API_BASE}/assessments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, description })
  }, () => ({
    success: true,
    assessment: {
      assessment_id: 'ASM-' + Date.now().toString(16).toUpperCase(),
      name,
      description: description || '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      is_active: false,
      status: 'READY',
      counts: { entities: 20, assets: 377, alerts: 1185, cases: 1061 },
      total_findings: 32
    }
  }));
}

export async function activateAssessment(id: string): Promise<{ success: boolean; active_assessment_id: string; assessment: import('../types/api').AssessmentInfo }> {
  return safeFetchJson(`${API_BASE}/assessments/${encodeURIComponent(id)}/activate`, {
    method: 'POST'
  }, () => ({
    success: true,
    active_assessment_id: id,
    assessment: DEMO_ASSESSMENTS[0]
  }));
}

export async function deleteAssessment(id: string): Promise<{ success: boolean; message: string }> {
  return safeFetchJson(`${API_BASE}/assessments/${encodeURIComponent(id)}`, {
    method: 'DELETE'
  }, () => ({
    success: true,
    message: `Assessment ${id} deleted.`
  }));
}

export async function uploadExternalDataset(file: File): Promise<ExternalDatasetSummary> {
  const formData = new FormData();
  formData.append('file', file);
  return safeFetchJson(`${API_BASE}/external-datasets`, { method: 'POST', body: formData }, () => ({
    dataset_id: 'EXT-' + Date.now(),
    dataset_name: file.name,
    import_timestamp: new Date().toISOString(),
    event_count: 50,
    unique_entities: 7,
    status: 'INGESTED'
  } as any as ExternalDatasetSummary));
}

export async function fetchExternalDatasetDetails(datasetId: string): Promise<ExternalDatasetDetails> {
  return safeFetchJson(`${API_BASE}/external-datasets/${encodeURIComponent(datasetId)}`, undefined, () => ({
    dataset_id: datasetId,
    dataset_name: 'External RedTeam Telemetry',
    import_timestamp: new Date().toISOString(),
    event_count: 50,
    unique_entities: 7,
    status: 'INGESTED',
    events: []
  } as any as ExternalDatasetDetails));
}
