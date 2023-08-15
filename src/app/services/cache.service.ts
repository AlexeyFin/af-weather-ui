import {Injectable} from '@angular/core';
import {IForecastResponse} from "../interfaces/forecast.interface";
import {ICache, ITopSearch} from "../interfaces/cashe.interface";
import {environments} from "../../environments/environments";

export enum CacheKeys {
  Forecast = 'forecasts',
  topSearches = 'topSearches'
}

export interface ICacheService {
  saveForecast(forecast: IForecastResponse, key: string): void;
  getCachedForecast(key: string): ICache<IForecastResponse> | undefined;
  getCache(): ICache<IForecastResponse>[];
  forecastsCacheCleanUpAndReturn(): ICache<IForecastResponse>[];
  forecastsCacheCleanUpAndReturn(): ICache<IForecastResponse>[];
  getTopSearches(): ITopSearch[];
  addTopSearchItem(key: string): ITopSearch[];
}
@Injectable({
  providedIn: 'root'
})
export class CacheService implements ICacheService{

  constructor() {
  }

  saveForecast(forecast: IForecastResponse, key: string): void {
    let cache = this.forecastsCacheCleanUpAndReturn();
    const isItemExist = this.getCachedForecast(key);
    if (isItemExist) {
      cache = cache.map((item) => {
        if (item.key === key) {
          item.timestamp = new Date().getTime()
        }
        return item
      })
      localStorage.setItem(CacheKeys.Forecast, JSON.stringify(cache))
    } else {
      const newCacheItem: ICache<IForecastResponse> = {
        key,
        content: forecast,
        timestamp: new Date().getTime()
      }
      localStorage.setItem(CacheKeys.Forecast, JSON.stringify([...cache, newCacheItem]))

    }

  }

  getCachedForecast(key: string): ICache<IForecastResponse> | undefined {
    const cache = this.forecastsCacheCleanUpAndReturn();
    if (!cache.length) {
      return undefined
    }
    return cache.find((cacheItem) => {
      return cacheItem.key === key
    })
  }

  getCache(): ICache<IForecastResponse>[] {
    let cache: ICache<IForecastResponse>[] = localStorage.getItem(CacheKeys.Forecast) ? JSON.parse(localStorage.getItem(CacheKeys.Forecast) as string) : [];
    if (cache.length) {
      cache = cache.filter(item => new Date().getTime() - item.timestamp < environments.cacheLifetime * 60 * 1000);
    }
    return cache
  }

  forecastsCacheCleanUpAndReturn(): ICache<IForecastResponse>[] {
    let cache = this.getCache();
    if (cache.length) {
      cache = cache.filter(item => new Date().getTime() - item.timestamp < environments.cacheLifetime * 60 * 1000);
      localStorage.setItem(CacheKeys.Forecast, JSON.stringify(cache))
    }
    return cache
  }

  getTopSearches(): ITopSearch[] {
    let cache = localStorage.getItem(CacheKeys.topSearches) ? JSON.parse(localStorage.getItem(CacheKeys.topSearches) as string) : [];
    if (cache.length) {
      cache = cache.sort((a: ITopSearch, b: ITopSearch) => b.count - a.count)
    }
    return cache
  }

  addTopSearchItem(key: string): ITopSearch[] {
    let cache = this.getTopSearches();

    if (cache.find(cashedItem => cashedItem.key === key)) {
      cache = cache.map(cashedItem => {

        if (cashedItem.key === key ) {
          cashedItem.count++
        }
        return cashedItem
      })
    } else {
      cache = [...cache, {key, count: 1}]
    }

    localStorage.setItem(CacheKeys.topSearches, JSON.stringify(cache));
    return cache
  }
}
