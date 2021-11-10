import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as ProductListActions from './product-list.actions';
import * as ProductListFeature from './product-list.reducer';

@Injectable()
export class ProductListEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductListActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ProductListActions.loadProductListSuccess({ productList: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return ProductListActions.loadProductListFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
