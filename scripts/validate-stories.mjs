#!/usr/bin/env node
/**
 * Content QC for src/content/publications.
 *
 * Checks that every publication entry is factually presentable before a build:
 *  - required frontmatter fields are present
 *  - every figure referenced by a story actually exists under public/
 *  - no entry points at the removed synthetic /publication-figures/ illustrations
 *  - figure alt text and captions are real sentences, not placeholders
 *  - plainLanguageSummary sits in the 60-140 word window
 *  - unreviewed work is labelled as such
 *  - no marketing vocabulary
 *
 * Exits non-zero on error. Warnings do not fail the run.
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'src', 'content', 'publications');
const publicDir = join(root, 'public');

const REQUIRED = ['title', 'authors', 'venue', 'year', 'type', 'abstract', 'plainLanguageSummary', 'contribution', 'method', 'relevance'];
const BANNED = [
  'groundbreaking', 'revolutionary', 'cutting-edge', 'game-changing', 'world-class',
  'visionary', 'industry-leading', 'ai pioneer', 'paradigm shift', 'unprecedented',
  'seamlessly', 'leverage synergies', 'state-of-the-art solution',
];
const PLACEHOLDER = [/\btodo\b/i, /lorem ipsum/i, /\btbd\b/i, /\bplaceholder\b/i, /\bfixme\b/i, /\bxxxx+\b/i];

const errors = [];
const warnings = [];

/** Minimal YAML frontmatter reader: enough for these files, no dependency. */
function readFrontmatter(raw, file) {
  if (!raw.startsWith('---')) {
    errors.push(`${file}: missing frontmatter block`);
    return null;
  }
  const end = raw.indexOf('\n---', 3);
  if (end === -1) {
    errors.push(`${file}: unterminated frontmatter block`);
    return null;
  }
  return raw.slice(4, end);
}

function collectScalar(block, key) {
  const match = block.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
  if (!match) return null;
  return match[1].trim().replace(/^["']|["']$/g, '');
}

function collectAll(block, key) {
  const out = [];
  // Matches both `key: value` and a sequence item `- key: value`, at any indent.
  const re = new RegExp(`^[ \\t]*(?:-[ \\t]+)?${key}:[ \\t]*(.+)$`, 'gm');
  let match;
  while ((match = re.exec(block)) !== null) out.push(match[1].trim().replace(/^["']|["']$/g, ''));
  return out;
}

const files = readdirSync(contentDir).filter((name) => name.endsWith('.md')).sort();
if (files.length === 0) errors.push('no publication entries found');

let figureCount = 0;
let storyCount = 0;

for (const file of files) {
  const raw = readFileSync(join(contentDir, file), 'utf8');
  const block = readFrontmatter(raw, file);
  if (!block) continue;

  for (const key of REQUIRED) {
    if (!new RegExp(`^${key}:`, 'm').test(block)) errors.push(`${file}: missing required field "${key}"`);
  }

  const lower = raw.toLowerCase();
  for (const word of BANNED) {
    if (lower.includes(word)) errors.push(`${file}: banned marketing phrase "${word}"`);
  }
  for (const pattern of PLACEHOLDER) {
    if (pattern.test(raw)) errors.push(`${file}: placeholder text matching ${pattern} left in the entry`);
  }

  // No synthetic illustrations.
  if (raw.includes('/publication-figures/')) {
    errors.push(`${file}: references /publication-figures/ — those synthetic illustrations were removed`);
  }

  // Summary length.
  const summary = collectScalar(block, 'plainLanguageSummary');
  if (summary) {
    const words = summary.split(/\s+/).filter(Boolean).length;
    if (words < 60) warnings.push(`${file}: plainLanguageSummary is only ${words} words (target 80-120)`);
    else if (words > 140) warnings.push(`${file}: plainLanguageSummary is ${words} words (target 80-120)`);
  }

  // Peer-review labelling.
  const peerReviewed = collectScalar(block, 'peerReviewed');
  const status = (collectScalar(block, 'status') || '').toLowerCase();
  if (peerReviewed === 'false') {
    const labelled = /preprint|review|preparation|withdrawn|not peer reviewed/.test(status);
    if (!labelled) errors.push(`${file}: peerReviewed is false but status "${status}" does not say so`);
  }

  // Figures: every src must exist on disk, and alt/caption must be substantive.
  if (/^story:/m.test(block)) storyCount += 1;
  const srcs = collectAll(block, 'src');
  const alts = collectAll(block, 'alt');
  const captions = collectAll(block, 'caption');

  for (const src of srcs) {
    figureCount += 1;
    if (!src.startsWith('/')) {
      errors.push(`${file}: figure src "${src}" must be an absolute site path`);
      continue;
    }
    const onDisk = join(publicDir, src.replace(/^\//, ''));
    if (!existsSync(onDisk)) errors.push(`${file}: figure file missing on disk -> public${src}`);
  }
  if (alts.length !== srcs.length) errors.push(`${file}: ${srcs.length} figure src values but ${alts.length} alt values`);
  if (captions.length < srcs.length) errors.push(`${file}: ${srcs.length} figures but only ${captions.length} captions`);
  for (const alt of alts) {
    if (alt.split(/\s+/).filter(Boolean).length < 6) errors.push(`${file}: alt text too short to be useful -> "${alt}"`);
  }
}

console.log(`Checked ${files.length} publication entries · ${storyCount} with a visual brief · ${figureCount} figure references.`);

// Warn about unreferenced files in public/research.
const researchDir = join(publicDir, 'research');
if (existsSync(researchDir)) {
  const allMd = files.map((file) => readFileSync(join(contentDir, file), 'utf8')).join('\n');
  const walk = (dir, prefix) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const next = join(dir, entry.name);
      const web = `${prefix}/${entry.name}`;
      if (entry.isDirectory()) walk(next, web);
      else if (!allMd.includes(web)) warnings.push(`public${web} is not referenced by any publication entry`);
    }
  };
  walk(researchDir, '/research');
}

for (const warning of warnings) console.warn(`WARN  ${warning}`);
for (const error of errors) console.error(`ERROR ${error}`);

if (errors.length > 0) {
  console.error(`\nvalidate:stories failed with ${errors.length} error(s).`);
  process.exit(1);
}
console.log(`validate:stories passed${warnings.length ? ` with ${warnings.length} warning(s)` : ''}.`);
