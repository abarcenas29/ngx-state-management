import { Component } from '@angular/core';
import { AppState } from '@demo/interfaces';
import { Store } from '@ngrx/store'

import { selectCartList } from '@demo/core-store'

@Component({
  selector: 'ng-state-management-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  readonly cartList$ = this._store.select(selectCartList);

  constructor(private _store : Store<AppState>) {}
}
