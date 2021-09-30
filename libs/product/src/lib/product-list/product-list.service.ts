import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ProductService } from '@app/ng-rx-store/app/product.service';
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
