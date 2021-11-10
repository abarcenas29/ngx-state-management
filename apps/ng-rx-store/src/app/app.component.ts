import { Component, ViewEncapsulation } from '@angular/core';
import { CartStore } from '@demo/core-services';

@Component({
  selector: 'ng-state-management-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = 'ng-rx-store';
  readonly cartCount$;

  constructor(private _cartStore: CartStore) {
    this.cartCount$ = this._cartStore.count$;
    this.cartCount$.subscribe(console.log)
  }
}
