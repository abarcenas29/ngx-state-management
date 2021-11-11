import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '@demo/interfaces';

@Injectable()
export class ProductService {
  constructor(private _http: HttpClient) {}

  getList() {
    return this._http.get<Product[]>('/assets/data.json')
  }
}
