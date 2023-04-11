import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { WeatherService } from '../Services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  constructor(private weather: WeatherService , private router : Router) { }

  ngOnInit() {
    this.patchYourWeatherData();
  }

  cities: any[] = [];

  currentTempInfo: any = {
    lon: "",
    lat: "",
    currentDate: "",
    countryName: "",
    regionName: "",
    cityName: "",
    currentTempC: "",
    currentTempF: "",
    feelsLikeC: "",
    feelsLikeF: "",
    humidity: "",
    pressure: "",
    icon: "",
    conditionDesc: "",
    hours: "",
    days: [],
    isDay: ""
  }


  receiveCoords(event: any) {
    this.weather.getCityWeather(event.Latitude, event.Longitude).subscribe((value: any) => {
      console.log(value);
      this.currentTempInfo.lon = value.location.lon;
      this.currentTempInfo.lat = value.location.lat;
      this.currentTempInfo.countryName = value.location.country;
      this.currentTempInfo.regionName = value.location.region;
      this.currentTempInfo.cityName = value.location.name;
      this.currentTempInfo.currentTempC = value.current.temp_c;
      this.currentTempInfo.currentTempF = value.current.temp_f;
      this.currentTempInfo.feelsLikeC = value.current.feelslike_c;
      this.currentTempInfo.feelsLikeF = value.current.feelslike_f;
      this.currentTempInfo.humidity = value.current.humidity;
      this.currentTempInfo.icon = value.current.condition.icon;
      this.currentTempInfo.conditionDesc = value.current.condition.text;
      this.currentTempInfo.pressure = value.current.pressure_in;
      this.currentTempInfo.hours = value.forecast.forecastday[0].hour.slice(1, 7);
      this.currentTempInfo.currentDate = this.fromDateStringToDateShortName(value.forecast.forecastday[0].date) + " " + value.forecast.forecastday[0].date;
      this.currentTempInfo.isDay = value.current.is_day;
      console.log(this.currentTempInfo.hours)
      let hours = this.currentTempInfo.hours;
      for (let i = 0; i < hours.length; i++) {
        hours[i].time_epoch = this.fromEpochsToTime(hours[i].time_epoch);
      }
      this.currentTempInfo.days = value.forecast.forecastday.slice(0, 5);
      let days = this.currentTempInfo.days;
      for (let i = 0; i < days.length; i++) {
        days[i].date = this.fromDateStringToDateShortName(days[i].date);
      }

    })
  }

  fromEpochsToTime(number: any) {
    const timestamp: number = number;
    const date: Date = new Date(timestamp * 1000);
    const formattedTime: string = date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
    return formattedTime;
  }

  fromDateStringToDateShortName(date: string) {
    const dateString: string = date;
    const dateObj: Date = new Date(dateString + 'T00:00:00-05:00');
    const dayOfWeek: string = dateObj.toLocaleDateString('en-US', { weekday: 'short' });

    return dayOfWeek;
  }

  patchYourWeatherData() {
    this.weather.getCurrentWeather().subscribe((value: any) => {
      this.currentTempInfo.lon = value.location.lon;
      this.currentTempInfo.lat = value.location.lat;
      this.currentTempInfo.countryName = value.location.country;
      this.currentTempInfo.regionName = value.location.region;
      this.currentTempInfo.cityName = value.location.name;
      this.currentTempInfo.currentTempC = value.current.temp_c;
      this.currentTempInfo.currentTempF = value.current.temp_f;
      this.currentTempInfo.feelsLikeC = value.current.feelslike_c;
      this.currentTempInfo.feelsLikeF = value.current.feelslike_f;
      this.currentTempInfo.humidity = value.current.humidity;
      this.currentTempInfo.icon = value.current.condition.icon;
      this.currentTempInfo.conditionDesc = value.current.condition.text;
      this.currentTempInfo.pressure = value.current.pressure_in;
      this.currentTempInfo.hours = value.forecast.forecastday[0].hour.slice(1, 7);
      this.currentTempInfo.currentDate = this.fromDateStringToDateShortName(value.forecast.forecastday[0].date) + " " + value.forecast.forecastday[0].date;
      this.currentTempInfo.isDay = value.current.is_day;
      console.log(this.currentTempInfo.hours)
      let hours = this.currentTempInfo.hours;
      for (let i = 0; i < hours.length; i++) {
        hours[i].time_epoch = this.fromEpochsToTime(hours[i].time_epoch);
      }
      this.currentTempInfo.days = value.forecast.forecastday.slice(0, 5);
      let days = this.currentTempInfo.days;
      for (let i = 0; i < days.length; i++) {
        days[i].date = this.fromDateStringToDateShortName(days[i].date);
      }
    });
  }

  saveCitiesToLocalStorage() {
    let dataToSave = {
      lon: this.currentTempInfo.lon,
      lat: this.currentTempInfo.lat,
      city: this.currentTempInfo.cityName,
      region: this.currentTempInfo.regionName,
      country: this.currentTempInfo.countryName,
    }
    let storedCities = localStorage.getItem('cities');
    if (storedCities) {
      let cities = JSON.parse(storedCities);
      cities.push(dataToSave);
      localStorage.setItem('cities', JSON.stringify(cities));
      this.router.navigate(['/favourite'])
    } else {
      let cities = [];
      cities.push(dataToSave);
      localStorage.setItem('cities', JSON.stringify(cities));
      this.router.navigate(['/favourite'])
    }

  }



}
