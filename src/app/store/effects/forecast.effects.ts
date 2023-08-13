import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {OpenWeatherService} from "../../services/open-weather.service";
import * as fromForecastActions from '../actions/forecast.actions'
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {CacheService} from "../../services/cache.service";


@Injectable()
export class ForecastEffects {
  constructor(
    private actions$: Actions,
    private weatherService: OpenWeatherService,
    private toastr: ToastrService,
    private cacheService: CacheService
    ) {
  }

  loadForecast$ = createEffect(() => this.actions$.pipe(
    ofType(fromForecastActions.getForecast),
    switchMap(({ payload }: { payload: string }) => {

      const cachedItem = this.cacheService.getCachedForecast(payload.toLowerCase());
      if (cachedItem) {
        this.toastr.info(`The forecast for ${payload} has been found in your browser cache!`, 'Data taken from cache')
        return of(fromForecastActions.getForecastSuccess({payload: cachedItem.content}));
      }

      return this.weatherService.getWeatherByCityName(payload)
        .pipe(
          map((response) => fromForecastActions.getForecastSuccess({payload: response})),
          catchError((error) => of(fromForecastActions.getForecastFailed({payload: error}))
        ))
    })
  ));

  loadForecastSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromForecastActions.getForecastSuccess),
    tap((action) => {
      this.toastr.success('Forecast found!', 'Success');
      this.cacheService.saveForecast(action.payload, action.payload.city.name.toLowerCase())
      this.cacheService.addTopSearchItem(action.payload.city.name.toLowerCase());

    })
  ), { dispatch: false });
  loadForecastFailure$ = createEffect(() => this.actions$.pipe(
    ofType(fromForecastActions.getForecastFailed),
    tap((action) => {
      this.toastr.error(`Forecast not found because: ${action.payload.error.message}`, 'Error')
    })
  ), { dispatch: false });
}
