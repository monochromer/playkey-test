import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Product } from '../../classes/product';

@Component({
  selector: 'product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
  host: {
    'class': 'product-grid'
  }
})
export class ProductGridComponent implements OnInit {

  @Input() products: Product[];

  constructor() {}

  ngOnInit() {}
}
