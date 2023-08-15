import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OpenWeatherService } from './open-weather.service';
import { IForecastResponse } from '../interfaces/forecast.interface';
import {ForecastResponseMock} from "../test/forecast-response.mock";

describe('OpenWeatherService', () => {
  let service: OpenWeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OpenWeatherService]
    });
    service = TestBed.inject(OpenWeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get weather forecast by city name', () => {
    const city = 'London';
    const dummyResponse: IForecastResponse = ForecastResponseMock;

    service.getWeatherByCityName(city).subscribe(response => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpMock.expectOne(`${service.apiUrl}/forecast?q=${city}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('should handle error when getting weather forecast', () => {
    const city = 'InvalidCity';

    service.getWeatherByCityName(city).subscribe(
      () => {
        // This should not be called
        expect(true).toBe(false);
      },
      error => {
        expect(error).toBeTruthy();
      }
    );

    const req = httpMock.expectOne(`${service.apiUrl}/forecast?q=${city}`);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('404'));
  });
});
