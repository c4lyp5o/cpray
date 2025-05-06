import { describe, it, expect, vi, beforeEach } from 'vitest';
import Cpray from '../src/index.js';
import { validZones } from '../src/zones.js';

const samplePrimaryResponse = {
  prayerTime: 'mocked',
};

const sampleFallbackResponse = {
  prayerTime: [
    {
      hijri: '1446-11-08',
      date: '06-May-2025',
      day: 'Tuesday',
      imsak: '05:41:00',
      fajr: '05:51:00',
      syuruk: '07:02:00',
      dhuha: '07:30:00',
      dhuhr: '13:10:00',
      asr: '16:30:00',
      maghrib: '19:16:00',
      isha: '20:28:00',
    },
  ],
  status: 'OK!',
  serverTime: '2025-05-06 12:02:30',
  periodType: 'today',
  lang: 'ms_my',
  zone: 'MLK01',
  bearing: '292&#176; 50&#8242; 49&#8243;',
};

vi.stubGlobal('fetch', vi.fn());

describe('Cpray', () => {
  let cpray;

  beforeEach(() => {
    cpray = new Cpray();
    fetch.mockReset();
  });

  it('should return data from primary API if successful', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(samplePrimaryResponse),
    });

    const result = await cpray.getTimesToday(validZones[0].zone);
    expect(result).toEqual(samplePrimaryResponse);
  });

  it('should fallback if primary API fails', async () => {
    fetch
      .mockRejectedValueOnce(new Error('Primary API failed'))
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(sampleFallbackResponse),
      });

    const result = await cpray.getTimesToday(validZones[0].zone);
    expect(result).toHaveProperty('prayerTime');
    expect(result.status).toBe('OK!');
  });

  it('should throw if both primary and fallback fail', async () => {
    fetch.mockRejectedValue(new Error('Both APIs failed'));

    await expect(cpray.getTimesToday(validZones[0].zone)).rejects.toThrow(
      'Server error. Sila cuba lagi.'
    );
  });

  it('should reject invalid zone', async () => {
    await expect(cpray.getTimesToday('INVALID_ZONE')).rejects.toThrow(
      'Invalid zone'
    );
  });
});
