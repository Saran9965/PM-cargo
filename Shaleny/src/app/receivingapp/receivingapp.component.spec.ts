import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingappComponent } from './receivingapp.component';

describe('ReceivingappComponent', () => {
  let component: ReceivingappComponent;
  let fixture: ComponentFixture<ReceivingappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivingappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivingappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
