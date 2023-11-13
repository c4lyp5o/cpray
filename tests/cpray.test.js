// FILEPATH: /home/calypso/cpray/cpray.test.js
const axios = require('axios');
const Cpray = require('../cpray');

jest.mock('axios');

describe('Cpray', () => {
  let cpray;

  beforeEach(() => {
    cpray = new Cpray();
  });

  // test for constructor
  it('getTimes is not accessible from outside the class', () => {
    expect(cpray.getTimes).toBeUndefined();
  });

  // test for getTimesToday
  it('getTimesToday returns data from the main URL when available', async () => {
    const data = { data: 'main data' };
    axios.get.mockResolvedValueOnce(data);

    const result = await cpray.getTimesToday('mlk01');

    expect(result).toEqual('main data');
    expect(axios.get).toHaveBeenCalledWith(`${cpray.baseUrl}/takwimsolat`, {
      params: { period: 'today', zone: 'MLK01' },
    });
  });

  it('getTimesToday returns data from the fallback URL when the main URL fails', async () => {
    const fallbackData = { data: 'fallback data' };
    axios.get.mockRejectedValueOnce(
      new Error('Network error: Something went wrong')
    );
    axios.get.mockResolvedValueOnce(fallbackData);

    const result = await cpray.getTimesToday('mlk01');

    expect(result).toEqual('fallback data');
    expect(axios.get).toHaveBeenCalledWith(`${cpray.fallbackUrl}/today/MLK01`);
  });

  // test for getTimesbyWeek
  it('getTimesbyWeek returns data from the main URL when available', async () => {
    const data = { data: 'week data' };
    axios.get.mockResolvedValueOnce(data);

    const result = await cpray.getTimesbyWeek('mlk01');

    expect(result).toEqual('week data');
    expect(axios.get).toHaveBeenCalledWith(`${cpray.baseUrl}/takwimsolat`, {
      params: { period: 'week', zone: 'MLK01' },
    });
  });

  it('getTimesbyWeek returns data from the fallback URL when the main URL fails', async () => {
    const fallbackData = { data: 'fallback week data' };
    axios.get.mockRejectedValueOnce(
      new Error('Network error: Something went wrong')
    );
    axios.get.mockResolvedValueOnce(fallbackData);

    const result = await cpray.getTimesbyWeek('mlk01');

    expect(result).toEqual('fallback week data');
    expect(axios.get).toHaveBeenCalledWith(`${cpray.fallbackUrl}/week/MLK01`);
  });

  // test for getTimesbyMonth
  it('getTimesbyMonth returns data from the main URL when available', async () => {
    const data = { data: 'month data' };
    axios.get.mockResolvedValueOnce(data);

    const result = await cpray.getTimesbyMonth('mlk01');

    expect(result).toEqual('month data');
    expect(axios.get).toHaveBeenCalledWith(`${cpray.baseUrl}/takwimsolat`, {
      params: { period: 'month', zone: 'MLK01' },
    });
  });

  it('getTimesbyMonth returns data from the fallback URL when the main URL fails', async () => {
    const fallbackData = { data: 'fallback month data' };
    axios.get.mockRejectedValueOnce(
      new Error('Network error: Something went wrong')
    );
    axios.get.mockResolvedValueOnce(fallbackData);

    const result = await cpray.getTimesbyMonth('mlk01');

    expect(result).toEqual('fallback month data');
    expect(axios.get).toHaveBeenCalledWith(`${cpray.fallbackUrl}/month/MLK01`);
  });

  // test for getTimesbyYear
  it('getTimesbyYear returns data from the main URL when available', async () => {
    const data = { data: 'year data' };
    axios.get.mockResolvedValueOnce(data);

    const result = await cpray.getTimesbyYear('mlk01');

    expect(result).toEqual('year data');
    expect(axios.get).toHaveBeenCalledWith(`${cpray.baseUrl}/takwimsolat`, {
      params: { period: 'year', zone: 'MLK01' },
    });
  });

  it('getTimesbyYear returns data from the fallback URL when the main URL fails', async () => {
    const fallbackData = { data: 'fallback year data' };
    axios.get.mockRejectedValueOnce(
      new Error('Network error: Something went wrong')
    );
    axios.get.mockResolvedValueOnce(fallbackData);

    const result = await cpray.getTimesbyYear('mlk01');

    expect(result).toEqual('fallback year data');
    expect(axios.get).toHaveBeenCalledWith(`${cpray.fallbackUrl}/year/MLK01`);
  });

  // test if both url fails
  [
    'getTimesToday',
    'getTimesbyWeek',
    'getTimesbyMonth',
    'getTimesbyYear',
  ].forEach((method) => {
    it(`${method} throws an error when both main and fallback URLs fail`, async () => {
      axios.get.mockRejectedValue(
        new Error('Network error: Something went wrong')
      );

      await expect(cpray[method]('mlk01')).rejects.toThrow(
        'Server error. Sila cuba lagi.'
      );
    });
  });

  // test using .then .catch
  [
    'getTimesToday',
    'getTimesbyWeek',
    'getTimesbyMonth',
    'getTimesbyYear',
  ].forEach((method) => {
    it(`${method} works with .then and .catch`, () => {
      const data = { data: `${method} data` };
      axios.get.mockResolvedValueOnce(data);

      return cpray[method]('mlk01').then((result) => {
        expect(result).toEqual(`${method} data`);
      });
    });

    it(`${method} handles errors with .catch`, () => {
      axios.get.mockRejectedValueOnce(
        new Error('Network error: Something went wrong')
      );

      return cpray[method]('mlk01').catch((error) => {
        expect(error).toEqual(new Error('Server error. Sila cuba lagi.'));
      });
    });
  });

  // test using async await
  [
    'getTimesToday',
    'getTimesbyWeek',
    'getTimesbyMonth',
    'getTimesbyYear',
  ].forEach((method) => {
    it(`${method} works with try-catch`, async () => {
      const data = { data: `${method} data` };
      axios.get.mockResolvedValueOnce(data);

      try {
        const result = await cpray[method]('mlk01');
        expect(result).toEqual(`${method} data`);
      } catch (error) {
        expect(true).toBe(false);
      }
    });

    it(`${method} handles errors with try-catch`, async () => {
      axios.get.mockRejectedValueOnce(
        new Error('Network error: Something went wrong')
      );

      try {
        await cpray[method]('mlk01');
        expect(true).toBe(false);
      } catch (error) {
        expect(error).toEqual(new Error('Server error. Sila cuba lagi.'));
      }
    });
  });

  // test for validZones
  [
    'getTimesToday',
    'getTimesbyWeek',
    'getTimesbyMonth',
    'getTimesbyYear',
  ].forEach((method) => {
    it(`${method} throws an error when called with an invalid zone`, async () => {
      try {
        await cpray[method]('INVALID_ZONE');
        expect(true).toBe(false);
      } catch (error) {
        expect(error).toEqual(new Error('Invalid zone: INVALID_ZONE'));
      }
    });
  });
});
