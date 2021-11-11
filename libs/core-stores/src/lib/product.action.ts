import { createAction, props } from '@ngrx/store';

import { Product } from '@demo/interfaces';


export const fetchProduct = createAction(
  '[Product/Api] Fetch Product'
)

export const fetchProductSuccess = createAction(
  '[Product/Api] Product Success',
  props<{ products: Product[] }>()
);

export const loadProductFail = createAction(
  '[Product/Api] Load Product Failure',
  props<{ error: any }>()
);
