import { TestBed } from '@angular/core/testing';

import { CooService } from './coo.service';

describe('CooService', () => {
  let service: CooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
