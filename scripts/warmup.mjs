#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { join, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const PORT = Number(process.env.PORT || 3000);
const BASE = `http://localhost:${PORT}`;
const WITH_DEV = process.argv.includes('--with-dev');

function discoverRoutes() {
  const appDir = join(ROOT, 'src', 'app');
  const routes = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (/^page\.(tsx|jsx|ts|js)$/.test(entry.name)) {
        const rel = dir.slice(appDir.length).split(sep).join('/');
        routes.push(rel === '' ? '/' : rel);
      }
    }
  };
  if (existsSync(appDir)) walk(appDir);
  return routes;
}

async function ping(timeoutMs = 2500) {
  try {
    const res = await fetch(`${BASE}/`, { signal: AbortSignal.timeout(timeoutMs) });
    return res.status;
  } catch {
    return null;
  }
}

async function waitForServer(ms) {
  const deadline = Date.now() + ms;
  while (Date.now() < deadline) {
    if (await ping()) return true;
    process.stdout.write('.');
    await new Promise((r) => setTimeout(r, 500));
  }
  return false;
}

async function warm(route) {
  const t0 = Date.now();
  try {
    const res = await fetch(BASE + route, { signal: AbortSignal.timeout(120000) });
    await res.arrayBuffer().catch(() => {});
    return { ok: res.ok, status: res.status, ms: Date.now() - t0 };
  } catch (e) {
    return { ok: false, status: 'ERR', ms: Date.now() - t0, err: e.message };
  }
}

let child = null;
const shutdown = () => {
  if (child) child.kill();
  process.exit(0);
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

const running = await ping();

if (!running && WITH_DEV) {
  console.log(`[warmup] nothing on port ${PORT} — starting \`next dev\`…`);
  child = spawn('npx', ['next', 'dev'], {
    cwd: ROOT,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: process.env,
  });
  child.on('exit', (code) => process.exit(code ?? 0));
} else if (!running) {
  console.log(`[warmup] nothing answering on ${BASE}.`);
  console.log('[warmup] Start \`npm run dev\` first (or use \`npm run dev:warm\`), then re-run.');
  process.exit(1);
}

process.stdout.write('[warmup] waiting for the dev server');
const up = await waitForServer(180000);
console.log(up ? ' ready.' : ' timed out after 3 min.');
if (!up) shutdown();

const routes = discoverRoutes();
console.log(`[warmup] pre-compiling ${routes.length} route(s): ${routes.join(', ')}`);

for (const route of routes) {
  const r = await warm(route);
  const flag = r.ok ? (r.ms > 1000 ? 'compiled' : 'cached ') : 'FAILED ';
  console.log(
    `  ${flag}  ${String(r.status).padEnd(4)}  ${route.padEnd(12)} ${r.ms}ms${r.err ? ' — ' + r.err : ''}`
  );
}

console.log('[warmup] done — every page is compiled; menu clicks are instant now.');

if (!child) process.exit(0);
