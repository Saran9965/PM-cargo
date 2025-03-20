import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingapprovalComponent } from './receivingapproval.component';

describe('ReceivingapprovalComponent', () => {
  let component: ReceivingapprovalComponent;
  let fixture: ComponentFixture<ReceivingapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivingapprovalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivingapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
