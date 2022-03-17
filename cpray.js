const axios = require('axios').default;

class Cpray 
{
    /** @constructor */
    constructor() {
        /** @private */
        this.baseUrl = "https://www.e-solat.gov.my/index.php?r=esolatApi";
    }

    async getTimesbyWeek(zone) {
        const url = `${this.baseUrl}/takwimsolat`;
        const params = {
            period: 'week',
            zone: zone
        };
        const response = await axios.get(url, { params });
        return response.data;
    }

    async getTimesbyMonth(zone) {
        const url = `${this.baseUrl}/takwimsolat`;
        const params = {
            period: 'month',
            zone: zone
        };
        const response = await axios.get(url, { params });
        return response.data;
    }

    async getTimesbyYear(zone) {
        const url = `${this.baseUrl}/takwimsolat`;
        const params = {
            period: 'year',
            zone: zone
        };
        const response = await axios.get(url, { params });
        return response.data;
    }
}

module.exports = Cpray;