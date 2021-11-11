import { createReducer, on, Action } from '@ngrx/store';

import * as ProductActions from './product.action';
import { Product } from '@demo/interfaces';

export interface productState {
  products: Product[];
}

export const initialSate: productState = {
  products: [],
};

const _productReducer = createReducer(
  initialSate,
  on(ProductActions.fetchProductSuccess, (s, {products}) => ({
    products
  }))
);

export function productReducer(state: productState | undefined, action: Action) {
  return _productReducer(state, action);
}
