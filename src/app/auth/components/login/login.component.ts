import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import {HttpResponse} from '@angular/common/http';
//Reactive Forms
//control over data change
//custom validation

import { FormGroup, 
         FormControl, 
        Validators, 
        FormBuilder, 
        Validator, 
        AbstractControl } 
  from '@angular/forms';

// import {ValidateUserName} from "./validators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  nameControl:FormControl;
  passwordControl:FormControl;

  username: string;
  password: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router
  ) { 
//    this.nameControl = new FormControl("", ValidateUserName);
    this.nameControl = new FormControl("", Validators.required);
    this.passwordControl = new FormControl("", Validators.required);
    
    this.form = this.formBuilder.group({
      //formControlName : control
        "username": this.nameControl,
        "password": this.passwordControl });

  }

  ngOnInit() {
     
    this.nameControl
        .valueChanges
        .subscribe ( value => {
          console.log(value);
          console.log("Valid ", this.nameControl.valid);

          if (this.nameControl.valid) {
            this.username = value;
          }
        });

    this.passwordControl
        .valueChanges
        .subscribe (value => {
          this.password = value;
        });

  }

  errorMessage: string;

  login() {
    console.log(this.username, this.password);

    this.authService
        .login(this.username, this.password)
        .subscribe ( data => {
            //go to home page after login
            this.router.navigateByUrl(this.authService.redirectUrl || "/");
        },

        (errorResponse: HttpResponse<any>) => {
          if (errorResponse.status == 0) {
            this.errorMessage = "Server not reachable"
          }

          if (errorResponse.status >= 400) {
            this.errorMessage = `Error ${errorResponse.status} ${errorResponse.statusText}`
          }
          
        }
      
      
      );
  }

}
