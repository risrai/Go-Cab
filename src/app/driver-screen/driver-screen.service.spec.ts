import { TestBed } from '@angular/core/testing';

import { DriverScreenService } from './driver-screen.service';

describe('DriverScreenService', () => {
  let service: DriverScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
