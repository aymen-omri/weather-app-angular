import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    WeatherComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule

  ]
})
export class WeatherModule { }
