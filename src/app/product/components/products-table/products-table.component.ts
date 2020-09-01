import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductView } from '../../models/products-view';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit, ProductView {

  selectedField: string;
  predicate: string;
  expectedValue: string;

  @Input()
  products: Product[] = [];

  constructor() { }

  ngOnInit() {
  }
 

}
