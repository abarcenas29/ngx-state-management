import { createReducer, on, Action } from '@ngrx/store';

import { Product } from '@demo/interfaces';
import * as CartActions from './cart.action';
import { initialSate } from '..';

export interface State {
  cart: Product[];
}

export const initialState: State = {
  cart: [],
};

const cartReducer = createReducer(
  initialSate,
  on(CartActions.loadCart, (s) => ({
    ...s,
  })),
  on(CartActions.addCart, (s) => ({
    ...s,
  })),
  on(CartActions.removeCart, (s) => ({
    ...s,
  }))
);
