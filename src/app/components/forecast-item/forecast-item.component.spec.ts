import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForecastItemComponent } from './forecast-item.component';
import {MaterialModule} from "../../modules/material/material.module";

describe('ForecastItemComponent', () => {
  let component: ForecastItemComponent;
  let fixture: ComponentFixture<ForecastItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastItemComponent],
      imports: [MaterialModule]
    });
    fixture = TestBed.createComponent(ForecastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
