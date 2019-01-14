import { Injectable } from '@angular/core';
import {Profile} from '../profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: Profile[] = [
    new Profile('Profile 1', ['Salo', 'Oulu', 'Vaasa'])
  ];
  constructor() { }
  saveNewProfile(cities: string[]) {
    this.profiles.push(new Profile(`Profile ${this.profiles.length + 1}`, cities));
  }
  getProfile() {
    return this.profiles;
  }
  deleteProfile(profile: Profile) {
    console.log(this.profiles.indexOf(profile));
    this.profiles.splice(this.profiles.indexOf(profile), 1);
  }
}
