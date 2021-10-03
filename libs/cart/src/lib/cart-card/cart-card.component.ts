import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
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
  @Output() id = new EventEmitter();

  constructor(
    private _cartCardService: CartCardService,
    private _toastService: ToastrService
  ) {}

  btnClick(id: string) {
    this._cartCardService.removeItem(id);
    this._toastService.success('Item deleted');
  }
}
