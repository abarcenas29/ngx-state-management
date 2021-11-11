import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store'

import { selectCartCount } from '@demo/core-store'
import { AppState } from '@demo/interfaces';

@Component({
  selector: 'ng-state-management-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = 'ng-rx-store';
  readonly cartCount$ = this._store.select(selectCartCount);

  constructor(private _store: Store<AppState>) {}
}
