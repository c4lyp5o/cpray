import { describe, it, beforeEach, expect, vi } from 'vitest';
import axios from 'axios';
import Cpray from '../src/index.js';

vi.mock('axios');

describe('Cpray', () => {
  let cpray;

  beforeEach(() => {
    cpray = new Cpray();
  });

  // Test for constructor
  it('getTimes is not accessible from outside the class', () => {
    expect(cpray.getTimes).toBeUndefined();
  });

  // Test for getTimesToday
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
    expect(axios.get).toHaveBeenCalledWith(`${cpray.fallbackUrl}/today/mlk01`);
  });

  // Test for getTimesbyWeek
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
    expect(axios.get).toHaveBeenCalledWith(`${cpray.fallbackUrl}/week/mlk01`);
  });

  // Test for getTimesbyMonth
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
    expect(axios.get).toHaveBeenCalledWith(`${cpray.fallbackUrl}/month/mlk01`);
  });

  // Test for getTimesbyYear
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
    expect(axios.get).toHaveBeenCalledWith(`${cpray.fallbackUrl}/year/mlk01`);
  });

  // Test if both URLs fail
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

  // Test for validZones
  [
    'getTimesToday',
    'getTimesbyWeek',
    'getTimesbyMonth',
    'getTimesbyYear',
  ].forEach((method) => {
    it(`${method} throws an error when called with an invalid zone`, async () => {
      await expect(cpray[method]('INVALID_ZONE')).rejects.toThrow(
        'Invalid zone: INVALID_ZONE'
      );
    });
  });
});
