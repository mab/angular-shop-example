import { Injectable } from '@angular/core';
import { Product } from 'app/product/products.types';
import { PRODUCTS } from './products.mock';

@Injectable()
export class ProductService {

  getProducts(): Product[] {
    return PRODUCTS;
  }

}
