import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'demo-product-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: number[] = [];
  productList$;

  constructor(private _productList: ProductListService) {
    this.productList$ = this._productList.productList$;
  }

  ngOnInit(): void {
    this._productList.getList();
  }
}
