import { Component, Input } from '@angular/core';

import { Product } from '@demo/interfaces';
import { CartCardService } from './cart-card.service';

@Component({
  selector: 'ng-state-management-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent {
  @Input() product: Product | undefined;
  @Input() index: number | undefined;

  constructor(private _cartCardService: CartCardService) {}

  btnClick() {
    this._cartCardService.removeItem(this.index!);
  }
}
