import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastRowComponent } from './forecast-row.component';
import {MaterialModule} from "../../modules/material/material.module";

describe('ForecastRowComponent', () => {
  let component: ForecastRowComponent;
  let fixture: ComponentFixture<ForecastRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastRowComponent],
      imports: [MaterialModule]
    });
    fixture = TestBed.createComponent(ForecastRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
