import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CommonComponentsModule } from '@demo/common-library';

import { ProductListComponent } from './product-list.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductListService } from './product-list.service';
import { ProductCardService } from './../product-card/product-card.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProductList from './+state/products/product-list.reducer';
import { ProductListEffects } from './+state/products/product-list.effects';

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
    StoreModule.forFeature(
      fromProductList.PRODUCT_LIST_FEATURE_KEY,
      fromProductList.reducer
    ),
    EffectsModule.forFeature([ProductListEffects]),
  ],
  providers: [ProductListService, ProductCardService],
})
export class ProductListModule {}
