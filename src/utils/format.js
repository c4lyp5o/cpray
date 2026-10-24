// Month abbreviations exactly as E-Solat returns them (e.g. "25-Okt-2026").
const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mac',
  'Apr',
  'Mei',
  'Jun',
  'Jul',
  'Ogos',
  'Sep',
  'Okt',
  'Nov',
  'Dis',
];

const pad2 = (value) => String(value).padStart(2, '0');

/**
 * Splits a "D/M/YYYY" date into zero-padded parts.
 * @param {string} date
 * @returns {string[]} [day, month, year]
 */
function splitDmy(date) {
  return date.split('/').map((part) => pad2(part.trim()));
}

/**
 * Formats "D/M/YYYY" as "DD-Mmm-YYYY" using E-Solat's Malay month names.
 * @param {string} date
 * @returns {string}
 * @example formatDate('25/10/2026'); // "25-Okt-2026"
 */
export function formatDate(date) {
  const [day, month, year] = splitDmy(date);
  return `${day}-${MONTH_NAMES[Number(month) - 1]}-${year}`;
}

/**
 * Formats a "D/M/YYYY" Hijri date as "YYYY-MM-DD".
 * @param {string} hijri
 * @returns {string}
 * @example formatHijri('14/5/1448'); // "1448-05-14"
 */
export function formatHijri(hijri) {
  const [day, month, year] = splitDmy(hijri);
  return `${year}-${month}-${day}`;
}

/**
 * Formats "D/M/YYYY" and "h:mm:ss AM|PM" as "YYYY-MM-DD HH:mm:ss".
 * @param {string} date
 * @param {string} time
 * @returns {string}
 * @example formatServerTime('25/10/2026', '1:34:28 PM'); // "2026-10-25 13:34:28"
 */
export function formatServerTime(date, time) {
  const [day, month, year] = splitDmy(date);
  const [clock, meridiem] = time.trim().split(/\s+/);
  const [hours, minutes, seconds = '00'] = clock.split(':');
  const hours24 = meridiem
    ? (Number(hours) % 12) + (meridiem.toUpperCase() === 'PM' ? 12 : 0)
    : Number(hours);
  return `${year}-${month}-${day} ${pad2(hours24)}:${minutes}:${seconds}`;
}

/**
 * Adds minutes to an "HH:mm:ss" time, wrapping at midnight.
 * @param {string} time
 * @param {number} minutesToAdd
 * @returns {string}
 * @example addMinutes('07:03:00', 27); // "07:30:00"
 */
export function addMinutes(time, minutesToAdd) {
  const [hours, minutes, seconds = '00'] = time.split(':');
  const total = (Number(hours) * 60 + Number(minutes) + minutesToAdd) % 1440;
  return `${pad2(Math.floor(total / 60))}:${pad2(total % 60)}:${seconds}`;
}
