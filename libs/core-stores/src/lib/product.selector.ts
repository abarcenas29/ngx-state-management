import { createSelector } from '@ngrx/store';

import { AppState } from '@demo/interfaces';

import { State as ProductState } from './product.reducer';

export const selectProduct = (state: AppState) => state.product;

export const selectProducts = createSelector(
  selectProduct,
  (state: ProductState) => state.products
);
