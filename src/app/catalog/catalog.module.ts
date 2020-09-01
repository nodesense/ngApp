import { CatalogService } from './services/catalog.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';
import { CatalogWidgetComponent } from './components/catalog-widget/catalog-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CatalogListComponent, CatalogWidgetComponent],

  providers: [
    CatalogService
  ]
})
export class CatalogModule { }
