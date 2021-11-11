import { createReducer, on, Action } from '@ngrx/store';

import { Product } from '@demo/interfaces';
import * as CartActions from './cart.action';

export interface cartState {
  carts: Product[];
  count: number
}

export const initialState: cartState = {
  carts: [],
  count: 0
};

const _cartReducer = createReducer(
  initialState,
  on(CartActions.loadCart, (s) => ({
    ...s,
  })),
  on(CartActions.addCart, (s, product) => ({
    carts: [...s.carts, product],
    count: s.count + 1
  })),
  on(CartActions.removeCart, (s, {id}) => {
    console.log('tesitng', s)
    return {
      carts: s.carts.filter(v => v.id !== id),
      count: s.count - 1
    }
  })
);

export function cartReducer(state: cartState | undefined, action: Action) {
  return _cartReducer(state, action);
}
