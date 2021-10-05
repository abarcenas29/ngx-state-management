import { Injectable } from '@angular/core';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product } from '@demo/interfaces';
import { CartService } from '@demo/core-services';
import { Observable } from 'rxjs';

@Injectable()
export class CartListService {
  readonly cartList$ = new Observable<Product[]>();

  constructor(private _cartService: CartService) {
    this.cartList$ = this._cartService.cartList$;
  }
}
