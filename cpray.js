const axios = require('axios').default;

const getTimes = Symbol('getTimes');
const validZones = [
  'KDH01',
  'KDH02',
  'KDH03',
  'KDH04',
  'KDH05',
  'KDH06',
  'KDH07',
  'MLK01',
  'NGS01',
  'NGS02',
  'PHG01',
  'PHG02',
  'PHG03',
  'PHG04',
  'PHG05',
  'PHG06',
  'PRK01',
  'PRK02',
  'PRK03',
  'PRK04',
  'PRK05',
  'PRK06',
  'PRK07',
  'PLS01',
  'PNG01',
  'SGR01',
  'SGR02',
  'SGR03',
  'TRG01',
  'TRG02',
  'TRG03',
  'TRG04',
  'JHR01',
  'JHR02',
  'JHR03',
  'JHR04',
  'KTN01',
  'KTN03',
  'SBH01',
  'SBH02',
  'SBH03',
  'SBH04',
  'SBH05',
  'SBH06',
  'SBH07',
  'SBH08',
  'SBH09',
  'SWK01',
  'SWK02',
  'SWK03',
  'SWK04',
  'SWK05',
  'SWK06',
  'SWK07',
  'SWK08',
  'SWK09',
  'WLY01',
  'WLY02',
];

class Cpray {
  constructor() {
    this.baseUrl = 'https://www.e-solat.gov.my/index.php?r=esolatApi';
    this.fallbackUrl = 'https://api.waktusolat.me/waktusolat';
  }

  async [getTimes](period, zone) {
    zone = zone.toUpperCase();

    if (!validZones.includes(zone)) {
      throw new Error(`Invalid zone: ${zone}`);
    }

    const url = `${this.baseUrl}/takwimsolat`;
    const params = { period, zone };

    try {
      const { data } = await axios.get(url, { params });
      return data;
    } catch (error) {
      try {
        const { data } = await axios.get(
          `${this.fallbackUrl}/${period}/${zone}`
        );
        return data;
      } catch (fallbackError) {
        throw new Error('Server error. Sila cuba lagi.');
      }
    }
  }

  getTimesToday(zone) {
    return this[getTimes]('today', zone);
  }

  getTimesbyWeek(zone) {
    return this[getTimes]('week', zone);
  }

  getTimesbyMonth(zone) {
    return this[getTimes]('month', zone);
  }

  getTimesbyYear(zone) {
    return this[getTimes]('year', zone);
  }
}

module.exports = Cpray;
