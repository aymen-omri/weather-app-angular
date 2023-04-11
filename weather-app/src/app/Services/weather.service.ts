import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private http: HttpClient) { }

    getCurrentWeather() {
        return new Observable(observer => {
            navigator.geolocation.getCurrentPosition(pos => {
                observer.next(pos);
            },
                (err) => {
                    observer.next(err);
                });
        }).pipe(
            map((value: any) => {
                return new HttpParams()
                    .set('key', '<YOUR WEATHER API KEY>')
                    .set('days', '7')
                    .set('q', `${value.coords.latitude},${value.coords.longitude}`);
            }),
            switchMap((values: any) => {
                return this.http.get('http://api.weatherapi.com/v1/forecast.json', { params: values });
            })
        );
    }

    getCityWeather(lat: any, lng: any) {
        let params = new HttpParams()
            .set('key', '<YOUR WEATHER API KEY>')
            .set('days', '7')
            .set('q', `${lat},${lng}`);

        return this.http.get('http://api.weatherapi.com/v1/forecast.json', { params: params });
    }

}