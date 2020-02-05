import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelDriverComponent } from './del-driver.component';

describe('DelDriverComponent', () => {
  let component: DelDriverComponent;
  let fixture: ComponentFixture<DelDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
