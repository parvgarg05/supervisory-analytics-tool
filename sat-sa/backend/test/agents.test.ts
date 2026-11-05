import test from 'node:test';
import assert from 'node:assert/strict';
import { Server } from 'node:http';
import path from 'node:path';
import fs from 'node:fs';
import { app, dbService, analyticsService } from '../src/index.js';

let server: Server;
let baseUrl: string;

test.before(async () => {
  await new Promise<void>((resolve) => {
    server = app.listen(0, () => {
      const addr = server.address();
      if (addr && typeof addr === 'object') {
        baseUrl = `http://127.0.0.1:${addr.port}`;
      }
      resolve();
    });
  });

  // Ensure default assessment is active
  try {
    await fetch(`${baseUrl}/api/assessments/ASM-DEFAULT/activate`, { method: 'POST' });
  } catch {}
});

test.after(async () => {
  await new Promise<void>((resolve) => {
    server.close(() => resolve());
  });
});

test('Agent Investigation: Validation rejects missing entity_id with HTTP 400', async () => {
  const res = await fetch(`${baseUrl}/api/agents/investigate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({})
  });
  assert.equal(res.status, 400);
  const data = await res.json() as any;
  assert.equal(data.success, false);
  assert.match(data.error, /entity_id.*required/i);
});

test('Agent Investigation: End-to-end investigation returns valid structured JSON and records audit log', async () => {
  const res = await fetch(`${baseUrl}/api/agents/investigate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ entity_id: 'CSE-007' })
  });

  assert.equal(res.status, 200);
  const data = await res.json() as any;

  assert.equal(data.success, true);
  assert.equal(data.entity_id, 'CSE-007');
  assert.equal(data.is_valid_entity, true);
  assert.equal(data.status, 'COMPLETED');
  assert.ok(typeof data.deterministic_risk_score === 'number');
  assert.ok(data.deterministic_risk_score > 0);
  assert.ok(data.ai_analysis);
  assert.ok(data.citation_validation);
  assert.ok(data.audit_integrity_status);
  assert.ok(data.execution_metrics);

  // Verify that AGENT_INVESTIGATION was recorded in the SHA-256 audit log
  const auditRes = await fetch(`${baseUrl}/api/audit`);
  assert.equal(auditRes.status, 200);
  const auditData = await auditRes.json() as any;
  const agentLogs = auditData.logs.filter((l: any) => l.operation === 'AGENT_INVESTIGATION' || l.action === 'AGENT_INVESTIGATION');
  assert.ok(agentLogs.length >= 1);
  const latestLog = agentLogs[agentLogs.length - 1];
  const payload = typeof latestLog.details === 'string' ? JSON.parse(latestLog.details) : latestLog.details;
  assert.equal(payload.entity_id, 'CSE-007');
});

test('Agent Investigation: Non-existent entity returns FAILED status with is_valid_entity false', async () => {
  const res = await fetch(`${baseUrl}/api/agents/investigate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ entity_id: 'NON_EXISTENT_999' })
  });

  assert.equal(res.status, 200);
  const data = await res.json() as any;
  assert.equal(data.success, true);
  assert.equal(data.status, 'FAILED');
  assert.equal(data.is_valid_entity, false);
  assert.match(data.error, /not found/i);
});
