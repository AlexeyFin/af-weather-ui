import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { OpenWeatherInterceptor } from './open-weather.interceptor';
import { environments } from '../../environments/environments';
import { eWeatherUnits } from '../enums/units.enum';
import {ForecastResponseMock} from "../test/forecast-response.mock";

describe('OpenWeatherInterceptor', () => {
  let interceptor: OpenWeatherInterceptor;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        OpenWeatherInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: OpenWeatherInterceptor,
          multi: true
        }
      ]
    });

    interceptor = TestBed.inject(OpenWeatherInterceptor);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add the API key and units as query parameters to the request', () => {
    const apiUrl = environments.openWeather.apiUrl;
    const apiKey = environments.openWeather.apiKey;
    const units = eWeatherUnits.Metric;

    const response = ForecastResponseMock;

    httpClient.get(apiUrl).subscribe(response => {
      expect(response).toEqual(response);
    });

    const req = httpMock.expectOne(`${apiUrl}?appid=${apiKey}&units=${units}`);
    expect(req.request.method).toBe('GET');
    req.flush(response);
  });

  it('should not modify the request if the URL does not include the weather API URL', () => {
    const response = ForecastResponseMock;

    httpClient.get('https://example.com').subscribe(response => {
      expect(response).toEqual(response);
    });

    const req = httpMock.expectOne('https://example.com');
    expect(req.request.method).toBe('GET');
    req.flush(response);
  });
});
