import { TestBed } from '@angular/core/testing';

import { TranitService } from './tranit.service';

describe('TranitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranitService = TestBed.get(TranitService);
    expect(service).toBeTruthy();
  });
});
