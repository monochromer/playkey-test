import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Product } from '../classes/product';

@Injectable()
export class ProductService {
  private API_URL: string = 'data/products.json';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this.API_URL)
  }

  formatData(rawData) {
    return Object.keys(rawData).map(key => ({
      id: key,
      ...rawData[key]
    }));
  }
}
