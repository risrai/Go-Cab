import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverConfirmRideComponent } from './driver-confirm-ride.component';

describe('DriverConfirmRideComponent', () => {
  let component: DriverConfirmRideComponent;
  let fixture: ComponentFixture<DriverConfirmRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverConfirmRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverConfirmRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
