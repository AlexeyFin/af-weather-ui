import {createAction, props} from "@ngrx/store";
import {IForecastResponse} from "../../interfaces/forecast.interface";
import {HttpErrorResponse} from "@angular/common/http";

export enum ForecastActionsType {
  getForecast = '[Forecast] Get Forecast',
  getForecastSuccess = '[Forecast] Get Forecast Success',
  getForecastFailed = '[Forecast] Get Forecast Failed',
}


export const getForecast = createAction(
  ForecastActionsType.getForecast,
  props<{payload: string}>()
);

export const getForecastSuccess = createAction(
  ForecastActionsType.getForecastSuccess,
  props<{payload: IForecastResponse}>()
);
export const getForecastFailed = createAction(
  ForecastActionsType.getForecastFailed,
  props<{payload: HttpErrorResponse}>()
);

