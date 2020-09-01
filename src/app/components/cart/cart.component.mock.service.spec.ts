import { DataService } from './../../shared/services/data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

 import { Injectable } from '@angular/core';


import {Subject} from 'rxjs';

import {BehaviorSubject} from 'rxjs';
import { CartItem } from '../../shared/models/cart-item';

// 1. Business Logic
// 2. Data Sharing with components
// 3. Web service communication

@Injectable()
export class MockDataService {

  amount$: BehaviorSubject<number>;
  

  constructor() { 
    console.log("Mock Data service created");

    this.amount$ = new BehaviorSubject(0);
  }

  addItem(item: CartItem) {
    console.log("Mock add Item called");

  }

  empty() {
    
  }
}


fdescribe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [
        // inject the mock service
        {
          provide: DataService,
          useClass: MockDataService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // mock data service
    let dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, "addItem");

    component.addItem();

    expect(dataService.addItem).toHaveBeenCalled();
    expect(dataService.addItem).toHaveBeenCalledTimes(1);

    expect(dataService.addItem)
        .toHaveBeenCalledWith(new CartItem(1, 'Product 1', 100, 1))



  });
 
 

});
