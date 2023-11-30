import { TestBed } from '@angular/core/testing';

import { DayCounterService } from './day-counter.service';

describe('DayCounterService', () => {
  let service: DayCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
