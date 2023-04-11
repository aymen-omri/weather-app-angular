import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, Output, EventEmitter, Inject } from '@angular/core';
import { LngLat, Map, Marker, NavigationControl } from 'maplibre-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;
  marker: Marker | undefined;
  @Output() mapClick = new EventEmitter();
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor() { }

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
    this.map.addControl(new NavigationControl({}), 'top-right');
    this.map?.on('click', (event) => {
      const lngLat = this.map?.unproject(event.point);
      this.onMapClick(lngLat);
      if (lngLat) {
        this.addMarker(this.map!, lngLat);
      }
    });

  }

  private addMarker(map: Map, lngLat: LngLat) {
    if (this.marker) {
      this.marker.remove();
    }
    this.marker = new Marker({ color: "#FF0000" })
      .setLngLat(lngLat)
      .addTo(map);
  }

  onMapClick(data: any) {
    this.mapClick.emit({ 'Longitude': data?.lng, 'Latitude': data?.lat });
  }

  ngOnDestroy() {
    this.map?.remove();
  }

}