import {Component, Input} from '@angular/core';
import {IForecast} from "../../interfaces/forecast.interface";

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss']
})
export class ForecastItemComponent {

  @Input() forecast: IForecast | null = null;

}
