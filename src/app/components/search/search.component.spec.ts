import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { SearchComponent } from './search.component';
import { OpenWeatherService } from '../../services/open-weather.service';
import { getForecast } from '../../store/actions/forecast.actions';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {MaterialModule} from "../../modules/material/material.module";

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let weatherService: jasmine.SpyObj<OpenWeatherService>;
  let store: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    const weatherServiceSpy = jasmine.createSpyObj('OpenWeatherService', ['getForecast']);
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch']);

    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: OpenWeatherService, useValue: weatherServiceSpy },
        { provide: Store, useValue: storeSpy }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(OpenWeatherService) as jasmine.SpyObj<OpenWeatherService>;
    store = TestBed.inject(Store) as jasmine.SpyObj<Store>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the search form', () => {
    expect(component.searchForm.get('city')).toBeTruthy();
  });

  it('should dispatch getForecast action on form submission', () => {
    const city = 'London';
    component.searchForm.get('city')?.setValue(city);
    fixture.detectChanges();

    component.submit();

    expect(store.dispatch).toHaveBeenCalledWith(getForecast({ payload: city }));
    expect(component.searchForm.valid).toBeTrue();
  });

  it('should not dispatch getForecast action on form submission if city is empty', () => {
    component.submit();

    expect(store.dispatch).not.toHaveBeenCalled();
    expect(component.searchForm.valid).toBeFalse();
  });

  it('should reset the form', () => {
    component.searchForm.get('city')?.setValue('London');
    fixture.detectChanges();

    component.resetForm();

    expect(component.searchForm.get('city')?.value).toBe(null);
    expect(component.searchForm.pristine).toBeTrue();
    expect(component.searchForm.untouched).toBeTrue();
    expect(component.searchForm.get('city')?.errors).toBeNull();
  });
});
