import {ActionReducerMap} from "@ngrx/store";
import {forecastReducer, IForecastState} from "./forecast.reducer";

export interface RootState {
  forecastState: IForecastState
}
export const reducers: ActionReducerMap<RootState>  = {
  forecastState: forecastReducer
}

// @ts-ignore
export const getForecastState = (state) => state.forecastState

