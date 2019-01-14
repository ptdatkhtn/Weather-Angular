import { Injectable } from '@angular/core';
import {WEATHER_ITEMS} from '../weather-data';
import { HttpClient } from '@angular/common/http';
import {WeatherItem} from '../weather-item';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServerService {
  constructor(private _http: HttpClient) { }

  getWeatherItems() {
    return WEATHER_ITEMS;
  }
  addWeatherItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }
  searchWeatherData(cityName: string): Observable<any> {
    return this._http.get(`http://openweathermap.org/data/2.5/weather?q=${cityName}&appid=b6907d289e10d714a6e88b30761fae22`);
  }
  clearWeatherData() {
    WEATHER_ITEMS.splice(0);
  }
}
