import { Injectable } from '@angular/core';

import { CartService } from '@app/ng-rx-store/app/cart.service';

@Injectable({
  providedIn: 'root',
})
export class CartCardService {
  constructor(private _cartService: CartService) {}

  removeItem(index: number) {
    this._cartService.deleteItemCart(index);
  }
}
