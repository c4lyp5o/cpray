import { describe, it, expect, vi, beforeEach } from 'vitest';
import Cpray from '../src/index.js';
import {
  addMinutes,
  formatDate,
  formatHijri,
  formatServerTime,
} from '../src/utils/format.js';

const PRIMARY_HOST = 'e-solat.gov.my';
const FALLBACK_HOST = 'waktusolat.me';

const samplePrimaryResponse = {
  prayerTime: [
    {
      hijri: '1448-05-14',
      date: '25-Okt-2026',
      day: 'Sunday',
      imsak: '05:45:00',
      fajr: '05:55:00',
      syuruk: '07:03:00',
      dhuha: '07:30:00',
      dhuhr: '13:05:00',
      asr: '16:24:00',
      maghrib: '19:02:00',
      isha: '20:12:00',
    },
  ],
  status: 'OK!',
  serverTime: '2026-10-25 01:34:28',
  periodType: 'today',
  lang: 'ms_my',
  zone: 'KDH01',
  bearing: '291&#176; 5&#8242; 39&#8243;',
};

const fallbackEntry = (day, date, hijri) => ({
  day,
  hijri,
  date,
  imsak: '05:45:00',
  fajr: '05:55:00',
  syuruk: '07:03:00',
  dhuhr: '13:05:00',
  asr: '16:24:00',
  maghrib: '19:02:00',
  isha: '20:12:00',
});

// Shape returned by waktusolat.me for period "today" (today + tomorrow).
const sampleFallbackResponse = {
  today: {
    day: 'Ahad / Sunday',
    hijri: '14/5/1448 / 14/Jumadil Awal/1448',
    date: '25/10/2026 / 25/Oktober/2026',
    time: '1:34:28 PM',
  },
  negeri: 'Kedah',
  zone: 'KOTA SETAR, POKOK SENA DAN KUBANG PASU',
  data: [
    fallbackEntry(
      'Ahad / Sunday',
      '25/10/2026 / 25/Oktober/2026',
      '14/5/1448 / 14/Jumadil Awal/1448'
    ),
    fallbackEntry(
      'Isnin / Monday',
      '26/10/2026 / 26/Oktober/2026',
      '15/5/1448 / 15/Jumadil Awal/1448'
    ),
  ],
};

const jsonResponse = (body) => ({ ok: true, json: () => Promise.resolve(body) });

/** Route fetch mocks by host so retries cannot leak across APIs. */
function mockApis({ primary, fallback }) {
  fetch.mockImplementation(async (url) => {
    const handler = url.includes(PRIMARY_HOST) ? primary : fallback;
    return handler();
  });
}

const fail = () => Promise.reject(new Error('Network down'));

vi.stubGlobal('fetch', vi.fn());

describe('Cpray', () => {
  let cpray;

  beforeEach(() => {
    cpray = new Cpray();
    fetch.mockReset();
  });

  it('returns data from primary API if successful', async () => {
    mockApis({ primary: () => jsonResponse(samplePrimaryResponse), fallback: fail });

    const result = await cpray.getTimesToday('kdh01');

    expect(result).toEqual(samplePrimaryResponse);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch.mock.calls[0][0]).toContain('period=today&zone=KDH01');
  });

  it('falls back and normalizes when primary API fails', async () => {
    mockApis({
      primary: fail,
      fallback: () => jsonResponse(sampleFallbackResponse),
    });

    const result = await cpray.getTimesToday('KDH01');

    // Normalized fallback must match the primary shape exactly.
    expect(result).toEqual({
      ...samplePrimaryResponse,
      serverTime: '2026-10-25 13:34:28',
    });
    // Primary: 1 attempt + 2 retries, then fallback.
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch.mock.calls[3][0]).toBe(
      'https://waktusolat.me/api/v1/waktusolat/today/kdh01'
    );
  });

  it('falls back when primary answers with a non-OK status', async () => {
    mockApis({
      primary: () =>
        jsonResponse({
          prayerTime: { data: ['No data available for the current request'] },
          status: 'NO_RECORD!',
        }),
      fallback: () => jsonResponse(sampleFallbackResponse),
    });

    const result = await cpray.getTimesToday('KDH01');

    expect(result.status).toBe('OK!');
    expect(result.prayerTime).toHaveLength(1);
  });

  it('falls back when primary returns an HTTP error', async () => {
    mockApis({
      primary: () => Promise.resolve({ ok: false, status: 503, statusText: '' }),
      fallback: () => jsonResponse(sampleFallbackResponse),
    });

    const result = await cpray.getTimesToday('KDH01');

    expect(result.zone).toBe('KDH01');
  });

  it('keeps every fallback entry for non-today periods', async () => {
    mockApis({
      primary: fail,
      fallback: () => jsonResponse(sampleFallbackResponse),
    });

    const result = await cpray.getTimesbyWeek('KDH01');

    expect(result.periodType).toBe('week');
    expect(result.prayerTime.map((p) => p.date)).toEqual([
      '25-Okt-2026',
      '26-Okt-2026',
    ]);
    expect(result.prayerTime[1].day).toBe('Monday');
  });

  it('uses the requested period in both URLs', async () => {
    mockApis({ primary: fail, fallback: fail });

    await expect(cpray.getTimesbyMonth('KDH01')).rejects.toThrow();
    await expect(cpray.getTimesbyYear('KDH01')).rejects.toThrow();

    const urls = fetch.mock.calls.map(([url]) => url);
    expect(urls).toContain(
      'https://www.e-solat.gov.my/index.php?r=esolatApi/TakwimSolat&period=month&zone=KDH01'
    );
    expect(urls).toContain('https://waktusolat.me/api/v1/waktusolat/year/kdh01');
  });

  it('throws if both primary and fallback fail', async () => {
    mockApis({ primary: fail, fallback: fail });

    await expect(cpray.getTimesToday('KDH01')).rejects.toThrow(
      'Server error. Sila cuba lagi.'
    );
  });

  it.each(['INVALID_ZONE', undefined, null, 42])(
    'rejects invalid zone %s',
    async (zone) => {
      await expect(cpray.getTimesToday(zone)).rejects.toThrow('Invalid zone');
      expect(fetch).not.toHaveBeenCalled();
    }
  );
});

describe('format utils', () => {
  it('formats dates with Malay month abbreviations', () => {
    expect(formatDate('1/8/2026')).toBe('01-Ogos-2026');
    expect(formatDate('31/12/2026')).toBe('31-Dis-2026');
  });

  it('formats hijri dates as YYYY-MM-DD', () => {
    expect(formatHijri('14/5/1448')).toBe('1448-05-14');
  });

  it('converts 12-hour server time to 24-hour', () => {
    expect(formatServerTime('5/1/2026', '12:05:09 AM')).toBe('2026-01-05 00:05:09');
    expect(formatServerTime('5/1/2026', '12:05:09 PM')).toBe('2026-01-05 12:05:09');
    expect(formatServerTime('5/1/2026', '1:05:09 PM')).toBe('2026-01-05 13:05:09');
    expect(formatServerTime('5/1/2026', '13:05:09')).toBe('2026-01-05 13:05:09');
  });

  it('adds minutes to a time', () => {
    expect(addMinutes('07:03:00', 27)).toBe('07:30:00');
    expect(addMinutes('23:50:00', 20)).toBe('00:10:00');
  });
});
