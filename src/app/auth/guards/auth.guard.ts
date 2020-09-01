import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private authService: AuthService, 
              private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      if (this.authService.isAuthenticated()) {
        return true;
      }
 
      // save the url
      this.authService.redirectUrl = state.url;
      //user is not authenticated
      this.router.navigateByUrl("/auth/login");
      
      return false;
  }
}
