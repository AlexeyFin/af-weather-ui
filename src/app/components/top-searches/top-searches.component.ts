import {Component, OnInit} from '@angular/core';
import {CacheService} from "../../services/cache.service";
import {ITopSearch} from "../../interfaces/cashe.interface";
import {Store} from "@ngrx/store";
import {getForecast} from "../../store/actions/forecast.actions";

@Component({
  selector: 'app-top-searches',
  templateUrl: './top-searches.component.html',
  styleUrls: ['./top-searches.component.scss']
})
export class TopSearchesComponent implements OnInit {

  public topSearcher: ITopSearch[] = []
  private readonly limit = 5;

  constructor(private cacheService: CacheService, private store: Store) {
  }

  ngOnInit(): void {
    this.topSearcher = this.cacheService.getTopSearches()
    if (this.topSearcher.length > this.limit) {
      this.topSearcher.splice(this.limit, this.topSearcher.length)
    }
  }

  getForecast(city: string): void {
    this.store.dispatch(getForecast({payload: city}));
  }
}
