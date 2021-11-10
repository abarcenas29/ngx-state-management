import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store'

import { Product } from '@demo/interfaces'
import { Observable } from 'rxjs';

export interface CartState {
  cart: Product[],
  count: number
}

@Injectable()
export class CartStore extends ComponentStore<CartState> {
  constructor () {
    super({ cart: [], count: 0 })
  }


  readonly carts$: Observable<Product[]> = this.select(s => s.cart)
  readonly count$: Observable<number> = this.select(s => s.count)

  readonly deleteCart = this.updater((state, id: string) => {
    return {
      cart: state.cart.filter(v => (v.id !== id)),
      count: state.count--,
    }
  })

  readonly addCart = this.updater((state, product: Product) => ({
    count: state.count + 1,
    cart: [...state.cart, product]
  }))
}
