import { createAction, props } from '@ngrx/store';

import { Product } from '@demo/interfaces';

export const init = createAction('[cart] Init');

export const loadCart = createAction(
  '[Cart] Fetch Cart',
  props<{ cart: Product[] }>()
);

export const addCart = createAction(
  '[Cart] Add Cart Success',
  props<Product>()
);

export const removeCart = createAction(
  '[Cart] Remove Cart Success',
  props<{ id: string }>()
);

export const cartFail = createAction(
  '[Cart] Cart Operation Failure',
  props<{ error: any }>()
);
