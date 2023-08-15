import {getCurrentWeather, selectForecastCity} from './forecast.selectors';
import { getForecastsGroupedByDate } from './forecast.selectors';
import { IForecastState } from '../reducers/forecast.reducer';
import {ForecastResponseMock} from "../../test/forecast-response.mock";

describe('Forecast Selector', () => {

  describe('selectForecastCity', () => {
    it('should return the forecast city', () => {
      const state: IForecastState = {
        city: ForecastResponseMock.city,
        forecasts: [],
        isLoading: false,
        error: null
      };
      expect(selectForecastCity.projector(state)).toEqual(ForecastResponseMock.city);
    });

  });

  describe('getCurrentWeather', () => {
    it('should return the current weather forecast', () => {
      const state: IForecastState = {
        city: ForecastResponseMock.city,
        forecasts: ForecastResponseMock.list,
        isLoading: false,
        error: null
      };
      expect(getCurrentWeather.projector(state)).toEqual(ForecastResponseMock.list[0]);
    });
  });

  describe('getForecastsGroupedByDate', () => {
    it('should return the forecasts grouped by date', () => {
      const state: IForecastState = {
        city: ForecastResponseMock.city,
        forecasts: [ForecastResponseMock.list[1], ForecastResponseMock.list[2], ForecastResponseMock.list[9]],
        isLoading: false,
        error: null
      };

      const expectedGroupedForecasts = {
        '2023-08-14': [ForecastResponseMock.list[1], ForecastResponseMock.list[2]],
        '2023-08-15': [ForecastResponseMock.list[9]]
      };
      expect(getForecastsGroupedByDate.projector(state)).toEqual(expectedGroupedForecasts);
    });

  });
})

