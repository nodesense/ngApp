import { Component, OnInit } from '@angular/core';

interface Address {
  city: string;
  // optional
  state?: string;
  pincode: number;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit  {

  // address: Address = {
  //   city: 'BLR',
  // //  state: 'KA',
  //   pincode: 560001
  // }

  address: Address;
 
  constructor() { }

  ngOnInit() {
    console.log("contact init")

    setTimeout(() => {
        this.address = {
          city: 'BLR',
          pincode: 560001
        }
    }, 3000);
  }

  crash() {
    throw new Error("Crash in component")
  }

}
