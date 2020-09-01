import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.css']
})
export class AuthMenuComponent implements OnInit {

  authStatus$: Observable<boolean>;
  user$: Observable<User>;

   

  constructor(private authService: AuthService, 
              private router: Router) { }

  ngOnInit() {
    this.authStatus$ = this.authService.authStatus;
    this.user$ = this.authService.user$;
  }


  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }

}
