import {
  addMinutes,
  formatDate,
  formatHijri,
  formatServerTime,
} from './format.js';

// E-Solat sets dhuha 27-28 minutes after syuruk; the fallback omits it.
const DHUHA_AFTER_SYURUK_MINUTES = 27;

// waktusolat.me fields are bilingual pairs, e.g. "Ahad / Sunday" or
// "25/10/2026 / 25/Oktober/2026".
const firstPart = (value) => value.split(' / ')[0];
const lastPart = (value) => value.split(' / ').at(-1);

/**
 * Normalize a waktusolat.me response to match the E-Solat format.
 * @param {object} data - Fallback API response.
 * @param {'today' | 'week' | 'month' | 'year'} period - Requested period.
 * @param {{ zone: string, bearing: string }} zoneInfo - Requested zone.
 * @returns {object}
 */
export function normalizeSecondaryResponse(data, period, zoneInfo) {
  const today = formatDate(firstPart(data.today.date));

  const prayerTime = data.data.map((entry) => ({
    hijri: formatHijri(firstPart(entry.hijri)),
    date: formatDate(firstPart(entry.date)),
    day: lastPart(entry.day),
    imsak: entry.imsak,
    fajr: entry.fajr,
    syuruk: entry.syuruk,
    dhuha: addMinutes(entry.syuruk, DHUHA_AFTER_SYURUK_MINUTES),
    dhuhr: entry.dhuhr,
    asr: entry.asr,
    maghrib: entry.maghrib,
    isha: entry.isha,
  }));

  return {
    // The fallback's "today" period also includes tomorrow.
    prayerTime:
      period === 'today'
        ? prayerTime.filter((entry) => entry.date === today)
        : prayerTime,
    status: 'OK!',
    serverTime: formatServerTime(firstPart(data.today.date), data.today.time),
    periodType: period,
    lang: 'ms_my',
    zone: zoneInfo.zone,
    bearing: zoneInfo.bearing,
  };
}
