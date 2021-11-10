import { createAction, props } from '@ngrx/store';

import { Product } from '@demo/interfaces';

export const init = createAction('[Product] Init');

export const loadProduct = createAction(
  '[Product/Api] Load Product Success',
  props<{ product: Product[] }>()
);

export const loadProductFail = createAction(
  '[Product/Api] Load Product Failure',
  props<{ error: any }>()
);
