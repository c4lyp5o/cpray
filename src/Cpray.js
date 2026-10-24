import { validZones } from './zones.js';
import { normalizeSecondaryResponse } from './utils/normalizeResponse.js';

const REQUEST_TIMEOUT_MS = 10_000;
const DEFAULT_RETRIES = 2;

/**
 * Class to retrieve and normalize prayer times from E-Solat or its fallback.
 */
class Cpray {
  constructor() {
    this.baseUrl = 'https://www.e-solat.gov.my/index.php?r=esolatApi';
    this.fallbackUrl = 'https://waktusolat.me/api/v1/waktusolat';
  }

  /**
   * Fetches a URL as JSON with timeout and retry logic.
   * @param {string} url
   * @param {number} retries
   * @returns {Promise<any>}
   */
  async fetchWithRetry(url, retries = DEFAULT_RETRIES) {
    for (let attempt = 0; ; attempt++) {
      try {
        const response = await fetch(url, {
          headers: { Accept: 'application/json' },
          signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
        });
        if (!response.ok) {
          throw new Error(
            `HTTP ${response.status}: ${response.statusText || 'Unknown error'}`
          );
        }
        return await response.json();
      } catch (error) {
        if (attempt >= retries) throw error;
      }
    }
  }

  /**
   * Fetch prayer times for the given period and zone.
   * @param {'today' | 'week' | 'month' | 'year'} period
   * @param {string} zone
   * @returns {Promise<Object>}
   */
  async #getTimes(period, zone) {
    const zoneCode = typeof zone === 'string' ? zone.toUpperCase() : '';
    const zoneInfo = validZones.find((z) => z.zone === zoneCode);
    if (!zoneInfo) throw new Error(`Invalid zone: ${zone}`);

    try {
      const data = await this.fetchWithRetry(
        `${this.baseUrl}/TakwimSolat&period=${period}&zone=${zoneCode}`
      );
      // E-Solat answers HTTP 200 with e.g. status "NO_RECORD!" when it has no data.
      if (data?.status === 'OK!' && Array.isArray(data.prayerTime)) return data;
    } catch {
      // Fall through to the fallback API.
    }

    try {
      const data = await this.fetchWithRetry(
        `${this.fallbackUrl}/${period}/${zoneCode.toLowerCase()}`
      );
      return normalizeSecondaryResponse(data, period, zoneInfo);
    } catch (error) {
      throw new Error('Server error. Sila cuba lagi.', { cause: error });
    }
  }

  /**
   * Get prayer times for today.
   * @param {string} zone
   */
  getTimesToday(zone) {
    return this.#getTimes('today', zone);
  }

  /**
   * Get prayer times for this week.
   * @param {string} zone
   */
  getTimesbyWeek(zone) {
    return this.#getTimes('week', zone);
  }

  /**
   * Get prayer times for this month.
   * @param {string} zone
   */
  getTimesbyMonth(zone) {
    return this.#getTimes('month', zone);
  }

  /**
   * Get prayer times for this year.
   * @param {string} zone
   */
  getTimesbyYear(zone) {
    return this.#getTimes('year', zone);
  }
}

export default Cpray;
