import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';

import { fetchProduct, selectProducts } from '@demo/core-store'
import { AppState, Product } from '@demo/interfaces';

@Component({
  selector: 'demo-product-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList$ = this._store.select(selectProducts);

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this._store.dispatch(fetchProduct())
  }
}
