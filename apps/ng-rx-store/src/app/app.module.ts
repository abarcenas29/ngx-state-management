import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { CommonComponentsModule } from '@demo/common-library';
import { AppComponent } from './app.component';
import { CartStore, ProductStore } from '@demo/core-services';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
      import('@demo/products').then((m) => m.ProductListModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
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
    StoreDevtoolsModule.instrument({maxAge: 25}),
    ToastrModule.forRoot(),
  ],
  providers: [CartStore, ProductStore, ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
