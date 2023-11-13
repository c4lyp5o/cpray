const axios = require('axios').default;

class Cpray {
  constructor() {
    this.baseUrl = 'https://www.e-solat.gov.my/index.php?r=esolatApi';
    this.fallbackUrl = 'https://api.waktusolat.me/waktusolat';
  }

  async getTimesToday(zone) {
    const url = `${this.baseUrl}/takwimsolat`;
    const params = {
      period: 'today',
      zone: zone,
    };

    try {
      const response = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      const fallbackResponse = await axios.get(
        `${this.fallbackUrl}/today/${zone}`
      );
      return fallbackResponse.data;
    }
  }

  async getTimesbyWeek(zone) {
    const url = `${this.baseUrl}/takwimsolat`;
    const params = {
      period: 'week',
      zone: zone,
    };

    try {
      const response = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      const fallbackResponse = await axios.get(
        `${this.fallbackUrl}/week/${zone}`
      );
      return fallbackResponse.data;
    }
  }

  async getTimesbyMonth(zone) {
    const url = `${this.baseUrl}/takwimsolat`;
    const params = {
      period: 'month',
      zone: zone,
    };

    try {
      const response = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      const fallbackResponse = await axios.get(
        `${this.fallbackUrl}/month/${zone}`
      );
      return fallbackResponse.data;
    }
  }

  async getTimesbyYear(zone) {
    const url = `${this.baseUrl}/takwimsolat`;
    const params = {
      period: 'year',
      zone: zone,
    };

    try {
      const response = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      const fallbackResponse = await axios.get(
        `${this.fallbackUrl}/year/${zone}`
      );
      return fallbackResponse.data;
    }
  }
}

module.exports = Cpray;
