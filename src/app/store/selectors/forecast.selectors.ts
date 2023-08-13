import {createSelector} from "@ngrx/store";
import {IForecastState} from "../reducers/forecast.reducer";
import * as fromFeature from '../reducers/root'
import {IGroupedForecast} from "../../interfaces/forecast.interface";


export const selectForecastCity = createSelector(
  fromFeature.getForecastState,
  (state: IForecastState) => state.city
);

export const getCurrentWeather = createSelector(
  fromFeature.getForecastState,
  (state: IForecastState) => state.forecasts[0]
);

export const getForecasts = createSelector(
  fromFeature.getForecastState,
  (state: IForecastState) => state.forecasts
);
export const getForecastsGroupedByDate = createSelector(
  fromFeature.getForecastState,
  (state: IForecastState) => {
    const forecasts = [...state.forecasts];
    const result:IGroupedForecast = {};

    forecasts.forEach(forecast => {
      const date = forecast.dt_txt.split(' ')[0]
      if (!result[date]) {
        result[date] = []
      }

      result[date].push(forecast)
    })

    return result

  }
);

export const getForecastError = createSelector(
  fromFeature.getForecastState,
  (state: IForecastState) => state.error
)
