import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { getForecast, getForecastSuccess, getForecastFailed } from './forecast.actions';
import { forecastReducer, initialState as InitialState } from "../reducers/forecast.reducer";
import {IForecastResponse} from "../../interfaces/forecast.interface";
import {ForecastResponseMock} from "../../test/forecast-response.mock";


describe('Forecast Actions', () => {
  let store: MockStore;
  const initialState = {
    forecast: null,
    error: null,
    loading: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ forecast: forecastReducer })
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    });

    store = TestBed.inject(Store) as MockStore;
  });

  it('should create getForecast action', () => {
    const payload = 'cityName';
    const action = getForecast({ payload });

    expect(action.type).toBe('[Forecast] Get Forecast');
    expect(action.payload).toBe(payload);
  });

  it('should create getForecastSuccess action', () => {
    const payload = ForecastResponseMock as IForecastResponse;
    const action = getForecastSuccess({ payload });

    expect(action.type).toBe('[Forecast] Get Forecast Success');
    expect(action.payload).toBe(payload);
  });

  it('should create getForecastFailed action', () => {
    const payload = new HttpErrorResponse({ error: 'error' });
    const action = getForecastFailed({ payload });

    expect(action.type).toBe('[Forecast] Get Forecast Failed');
    expect(action.payload).toBe(payload);
  });
});

describe('Forecast Reducer', () => {
  let store: MockStore;
  const initialState = InitialState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ forecast: forecastReducer })
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    });

    store = TestBed.inject(Store) as MockStore;
  });

  it('should return the initial state', () => {
    const action = {} as any;
    const state = forecastReducer(initialState, action);

    expect(state).toBe(initialState);
  });

  it('should handle getForecastSuccess action', () => {
    const payload = ForecastResponseMock;
    const action = getForecastSuccess({ payload });
    const state = forecastReducer(initialState, action);

    expect(state.forecasts).toBe(payload.list);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(null);
  });

  it('should handle getForecastFailed action', () => {
    const payload = new HttpErrorResponse({ error: 'error' });
    const action = getForecastFailed({ payload });
    const state = forecastReducer(initialState, action);

    expect(state.forecasts).toEqual([]);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(payload);
  });
});
