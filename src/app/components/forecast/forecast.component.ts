import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable, Subject, takeUntil} from "rxjs";
import {IForecast, IGroupedForecast} from "../../interfaces/forecast.interface";
import {getForecastsGroupedByDate} from "../../store/selectors/forecast.selectors";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit, OnDestroy {

  forecasts: IGroupedForecast = {};
  unsubscribe$: Subject<void> = new Subject<void>()

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.pipe(
      select(getForecastsGroupedByDate),
      takeUntil(this.unsubscribe$)
    ).subscribe(result => {
      this.forecasts = result;
    })

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
