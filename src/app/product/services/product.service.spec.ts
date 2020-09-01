import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, 
        HttpTestingController } from '@angular/common/http/testing';

import {HttpClientModule} from '@angular/common/http';

import { ProductService } from './product.service';
import { Product } from '../models/product';


fdescribe('ProductService', () => {
  let productService: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]

    });


    productService = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([ProductService], 
    (service: ProductService) => {
    expect(service).toBeTruthy();
  }));


  it("test timer ", (done) => {
    setInterval(()=> {
      console.log("Set Interval on timer ");
      expect(1 + 2).toBe(3);
      done();
    }, 20000);
  }, 30000);
 
  it('should return good response with data', (doneFn) => {
     console.log("TEstme ")
    productService.getProducts()
                  .subscribe ( products => {
                    expect(products.length).toBe(2);
                    expect(products).toEqual(<Product[]> [{id: 1}, {id: 2}]);
                    //expect(products[0].price).toBe(1000);
                    doneFn();
                  });
                   

    let productsRequest = httpMock.expectOne('http://localhost:7070/api/products');
    productsRequest.flush([{id: 1}, {id: 2}]);                
 
    httpMock.verify();
  });

 
  it('should return good one product', (done) => {
     
    productService.getProduct(100)
                  .subscribe ( product => {
                    expect(product.id).toBe(100);
                    done();
                  });

    let productsRequest = httpMock.expectOne('http://localhost:7070/api/products/100');
    productsRequest.flush({id: 100});                
 
    httpMock.verify();
  });

});
