import { Injectable } from '@angular/core';
import { CartStore } from '@demo/core-services';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product } from '@demo/interfaces';

@Injectable()
export class ProductCardService {
  constructor(private _cartStore: CartStore) {}

  addCart(product: Product) {
    this._cartStore.addCart(product);
  }
}
