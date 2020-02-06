import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRiderComponent } from './list-rider.component';

describe('ListRiderComponent', () => {
  let component: ListRiderComponent;
  let fixture: ComponentFixture<ListRiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
