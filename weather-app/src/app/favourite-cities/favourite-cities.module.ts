import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteCitiesRoutingModule } from './favourite-cities-routing.module';
import { FavouriteCitiesComponent } from './favourite-cities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MapForLocationsComponent } from './map-for-locations/map-for-locations.component';


@NgModule({
  declarations: [
    FavouriteCitiesComponent,
    MapForLocationsComponent
  ],
  imports: [
    CommonModule,
    FavouriteCitiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
    
  ]
})
export class FavouriteCitiesModule { }
