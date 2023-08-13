import {Injectable} from '@angular/core';
import {environments} from "../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IForecastResponse} from "../interfaces/forecast.interface";

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  private apiUrl = environments.openWeather.apiUrl

  constructor(private http: HttpClient) {

  }

  getWeatherByCityName(city: string): Observable<IForecastResponse> {
    return this.http.get<IForecastResponse>(`${this.apiUrl}/forecast?q=${city}`)
  }

}
