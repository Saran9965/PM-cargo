import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingformComponent } from './receivingform.component';

describe('ReceivingformComponent', () => {
  let component: ReceivingformComponent;
  let fixture: ComponentFixture<ReceivingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivingformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
