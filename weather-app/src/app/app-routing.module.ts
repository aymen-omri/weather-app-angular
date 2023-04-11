import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule) },
  { path: 'favourite', loadChildren: () => import('./favourite-cities/favourite-cities.module').then(m => m.FavouriteCitiesModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
