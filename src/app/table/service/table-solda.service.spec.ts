import { TestBed } from '@angular/core/testing';

import { TableSoldaService } from './table-solda.service';

describe('TableSoldaService', () => {
  let service: TableSoldaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableSoldaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
