import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranitComponent } from './tranit.component';

describe('TranitComponent', () => {
  let component: TranitComponent;
  let fixture: ComponentFixture<TranitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
