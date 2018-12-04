import { TestBed, inject } from '@angular/core/testing';

import { DeleteProdService } from './delete-prod.service';

describe('DeleteProdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteProdService]
    });
  });

  it('should be created', inject([DeleteProdService], (service: DeleteProdService) => {
    expect(service).toBeTruthy();
  }));
});
