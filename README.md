# AfWeatherUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## OpenWeather API

Open weather API requires key to be added to each reqeust;
You can get it [here](https://openweathermap.org/api) or use mine `950fe7fa9b501994b1f5fe3678a1e2f4` (I will deactivate it by the end of August);

Please add the key to the [environment.ts](src/environments/environments.ts) file as a value for `apiKey`.

## Development server

Requirements: `node` version 16 or higher;

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running with Docker

Run `docker build -t weather-app-image .` for building am image;
Run `docker run -d -p 8080:80 weather-app-image:latest` for starting the container;
The application will be available on http://localhost:8080/ 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

