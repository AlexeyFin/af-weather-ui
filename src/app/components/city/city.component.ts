import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ICity} from "../../interfaces/city.interface";
import {getCurrentWeather, selectForecastCity} from "../../store/selectors/forecast.selectors";
import {IForecast} from "../../interfaces/forecast.interface";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit{

  public city$: Observable<ICity>;
  public currentWeather$: Observable<IForecast>

  constructor(private store: Store) {
    this.city$ = this.store.pipe(
      select(selectForecastCity)
    );

    this.currentWeather$ = this.store.pipe(
      select(getCurrentWeather)
    );
  }

  ngOnInit(): void {
  }
}
