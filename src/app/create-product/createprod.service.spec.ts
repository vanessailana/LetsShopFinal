import { TestBed, inject } from '@angular/core/testing';

import { CreateprodService } from './createprod.service';

describe('CreateprodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateprodService]
    });
  });

  it('should be created', inject([CreateprodService], (service: CreateprodService) => {
    expect(service).toBe(service);
  }));
});
