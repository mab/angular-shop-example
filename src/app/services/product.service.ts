import { Injectable } from '@angular/core';
import { Product, ProductRestResponse } from 'app/product/products.types';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  constructor(private http: Http) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('/api/rest/products')
      .map(response => response.json())
      .map(json => json._embedded.products as ProductRestResponse[])
      .map(productRestResponses => productRestResponses.map(ProductService.mapProductRestResponseToProduct));
  }

  private static mapProductRestResponseToProduct(response: ProductRestResponse): Product {
    return {
      id: '',
      name: response.name,
      description: response.description,
      image: response.imageUrl,
      price: response.price
    };
  }

}
