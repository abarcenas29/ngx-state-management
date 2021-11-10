import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store'

import { Product } from '@demo/interfaces'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface ProductState {
  products: Product[]
}

@Injectable()
export class ProductStore extends ComponentStore<ProductState> {
  constructor (private _http: HttpClient) {
    super({
      products: []
    })

    this._fetchMovie()
  }

  readonly products$: Observable<Product[]> = this.select(s => s.products);

  private _fetchMovie() {
    this._http.get<Product[]>('/assets/data.json').subscribe((d) => {
      this.setState({products: d})
    })
  }
}
