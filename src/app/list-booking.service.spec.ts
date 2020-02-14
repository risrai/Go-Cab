import { TestBed } from '@angular/core/testing';

import { ListBookingService } from './list-booking.service';

describe('ListBookingService', () => {
  let service: ListBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
