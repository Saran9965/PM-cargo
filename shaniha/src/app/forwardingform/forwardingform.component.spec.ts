import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardingformComponent } from './forwardingform.component';

describe('ForwardingformComponent', () => {
  let component: ForwardingformComponent;
  let fixture: ComponentFixture<ForwardingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForwardingformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForwardingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
