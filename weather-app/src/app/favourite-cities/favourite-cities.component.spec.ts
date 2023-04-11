import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteCitiesComponent } from './favourite-cities.component';

describe('FavouriteCitiesComponent', () => {
  let component: FavouriteCitiesComponent;
  let fixture: ComponentFixture<FavouriteCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteCitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
