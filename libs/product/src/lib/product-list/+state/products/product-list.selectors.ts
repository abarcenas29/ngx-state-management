import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PRODUCT_LIST_FEATURE_KEY,
  State,
  productListAdapter,
} from './product-list.reducer';

// Lookup the 'ProductList' feature state managed by NgRx
export const getProductListState = createFeatureSelector<State>(
  PRODUCT_LIST_FEATURE_KEY
);

const { selectAll, selectEntities } = productListAdapter.getSelectors();

export const getProductListLoaded = createSelector(
  getProductListState,
  (state: State) => state.loaded
);

export const getProductListError = createSelector(
  getProductListState,
  (state: State) => state.error
);

export const getAllProductList = createSelector(
  getProductListState,
  (state: State) => selectAll(state)
);

export const getProductListEntities = createSelector(
  getProductListState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getProductListState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getProductListEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
