import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MapComponent } from '../weather/map/map.component';
import { MapForLocationsComponent } from './map-for-locations/map-for-locations.component';

@Component({
  selector: 'app-favourite-cities',
  templateUrl: './favourite-cities.component.html',
  styleUrls: ['./favourite-cities.component.css']
})
export class FavouriteCitiesComponent implements OnInit,AfterViewInit {
  ngOnInit(): void {
    this.getCitiesFromLocalStorage();
  }

  constructor(private dialog : MatDialog) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  cities: any = [];
  dataSource: any;
  displayedColumns: string[] = ['Region', 'City', 'Country' , 'See in map'];


  getCitiesFromLocalStorage(){
    let cities = localStorage.getItem('cities');
    if(cities){
      this.cities = JSON.parse(cities);
      this.dataSource = new MatTableDataSource<any>(this.cities);
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  seePosition(lat : any , lng : any){
    let latLng = {
      lat : lat , 
      lng : lng
    }

    this.dialog.open(MapForLocationsComponent , {
      width:'60%',
      data:{latLng : latLng}
    });

  }


}
