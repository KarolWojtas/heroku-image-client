import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth.service";
import { AuthError } from "../errors/auth-error";

@Injectable()
export class UserAccountPageGuard implements CanActivate {


  constructor(private authService: AuthService, private router : Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, ): boolean | Observable<boolean> | Promise<boolean> {
      if(this.authService.isTokenValid()){
          
          return true;
      } throw new AuthError('must be logged in')
  }

}
