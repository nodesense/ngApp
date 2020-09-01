import {Component, OnInit} from "@angular/core";

import { FormBuilder,
         FormGroup, 
         FormControl} from '@angular/forms';


import {Subscription} from "rxjs";
import { ProductService } from "../../services/product.service";
 
import {map, filter, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

    form:FormGroup;
    searchControl: FormControl;
    products: any[] = [];
    searchText: any = '';



    subscription: Subscription;

    constructor(private productService: ProductService,
                private formBuilder: FormBuilder
    ) {
        this.searchControl = new FormControl("");

        this.form = formBuilder.group({
            "searchControl" : this.searchControl
        });

        
    }

    ngOnInit() {
        this.searchControl.valueChanges
        .pipe (map ( (value:string) => value.trim())) //transform, remove white space around
        .pipe(filter (value => !!value)) // only non empty string allowed further
        .pipe(debounceTime(400)) // 300 to 600 ms, cooling for user to stop typing
        .subscribe( (value: string) => {
            console.log("subscribe changed*" + value+ "*", 
                        " length ", value.length);

            // data binding in reactive forms, 
            // before bind the data, validate the user input, fix the mistakes
            // then apply the user input to model. 
            this.searchText = value;
            
            this.productService.searchProducts(this.searchText)
            .subscribe( (results: any[]) => {
                this.products = results;
            })
            
            //TODO: Search and update products
        })
    }
 
  

}

// .debounceTime(400)
// .map ( (text: string) => {
//     console.log("at map ", text.length);
//     return text.trim()
// })
// .filter ( (text: string) => text.length > 0) // min 1 char