import { createReducer, on, Action } from '@ngrx/store';

import * as ProductActions from './product.action';
import { Product } from '@demo/interfaces';

export interface State {
  products: Product[];
}

export const initialSate: State = {
  products: [],
};

const productReducer = createReducer(
  initialSate,
  on(ProductActions.init, (s) => ({
    ...s,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return productReducer(state, action);
}
