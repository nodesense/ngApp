import { DataService } from './../../../shared/services/data.service';
import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../../../shared/models/cart-item';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.css']
})
export class ProductWidgetComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
  }

  addToCart(product: Product) {
    let item = new CartItem(product.id, 
                            product.name, 
                            product.price, 
                            1);

    this.dataService.addItem(item)
  }

}
