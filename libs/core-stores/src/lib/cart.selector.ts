import { createSelector } from "@ngrx/store";

import { AppState } from '@demo/interfaces'

import { cartState } from './cart.reducer'

export const selectCart = (state: AppState) => state.cart;

export const selectCartList = createSelector(
  selectCart,
  (state: cartState) => state.carts
);

export const selectCartCount = createSelector(
  selectCart,
  (state: cartState) => state.count
)
