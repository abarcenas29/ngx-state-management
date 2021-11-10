import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProductListActions from './product-list.actions';
import { ProductListEntity } from './product-list.models';

export const PRODUCT_LIST_FEATURE_KEY = 'productList';

export interface State extends EntityState<ProductListEntity> {
  selectedId?: string | number; // which ProductList record has been selected
  loaded: boolean; // has the ProductList list been loaded
  error?: string | null; // last known error (if any)
}

export interface ProductListPartialState {
  readonly [PRODUCT_LIST_FEATURE_KEY]: State;
}

export const productListAdapter: EntityAdapter<ProductListEntity> =
  createEntityAdapter<ProductListEntity>();

export const initialState: State = productListAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const productListReducer = createReducer(
  initialState,
  on(ProductListActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProductListActions.loadProductListSuccess, (state, { productList }) =>
    productListAdapter.setAll(productList, { ...state, loaded: true })
  ),
  on(ProductListActions.loadProductListFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return productListReducer(state, action);
}
