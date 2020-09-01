import { CatalogService } from './../../services/catalog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
  }

}
