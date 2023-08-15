import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityComponent } from './city.component';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ICity } from '../../interfaces/city.interface';
import { IForecast } from '../../interfaces/forecast.interface';
import { of } from 'rxjs';
import { MaterialModule } from "../../modules/material/material.module";
import { ForecastResponseMock2 } from "../../test/forecast-response.mock";

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;
  let store: MockStore;

  const city: ICity = ForecastResponseMock2.city;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityComponent],
      imports: [StoreModule.forRoot({}), MaterialModule],
      providers: [
        provideMockStore(),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    spyOn(store, 'pipe').and.returnValue(of(city));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
