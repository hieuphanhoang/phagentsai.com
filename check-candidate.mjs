/**
 * The public repository's own check of what it is about to publish (`F32` task 1.4, AGENT-112).
 *
 *     node check-candidate.mjs <candidate-root>
 *
 * Runs in GitHub Actions on the build-only repository `hieuphanhoang/phagentsai.com` (ASK-030),
 * with a bare Node: it imports only Node's built-ins and `public-rules.mjs`, copied beside it, so
 * it needs no `node_modules` and installs nothing (Codex, AGENT-110 publication finding 1).
 *
 * It is the SECOND gate. A push is public the moment it lands, before this runs, so the privacy
 * gate is the local check of exactly what is pushed (R112-1); this one stops a deployment of
 * anything that does not match what was checked there.
 *
 * The candidate's layout:
 *
 *     site/                         exactly what GitHub Pages serves
 *     release.json                  the app commit, the public content version, and every
 *                                   file under site/ with its SHA-256 (provenance, not a claim
 *                                   that CI rebuilt anything)
 *     public-export-manifest.json   the build's record of the chunk(s) holding the public export
 *     check-candidate.mjs, public-rules.mjs, .github/   this check and its workflow
 *
 * It fails unless:
 *  - the root is a plain folder with no link on its path, and site/, release.json and the
 *    manifest are a plain folder and files - each checked BEFORE it is read, so a link is never
 *    followed (R112-I2, R112-I2a) - the root holds nothing else, and site/ holds only regular
 *    files and folders;
 *  - release.json and the manifest are JSON objects; every path either lists is a safe relative
 *    path (`SAFE_PATH`), checked BEFORE any listed file is opened;
 *  - release.json lists exactly the files under site/, each once, with its SHA-256;
 *  - the manifest is for Pages, names the same public content version, and lists at least one
 *    chunk; each chunk is a record with a safe path and its own SHA-256, listed once, and is a
 *    file release.json lists with that same SHA-256 (R112-I1);
 *  - site/CNAME is exactly `phagentsai.com`;
 *  - no file breaks a public rule, and every page, data file, export chunk and script carrying
 *    the export's marker passes the phone check - other scripts and stylesheets are exempt from
 *    it, exactly as in the local audit.
 *
 * Its diagnostics are categories, counts and positions only - `release.json: files[3]`, never a
 * file name or any other text the candidate supplied - because a name can itself hold a contact
 * value or a control sequence for the Actions log (R112-2, R112-I3).
 */
import { createHash } from 'node:crypto';
import { lstatSync, readFileSync, readdirSync, realpathSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { PUBLIC_EXPORT_MARKER, SAFE_PATH, everywhereFindings, hasPhoneLike } from './public-rules.mjs';

export const SITE_HOST = 'phagentsai.com';
const ROOT_ENTRIES = new Set(['site', 'release.json', 'public-export-manifest.json', 'check-candidate.mjs',
  'public-rules.mjs', '.github', '.git', 'README.md']);
const TEXT = /\.(html|js|mjs|css|json|txt|xml|svg|md|webmanifest)$|(^|\/)CNAME$/;
/* Generated code: minified scripts and stylesheets are full of long numbers, so - as in the
   local audit - they skip the phone check, except what holds the public export. */
const CODE = /\.(js|mjs|css)$/;
const SCRIPT = /\.(js|mjs)$/;
const SHA256 = /^[0-9a-f]{64}$/;
const VERSION = /^sha256:[0-9a-f]{64}$/;
const COMMIT = /^[0-9a-f]{40}$/;

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');
const isRecord = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
const entries = (count) => (count === 1 ? '1 entry' : `${count} entries`);

/** What a path is, without following it: 'folder', 'file', 'link', 'special' or 'missing'. */
export function entryType(full) {
  let stat;
  try { stat = lstatSync(full); } catch { return 'missing'; }
  if (stat.isSymbolicLink()) return 'link';
  if (stat.isDirectory()) return 'folder';
  if (stat.isFile()) return 'file';
  return 'special';
}

function readJson(file, failures, label) {
  const type = entryType(file);
  if (type !== 'file') {
    failures.push(`${label}: ${type === 'missing' ? 'missing' : 'not a regular file'}`);
    return undefined;
  }
  try {
    const value = JSON.parse(readFileSync(file, 'utf8'));
    if (isRecord(value)) return value;
  } catch { /* reported below */ }
  failures.push(`${label}: not a JSON object`);
  return undefined;
}

/** Every regular file under site/, as a sorted relative POSIX path, and how many entries are not. */
function siteFiles(siteDir) {
  const files = [];
  let special = 0;
  const walk = (dir, rel) => {
    for (const entry of readdirSync(dir)) {
      const full = path.join(dir, entry);
      const relPath = rel === '' ? entry : `${rel}/${entry}`;
      const type = entryType(full);
      if (type === 'folder') walk(full, relPath);
      else if (type === 'file') files.push(relPath);
      else special += 1;
    }
  };
  walk(siteDir, '');
  return { files: files.sort(), special };
}

/** A folder that is not a link and is not reached through one: its real path is its own path. */
function canonicalFolder(dir) {
  if (entryType(dir) !== 'folder') return false;
  try {
    const real = realpathSync.native(dir);
    const resolved = path.resolve(dir);
    return process.platform === 'win32' ? real.toLowerCase() === resolved.toLowerCase() : real === resolved;
  } catch {
    return false;
  }
}

/** @returns {string[]} failures: categories, counts and positions only. */
export function checkCandidate(root) {
  /* Canonical root first (R112-I2a): with no link on its path, a regular leaf under it is
     really under it. */
  if (!canonicalFolder(root)) return ['candidate: the root is not a plain folder'];
  const failures = [];
  const unknown = readdirSync(root).filter((entry) => !ROOT_ENTRIES.has(entry)).length;
  if (unknown > 0) failures.push(`root: ${entries(unknown)} not part of a candidate`);
  const siteDir = path.join(root, 'site');
  if (entryType(siteDir) !== 'folder') return [...failures, 'site/: missing or not a plain folder'];
  const { files, special } = siteFiles(siteDir);
  if (special > 0) failures.push(`site/: ${entries(special)} not a regular file or folder`);

  const release = readJson(path.join(root, 'release.json'), failures, 'release.json');
  const manifest = readJson(path.join(root, 'public-export-manifest.json'), failures, 'public-export-manifest.json');
  if (release === undefined || manifest === undefined) return failures;

  /* Shapes and paths first: nothing a candidate lists is opened before its path is known safe. */
  if (!COMMIT.test(String(release.appCommit ?? ''))) failures.push('release.json: appCommit is not a full commit id');
  if (!VERSION.test(String(release.publicContentVersion ?? ''))) failures.push('release.json: publicContentVersion is malformed');
  const listed = new Map();
  if (!Array.isArray(release.files) || release.files.length === 0) failures.push('release.json: lists no files');
  (Array.isArray(release.files) ? release.files : []).forEach((entry, index) => {
    const at = `release.json: files[${index}]`;
    if (!isRecord(entry) || typeof entry.path !== 'string' || !SAFE_PATH.test(entry.path)) failures.push(`${at} is not a safe relative path`);
    else if (typeof entry.sha256 !== 'string' || !SHA256.test(entry.sha256)) failures.push(`${at} has no valid SHA-256`);
    else if (listed.has(entry.path)) failures.push(`${at} repeats an earlier path`);
    else listed.set(entry.path, { index, sha256: entry.sha256 });
  });

  if (manifest.schemaVersion !== 1 || manifest.target !== 'pages') failures.push('public-export-manifest.json: not a Pages manifest');
  if (manifest.publicContentVersion !== release.publicContentVersion) {
    failures.push('public-export-manifest.json: a different public content version from release.json');
  }
  const exportChunks = new Set();
  if (!Array.isArray(manifest.chunks) || manifest.chunks.length === 0) failures.push('public-export-manifest.json: lists no export chunk');
  (Array.isArray(manifest.chunks) ? manifest.chunks : []).forEach((chunk, index) => {
    const at = `public-export-manifest.json: chunks[${index}]`;
    if (!isRecord(chunk) || typeof chunk.file !== 'string' || !SAFE_PATH.test(chunk.file)) failures.push(`${at} is not a safe relative path`);
    else if (typeof chunk.sha256 !== 'string' || !SHA256.test(chunk.sha256)) failures.push(`${at} has no valid SHA-256`);
    else if (exportChunks.has(chunk.file)) failures.push(`${at} repeats an earlier chunk`);
    else if (listed.get(chunk.file)?.sha256 !== chunk.sha256) failures.push(`${at} is not a file release.json lists with that SHA-256`);
    else exportChunks.add(chunk.file);
  });
  if (failures.length > 0) return failures;

  /* Exactly the listed files (so every chunk, being listed, is present), each unchanged. */
  const present = new Set(files);
  const unlisted = files.filter((file) => !listed.has(file)).length;
  if (unlisted > 0) failures.push(`site/: ${unlisted === 1 ? '1 file' : `${unlisted} files`} not in release.json`);
  for (const [file, { index }] of listed) if (!present.has(file)) failures.push(`release.json: files[${index}] is listed but missing`);
  if (failures.length > 0) return failures;
  for (const [file, { index, sha256: recorded }] of listed) {
    const at = `release.json: files[${index}]`;
    const bytes = readFileSync(path.join(siteDir, ...file.split('/')));
    if (sha256(bytes) !== recorded) { failures.push(`${at} changed since it was recorded`); continue; }
    if (!TEXT.test(file)) continue;
    const text = bytes.toString('utf8');
    for (const what of everywhereFindings(text)) failures.push(`${at}: ${what}`);
    const carriesExport = exportChunks.has(file) || (SCRIPT.test(file) && text.includes(PUBLIC_EXPORT_MARKER));
    if ((!CODE.test(file) || carriesExport) && hasPhoneLike(text)) failures.push(`${at}: a phone-shaped number`);
  }
  if (present.has('CNAME')) {
    if (readFileSync(path.join(siteDir, 'CNAME'), 'utf8').trim() !== SITE_HOST) failures.push(`site/CNAME: not ${SITE_HOST}`);
  } else failures.push('site/CNAME: missing');
  return failures;
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const failures = checkCandidate(path.resolve(process.argv[2] ?? '.'));
  for (const failure of failures) console.error(`candidate: ${failure}`);
  if (failures.length > 0) process.exit(1);
  console.log('candidate: ok');
}
