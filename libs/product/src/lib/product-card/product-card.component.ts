import { Component, Input } from '@angular/core';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Product } from '@demo/interfaces';
import { ProductCardService } from './product-card.service';

@Component({
  selector: 'demo-product-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product | undefined;

  constructor(private _productCardService: ProductCardService) {}

  addCart(product: Product): void {
    this._productCardService.addCart(product);
  }
}
