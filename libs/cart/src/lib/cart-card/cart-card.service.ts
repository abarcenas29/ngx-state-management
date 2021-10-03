import { Injectable } from '@angular/core';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CartService } from '@app/ng-rx-store/app/cart.service';

@Injectable({
  providedIn: 'root',
})
export class CartCardService {
  constructor(private _cartService: CartService) {}

  removeItem(index: string) {
    this._cartService.deleteItemCart(index);
  }
}
