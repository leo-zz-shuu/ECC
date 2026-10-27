'use strict';

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const repoRoot = path.join(__dirname, '..', '..');
const script = path.join(repoRoot, 'scripts', 'model-worker.js');
const configured = {
  ANTHROPIC_BASE_URL: 'https://claude.example.invalid',
  ANTHROPIC_AUTH_TOKEN: 'test-token-never-print',
  ANTHROPIC_MODEL: 'deepseek-v4-flash',
};

function run(args, env = {}) {
  return spawnSync(process.execPath, [script, ...args], {
    cwd: repoRoot,
    env: { ...process.env, ...env },
    encoding: 'utf8',
  });
}

function withTempDir(fn) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ecc-model-worker-'));
  try { fn(dir); } finally { fs.rmSync(dir, { recursive: true, force: true }); }
}

withTempDir((dir) => {
  const task = path.join(repoRoot, 'tests', 'scripts', `model-worker-task-${process.pid}.tmp`);
  fs.mkdirSync(path.join(dir, '.claude'), { recursive: true });
  fs.writeFileSync(path.join(dir, '.claude', 'settings.json'), JSON.stringify({ env: configured }));
  fs.writeFileSync(task, 'Implement the bounded task.');
  try {
    const result = run(['--dry-run', task], { HOME: dir });
    assert.strictEqual(result.status, 0, result.stderr);
    const plan = JSON.parse(result.stdout);
    assert.strictEqual(plan.cli, 'claude');
    assert.strictEqual(plan.model, 'deepseek-v4-flash');
    assert.ok(!result.stdout.includes(configured.ANTHROPIC_BASE_URL));
    assert.ok(!result.stdout.includes(configured.ANTHROPIC_AUTH_TOKEN));
  } finally {
    fs.rmSync(task, { force: true });
  }

  const outsideTask = path.join(dir, 'outside-task.txt');
  fs.writeFileSync(outsideTask, 'outside');
  const outside = run(['--dry-run', outsideTask]);
  assert.notStrictEqual(outside.status, 0);
  assert.match(outside.stderr, /inside the current worktree/);

});

withTempDir((dir) => {
  const task = path.join(repoRoot, 'tests', 'scripts', `model-worker-task-${process.pid}.tmp`);
  const fakeCli = path.join(dir, 'fake-claude.js');
  fs.mkdirSync(path.join(dir, '.claude'), { recursive: true });
  fs.writeFileSync(path.join(dir, '.claude', 'settings.json'), JSON.stringify({ env: configured }));
  fs.writeFileSync(task, 'Implement the bounded task.');
  fs.writeFileSync(fakeCli, [
    'const fs = require("fs");',
    'process.stdout.write(JSON.stringify({argv: process.argv.slice(2), input: fs.readFileSync(0, "utf8"), baseUrl: process.env.ANTHROPIC_BASE_URL, token: process.env.ANTHROPIC_AUTH_TOKEN, model: process.env.ANTHROPIC_MODEL}));',
  ].join('\n'));
  try {
    const result = run([task], {
      HOME: dir,
      ECC_CLAUDE_CLI: process.execPath,
      ECC_CLAUDE_CLI_PREFIX: JSON.stringify([fakeCli]),
    });
    assert.strictEqual(result.status, 0, result.stderr);
    const call = JSON.parse(result.stdout);
    assert.deepStrictEqual(call.argv, ['--print']);
    assert.ok(call.input.includes('Implement the bounded task.'));
    assert.strictEqual(call.baseUrl, configured.ANTHROPIC_BASE_URL);
    assert.strictEqual(call.token, configured.ANTHROPIC_AUTH_TOKEN);
    assert.strictEqual(call.model, configured.ANTHROPIC_MODEL);
  } finally {
    fs.rmSync(task, { force: true });
  }
});

console.log('model-worker tests passed');
