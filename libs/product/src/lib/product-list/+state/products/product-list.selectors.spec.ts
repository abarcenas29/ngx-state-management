import { ProductListEntity } from './product-list.models';
import {
  productListAdapter,
  ProductListPartialState,
  initialState,
} from './product-list.reducer';
import * as ProductListSelectors from './product-list.selectors';

describe('ProductList Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getProductListId = (it: ProductListEntity) => it.id;
  const createProductListEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ProductListEntity);

  let state: ProductListPartialState;

  beforeEach(() => {
    state = {
      productList: productListAdapter.setAll(
        [
          createProductListEntity('PRODUCT-AAA'),
          createProductListEntity('PRODUCT-BBB'),
          createProductListEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('ProductList Selectors', () => {
    it('getAllProductList() should return the list of ProductList', () => {
      const results = ProductListSelectors.getAllProductList(state);
      const selId = getProductListId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ProductListSelectors.getSelected(
        state
      ) as ProductListEntity;
      const selId = getProductListId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getProductListLoaded() should return the current "loaded" status', () => {
      const result = ProductListSelectors.getProductListLoaded(state);

      expect(result).toBe(true);
    });

    it('getProductListError() should return the current "error" state', () => {
      const result = ProductListSelectors.getProductListError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
