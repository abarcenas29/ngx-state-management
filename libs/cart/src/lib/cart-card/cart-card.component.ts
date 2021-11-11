import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store'

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product, AppState } from '@demo/interfaces';
import { removeCart as removeCartAction } from '@demo/core-store'

@Component({
  selector: 'ng-state-management-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent {
  @Input() product: Product | undefined;
  @Input() index: number | undefined;

  constructor(
    private _toastService: ToastrService,
    private _store: Store<AppState>
  ) {}

  btnClick(id: string) {
    this._store.dispatch(removeCartAction({id}))
    this._toastService.success('Item deleted');
  }
}
