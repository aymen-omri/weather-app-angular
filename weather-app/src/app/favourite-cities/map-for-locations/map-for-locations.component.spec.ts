import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapForLocationsComponent } from './map-for-locations.component';

describe('MapForLocationsComponent', () => {
  let component: MapForLocationsComponent;
  let fixture: ComponentFixture<MapForLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapForLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapForLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
