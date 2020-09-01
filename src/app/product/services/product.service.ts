import { Brand } from './../models/brand';
import { environment } 
        from './../../../environments/environment';

import { Product } from './../models/product';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


console.log("ENV ", environment)

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  // GET /api/products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products`);
  }


  // GET /api/products
  searchProducts(q: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products?q=${q}`);
  }

  // GET /api/products/100
  getProduct(id: any): Observable<Product> {
    return this.http
          .get<Product>(`${environment.apiEndPoint}/api/products/${id}`);
  }


  // Cache
  // Option 1. In memory JS [on refresh, removed] 
  // Option 2: browser storage: sessionStorage, per tab based, works on refresh
               // closing tab, remove the sessionStorage

  // Option 3: browser storage: localStorage: persistent,
               // remains active on closing browser, shutdown system

  storage: Storage = window.localStorage;

  // GET /api/brands
  getBrands(): Observable<Brand[]> {
    //todo: check if cache present, serve from cache

    // let brandsJson = this.storage.getItem("brands");
    // if (brandsJson) {
    //   console.log("Serving brands from cache ");

    //   //TODO: convert to observable
    //   let brands: Brand[] = <Brand[]> JSON.parse(brandsJson);
    //   return Observable.of(brands);
    // }

    console.log("Serving from server");
    return this.http
                .get<Brand[]>(`${environment.apiEndPoint}/api/brands`)
                .pipe(map ( brands => {
                  console.log("caching brands ");
                  // todo: cache
                  this.storage.setItem("brands", JSON.stringify(brands));
                  return brands;
                }))
  }

  // update existing product
  // PUT /api/products/12345
  // {{product json data}}
  // response
  // updated product data 


  // to create new  product
  // POST /api/products
  // {{product json data without id}}
  // response
  // updated product data with id 

  saveProduct(product: Product):Observable<Product> {
    if (product.id) { // update
      return this.http
            .put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`,
                          product);
    } else { //create
      return this.http
      .post<Product>(`${environment.apiEndPoint}/api/products`,
                    product);
    }
  }

}
