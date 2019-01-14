import {Component, OnInit } from '@angular/core';
import { WeatherServerService } from '../services/weather-server.service';
import {WeatherItem} from '../weather-item';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  public location: string = '';
  constructor(private _weatherService: WeatherServerService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._weatherService.searchWeatherData(this.location).subscribe(
      data => {
        const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
        this._weatherService.addWeatherItem(weatherItem);
      },
      catchError(err => Observable.throw(err))
    );
  }

}
