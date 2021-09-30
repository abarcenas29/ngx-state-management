import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CommonComponentsModule } from '@demo/common-library';

import { CartListComponent } from './cart-list.component';

const routes: Routes = [{ path: '', component: CartListComponent }];

@NgModule({
  imports: [CommonComponentsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartListRoutingModule {}
