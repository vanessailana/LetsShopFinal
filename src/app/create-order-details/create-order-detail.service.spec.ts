import { TestBed, inject } from '@angular/core/testing';

import { CreateOrderDetailService } from './create-order-detail.service';

describe('CreateOrderDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateOrderDetailService]
    });
  });

  it('should be created', inject([CreateOrderDetailService], (service: CreateOrderDetailService) => {
    expect(service).toBe(service);
  }));
});
