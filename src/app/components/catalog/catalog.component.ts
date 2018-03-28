import { Component, OnInit } from '@angular/core';

import { Product } from '../../classes/product';
import { LoadState } from '../../classes/load-state';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  host: {
    'class': 'catalog'
  }
})
export class CatalogComponent implements OnInit {

  private loadState: LoadState;

  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) {}

  get loading() {
    return this.loadState === LoadState.LOADING
  }

  ngOnInit() {
    this.loadState = LoadState.LOADING;
    this.productService
      .getProducts()
      .subscribe(rawData => {
        const processProducts = this.productService.formatData(rawData);
        this.products = processProducts;
        this.loadState = LoadState.SUCCESS;
      }, error => this.loadState = LoadState.ERROR)
  }

}
