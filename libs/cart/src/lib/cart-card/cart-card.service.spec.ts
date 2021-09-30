import { TestBed } from '@angular/core/testing';

import { CartCardService } from './cart-card.service';

describe('CartCardService', () => {
  let service: CartCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
