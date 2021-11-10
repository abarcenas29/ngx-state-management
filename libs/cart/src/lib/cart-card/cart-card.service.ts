import { Injectable } from '@angular/core';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CartStore } from '@demo/core-services';

@Injectable({
  providedIn: 'root',
})
export class CartCardService {
  constructor(private _cartStore: CartStore) {}

  removeItem(index: string) {
    this._cartStore.deleteCart(index);
  }
}
