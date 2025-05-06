/**
 * Formats a Hijri date string into the format "YYYY-MM-DD".
 *
 * @param {string} hijri - The Hijri date string in the format "D/M/YYYY" or "DD/MM/YYYY".
 * @returns {string} The formatted Hijri date string in the format "YYYY-MM-DD".
 */
export function formatHijri(hijri) {
  const [day, month, year] = hijri
    .split('/')
    .map((part) => part.trim().padStart(2, '0'));
  return `${year}-${month}-${day}`;
}
