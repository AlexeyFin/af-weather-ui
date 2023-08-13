import {IForecast, IForecastResponse} from "../../interfaces/forecast.interface";
import {Action, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import {ICity} from "../../interfaces/city.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {RootState} from "./root";
import * as fromActions from '../actions/forecast.actions'


export interface IForecastState {
  forecasts: IForecast[];
  city: ICity;
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: IForecastState = {
  forecasts: [],
  city: {
    coord: {lat: 0, lon: 0},
    country: '',
    id: 0,
    population: 0,
    sunrise: 0,
    sunset: 0,
    timezone: 0,
    name: '',
  },
  isLoading: false,
  error: null
};


const _forecastReducer = createReducer(
  initialState,
  on(fromActions.getForecast, (state: IForecastState) => {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }),
  on(fromActions.getForecastSuccess, (state: IForecastState, action: { payload: IForecastResponse }) => {
    return {
      ...state,
      city: action.payload.city,
      forecasts: action.payload.list,
      isLoading: false,
      error: null
    }
  }),
  on(fromActions.getForecastFailed, (state: IForecastState, action: {payload: HttpErrorResponse}) => {
    return {
      ...state,
      isLoading: false,
      error: action.payload
    }
  })
);

export function forecastReducer(state: IForecastState | undefined, action: Action) {
  return _forecastReducer(state, action)
}
