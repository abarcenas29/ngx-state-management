import { Injectable } from '@angular/core';
import { CartService } from '@app/ng-rx-store/app/cart.service';

import { Product } from '@demo/interfaces';

@Injectable()
export class ProductCardService {
  constructor(private _cartService: CartService) {}

  addCart(product: Product) {
    this._cartService.addCart(product);
  }
}
