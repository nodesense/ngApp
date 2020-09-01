import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { CartItem } from './../../shared/models/cart-item';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {

  items: CartItem[] = [];

  //amount: number = 0;
  //subscription : Subscription;

  amount$: Observable<number>;

  counter: number = 0;

  constructor(private dataService: DataService) { 
    this.items = dataService.items;

    this.amount$ = dataService.amount$;

    // this.amount = dataService.amount;
  }

  ngOnInit() {
    //this.initialize();

    this.dataService.amount$
                    .subscribe ( n => {
                      console.log("got amount ", n);
                    })
  }

  initialize(n: number) {
    // add custome functionalities
  }

  incr() {
    this.counter++;
    this.initialize(this.counter);
  }

  // ngOnInit() {
  //   this.subscription = this.dataService.amount$
  //                   .subscribe ( n => {
  //                     this.amount = n;
  //                     console.log("CART SERVICE SUBS ", Math.random())
  //                   })
     
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  addItem() {
    //let id = Math.ceil(Math.random() * 100000);
    let id = 1;
    let item: CartItem = new CartItem(
                                id,
                                `Product ${id}`,
                                100,
                                1
                            )

    this.dataService.addItem(item);
 
  }

  empty() {
    this.dataService.empty();
  }

}
