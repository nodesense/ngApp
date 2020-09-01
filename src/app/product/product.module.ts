import { CanEditGuard } from './guards/can-edit.guard';
import { SaveAlertGuard } from './guards/save-alert.guard';
import { SharedModule } from './../shared/shared.module';
import { ProductService } from './services/product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductWidgetComponent } from './components/product-widget/product-widget.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { HostTemplateDirective } from "./directives/host-template.directive";
import { AuthGuard } from '../auth/guards/auth.guard';
import { AdminGuard } from '../auth/guards/admin.guard';
 

const routes:Routes = [
  {
    // path: 'products',
    path : '',
    component: ProductHomeComponent,

   // canActivate: [AuthGuard],
    // nested navigation
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'prefix'
      },

      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'create',
        component: ProductEditComponent,
   //     canActivate: [AdminGuard],
     //   canDeactivate: [SaveAlertGuard]
      },
      {
        path: 'edit/:id', // products/edit/123456
        component: ProductEditComponent,
       // canActivate: [AdminGuard, CanEditGuard],
     //   canDeactivate: [SaveAlertGuard]
      }, 
      {
        path: 'search',
        component: ProductSearchComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,

    SharedModule.forChild()
  ],
  declarations: [ProductHomeComponent, 
                 ProductListComponent, 
                 ProductEditComponent, 
                 ProductSearchComponent, 
                 ProductWidgetComponent, 
                 ProductsTableComponent, 
                 ProductsGridComponent, 
                 HostTemplateDirective],

  providers: [
    ProductService,
    SaveAlertGuard,
    CanEditGuard
  ]
  ,

  entryComponents: [
    ProductsTableComponent, 
    ProductsGridComponent
  ]
})
export class ProductModule { }
