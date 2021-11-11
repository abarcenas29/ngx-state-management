import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CommonComponentsModule } from '@demo/common-library';

import { CartListRoutingModule } from './cart-list-routing.module';
import { CartCardComponent } from '../cart-card/cart-card.component';
import { CartListComponent } from './cart-list.component';

@NgModule({
  declarations: [CartListComponent, CartCardComponent],
  imports: [CommonModule, CommonComponentsModule, CartListRoutingModule],
  providers: [],
})
export class CartListModule {}
