import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/Product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.productService.findAll().subscribe( productList => {
      this.productList = productList;
    });
  }
}
