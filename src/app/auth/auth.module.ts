import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';


import {FormsModule, 
  ReactiveFormsModule} from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { AuthService } from './services/auth.service';
import { IntercepterService } from './services/intercepter.service';

import {Routes, RouterModule} 
      from '@angular/router';
import { AuthMenuComponent } from './components/auth-menu/auth-menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
  
const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth/forbidden',
    component: ForbiddenComponent
  },
  {
    path: 'admin/users',
    component: UsersComponent,
    canActivate: [AuthGuard, AdminGuard]
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, 
                 ForbiddenComponent, 
                 AuthMenuComponent, 
                 ProfileComponent, 
                 UsersComponent],

  exports: [
    AuthMenuComponent
  ],

  providers: [
    AuthGuard,
    AdminGuard,

    {
      provide: AuthService,
      useClass : AuthService
    }, 


    {
      provide: "myValue",
      useValue : "100"
    }, 
     
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IntercepterService,
      multi: true
    } 
  ]
})
export class AuthModule { }
