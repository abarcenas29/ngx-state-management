import { Injectable } from '@angular/core';
import { CartService } from '@demo/core-services';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product } from '@demo/interfaces';

@Injectable()
export class ProductCardService {
  constructor(private _cartService: CartService) {}

  addCart(product: Product) {
    this._cartService.addCart(product);
  }
}
