import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from "./modules/material/material.module";
import { SearchComponent } from './components/search/search.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {OpenWeatherInterceptor} from "./interceptors/open-weather.interceptor";
import {reducers} from "./store/reducers/root";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ForecastEffects} from "./store/effects/forecast.effects";
import { CityComponent } from './components/city/city.component';
import {CommonModule} from "@angular/common";
import { ForecastComponent } from './components/forecast/forecast.component';
import { ForecastItemComponent } from './components/forecast-item/forecast-item.component';
import { ForecastRowComponent } from './components/forecast-row/forecast-row.component';
import {ToastrModule} from "ngx-toastr";
import { TopSearchesComponent } from './components/top-searches/top-searches.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CityComponent,
    ForecastComponent,
    ForecastItemComponent,
    ForecastRowComponent,
    TopSearchesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ForecastEffects]),
    MaterialModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    ToastrModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: OpenWeatherInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
