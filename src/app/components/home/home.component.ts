import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter: number = 0;

  homeLikes: number = 1000;


  title = "Home";
  price = 99.99;
  today : Date = new Date();



  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
    console.trace();
  }
 

}
