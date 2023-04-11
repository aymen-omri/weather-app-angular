import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LngLat, Map, Marker, NavigationControl } from 'maplibre-gl';
@Component({
  selector: 'app-map-for-locations',
  templateUrl: './map-for-locations.component.html',
  styleUrls: ['./map-for-locations.component.css']
})
export class MapForLocationsComponent implements OnInit , OnDestroy{
  map: Map | undefined;
  marker: Marker | undefined;
  @Output() mapClick = new EventEmitter();
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {latLng: any}) { }

  ngOnInit(): void {
  }

  
  ngAfterViewInit() {
    const initialState = { lng: 10.77, lat: 34.76, zoom: 3 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=<Your MAPTILER API KEY>`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });
    const marker = new Marker({ color: "#FF0000" })
    .setLngLat([this.data.latLng.lng, this.data.latLng.lat])
    .addTo(this.map)

  }


  ngOnDestroy() {
    this.map?.remove();
  }

}
