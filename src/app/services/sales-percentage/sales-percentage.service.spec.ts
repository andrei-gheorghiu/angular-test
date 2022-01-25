import { TestBed } from '@angular/core/testing';

import { SalesPercentageService } from './sales-percentage.service';

describe('SalesPercentageService', () => {
  let service: SalesPercentageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesPercentageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
