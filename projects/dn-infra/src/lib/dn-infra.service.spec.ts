import { TestBed } from '@angular/core/testing';

import { DnInfraService } from './dn-infra.service';

describe('DnInfraService', () => {
  let service: DnInfraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DnInfraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
