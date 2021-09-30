import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '@demo/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _productList = new BehaviorSubject<Product[]>([]);
  private _product = new BehaviorSubject<Product | undefined>(undefined);

  readonly productList = this._productList.asObservable();
  readonly product = this._product.asObservable();

  constructor(private _http: HttpClient) {}

  getList() {
    this._http.get<Product[]>('/assets/data.json').subscribe((data) => {
      this._productList.next(data);
    });
  }
}
