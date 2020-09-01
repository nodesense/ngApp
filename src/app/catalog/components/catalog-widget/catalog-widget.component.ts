import { Catalog } from './../../models/catalog';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-widget',
  templateUrl: './catalog-widget.component.html',
  styleUrls: ['./catalog-widget.component.css']
})
export class CatalogWidgetComponent implements OnInit {
  @Input()
  catalog: Catalog;
  
  constructor() { }

  ngOnInit() {
  }

}
