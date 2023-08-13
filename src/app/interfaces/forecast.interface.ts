import {ICity} from "./city.interface";

export interface IForecast {
  wind: IForecastWind;
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: IForecastMain;
  pop: number;
  sys: {
    pod: string;
  };
  visibility: number;
  weather: IForecastWeather[]
}

export interface IForecastMain {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

export interface IForecastWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface IForecastResponse {
  city: ICity;
  cnt: number;
  cod: number;
  list: IForecast[];
  message: number;
}

export interface IForecastWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface IGroupedForecast {
  [key: string]: IForecast[];
}
