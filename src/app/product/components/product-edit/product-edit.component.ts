import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { Brand } from '../../models/brand';
import { NgForm, NgModel } from '@angular/forms';
import { Editable } from '../../models/Editable';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit,  Editable {
  
  product: Product  = new Product();
 
  brands: Brand[] = [];
  brands$: Observable<Brand[]>;

  @ViewChild("pName")
  pName: ElementRef;

  @ViewChild("productForm")
  form: NgForm;

  // #productName="ngModel"

//  subscription: Subscription;

  @ViewChild("productName")
  productName: NgModel;

  isSaved(): boolean {
    return this.form.pristine
  }


  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private productService: ProductService) { }

  ngOnInit() {

    this.pName.nativeElement.focus();

    // to read url/matrix parameter
    // products/edit/:id;source=list
    const id = this.route.snapshot.params['id'];
    const source = this.route.snapshot.params['source'];
    console.log("ID ", id, "source ", source);

    if (id) {
      // edit
      this.productService.getProduct(id)
          .toPromise()
          .then(product => {
            this.product = product;
          })
          .catch (error => {

          })
    }

    console.log("begin");

    let ob : Observable<Brand[]> =  this.productService.getBrands();

                       ob
                       .subscribe ( brands => {
                         this.brands = brands;
                         console.log("Got Data ", brands);
                       })

                       ob
                       .subscribe ( brands => {
                         this.brands = brands;
                         console.log("Got Data ", brands);
                       })

      console.log(" done ", this.brands);

  this.brands$ = this.productService.getBrands();

  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  gotoList() {
    this.router.navigateByUrl('/products/list');
    // this.router.navigate(['/products', 'list']);
  }

  saveProduct() {

    if (this.form.invalid) {
      alert('Invalid form, cannot save');
      return;
    }

    if (this.form.pristine) {
      alert('no changes found');
      return;
    }

    this.productService
        .saveProduct(this.product)
        .subscribe (savedProduct => {
          console.log("product saved ", savedProduct);

          // option 1: go to list page
          // this.gotoList();

          // option: continue working on same form
          // update the id given by server, then use put method
          this.form.reset(savedProduct);
          this.product = savedProduct;
        })
  }

}
