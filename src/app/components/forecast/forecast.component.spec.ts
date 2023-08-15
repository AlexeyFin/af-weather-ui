import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import {of, Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ForecastComponent } from './forecast.component';
import { getForecastsGroupedByDate } from '../../store/selectors/forecast.selectors';
import {MaterialModule} from "../../modules/material/material.module";
import {ForecastResponseMock} from "../../test/forecast-response.mock";

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;
  let store: Store;
  let unsubscribe$: Subject<void>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastComponent],
      imports: [StoreModule.forRoot({}), MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    unsubscribe$ = new Subject<void>();
  });

  afterEach(() => {
    unsubscribe$.next();
    unsubscribe$.complete();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should update forecasts when store emits new values', () => {
    const mockForecasts = {
      '2022-01-01': [ForecastResponseMock.list[0], ForecastResponseMock.list[1]],
      '2022-01-02': [ForecastResponseMock.list[2], ForecastResponseMock.list[3]],
    };

    spyOn(store, 'pipe').and.returnValue(
      of(mockForecasts).pipe(takeUntil(unsubscribe$))
    );

    component.ngOnInit();

    expect(component.forecasts).toEqual(mockForecasts);
  });

  it('should unsubscribe from store subscription on component destroy', () => {
    spyOn(component.unsubscribe$, 'next');
    spyOn(component.unsubscribe$, 'complete');

    component.ngOnDestroy();

    expect(component.unsubscribe$.next).toHaveBeenCalled();
    expect(component.unsubscribe$.complete).toHaveBeenCalled();
  });
});
