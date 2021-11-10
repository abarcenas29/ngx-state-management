import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { CommonComponentsModule } from '@demo/common-library';
import { AppComponent } from './app.component';
import { ProductService, CartService } from '@demo/core-services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';

import { reducer as productReducer } from '@demo/core-store';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@demo/products').then((m) => m.ProductListModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('@demo/products').then((m) => m.ProductDetailModule),
  },
  {
    path: 'cart/list',
    loadChildren: () => import('@demo/cart').then((m) => m.CartListModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonComponentsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(
      {
        product: productReducer,
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [ProductService, CartService, ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
