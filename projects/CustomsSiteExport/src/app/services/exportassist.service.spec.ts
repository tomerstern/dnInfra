import { TestBed } from '@angular/core/testing';

import { ExportassistService } from './exportassist.service';

describe('ExportassistService', () => {
  let service: ExportassistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportassistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
