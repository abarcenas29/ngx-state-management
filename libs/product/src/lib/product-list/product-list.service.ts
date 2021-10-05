import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService } from '@demo/core-services';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product } from '@demo/interfaces';

@Injectable()
export class ProductListService {
  readonly productList$ = new Observable<Product[]>();

  constructor(private product: ProductService) {
    this.productList$ = this.product.productList;
  }

  getList() {
    this.product.getList();
  }
}
