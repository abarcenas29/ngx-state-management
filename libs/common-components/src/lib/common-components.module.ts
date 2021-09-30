import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainNavComponent } from './main-nav/main-nav.component';
import { ButtonComponent } from './button/button.component';
import { IconCartComponent } from './icon-cart/icon-cart.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([])],
  declarations: [MainNavComponent, ButtonComponent, IconCartComponent],
  exports: [MainNavComponent, ButtonComponent],
})
export class CommonComponentsModule {}
