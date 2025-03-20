import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecvComponent } from './recv.component';

describe('RecvComponent', () => {
  let component: RecvComponent;
  let fixture: ComponentFixture<RecvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
