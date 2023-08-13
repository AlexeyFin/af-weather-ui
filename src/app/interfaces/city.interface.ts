import {ICoordination} from "./coordination.interface";

export interface ICity {
  coord: ICoordination;
  country: string;
  id: number;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
  name: string;
}
