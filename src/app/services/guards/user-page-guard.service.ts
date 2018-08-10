import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { select } from "@angular-redux/store";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { AuthService } from "../auth.service";

@Injectable()
export class UserPageGuard implements CanActivate{
  constructor(private router: Router, private authService: AuthService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
          if(this.authService.username === route.paramMap.get('username')){
              console.log('in if')
              this.router.navigate(['/account']);
          }
          return true
              
     
      
  }

}
