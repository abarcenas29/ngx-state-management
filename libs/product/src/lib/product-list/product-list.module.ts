import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CommonComponentsModule } from '@demo/common-library';

import { ProductListComponent } from './product-list.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductCardService } from './../product-card/product-card.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductListComponent, ProductCardComponent],
  imports: [
    CommonModule,
    CommonComponentsModule,
    ToastrModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent,
      },
    ]),
  ],
  providers: [ ProductCardService],
})
export class ProductListModule {}
