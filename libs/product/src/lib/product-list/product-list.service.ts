import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStore } from '@demo/core-services';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product } from '@demo/interfaces';

@Injectable()
export class ProductListService {
  readonly productList$ = new Observable<Product[]>();

  constructor(private product: ProductStore) {
    this.productList$ = this.product.products$;
  }
}
