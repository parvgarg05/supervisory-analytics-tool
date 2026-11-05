const fs = require('fs');
const path = require('path');
const http = require('http');

// Set test environment so server does not auto-listen on port 4000
process.env.NODE_ENV = 'test';
const backendRoot = path.resolve(__dirname, '../sat-sa/backend');
process.chdir(backendRoot);

const { app } = require(path.join(backendRoot, 'dist/index.js'));

const ENDPOINTS = [
  { path: '/api/health', name: 'Health Check' },
  { path: '/api/dashboard', name: 'Executive Dashboard' },
  { path: '/api/entities', name: 'Entity Risk Rankings' },
  { path: '/api/entities/CSE-007', name: 'Entity Detail Investigation' },
  { path: '/api/findings', name: 'Supervisory Findings' },
  { path: '/api/evidence/integrity', name: 'Evidence Integrity Verification' },
  { path: '/api/trends', name: 'Temporal Trends' }
];

const CONCURRENCY_LEVELS = [1, 5, 10, 25, 50];
const REQUESTS_PER_CONCURRENCY = 100;

function percentile(arr, p) {
  if (!arr.length) return 0;
  const idx = Math.floor(p * (arr.length - 1));
  return Number(arr[idx].toFixed(2));
}

async function benchmarkEndpointConcurrency(baseUrl, endpointPath, concurrency, totalRequests) {
  const url = baseUrl + endpointPath;
  const latencies = [];
  const payloadSizes = [];
  let errors = 0;
  let completed = 0;

  async function worker() {
    while (completed < totalRequests) {
      completed++;
      const t0 = performance.now();
      try {
        const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
        const body = await res.text();
        latencies.push(performance.now() - t0);
        payloadSizes.push(Buffer.byteLength(body, 'utf8'));
        if (!res.ok) errors++;
      } catch (err) {
        errors++;
      }
    }
  }

  // Warmup 5 requests
  for (let i = 0; i < 5; i++) {
    try { await (await fetch(url)).text(); } catch {}
  }

  const tStart = performance.now();
  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);
  const totalTimeSec = (performance.now() - tStart) / 1000;

  latencies.sort((a, b) => a - b);
  const rps = totalTimeSec > 0 ? totalRequests / totalTimeSec : 0;
  const avgPayload = payloadSizes.length ? Math.round(payloadSizes.reduce((a, b) => a + b, 0) / payloadSizes.length) : 0;
  const avgLatency = latencies.length ? latencies.reduce((a, b) => a + b, 0) / latencies.length : 0;

  return {
    endpoint: endpointPath,
    concurrency,
    total_requests: totalRequests,
    total_time_seconds: Number(totalTimeSec.toFixed(3)),
    requests_per_second: Number(rps.toFixed(2)),
    error_count: errors,
    error_rate_pct: Number(((errors / totalRequests) * 100).toFixed(2)),
    avg_payload_bytes: avgPayload,
    latency_ms: {
      min: latencies.length ? Number(latencies[0].toFixed(2)) : 0,
      p50: percentile(latencies, 0.50),
      p90: percentile(latencies, 0.90),
      p95: percentile(latencies, 0.95),
      p99: percentile(latencies, 0.99),
      max: latencies.length ? Number(latencies[latencies.length - 1].toFixed(2)) : 0,
      mean: Number(avgLatency.toFixed(2))
    }
  };
}

async function run() {
  console.log('[*] Starting SAT-SA In-Process REST API Concurrency Benchmark...');
  const server = await new Promise(resolve => {
    const s = app.listen(0, '127.0.0.1', () => resolve(s));
  });
  const port = server.address().port;
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`[*] Ephemeral benchmark server active at ${baseUrl}`);

  const results = {
    benchmark_timestamp: new Date().toISOString(),
    concurrency_levels: CONCURRENCY_LEVELS,
    requests_per_concurrency: REQUESTS_PER_CONCURRENCY,
    endpoints: {}
  };

  for (const ep of ENDPOINTS) {
    console.log(`\n[-] Benchmarking ${ep.name} (${ep.path})...`);
    results.endpoints[ep.path] = [];
    for (const c of CONCURRENCY_LEVELS) {
      const metric = await benchmarkEndpointConcurrency(baseUrl, ep.path, c, REQUESTS_PER_CONCURRENCY);
      results.endpoints[ep.path].push(metric);
      console.log(`    c=${c.toString().padStart(2)} | RPS: ${metric.requests_per_second.toFixed(1).padStart(7)} | p50: ${metric.latency_ms.p50.toFixed(1).padStart(6)}ms | p95: ${metric.latency_ms.p95.toFixed(1).padStart(6)}ms | Errors: ${metric.error_rate_pct}%`);
    }
  }

  const outPath = path.resolve(__dirname, 'results/api_results.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n[+] API benchmark successfully completed. Results saved to: ${outPath}`);

  server.close();
  process.exit(0);
}

run().catch(err => {
  console.error('[!] API Benchmark error:', err);
  process.exit(1);
});
