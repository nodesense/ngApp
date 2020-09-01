import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductView } from '../../models/products-view';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit, ProductView {

  @Input()
  products: Product[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
