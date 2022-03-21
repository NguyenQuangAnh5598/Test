import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/Product";
import {environment} from "../../environments/environment.prod";
const API_LOCAL = `${environment.API_LOCAL}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_LOCAL + 'product');
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(API_LOCAL + 'product',product)
  }

  edit(product: Product): Observable<Product> {
    return this.http.put<Product>(API_LOCAL + 'product',product)
  }
  findById(id: number): Observable<Product> {
    return this.http.get<Product>(API_LOCAL + 'product/' + id);
  }
}
