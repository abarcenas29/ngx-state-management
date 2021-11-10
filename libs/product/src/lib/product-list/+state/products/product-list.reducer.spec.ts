import { Action } from '@ngrx/store';

import * as ProductListActions from './product-list.actions';
import { ProductListEntity } from './product-list.models';
import { State, initialState, reducer } from './product-list.reducer';

describe('ProductList Reducer', () => {
  const createProductListEntity = (
    id: string,
    name = ''
  ): ProductListEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid ProductList actions', () => {
    it('loadProductListSuccess should return the list of known ProductList', () => {
      const productList = [
        createProductListEntity('PRODUCT-AAA'),
        createProductListEntity('PRODUCT-zzz'),
      ];
      const action = ProductListActions.loadProductListSuccess({ productList });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
