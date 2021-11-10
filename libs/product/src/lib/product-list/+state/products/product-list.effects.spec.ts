import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as ProductListActions from './product-list.actions';
import { ProductListEffects } from './product-list.effects';

describe('ProductListEffects', () => {
  let actions: Observable<Action>;
  let effects: ProductListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ProductListEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ProductListEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ProductListActions.init() });

      const expected = hot('-a-|', {
        a: ProductListActions.loadProductListSuccess({ productList: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
