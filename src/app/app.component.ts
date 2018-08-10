import { Component, OnInit } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { NgRedux, select } from "@angular-redux/store/lib/src";
import { IAppState, User } from "./services/store";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router } from "@angular/router";
import { REMOVE_ALL_ALERTS } from "./services/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
    @select(store => store.user.username) username;
    @select(store => store.isUserLoggedIn) isUserLoggedIn;
    constructor(private authService: AuthService, private ngRedux: NgRedux<IAppState>, private router: Router){}
    ngOnInit(): void {
            this.authService.getUserInfo(localStorage.getItem('token'));
    }
  title = 'app';
  goToUserAccountPage(){
      this.router.navigate(['/account'])
      
  }
  logout(){
      this.ngRedux.dispatch({type: REMOVE_ALL_ALERTS})
      this.authService.logout();
  }
}
