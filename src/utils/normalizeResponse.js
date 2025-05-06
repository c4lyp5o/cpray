import { formatDate } from './formatDate.js';
import { formatHijri } from './formatHijri.js';
import { validZones } from '../zones.js';

/**
 * Normalize fallback API response to match expected format.
 * @param {object} data
 */
export function normalizeSecondaryResponse(data) {
  const today = new Date();
  const formattedDate = formatDate(today.toISOString().split('T')[0], '-');

  const smallZone = validZones.find(
    (validZone) => validZone.label.toUpperCase() === data.zone.toUpperCase()
  );

  return {
    prayerTime: data.data
      .map((entry) => ({
        hijri: formatHijri(entry.hijri),
        date: formatDate(entry.date, '/'),
        day: entry.day.split(' / ')[1],
        imsak: entry.imsak,
        fajr: entry.fajr,
        syuruk: entry.syuruk,
        dhuha: '07:30:00', // Consider improving this
        dhuhr: entry.dhuhr,
        asr: entry.asr,
        maghrib: entry.maghrib,
        isha: entry.isha,
      }))
      .filter((entry) => entry.date === formattedDate),
    status: 'OK!',
    serverTime: `${data.today.date.split(' / ')[0].replace(/\//g, '-')} ${
      data.today.time.split(' ')[0]
    }`,
    periodType:
      data.data.length === 2
        ? 'today'
        : data.data.length === 7
        ? 'week'
        : data.data.length >= 30 && data.data.length <= 32
        ? 'month'
        : 'year',
    lang: 'ms_my',
    zone: smallZone?.zone || data.zone,
    bearing: `${smallZone?.bearing ?? 'N/A'}`,
  };
}
