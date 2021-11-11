import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store'

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AppState, Product } from '@demo/interfaces';
import { addCart as addCartAction } from '@demo/core-store'
import { ProductCardService } from './product-card.service';

@Component({
  selector: 'demo-product-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product | undefined;

  constructor(
    private _store: Store<AppState>,
    private _toastService: ToastrService
  ) {}

  addCart(product: Product): void {
    this._store.dispatch(addCartAction(product))
    this._toastService.success('Item added');
  }
}
