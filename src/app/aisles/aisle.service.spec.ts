import { TestBed, inject } from '@angular/core/testing';

import { AisleService } from './aisle.service';

describe('AisleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AisleService]
    });
  });

  it('should be created', inject([AisleService], (service: AisleService) => {
    expect(service).toBeTruthy();
  }));
});
