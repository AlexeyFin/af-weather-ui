import {Component, Input} from '@angular/core';
import {IForecast} from "../../interfaces/forecast.interface";

@Component({
  selector: 'app-forecast-row',
  templateUrl: './forecast-row.component.html',
  styleUrls: ['./forecast-row.component.scss']
})
export class ForecastRowComponent {

  @Input() forecasts: IForecast[] = [];
  @Input() title: string | null = '';

}
