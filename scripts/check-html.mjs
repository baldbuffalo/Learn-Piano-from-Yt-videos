import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
const inline = scripts.filter((match) => !/\bsrc\s*=/.test(match[1]) && match[2].trim()).at(-1);
assert.ok(inline, 'Expected an inline application script in index.html');
new vm.Script(inline[2], { filename: 'index.html:inline-script' });

for (const feature of [
  'function scanFallingNotes()',
  'function playMidiOutputNote(',
  'id="midi-output"',
  'function setVisionRange()',
  'function extractVideoId('
]) {
  assert.ok(html.includes(feature), \`Missing expected feature: \${feature}\`);
}

console.log('HTML inline JavaScript syntax and feature checks passed.');
