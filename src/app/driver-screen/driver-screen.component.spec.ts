import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverScreenComponent } from './driver-screen.component';

describe('DriverScreenComponent', () => {
  let component: DriverScreenComponent;
  let fixture: ComponentFixture<DriverScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
