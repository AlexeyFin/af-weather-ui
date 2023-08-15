import {IForecastResponse} from "../interfaces/forecast.interface";

export const ForecastResponseMock: IForecastResponse = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1691960400,
      "main": {
        "temp": 18.04,
        "feels_like": 17.75,
        "temp_min": 17.05,
        "temp_max": 18.04,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1010,
        "humidity": 71,
        "temp_kf": 0.99
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 73
      },
      "wind": {
        "speed": 3.32,
        "deg": 208,
        "gust": 7.28
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-08-13 21:00:00"
    },
    {
      "dt": 1691971200,
      "main": {
        "temp": 17.58,
        "feels_like": 17.3,
        "temp_min": 16.67,
        "temp_max": 17.58,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1010,
        "humidity": 73,
        "temp_kf": 0.91
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 77
      },
      "wind": {
        "speed": 3.51,
        "deg": 197,
        "gust": 8.78
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-08-14 00:00:00"
    },
    {
      "dt": 1691982000,
      "main": {
        "temp": 16.29,
        "feels_like": 16.14,
        "temp_min": 15.42,
        "temp_max": 16.29,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1009,
        "humidity": 83,
        "temp_kf": 0.87
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 91
      },
      "wind": {
        "speed": 2.38,
        "deg": 182,
        "gust": 8.76
      },
      "visibility": 10000,
      "pop": 0.67,
      "rain": {
        "3h": 1.96
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-08-14 03:00:00"
    },
    {
      "dt": 1691992800,
      "main": {
        "temp": 15.55,
        "feels_like": 15.54,
        "temp_min": 15.55,
        "temp_max": 15.55,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1008,
        "humidity": 91,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.62,
        "deg": 197,
        "gust": 7.5
      },
      "visibility": 10000,
      "pop": 0.67,
      "rain": {
        "3h": 1.98
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-14 06:00:00"
    },
    {
      "dt": 1692003600,
      "main": {
        "temp": 18.24,
        "feels_like": 18.18,
        "temp_min": 18.24,
        "temp_max": 18.24,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1008,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 95
      },
      "wind": {
        "speed": 3.61,
        "deg": 191,
        "gust": 8.76
      },
      "visibility": 10000,
      "pop": 0.39,
      "rain": {
        "3h": 0.28
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-14 09:00:00"
    },
    {
      "dt": 1692014400,
      "main": {
        "temp": 22.15,
        "feels_like": 22.01,
        "temp_min": 22.15,
        "temp_max": 22.15,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1007,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 95
      },
      "wind": {
        "speed": 6.09,
        "deg": 201,
        "gust": 9.64
      },
      "visibility": 10000,
      "pop": 0.35,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-14 12:00:00"
    },
    {
      "dt": 1692025200,
      "main": {
        "temp": 19.21,
        "feels_like": 19.22,
        "temp_min": 19.21,
        "temp_max": 19.21,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1007,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 5.34,
        "deg": 204,
        "gust": 11.25
      },
      "visibility": 10000,
      "pop": 0.26,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-14 15:00:00"
    },
    {
      "dt": 1692036000,
      "main": {
        "temp": 19.9,
        "feels_like": 19.96,
        "temp_min": 19.9,
        "temp_max": 19.9,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1008,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 5.34,
        "deg": 217,
        "gust": 10.33
      },
      "visibility": 10000,
      "pop": 0.4,
      "rain": {
        "3h": 0.16
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-14 18:00:00"
    },
    {
      "dt": 1692046800,
      "main": {
        "temp": 17.56,
        "feels_like": 17.56,
        "temp_min": 17.56,
        "temp_max": 17.56,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1009,
        "humidity": 84,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 23
      },
      "wind": {
        "speed": 2.73,
        "deg": 244,
        "gust": 6.72
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-08-14 21:00:00"
    },
    {
      "dt": 1692057600,
      "main": {
        "temp": 15.76,
        "feels_like": 15.53,
        "temp_min": 15.76,
        "temp_max": 15.76,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1010,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 15
      },
      "wind": {
        "speed": 2.31,
        "deg": 259,
        "gust": 5.94
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-08-15 00:00:00"
    },
    {
      "dt": 1692068400,
      "main": {
        "temp": 14.53,
        "feels_like": 14.23,
        "temp_min": 14.53,
        "temp_max": 14.53,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1011,
        "humidity": 84,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 5
      },
      "wind": {
        "speed": 2.04,
        "deg": 250,
        "gust": 5.7
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-08-15 03:00:00"
    },
    {
      "dt": 1692079200,
      "main": {
        "temp": 14.22,
        "feels_like": 13.84,
        "temp_min": 14.22,
        "temp_max": 14.22,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1012,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 3
      },
      "wind": {
        "speed": 2.28,
        "deg": 253,
        "gust": 4.94
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-15 06:00:00"
    },
    {
      "dt": 1692090000,
      "main": {
        "temp": 18.6,
        "feels_like": 18.11,
        "temp_min": 18.6,
        "temp_max": 18.6,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1013,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.45,
        "deg": 259,
        "gust": 3.67
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-15 09:00:00"
    },
    {
      "dt": 1692100800,
      "main": {
        "temp": 22.44,
        "feels_like": 21.94,
        "temp_min": 22.44,
        "temp_max": 22.44,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1013,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.37,
        "deg": 260,
        "gust": 2.99
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-15 12:00:00"
    },
    {
      "dt": 1692111600,
      "main": {
        "temp": 23.78,
        "feels_like": 23.31,
        "temp_min": 23.78,
        "temp_max": 23.78,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 1013,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 38
      },
      "wind": {
        "speed": 2.68,
        "deg": 283,
        "gust": 2.78
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-15 15:00:00"
    },
    {
      "dt": 1692122400,
      "main": {
        "temp": 21.56,
        "feels_like": 21.18,
        "temp_min": 21.56,
        "temp_max": 21.56,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1014,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 66
      },
      "wind": {
        "speed": 2.41,
        "deg": 298,
        "gust": 3.4
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-15 18:00:00"
    },
    {
      "dt": 1692133200,
      "main": {
        "temp": 19.48,
        "feels_like": 19.26,
        "temp_min": 19.48,
        "temp_max": 19.48,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1016,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 97
      },
      "wind": {
        "speed": 1.55,
        "deg": 288,
        "gust": 2.59
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-08-15 21:00:00"
    },
    {
      "dt": 1692144000,
      "main": {
        "temp": 17.64,
        "feels_like": 17.44,
        "temp_min": 17.64,
        "temp_max": 17.64,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1016,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 1.21,
        "deg": 288,
        "gust": 1.71
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-08-16 00:00:00"
    },
    {
      "dt": 1692154800,
      "main": {
        "temp": 16.7,
        "feels_like": 16.49,
        "temp_min": 16.7,
        "temp_max": 16.7,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1016,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.91,
        "deg": 294,
        "gust": 0.97
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-08-16 03:00:00"
    },
    {
      "dt": 1692165600,
      "main": {
        "temp": 16.7,
        "feels_like": 16.46,
        "temp_min": 16.7,
        "temp_max": 16.7,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1017,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 75
      },
      "wind": {
        "speed": 0.63,
        "deg": 316,
        "gust": 0.85
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-16 06:00:00"
    },
    {
      "dt": 1692176400,
      "main": {
        "temp": 21,
        "feels_like": 20.67,
        "temp_min": 21,
        "temp_max": 21,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1017,
        "humidity": 58,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 11
      },
      "wind": {
        "speed": 1.33,
        "deg": 358,
        "gust": 1.31
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-16 09:00:00"
    },
    {
      "dt": 1692187200,
      "main": {
        "temp": 24.93,
        "feels_like": 24.58,
        "temp_min": 24.93,
        "temp_max": 24.93,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1017,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 15
      },
      "wind": {
        "speed": 1.17,
        "deg": 26,
        "gust": 1.69
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-16 12:00:00"
    },
    {
      "dt": 1692198000,
      "main": {
        "temp": 25.1,
        "feels_like": 24.66,
        "temp_min": 25.1,
        "temp_max": 25.1,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1016,
        "humidity": 38,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 3.75,
        "deg": 75,
        "gust": 2.69
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-16 15:00:00"
    },
    {
      "dt": 1692208800,
      "main": {
        "temp": 22.18,
        "feels_like": 21.65,
        "temp_min": 22.18,
        "temp_max": 22.18,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1017,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 90
      },
      "wind": {
        "speed": 3.75,
        "deg": 99,
        "gust": 4.96
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-16 18:00:00"
    },
    {
      "dt": 1692219600,
      "main": {
        "temp": 19.76,
        "feels_like": 19.28,
        "temp_min": 19.76,
        "temp_max": 19.76,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1018,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.06,
        "deg": 93,
        "gust": 5.96
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-08-16 21:00:00"
    },
    {
      "dt": 1692230400,
      "main": {
        "temp": 17.64,
        "feels_like": 17.34,
        "temp_min": 17.64,
        "temp_max": 17.64,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1018,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 69
      },
      "wind": {
        "speed": 2.37,
        "deg": 74,
        "gust": 7.28
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-08-17 00:00:00"
    },
    {
      "dt": 1692241200,
      "main": {
        "temp": 16.43,
        "feels_like": 16.14,
        "temp_min": 16.43,
        "temp_max": 16.43,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1017,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 22
      },
      "wind": {
        "speed": 2.78,
        "deg": 64,
        "gust": 8.83
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-08-17 03:00:00"
    },
    {
      "dt": 1692252000,
      "main": {
        "temp": 16.03,
        "feels_like": 15.78,
        "temp_min": 16.03,
        "temp_max": 16.03,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1017,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 42
      },
      "wind": {
        "speed": 2.73,
        "deg": 52,
        "gust": 8.02
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-17 06:00:00"
    },
    {
      "dt": 1692262800,
      "main": {
        "temp": 20.7,
        "feels_like": 20.5,
        "temp_min": 20.7,
        "temp_max": 20.7,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1017,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 3.81,
        "deg": 67,
        "gust": 5.77
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-17 09:00:00"
    },
    {
      "dt": 1692273600,
      "main": {
        "temp": 24.64,
        "feels_like": 24.33,
        "temp_min": 24.64,
        "temp_max": 24.64,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1015,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 22
      },
      "wind": {
        "speed": 4.47,
        "deg": 92,
        "gust": 4.33
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-17 12:00:00"
    },
    {
      "dt": 1692284400,
      "main": {
        "temp": 24.01,
        "feels_like": 23.69,
        "temp_min": 24.01,
        "temp_max": 24.01,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1015,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 15
      },
      "wind": {
        "speed": 5.27,
        "deg": 93,
        "gust": 4.55
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-17 15:00:00"
    },
    {
      "dt": 1692295200,
      "main": {
        "temp": 21.49,
        "feels_like": 21.21,
        "temp_min": 21.49,
        "temp_max": 21.49,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1015,
        "humidity": 58,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 11
      },
      "wind": {
        "speed": 4.97,
        "deg": 84,
        "gust": 6.96
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-17 18:00:00"
    },
    {
      "dt": 1692306000,
      "main": {
        "temp": 18.66,
        "feels_like": 18.57,
        "temp_min": 18.66,
        "temp_max": 18.66,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1014,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4,
        "deg": 70,
        "gust": 8.93
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-08-17 21:00:00"
    },
    {
      "dt": 1692316800,
      "main": {
        "temp": 16.95,
        "feels_like": 16.92,
        "temp_min": 16.95,
        "temp_max": 16.95,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 1014,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.71,
        "deg": 62,
        "gust": 9.54
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-08-18 00:00:00"
    },
    {
      "dt": 1692327600,
      "main": {
        "temp": 16.53,
        "feels_like": 16.59,
        "temp_min": 16.53,
        "temp_max": 16.53,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1012,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 46
      },
      "wind": {
        "speed": 4,
        "deg": 67,
        "gust": 8.54
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-08-18 03:00:00"
    },
    {
      "dt": 1692338400,
      "main": {
        "temp": 16.92,
        "feels_like": 16.91,
        "temp_min": 16.92,
        "temp_max": 16.92,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 1012,
        "humidity": 86,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 73
      },
      "wind": {
        "speed": 3.75,
        "deg": 62,
        "gust": 7.19
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-18 06:00:00"
    },
    {
      "dt": 1692349200,
      "main": {
        "temp": 18.96,
        "feels_like": 18.97,
        "temp_min": 18.96,
        "temp_max": 18.96,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1011,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 97
      },
      "wind": {
        "speed": 3.94,
        "deg": 76,
        "gust": 6.9
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-18 09:00:00"
    },
    {
      "dt": 1692360000,
      "main": {
        "temp": 23.63,
        "feels_like": 23.54,
        "temp_min": 23.63,
        "temp_max": 23.63,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1009,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 84
      },
      "wind": {
        "speed": 4.3,
        "deg": 102,
        "gust": 5.52
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-18 12:00:00"
    },
    {
      "dt": 1692370800,
      "main": {
        "temp": 22.96,
        "feels_like": 22.98,
        "temp_min": 22.96,
        "temp_max": 22.96,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1008,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 4.21,
        "deg": 93,
        "gust": 6.26
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-18 15:00:00"
    },
    {
      "dt": 1692381600,
      "main": {
        "temp": 22.12,
        "feels_like": 22.29,
        "temp_min": 22.12,
        "temp_max": 22.12,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1007,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 87
      },
      "wind": {
        "speed": 3.75,
        "deg": 98,
        "gust": 6.29
      },
      "visibility": 10000,
      "pop": 0.3,
      "rain": {
        "3h": 0.43
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-08-18 18:00:00"
    }
  ],
  "city": {
    "id": 2643743,
    "name": "London",
    "coord": {
      "lat": 51.5085,
      "lon": -0.1257
    },
    "country": "GB",
    "population": 1000000,
    "timezone": 3600,
    "sunrise": 1691901735,
    "sunset": 1691954929
  }
}

export const ForecastResponseMock2: IForecastResponse = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [{
    "dt": 1691960400,
    "main": {
      "temp": 21.53,
      "feels_like": 21.51,
      "temp_min": 21.39,
      "temp_max": 21.53,
      "pressure": 1002,
      "sea_level": 1002,
      "grnd_level": 1012,
      "humidity": 68,
      "temp_kf": 0.14
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
    "clouds": {"all": 0},
    "wind": {"speed": 0.54, "deg": 332, "gust": 0.84},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "n"},
    "dt_txt": "2023-08-13 21:00:00"
  }, {
    "dt": 1691971200,
    "main": {
      "temp": 21.05,
      "feels_like": 20.99,
      "temp_min": 20.09,
      "temp_max": 21.05,
      "pressure": 1007,
      "sea_level": 1007,
      "grnd_level": 1011,
      "humidity": 68,
      "temp_kf": 0.96
    },
    "weather": [{"id": 801, "main": "Clouds", "description": "few clouds", "icon": "02n"}],
    "clouds": {"all": 13},
    "wind": {"speed": 1.39, "deg": 151, "gust": 1.47},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "n"},
    "dt_txt": "2023-08-14 00:00:00"
  }, {
    "dt": 1691982000,
    "main": {
      "temp": 19.73,
      "feels_like": 19.72,
      "temp_min": 18.83,
      "temp_max": 19.73,
      "pressure": 1011,
      "sea_level": 1011,
      "grnd_level": 1011,
      "humidity": 75,
      "temp_kf": 0.9
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
    "clouds": {"all": 0},
    "wind": {"speed": 1.6, "deg": 198, "gust": 1.83},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "n"},
    "dt_txt": "2023-08-14 03:00:00"
  }, {
    "dt": 1691992800,
    "main": {
      "temp": 20.33,
      "feels_like": 20.14,
      "temp_min": 20.33,
      "temp_max": 20.33,
      "pressure": 1017,
      "sea_level": 1017,
      "grnd_level": 1012,
      "humidity": 66,
      "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 0},
    "wind": {"speed": 2.09, "deg": 235, "gust": 3.57},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-14 06:00:00"
  }, {
    "dt": 1692003600,
    "main": {
      "temp": 25.61,
      "feels_like": 25.38,
      "temp_min": 25.61,
      "temp_max": 25.61,
      "pressure": 1017,
      "sea_level": 1017,
      "grnd_level": 1012,
      "humidity": 44,
      "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 5},
    "wind": {"speed": 2.58, "deg": 237, "gust": 4.18},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-14 09:00:00"
  }, {
    "dt": 1692014400,
    "main": {
      "temp": 28.91,
      "feels_like": 28.19,
      "temp_min": 28.91,
      "temp_max": 28.91,
      "pressure": 1016,
      "sea_level": 1016,
      "grnd_level": 1011,
      "humidity": 36,
      "temp_kf": 0
    },
    "weather": [{"id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d"}],
    "clouds": {"all": 38},
    "wind": {"speed": 2.22, "deg": 214, "gust": 3.68},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-14 12:00:00"
  }, {
    "dt": 1692025200,
    "main": {
      "temp": 30.08,
      "feels_like": 29.56,
      "temp_min": 30.08,
      "temp_max": 30.08,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 1010,
      "humidity": 38,
      "temp_kf": 0
    },
    "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
    "clouds": {"all": 93},
    "wind": {"speed": 2.25, "deg": 205, "gust": 4.05},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-14 15:00:00"
  }, {
    "dt": 1692036000,
    "main": {
      "temp": 25.3,
      "feels_like": 25.66,
      "temp_min": 25.3,
      "temp_max": 25.3,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 1010,
      "humidity": 68,
      "temp_kf": 0
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "clouds": {"all": 79},
    "wind": {"speed": 0.11, "deg": 226, "gust": 0.56},
    "visibility": 9541,
    "pop": 0.66,
    "rain": {"3h": 1.38},
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-14 18:00:00"
  }, {
    "dt": 1692046800,
    "main": {
      "temp": 22.18,
      "feels_like": 22.75,
      "temp_min": 22.18,
      "temp_max": 22.18,
      "pressure": 1016,
      "sea_level": 1016,
      "grnd_level": 1011,
      "humidity": 88,
      "temp_kf": 0
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10n"}],
    "clouds": {"all": 57},
    "wind": {"speed": 3.33, "deg": 120, "gust": 8.29},
    "visibility": 10000,
    "pop": 1,
    "rain": {"3h": 2.42},
    "sys": {"pod": "n"},
    "dt_txt": "2023-08-14 21:00:00"
  }, {
    "dt": 1692057600,
    "main": {
      "temp": 21.6,
      "feels_like": 22.14,
      "temp_min": 21.6,
      "temp_max": 21.6,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 1010,
      "humidity": 89,
      "temp_kf": 0
    },
    "weather": [{"id": 501, "main": "Rain", "description": "moderate rain", "icon": "10n"}],
    "clouds": {"all": 79},
    "wind": {"speed": 3.99, "deg": 113, "gust": 8.4},
    "visibility": 8256,
    "pop": 1,
    "rain": {"3h": 4.53},
    "sys": {"pod": "n"},
    "dt_txt": "2023-08-15 00:00:00"
  }, {
    "dt": 1692068400,
    "main": {
      "temp": 20.32,
      "feels_like": 20.65,
      "temp_min": 20.32,
      "temp_max": 20.32,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 1010,
      "humidity": 86,
      "temp_kf": 0
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10n"}],
    "clouds": {"all": 84},
    "wind": {"speed": 3.59, "deg": 143, "gust": 8.95},
    "visibility": 10000,
    "pop": 0.67,
    "rain": {"3h": 1.08},
    "sys": {"pod": "n"},
    "dt_txt": "2023-08-15 03:00:00"
  }, {
    "dt": 1692079200,
    "main": {
      "temp": 21.32,
      "feels_like": 21.62,
      "temp_min": 21.32,
      "temp_max": 21.32,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 1010,
      "humidity": 81,
      "temp_kf": 0
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "clouds": {"all": 83},
    "wind": {"speed": 2.6, "deg": 141, "gust": 5.29},
    "visibility": 10000,
    "pop": 0.68,
    "rain": {"3h": 1.26},
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-15 06:00:00"
  }, {
    "dt": 1692090000,
    "main": {
      "temp": 26.72,
      "feels_like": 27.99,
      "temp_min": 26.72,
      "temp_max": 26.72,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 1010,
      "humidity": 64,
      "temp_kf": 0
    },
    "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
    "clouds": {"all": 96},
    "wind": {"speed": 2.34, "deg": 173, "gust": 3.59},
    "visibility": 10000,
    "pop": 0.03,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-15 09:00:00"
  }, {
    "dt": 1692100800,
    "main": {
      "temp": 28.91,
      "feels_like": 29.91,
      "temp_min": 28.91,
      "temp_max": 28.91,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 1010,
      "humidity": 53,
      "temp_kf": 0
    },
    "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
    "clouds": {"all": 98},
    "wind": {"speed": 1.71, "deg": 268, "gust": 2.92},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-15 12:00:00"
  }, {
    "dt": 1692111600,
    "main": {
      "temp": 29.77,
      "feels_like": 30.42,
      "temp_min": 29.77,
      "temp_max": 29.77,
      "pressure": 1014,
      "sea_level": 1014,
      "grnd_level": 1010,
      "humidity": 48,
      "temp_kf": 0
    },
    "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
    "clouds": {"all": 94},
    "wind": {"speed": 2.15, "deg": 303, "gust": 1.96},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-15 15:00:00"
  }, {
    "dt": 1692122400,
    "main": {
      "temp": 25.99,
      "feels_like": 25.99,
      "temp_min": 25.99,
      "temp_max": 25.99,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 1010,
      "humidity": 66,
      "temp_kf": 0
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "clouds": {"all": 96},
    "wind": {"speed": 1.94, "deg": 320, "gust": 3.48},
    "visibility": 10000,
    "pop": 0.54,
    "rain": {"3h": 0.71},
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-15 18:00:00"
  }, {
    "dt": 1692133200,
    "main": {
      "temp": 21.88,
      "feels_like": 22.45,
      "temp_min": 21.88,
      "temp_max": 21.88,
      "pressure": 1017,
      "sea_level": 1017,
      "grnd_level": 1012,
      "humidity": 89,
      "temp_kf": 0
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10n"}],
    "clouds": {"all": 100},
    "wind": {"speed": 2.97, "deg": 345, "gust": 6.17},
    "visibility": 10000,
    "pop": 0.8,
    "rain": {"3h": 1.07},
    "sys": {"pod": "n"},
    "dt_txt": "2023-08-15 21:00:00"
  }, {
    "dt": 1692144000,
    "main": {
      "temp": 21.2,
      "feels_like": 21.8,
      "temp_min": 21.2,
      "temp_max": 21.2,
      "pressure": 1018,
      "sea_level": 1018,
      "grnd_level": 1013,
      "humidity": 93,
      "temp_kf": 0
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10n"}],
    "clouds": {"all": 100},
    "wind": {"speed": 2.28, "deg": 343, "gust": 4.69},
    "visibility": 10000,
    "pop": 0.89,
    "rain": {"3h": 0.49},
    "sys": {"pod": "n"},
    "dt_txt": "2023-08-16 00:00:00"
  }, {
    "dt": 1692154800,
    "main": {
      "temp": 19.61,
      "feels_like": 20.03,
      "temp_min": 19.61,
      "temp_max": 19.61,
      "pressure": 1019,
      "sea_level": 1019,
      "grnd_level": 1014,
      "humidity": 92,
      "temp_kf": 0
    },
    "weather": [{"id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n"}],
    "clouds": {"all": 80},
    "wind": {"speed": 2.91, "deg": 354, "gust": 5.37},
    "visibility": 10000,
    "pop": 0.3,
    "sys": {"pod": "n"},
    "dt_txt": "2023-08-16 03:00:00"
  }, {
    "dt": 1692165600,
    "main": {
      "temp": 19.6,
      "feels_like": 19.63,
      "temp_min": 19.6,
      "temp_max": 19.6,
      "pressure": 1020,
      "sea_level": 1020,
      "grnd_level": 1015,
      "humidity": 77,
      "temp_kf": 0
    },
    "weather": [{"id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d"}],
    "clouds": {"all": 50},
    "wind": {"speed": 3.18, "deg": 9, "gust": 5.07},
    "visibility": 10000,
    "pop": 0.1,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-16 06:00:00"
  }, {
    "dt": 1692176400,
    "main": {
      "temp": 23.61,
      "feels_like": 23.54,
      "temp_min": 23.61,
      "temp_max": 23.61,
      "pressure": 1021,
      "sea_level": 1021,
      "grnd_level": 1016,
      "humidity": 58,
      "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 6},
    "wind": {"speed": 2.9, "deg": 16, "gust": 3.3},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-16 09:00:00"
  }, {
    "dt": 1692187200,
    "main": {
      "temp": 27.11,
      "feels_like": 27.28,
      "temp_min": 27.11,
      "temp_max": 27.11,
      "pressure": 1020,
      "sea_level": 1020,
      "grnd_level": 1015,
      "humidity": 46,
      "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 4},
    "wind": {"speed": 2.58, "deg": 35, "gust": 2.37},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-16 12:00:00"
  }, {
    "dt": 1692198000,
    "main": {
      "temp": 27.91,
      "feels_like": 27.94,
      "temp_min": 27.91,
      "temp_max": 27.91,
      "pressure": 1020,
      "sea_level": 1020,
      "grnd_level": 1015,
      "humidity": 45,
      "temp_kf": 0
    },
    "weather": [{"id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d"}],
    "clouds": {"all": 20},
    "wind": {"speed": 3.03, "deg": 60, "gust": 2.26},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-16 15:00:00"
  }, {
    "dt": 1692208800,
    "main": {
      "temp": 23.81,
      "feels_like": 23.71,
      "temp_min": 23.81,
      "temp_max": 23.81,
      "pressure": 1020,
      "sea_level": 1020,
      "grnd_level": 1015,
      "humidity": 56,
      "temp_kf": 0
    },
    "weather": [{"id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d"}],
    "clouds": {"all": 37},
    "wind": {"speed": 4.7, "deg": 56, "gust": 6.73},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-16 18:00:00"
  }, {
    "dt": 1692219600,
    "main": {
      "temp": 20.15,
      "feels_like": 19.79,
      "temp_min": 20.15,
      "temp_max": 20.15,
      "pressure": 1020,
      "sea_level": 1020,
      "grnd_level": 1015,
      "humidity": 60,
      "temp_kf": 0
    },
    "weather": [{"id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n"}],
    "clouds": {"all": 75},
    "wind": {"speed": 4.39, "deg": 52, "gust": 8.86},
    "visibility": 10000,
    "pop": 0.17,
    "sys": {"pod": "n"},
    "dt_txt": "2023-08-16 21:00:00"
  }, {
    "dt": 1692230400,
    "main": {
      "temp": 18.05,
      "feels_like": 17.66,
      "temp_min": 18.05,
      "temp_max": 18.05,
      "pressure": 1021,
      "sea_level": 1021,
      "grnd_level": 1016,
      "humidity": 67,
      "temp_kf": 0
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10n"}],
    "clouds": {"all": 82},
    "wind": {"speed": 2.26, "deg": 46, "gust": 5.8},
    "visibility": 10000,
    "pop": 0.53,
    "rain": {"3h": 0.59},
    "sys": {"pod": "n"},
    "dt_txt": "2023-08-17 00:00:00"
  }, {
    "dt": 1692241200,
    "main": {
      "temp": 17.07,
      "feels_like": 16.56,
      "temp_min": 17.07,
      "temp_max": 17.07,
      "pressure": 1020,
      "sea_level": 1020,
      "grnd_level": 1015,
      "humidity": 66,
      "temp_kf": 0
    },
    "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n"}],
    "clouds": {"all": 94},
    "wind": {"speed": 3.2, "deg": 45, "gust": 7.97},
    "visibility": 10000,
    "pop": 0.12,
    "sys": {"pod": "n"},
    "dt_txt": "2023-08-17 03:00:00"
  }, {
    "dt": 1692252000,
    "main": {
      "temp": 18.06,
      "feels_like": 17.57,
      "temp_min": 18.06,
      "temp_max": 18.06,
      "pressure": 1020,
      "sea_level": 1020,
      "grnd_level": 1015,
      "humidity": 63,
      "temp_kf": 0
    },
    "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
    "clouds": {"all": 91},
    "wind": {"speed": 3.82, "deg": 68, "gust": 9.15},
    "visibility": 10000,
    "pop": 0.19,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-17 06:00:00"
  }, {
    "dt": 1692262800,
    "main": {
      "temp": 21.35,
      "feels_like": 21.16,
      "temp_min": 21.35,
      "temp_max": 21.35,
      "pressure": 1020,
      "sea_level": 1020,
      "grnd_level": 1015,
      "humidity": 62,
      "temp_kf": 0
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "clouds": {"all": 98},
    "wind": {"speed": 2.04, "deg": 64, "gust": 3.97},
    "visibility": 10000,
    "pop": 0.67,
    "rain": {"3h": 0.74},
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-17 09:00:00"
  }, {
    "dt": 1692273600,
    "main": {
      "temp": 20.18,
      "feels_like": 20.16,
      "temp_min": 20.18,
      "temp_max": 20.18,
      "pressure": 1020,
      "sea_level": 1020,
      "grnd_level": 1015,
      "humidity": 73,
      "temp_kf": 0
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "clouds": {"all": 99},
    "wind": {"speed": 3.45, "deg": 22, "gust": 6.94},
    "visibility": 10000,
    "pop": 0.94,
    "rain": {"3h": 0.4},
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-17 12:00:00"
  }, {
    "dt": 1692284400,
    "main": {
      "temp": 22.91,
      "feels_like": 22.82,
      "temp_min": 22.91,
      "temp_max": 22.91,
      "pressure": 1019,
      "sea_level": 1019,
      "grnd_level": 1014,
      "humidity": 60,
      "temp_kf": 0
    },
    "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
    "clouds": {"all": 100},
    "wind": {"speed": 5.13, "deg": 27, "gust": 6.73},
    "visibility": 10000,
    "pop": 0.24,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-17 15:00:00"
  }, {
    "dt": 1692295200,
    "main": {
      "temp": 19.15,
      "feels_like": 19.03,
      "temp_min": 19.15,
      "temp_max": 19.15,
      "pressure": 1018,
      "sea_level": 1018,
      "grnd_level": 1013,
      "humidity": 73,
      "temp_kf": 0
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "clouds": {"all": 98},
    "wind": {"speed": 4.92, "deg": 25, "gust": 9.55},
    "visibility": 10000,
    "pop": 0.23,
    "rain": {"3h": 0.13},
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-17 18:00:00"
  }, {
    "dt": 1692306000,
    "main": {
      "temp": 17.18,
      "feels_like": 17.07,
      "temp_min": 17.18,
      "temp_max": 17.18,
      "pressure": 1019,
      "sea_level": 1019,
      "grnd_level": 1014,
      "humidity": 81,
      "temp_kf": 0
    },
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10n"}],
    "clouds": {"all": 56},
    "wind": {"speed": 3.69, "deg": 35, "gust": 9.94},
    "visibility": 10000,
    "pop": 0.34,
    "rain": {"3h": 0.39},
    "sys": {"pod": "n"},
    "dt_txt": "2023-08-17 21:00:00"
  }, {
    "dt": 1692316800,
    "main": {
      "temp": 16.29,
      "feels_like": 16.25,
      "temp_min": 16.29,
      "temp_max": 16.29,
      "pressure": 1018,
      "sea_level": 1018,
      "grnd_level": 1013,
      "humidity": 87,
      "temp_kf": 0
    },
    "weather": [{"id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03n"}],
    "clouds": {"all": 50},
    "wind": {"speed": 2.51, "deg": 30, "gust": 5.23},
    "visibility": 10000,
    "pop": 0.19,
    "sys": {"pod": "n"},
    "dt_txt": "2023-08-18 00:00:00"
  }, {
    "dt": 1692327600,
    "main": {
      "temp": 16.04,
      "feels_like": 16.08,
      "temp_min": 16.04,
      "temp_max": 16.04,
      "pressure": 1017,
      "sea_level": 1017,
      "grnd_level": 1012,
      "humidity": 91,
      "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
    "clouds": {"all": 5},
    "wind": {"speed": 2.51, "deg": 32, "gust": 5.32},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "n"},
    "dt_txt": "2023-08-18 03:00:00"
  }, {
    "dt": 1692338400,
    "main": {
      "temp": 18.38,
      "feels_like": 18.41,
      "temp_min": 18.38,
      "temp_max": 18.38,
      "pressure": 1017,
      "sea_level": 1017,
      "grnd_level": 1012,
      "humidity": 82,
      "temp_kf": 0
    },
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "clouds": {"all": 6},
    "wind": {"speed": 3.05, "deg": 57, "gust": 5.42},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-18 06:00:00"
  }, {
    "dt": 1692349200,
    "main": {
      "temp": 24.44,
      "feels_like": 24.53,
      "temp_min": 24.44,
      "temp_max": 24.44,
      "pressure": 1017,
      "sea_level": 1017,
      "grnd_level": 1012,
      "humidity": 61,
      "temp_kf": 0
    },
    "weather": [{"id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d"}],
    "clouds": {"all": 33},
    "wind": {"speed": 2.7, "deg": 78, "gust": 3.71},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-18 09:00:00"
  }, {
    "dt": 1692360000,
    "main": {
      "temp": 28.84,
      "feels_like": 29.23,
      "temp_min": 28.84,
      "temp_max": 28.84,
      "pressure": 1016,
      "sea_level": 1016,
      "grnd_level": 1011,
      "humidity": 48,
      "temp_kf": 0
    },
    "weather": [{"id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d"}],
    "clouds": {"all": 55},
    "wind": {"speed": 2.05, "deg": 94, "gust": 2.58},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-18 12:00:00"
  }, {
    "dt": 1692370800,
    "main": {
      "temp": 29.63,
      "feels_like": 30.1,
      "temp_min": 29.63,
      "temp_max": 29.63,
      "pressure": 1016,
      "sea_level": 1016,
      "grnd_level": 1011,
      "humidity": 47,
      "temp_kf": 0
    },
    "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
    "clouds": {"all": 98},
    "wind": {"speed": 1.77, "deg": 88, "gust": 1.97},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-18 15:00:00"
  }, {
    "dt": 1692381600,
    "main": {
      "temp": 26.73,
      "feels_like": 27.81,
      "temp_min": 26.73,
      "temp_max": 26.73,
      "pressure": 1015,
      "sea_level": 1015,
      "grnd_level": 1010,
      "humidity": 61,
      "temp_kf": 0
    },
    "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d"}],
    "clouds": {"all": 98},
    "wind": {"speed": 2.3, "deg": 80, "gust": 4.23},
    "visibility": 10000,
    "pop": 0,
    "sys": {"pod": "d"},
    "dt_txt": "2023-08-18 18:00:00"
  }],
  "city": {
    "id": 2950159,
    "name": "Berlin",
    "coord": {"lat": 52.5244, "lon": 13.4105},
    "country": "DE",
    "population": 1000000,
    "timezone": 7200,
    "sunrise": 1691898293,
    "sunset": 1691951875
  }
}
