import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteCitiesComponent } from './favourite-cities.component';

const routes: Routes = [{ path: '', component: FavouriteCitiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteCitiesRoutingModule { }
