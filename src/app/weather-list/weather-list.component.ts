import { Component, OnInit } from '@angular/core';
import {WeatherItem} from '../weather-item';
import { WeatherServerService } from '../services/weather-server.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  public weatherItems: WeatherItem[];
  constructor(private _weatherService: WeatherServerService) { }

  ngOnInit() {
    this.weatherItems = this._weatherService.getWeatherItems();
  }

}
