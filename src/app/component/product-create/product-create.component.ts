import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
// @ts-ignore
  product: Product = {
    name:'',
    price:0,
    quantity:0,
    manufacturer:'',
    description:''
  }
  form: any ={};
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    // @ts-ignore
    this.product = {
      name: this.form.name,
      price: this.form.price,
      quantity: this.form.quantity,
      manufacturer: this.form.manufacturer,
      description: this.form.description
    };
    this.productService.create(this.product).subscribe(() => {
      this.router.navigate(["/product-list"]);
    });
  }
}

