import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { NgStyle } from '@angular/common';

import { Product } from '../../classes/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  host: {
    'class': 'product'
  }
})
export class ProductComponent implements OnInit {
  unit: string = 'руб';

  @Input() data: Product;

  constructor() { }

  ngOnInit() {}

}
