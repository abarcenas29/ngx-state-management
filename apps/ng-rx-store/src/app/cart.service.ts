import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '@demo/interfaces';

@Injectable()
export class CartService {
  private cartList: Product[] = [];
  private _cartList$ = new BehaviorSubject<Product[]>([]);
  private _cartCount$ = new BehaviorSubject<number>(0);

  readonly cartList$ = this._cartList$.asObservable();
  readonly cartCount$ = this._cartCount$.asObservable();

  addCart(product: Product) {
    this.cartList.push(product);

    this._cartList$.next(this.cartList);
    this._cartCount$.next(this.cartList.length);
  }

  deleteItemCart(index: number) {
    const tempCart = this.cartList.splice(index, 1);
    this._cartList$.next(tempCart);
  }
}
