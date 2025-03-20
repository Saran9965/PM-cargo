import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargodetailsComponent } from './cargodetails.component';

describe('CargodetailsComponent', () => {
  let component: CargodetailsComponent;
  let fixture: ComponentFixture<CargodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargodetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
