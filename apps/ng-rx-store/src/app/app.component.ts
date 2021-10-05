import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '@demo/core-services';

@Component({
  selector: 'ng-state-management-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = 'ng-rx-store';
  readonly cartCount$ = new Observable<number>();

  constructor(private _cartService: CartService) {
    this.cartCount$ = this._cartService.cartCount$;
  }
}
