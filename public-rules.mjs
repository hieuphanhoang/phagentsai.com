/**
 * What may never be published, as text patterns (`F28-05`, `R48`, `R14`).
 *
 * Shared by the local audit (`audit-public.mjs`) and the public repository's own CI check
 * (`check-candidate.mjs`, beside it in `publish/`). It imports nothing at all, so it can be copied into the
 * build-only repository and run there with a bare Node and no `node_modules` (Codex, AGENT-110
 * publication finding 1). The rules report a category, never the text they matched (R112-2).
 */

/** Every emitted asset holding the embedded public export carries this string (`F53`). */
export const PUBLIC_EXPORT_MARKER = 'portfolio-public-export-v1';

/**
 * A path that may be published: relative, POSIX, plain segments. No segment may start with a dot,
 * so `.` and `..`, hidden files, and what the Pages upload leaves out (`.git`, `.github`) never
 * qualify - the deployed inventory is exactly the checked one (R112-I1, R112-I3).
 */
export const SAFE_PATH = /^[A-Za-z0-9_-][A-Za-z0-9_.-]*(?:\/[A-Za-z0-9_-][A-Za-z0-9_.-]*)*$/;

export const EVERYWHERE = [
  ['a bearer token', /Bearer\s+[A-Za-z0-9._~+/-]{16,}/],
  ['a server setting name', /PORTFOLIO_[A-Z_]{4,}/],
  ['a provider key', /\bsk-[A-Za-z0-9_-]{20,}/],
  ['the synthetic privileged canary', /fixture-privileged-canary|violet clockwork orchard/],
  ['an email address', /[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}/],
];

const PHONE = /\+?\d[\d\s().-]{6,}\d/g;

/* Content digests (sha256 and the like) are long hex runs, and one can contain a
   dozen digits in a row - which is not a phone number. Blank runs of 40+ hex
   characters before looking; no real phone number lives inside one. */
const DIGEST = /[0-9a-f]{40,}/gi;

/** True when the text holds a run of nine or more digits written like a phone number. */
export function hasPhoneLike(text) {
  for (const match of text.replace(DIGEST, ' ').matchAll(PHONE)) {
    if (match[0].replace(/\D/g, '').length >= 9) return true;
  }
  return false;
}

/** The categories the text breaks, everywhere-rules only. */
export function everywhereFindings(text) {
  return EVERYWHERE.filter(([, pattern]) => pattern.test(text)).map(([what]) => what);
}
