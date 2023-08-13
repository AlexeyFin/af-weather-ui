import {Component, OnInit} from '@angular/core';
import {OpenWeatherService} from "../../services/open-weather.service";
import {Store} from "@ngrx/store";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {getForecast} from "../../store/actions/forecast.actions";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(
    private weatherService: OpenWeatherService,
    private store: Store,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      city: this.fb.control('', [Validators.required])
    });
  }

  ngOnInit(): void {

  }

  submit(): void {
    const city = this.searchForm.get('city')?.value || ''
    if (!city) {
      return
    }
    this.store.dispatch(getForecast({payload: city}));
    this.resetForm();
  }

  resetForm(): void {
    this.searchForm.reset();
    this.searchForm.markAsPristine();
    this.searchForm.markAsUntouched();
    this.searchForm.controls['city'].setErrors(null);
  }

}
