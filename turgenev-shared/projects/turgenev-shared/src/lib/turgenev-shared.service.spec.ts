import { TestBed } from '@angular/core/testing';

import { TurgenevSharedService } from './turgenev-shared.service';

describe('TurgenevSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurgenevSharedService = TestBed.get(TurgenevSharedService);
    expect(service).toBeTruthy();
  });
});
