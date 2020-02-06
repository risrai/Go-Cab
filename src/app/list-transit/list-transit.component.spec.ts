import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransitComponent } from './list-transit.component';

describe('ListTransitComponent', () => {
  let component: ListTransitComponent;
  let fixture: ComponentFixture<ListTransitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTransitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
