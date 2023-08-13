import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environments} from "../../environments/environments";
import {eWeatherUnits} from "../enums/units.enum";

@Injectable()
export class OpenWeatherInterceptor implements HttpInterceptor {

  private readonly weatherApiUrl = environments.openWeather.apiUrl;
  private readonly apiKey = environments.openWeather.apiKey;
  private readonly units = eWeatherUnits.Metric;
  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes(this.weatherApiUrl)) {

      const params: HttpParams = (request.params ? request.params : new HttpParams())
        .set("appid", this.apiKey)
        .set("units", this.units)

      const clonedRequest = request.clone({
        params
      })

      return next.handle(clonedRequest)
    }
    return next.handle(request);
  }
}
