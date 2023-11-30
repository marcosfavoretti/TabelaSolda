import { TestBed } from '@angular/core/testing';

import { TableSoldaOldTsService } from './table-solda-old.service';

describe('TableSoldaOldTsService', () => {
  let service: TableSoldaOldTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableSoldaOldTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
