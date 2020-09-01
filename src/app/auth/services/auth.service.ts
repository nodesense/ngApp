import { User } from './../models/user';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//TODO: Injector for cyclic dependencies


import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
 
@Injectable()
export class AuthService {

  user: User = new User();

  user$: BehaviorSubject<User>;

  storage: Storage = window.localStorage;

  //FIXME: interceptors, cyclic dependencies

  constructor(private httpClient: HttpClient) { 

    this.authStatus =   new BehaviorSubject(this.isAuthenticated());
    this.user = this.getUser();
    this.user$ = new BehaviorSubject(this.user);
  }

  public redirectUrl:string;
  authStatus: BehaviorSubject<boolean>;


  isAuthenticated() {
    let token = this.storage.getItem('token');

    if (token)
      return true;
    
    return false;
  }

  getToken() {
    return this.storage.getItem('token');
  }

  getUser() {
    let userJson = this.storage.getItem("user");
    if (userJson)
      return JSON.parse(userJson)
    else return new User();
  }

  hasRole(role: string) {
    // includes from ES7
    return this.getUser().roles.includes(role);
  }

  login(username: string, password: string):Observable<any> {
    let data = {
      username: username,
      password: password
    };

    return this.httpClient
               .post(environment.authEndPoint, data)
               .pipe(map ( (data: any) => {
                 //data has token, roles
                 console.log("DAta ", data);
                 this.user = data.identity;
                 
                 this.user$.next(this.user);

                 this.storage.setItem("user", JSON.stringify(this.user));

                 

                 console.log("User", this.user);
                 this.storage.setItem("token", data.token);
                 this.authStatus.next(true);
                 return data;
               }));
    
  }

  logout() {
    this.storage.clear();
    this.authStatus.next(false);
    this.user = new User();
    this.user$.next(this.user);
  }
}
