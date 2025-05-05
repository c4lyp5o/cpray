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
    this.fallbackUrl = 'https://waktusolat.me/api/v1/waktusolat';
  }

  async [getTimes](period, zone) {
    if (!validZones.includes(zone.toUpperCase())) {
      throw new Error(`Invalid zone: ${zone}`);
    }

    const url = `${this.fallbackUrl}/${period}/${zone.toLowerCase()}`;
    const fallbackUrl = `${
      this.baseUrl
    }/TakwimSolat&period=${period}&zone=${zone.toUpperCase()}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(
          `Network response was not ok: ${
            errorDetails.message || 'Unknown error'
          }`
        );
      }
      const data = await response.json();
      return this.normalizePrimaryResponse(data);
    } catch (error) {
      console.error('Error fetching from primary URL:', error);
      try {
        const fallbackResponse = await fetch(fallbackUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!fallbackResponse.ok) {
          const errorDetails = await fallbackResponse.json(); // Assuming the response body is JSON
          throw new Error(
            `Network response was not ok: ${
              errorDetails.message || 'Unknown error'
            }`
          );
        }
        const fallbackData = await fallbackResponse.json();
        return this.normalizeSecondaryResponse(fallbackData);
      } catch (fallbackError) {
        console.error('Error fetching from fallback URL:', fallbackError);
        throw Error('Server error. Sila cuba lagi.');
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

  normalizePrimaryResponse(data) {
    return {
      today: data.today,
      nextSolat: data.nextSolat,
      negeri: data.negeri,
      zone: data.zone,
      data: data.data,
    };
  }

  normalizeSecondaryResponse(data) {
    return {
      today: {
        day: data.prayerTime[0].day,
        hijri: data.prayerTime[0].hijri,
        date: data.prayerTime[0].date,
        time: data.serverTime,
      },
      nextSolat: null, // Primary API doesn't provide this, so set it to null
      negeri: null, // Primary API doesn't provide this, so set it to null
      zone: data.zone,
      data: data.prayerTime.map((prayer) => ({
        day: prayer.day,
        hijri: prayer.hijri,
        date: prayer.date,
        imsak: prayer.imsak,
        fajr: prayer.fajr,
        syuruk: prayer.syuruk,
        dhuhr: prayer.dhuhr,
        asr: prayer.asr,
        maghrib: prayer.maghrib,
        isha: prayer.isha,
      })),
    };
  }
}

export default Cpray;
