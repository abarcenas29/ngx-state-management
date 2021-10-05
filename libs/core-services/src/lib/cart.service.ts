import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '@demo/interfaces';

@Injectable()
export class CartService {
  private cartList: Map<string, Product> = new Map();
  private _cartList$ = new BehaviorSubject<Product[]>([]);
  private _cartCount$ = new BehaviorSubject<number>(0);

  readonly cartList$ = this._cartList$.asObservable();
  readonly cartCount$ = this._cartCount$.asObservable();

  addCart(product: Product) {
    this.cartList.set(product?.id, product);
    const tempArray: Product[] = this._convertMapToArray(this.cartList);

    this._cartList$.next(tempArray);
    this._cartCount$.next(tempArray.length);
  }

  deleteItemCart(id: string) {
    this.cartList.delete(id);
    const tempArray: Product[] = this._convertMapToArray(this.cartList);

    this._cartList$.next([...tempArray]);
    this._cartCount$.next(tempArray.length);
  }

  private _convertMapToArray(map: Map<string, Product>): Product[] {
    const tempArray: Product[] = [];

    map.forEach((v: Product) => tempArray.push(v));

    return tempArray;
  }
}
