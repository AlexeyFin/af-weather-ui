import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { forecastReducer, initialState } from './forecast.reducer';
import * as ForecastActions from '../actions/forecast.actions';
import { HttpErrorResponse } from '@angular/common/http';
import {ForecastResponseMock} from "../../test/forecast-response.mock";

describe('Forecast Reducer', () => {
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$)
      ]
    });
  });

  it('should return the initial state', () => {
    const action = {} as any;
    const state = forecastReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should set isLoading to true on getForecast action', () => {

    const action = ForecastActions.getForecast({payload: 'test'});
    const state = forecastReducer(initialState, action);

    expect(state.isLoading).toBe(true);
  });

  it('should set city and forecasts on getForecastSuccess action', () => {
    const mockResponse = ForecastResponseMock;
    const action = ForecastActions.getForecastSuccess({ payload: mockResponse });
    const state = forecastReducer(initialState, action);

    expect(state.city).toEqual(mockResponse.city);
    expect(state.forecasts).toEqual(mockResponse.list);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(null);
  });

  it('should set error on getForecastFailed action', () => {
    const mockError: HttpErrorResponse = new HttpErrorResponse({ status: 500, statusText: 'Internal Server Error' });
    const action = ForecastActions.getForecastFailed({ payload: mockError });
    const state = forecastReducer(initialState, action);

    expect(state.isLoading).toBe(false);
    expect(state.error).toEqual(mockError);
  });
});
