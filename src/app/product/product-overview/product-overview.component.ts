import { Component, OnInit } from '@angular/core';
import { Product } from '../products.types';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css'],
  providers: [ProductService],
})
export class ProductOverviewComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
