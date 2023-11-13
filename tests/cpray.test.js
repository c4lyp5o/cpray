// FILEPATH: /home/calypso/cpray/cpray.test.js
const axios = require('axios');
const Cpray = require('../cpray');

jest.mock('axios');

describe('Cpray', () => {
  let cpray;

  beforeEach(() => {
    cpray = new Cpray();
  });

  it('getTimesToday returns data from the main URL when available', async () => {
    const data = { data: 'main data' };
    axios.get.mockResolvedValueOnce(data);

    const result = await cpray.getTimesToday('zone');

    expect(result).toEqual('main data');
    expect(axios.get).toHaveBeenCalledWith(`${cpray.baseUrl}/takwimsolat`, {
      params: { period: 'today', zone: 'zone' },
    });
  });

  it('getTimesToday returns data from the fallback URL when the main URL fails', async () => {
    const fallbackData = { data: 'fallback data' };
    axios.get.mockRejectedValueOnce(
      new Error('Network error: Something went wrong')
    );
    axios.get.mockResolvedValueOnce(fallbackData);

    const result = await cpray.getTimesToday('zone');

    expect(result).toEqual('fallback data');
    expect(axios.get).toHaveBeenCalledWith(`${cpray.fallbackUrl}/today/zone`);
  });

  it('getTimesbyWeek returns data from the main URL when available', async () => {
    const data = { data: 'week data' };
    axios.get.mockResolvedValueOnce(data);

    const result = await cpray.getTimesbyWeek('zone');

    expect(result).toEqual('week data');
    expect(axios.get).toHaveBeenCalledWith(`${cpray.baseUrl}/takwimsolat`, {
      params: { period: 'week', zone: 'zone' },
    });
  });

  it('getTimesbyWeek returns data from the fallback URL when the main URL fails', async () => {
    const fallbackData = { data: 'fallback week data' };
    axios.get.mockRejectedValueOnce(
      new Error('Network error: Something went wrong')
    );
    axios.get.mockResolvedValueOnce(fallbackData);

    const result = await cpray.getTimesbyWeek('zone');

    expect(result).toEqual('fallback week data');
    expect(axios.get).toHaveBeenCalledWith(`${cpray.fallbackUrl}/week/zone`);
  });

  it('getTimesbyMonth returns data from the main URL when available', async () => {
    const data = { data: 'month data' };
    axios.get.mockResolvedValueOnce(data);

    const result = await cpray.getTimesbyMonth('zone');

    expect(result).toEqual('month data');
    expect(axios.get).toHaveBeenCalledWith(`${cpray.baseUrl}/takwimsolat`, {
      params: { period: 'month', zone: 'zone' },
    });
  });

  it('getTimesbyMonth returns data from the fallback URL when the main URL fails', async () => {
    const fallbackData = { data: 'fallback month data' };
    axios.get.mockRejectedValueOnce(
      new Error('Network error: Something went wrong')
    );
    axios.get.mockResolvedValueOnce(fallbackData);

    const result = await cpray.getTimesbyMonth('zone');

    expect(result).toEqual('fallback month data');
    expect(axios.get).toHaveBeenCalledWith(`${cpray.fallbackUrl}/month/zone`);
  });
});
