import { Component, OnInit } from '@angular/core';

import { CartListService } from './cart-list.service';

@Component({
  selector: 'ng-state-management-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  readonly cartList$;

  constructor(private _cartService: CartListService) {
    this.cartList$ = this._cartService.cartList$;
  }
}
