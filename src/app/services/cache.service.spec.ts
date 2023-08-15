import { CacheService, CacheKeys } from './cache.service';
import {IForecastResponse} from "../interfaces/forecast.interface";
import {ForecastResponseMock, ForecastResponseMock2} from "../test/forecast-response.mock";
import {environments} from "../../environments/environments";
import {ITopSearch} from "../interfaces/cashe.interface";

describe('CacheService', () => {
  let cacheService: CacheService;

  beforeEach(() => {
    cacheService = new CacheService();
    localStorage.clear();
  });

  describe('saveForecast', () => {
    it('should save the forecast in the cache', () => {
      const forecast: IForecastResponse = ForecastResponseMock;
      const key = 'testKey';

      cacheService.saveForecast(forecast, key);

      const cache = cacheService.getCache();
      expect(cache.length).toBe(1);
      expect(cache[0].key).toBe(key);
      expect(cache[0].content).toEqual(forecast);
    });

    it('should update the timestamp if the forecast already exists in the cache', () => {
      const forecast1: IForecastResponse = ForecastResponseMock;
      const forecast2: IForecastResponse = ForecastResponseMock;
      const key = 'testKey';

      cacheService.saveForecast(forecast1, key);
      cacheService.saveForecast(forecast2, key);

      const cache = cacheService.getCache();
      expect(cache.length).toBe(1);
      expect(cache[0].key).toBe(key);
      expect(cache[0].content).toEqual(forecast2);
    });
  });

  describe('getCachedForecast', () => {
    it('should return the cached forecast for a given key', () => {
      const forecast: IForecastResponse = ForecastResponseMock;
      const key = 'testKey';

      cacheService.saveForecast(forecast, key);

      const cachedForecast = cacheService.getCachedForecast(key);
      expect(cachedForecast?.key).toBe(key);
      expect(cachedForecast?.content).toEqual(forecast);
    });

    it('should return undefined if the forecast is not found in the cache', () => {
      const cachedForecast = cacheService.getCachedForecast('nonExistentKey');
      expect(cachedForecast).toBeUndefined();
    });
  });

  describe('getCache', () => {
    it('should return the cache with valid items', () => {
      const forecast1: IForecastResponse = ForecastResponseMock;
      const forecast2: IForecastResponse = ForecastResponseMock2;
      const key1 = 'key1';
      const key2 = 'key2';

      cacheService.saveForecast(forecast1, key1);
      cacheService.saveForecast(forecast2, key2);

      const cache = cacheService.getCache();
      expect(cache.length).toBe(2);
      expect(cache[0].key).toBe(key1);
      expect(cache[0].content).toEqual(forecast1);
      expect(cache[1].key).toBe(key2);
      expect(cache[1].content).toEqual(forecast2);
    });

    it('should filter out expired items from the cache', () => {
      const forecast1: IForecastResponse = ForecastResponseMock;
      const forecast2: IForecastResponse = ForecastResponseMock2;
      const key1 = 'key1';
      const key2 = 'key2';

      cacheService.saveForecast(forecast1, key1);
      cacheService.saveForecast(forecast2, key2);

      // Set the timestamp of the first item to be expired
      const cache = JSON.parse(localStorage.getItem(CacheKeys.Forecast) as string);
      cache[0].timestamp = new Date().getTime() - (environments.cacheLifetime * 60 * 1000 + 1);
      localStorage.setItem(CacheKeys.Forecast, JSON.stringify(cache));

      const filteredCache = cacheService.getCache();
      expect(filteredCache.length).toBe(1);
      expect(filteredCache[0].key).toBe(key2);
      expect(filteredCache[0].content).toEqual(forecast2);
    });
  });

  describe('forecastsCacheCleanUpAndReturn', () => {
    it('should clean up the cache and return the updated cache', () => {
      const forecast1: IForecastResponse = ForecastResponseMock;
      const forecast2: IForecastResponse = ForecastResponseMock2;
      const key1 = 'key1';
      const key2 = 'key2';

      cacheService.saveForecast(forecast1, key1);
      cacheService.saveForecast(forecast2, key2);

      // Set the timestamp of the first item to be expired
      const cache = JSON.parse(localStorage.getItem(CacheKeys.Forecast) as string);
      cache[0].timestamp = new Date().getTime() - (environments.cacheLifetime * 60 * 1000 + 1);
      localStorage.setItem(CacheKeys.Forecast, JSON.stringify(cache));

      const updatedCache = cacheService.forecastsCacheCleanUpAndReturn();
      expect(updatedCache.length).toBe(1);
      expect(updatedCache[0].key).toBe(key2);
      expect(updatedCache[0].content).toEqual(forecast2);

      const cacheFromLocalStorage = JSON.parse(localStorage.getItem(CacheKeys.Forecast) as string);
      expect(cacheFromLocalStorage.length).toBe(1);
      expect(cacheFromLocalStorage[0].key).toBe(key2);
      expect(cacheFromLocalStorage[0].content).toEqual(forecast2);
    });
  });

  describe('getTopSearches', () => {
    it('should return the top searches in descending order', () => {
      const topSearches: ITopSearch[] = [
        { key: 'key1', count: 5 },
        { key: 'key2', count: 10 },
        { key: 'key3', count: 3 },
      ];

      localStorage.setItem(CacheKeys.topSearches, JSON.stringify(topSearches));

      const retrievedTopSearches = cacheService.getTopSearches();
      expect(retrievedTopSearches.length).toBe(3);
      expect(retrievedTopSearches[0].key).toBe('key2');
      expect(retrievedTopSearches[0].count).toBe(10);
      expect(retrievedTopSearches[1].key).toBe('key1');
      expect(retrievedTopSearches[1].count).toBe(5);
      expect(retrievedTopSearches[2].key).toBe('key3');
      expect(retrievedTopSearches[2].count).toBe(3);
    });

    it('should return an empty array if there are no top searches', () => {
      const retrievedTopSearches = cacheService.getTopSearches();
      expect(retrievedTopSearches.length).toBe(0);
    });
  });

  describe('addTopSearchItem', () => {
    it('should add a new top search item to the cache', () => {
      const topSearches: ITopSearch[] = [
        { key: 'key1', count: 5 },
        { key: 'key2', count: 10 },
      ];

      localStorage.setItem(CacheKeys.topSearches, JSON.stringify(topSearches));

      const newKey = 'key3';
      const updatedTopSearches = cacheService.addTopSearchItem(newKey);

      expect(updatedTopSearches.length).toBe(3);
      expect(updatedTopSearches[0].key).toBe('key2');
      expect(updatedTopSearches[0].count).toBe(10);
      expect(updatedTopSearches[1].key).toBe('key1');
      expect(updatedTopSearches[1].count).toBe(5);
      expect(updatedTopSearches[2].key).toBe(newKey);
      expect(updatedTopSearches[2].count).toBe(1);

      const cacheFromLocalStorage = JSON.parse(localStorage.getItem(CacheKeys.topSearches) as string);
      expect(cacheFromLocalStorage.length).toBe(3);
      expect(cacheFromLocalStorage[0].key).toBe('key2');
      expect(cacheFromLocalStorage[0].count).toBe(10);
      expect(cacheFromLocalStorage[1].key).toBe('key1');
      expect(cacheFromLocalStorage[1].count).toBe(5);
      expect(cacheFromLocalStorage[2].key).toBe(newKey);
      expect(cacheFromLocalStorage[2].count).toBe(1);
    });

    it('should increment the count of an existing top search item in the cache', () => {
      const topSearches: ITopSearch[] = [
        { key: 'key1', count: 5 },
        { key: 'key2', count: 10 },
      ];

      localStorage.setItem(CacheKeys.topSearches, JSON.stringify(topSearches));

      const existingKey = 'key2';
      const updatedTopSearches = cacheService.addTopSearchItem(existingKey);

      expect(updatedTopSearches.length).toBe(2);
      expect(updatedTopSearches[0].key).toBe(existingKey);
      expect(updatedTopSearches[0].count).toBe(11);
      expect(updatedTopSearches[1].key).toBe('key1');
      expect(updatedTopSearches[1].count).toBe(5);

      const cacheFromLocalStorage = JSON.parse(localStorage.getItem(CacheKeys.topSearches) as string);
      expect(cacheFromLocalStorage.length).toBe(2);
      expect(cacheFromLocalStorage[0].key).toBe(existingKey);
      expect(cacheFromLocalStorage[0].count).toBe(11);
      expect(cacheFromLocalStorage[1].key).toBe('key1');
      expect(cacheFromLocalStorage[1].count).toBe(5);
    });
  });
});
