import { Injectable } from '@angular/core';

import { Product } from '@demo/interfaces';
import { CartService } from '@app/ng-rx-store/app/cart.service';
import { Observable } from 'rxjs';

@Injectable()
export class CartListService {
  readonly cartList$ = new Observable<Product[]>();

  constructor(private _cartService: CartService) {
    this.cartList$ = this._cartService.cartList$;
  }
}
