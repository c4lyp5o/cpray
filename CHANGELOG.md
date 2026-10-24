# Changelog

## 1.4.0

### Fixed

- Fallback API (waktusolat.me) now works. It previously crashed on a missing method, so every primary outage ended in `Server error. Sila cuba lagi.`
- Fallback responses for `week`, `month` and `year` now return every day instead of only today.
- Fallback "today" is matched against the fallback server's own date instead of the UTC date, which was wrong between 00:00 and 08:00 Malaysia time.
- Fallback dates now use E-Solat's Malay month abbreviations (`25-Okt-2026`, not `25-Oct-2026`).
- Fallback `serverTime` is now `YYYY-MM-DD HH:mm:ss` (24-hour), matching E-Solat.
- Fallback `dhuha` is now derived from syuruk instead of hardcoded to `07:30:00`.
- E-Solat responses with a non-`OK!` status (e.g. `NO_RECORD!`, sent with HTTP 200) now trigger the fallback instead of being returned as success.
- A missing or non-string zone now throws `Invalid zone: …` instead of a `TypeError`.
- `package.json` `main` pointed at a non-existent file.

### Changed

- Requires Node.js 18 or newer (uses the global `fetch`, which Node 16 does not have).
- Requests time out after 10 seconds so a hanging server falls through to the retry and fallback.
- The final `Server error` now carries the underlying failure as `error.cause`.

### Internal

- Upgraded Vitest 5 and esbuild 0.28; removed the unused `axios` dev dependency.
- Merged the date helpers into `src/utils/format.js`; coverage now includes `src/utils`.
- Fixed the publish workflow (non-existent `npm run coverage` script, missing changelog, Node version).
- Publishing now uses npm trusted publishing (OIDC) with provenance instead of an `NPM_TOKEN` secret.
- Added npm version, downloads, size, Node and license badges to the README.
