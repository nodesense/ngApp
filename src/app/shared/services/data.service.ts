import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';


import {Subject} from 'rxjs';

import {BehaviorSubject} from 'rxjs';

// 1. Business Logic
// 2. Data Sharing with components
// 3. Web service communication

@Injectable()
export class DataService {

  amount$: Subject<number>;// = new Subject();
  //amount$: BehaviorSubject<number>;
  amount: number = 0;


  total$: Subject<number> = new Subject();

  total: number = 0;
  items: CartItem[] = [];

  constructor() { 
    console.log("Data service created");

   this.amount$ = new BehaviorSubject(this.amount);
   //this.amount$ = new Subject();
  }

  addItem(item: CartItem) {
    this.items.push(item);

    this.total += item.qty;
    this.amount += item.qty * item.price;

    console.log("Amount ", this.amount);

    // publish the amount, emit
    this.amount$.next(this.amount);

    this.total$.next(this.total);
  }

  empty() {
    this.items = [];
    this.total = 0;
    this.amount = 0;

     // publish the amount
     this.amount$.next(this.amount);

      this.total$.next(this.total);
  }
}
