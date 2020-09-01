import { Observable } from 'rxjs';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  //cancel the pending calls

  // observable, always use $ at the end, even for promise instance, it is good to have $

  products$:Observable<Product[]>;

  fields: string[] = ['year', 'price', 'weight'];
  predicates: string[] = ['>', '<', '=='];

  // data binding/two way
  selectedField: string;
  selectedPredicate: string;
  expectedValue: string | number;
  // context, it is an array of product
  // products: Product[]; // don't use any
  // susbcription: Subscription;
 
  constructor(private productService: ProductService ) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
    
    // make api call
    // to cancel the pending calls if any
    // this.susbcription = this.productService.getProducts()
    //     .subscribe ( products => {
    //       this.products = products;
    //     })

   }
  
  // ngOnDestroy() {
  //   if (this.susbcription) {
  //     this.susbcription.unsubscribe(); // cancel the pending calls
  //   }
  // }
}
