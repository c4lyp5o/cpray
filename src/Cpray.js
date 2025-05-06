import { validZones } from './zones.js';

const getTimes = Symbol('getTimes');

/**
 * Class to retrieve and normalize prayer times from E-Solat or its fallback.
 */
class Cpray {
  constructor() {
    this.baseUrl = 'https://www.e-solat.gov.my/index.php?r=esolatApi';
    this.fallbackUrl = 'https://waktusolat.me/api/v1/waktusolat';
  }

  /**
   * Fetches a URL with retry logic.
   * @param {string} url
   * @param {number} retries
   * @returns {Promise<any>}
   */
  async fetchWithRetry(url, retries = 2) {
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(
            `HTTP ${response.status}: ${errData.message || 'Unknown error'}`
          );
        }
        return await response.json();
      } catch (error) {
        if (attempt === retries) throw error;
      }
    }
  }

  /**
   * Fetch prayer times for the given period and zone.
   * @param {'today' | 'week' | 'month' | 'year'} period
   * @param {string} zone
   * @returns {Promise<Object>}
   */
  async [getTimes](period, zone) {
    const zoneUpper = zone.toUpperCase();
    const isValidZone = validZones.some((z) => z.zone === zoneUpper);
    if (!isValidZone) throw new Error(`Invalid zone: ${zone}`);

    const url = `${this.baseUrl}/TakwimSolat&period=${period}&zone=${zoneUpper}`;
    const fallbackUrl = `${this.fallbackUrl}/${period}/${zone.toLowerCase()}`;

    try {
      const data = await this.fetchWithRetry(url);
      return data;
    } catch (error) {
      try {
        const fallbackData = await this.fetchWithRetry(fallbackUrl);
        return this.normalizeSecondaryResponse(fallbackData);
      } catch (fallbackError) {
        throw new Error('Server error. Sila cuba lagi.');
      }
    }
  }

  /**
   * Get prayer times for today.
   * @param {string} zone
   */
  getTimesToday(zone) {
    return this[getTimes]('today', zone);
  }

  /**
   * Get prayer times for this week.
   * @param {string} zone
   */
  getTimesbyWeek(zone) {
    return this[getTimes]('week', zone);
  }

  /**
   * Get prayer times for this month.
   * @param {string} zone
   */
  getTimesbyMonth(zone) {
    return this[getTimes]('month', zone);
  }

  /**
   * Get prayer times for this year.
   * @param {string} zone
   */
  getTimesbyYear(zone) {
    return this[getTimes]('year', zone);
  }
}

export default Cpray;
