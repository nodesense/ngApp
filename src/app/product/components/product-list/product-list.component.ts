import { Observable } from 'rxjs';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, ViewChild, OnDestroy, 
    ComponentFactoryResolver } from '@angular/core';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
import { ProductsTableComponent } from '../products-table/products-table.component';
import { ProductsGridComponent } from '../products-grid/products-grid.component';
import { HostTemplateDirective } from '../../directives/host-template.directive';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  products$:Observable<Product[]>;

  @ViewChild(HostTemplateDirective)
  hostDirective: HostTemplateDirective;

  componentMap = {
    "table": ProductsTableComponent,
    "grid": ProductsGridComponent
  }

  constructor(private productService: ProductService, 
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
    this.loadComponent('table');
  } 

  loadComponent(name: string) {
    let componentFactory = this.componentFactoryResolver
                                .resolveComponentFactory(this.componentMap[name]);
 
    let viewContainerRef = this.hostDirective.viewContainerRef;
    //viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);


    this.productService.getProducts()
        .subscribe (products => {
          (<ProductsGridComponent>componentRef.instance).products = products;

        })

  }
}
