import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { map, switchMap } from 'rxjs/operators'

import { ProductService } from '@demo/core-services'

import * as productACtions from './product.action'

@Injectable()
export class ProductEffects {
  constructor(private _productService: ProductService, private _actions$: Actions) {}

  $loadProducts =  createEffect(
    () =>
      this._actions$.pipe(
        ofType(productACtions.fetchProduct),
        switchMap(() => this._productService.getList().pipe(
          map(products => productACtions.fetchProductSuccess({products}))
        ))
      )
  )
}
