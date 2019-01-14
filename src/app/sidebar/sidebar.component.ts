import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import {WeatherServerService} from '../services/weather-server.service';
import {Profile} from '../profile';
import {WeatherItem} from '../weather-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public profiles: Profile[] = [];
  constructor(private _weatherService: WeatherServerService, private _profileService: ProfileService) { }

  ngOnInit() {
    this.profiles = this._profileService.getProfile();
  }
  onSaveList() {
    const cities = this._weatherService.getWeatherItems().map(elm => {
      return elm.cityName;
    });
    this._profileService.saveNewProfile(cities);
  }
  onLoadCities(profile: Profile) {
    this._weatherService.clearWeatherData();
    profile.citiesName.forEach(cityName => {
      this._weatherService.searchWeatherData(cityName).subscribe(
        data => {
          const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
          this._weatherService.addWeatherItem(weatherItem);
        }
      );
    });
  }
  onDeleteList(event: Event, profile: Profile) {
    event.preventDefault();
    this._profileService.deleteProfile(profile);
  }

}
