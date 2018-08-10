import { Injectable } from '@angular/core';
import { JwtHelper, AuthHttp } from 'angular2-jwt';
import { HttpClient } from "@angular/common/http";
import { Response, RequestOptions, Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { NgRedux } from "@angular-redux/store/lib/src";
import { IAppState, BASE_URL } from "./store";
import 'rxjs/add/operator/map';
import { SET_USER, UNSET_USER, REMOVE_ALL_ALERTS } from "./actions";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { AuthError } from "./errors/auth-error";
@Injectable()
export class AuthService {
    jwtHelper = new JwtHelper();
    clientName = 'angularClient';
    baseUrl= BASE_URL;
    loginUrl=this.baseUrl+'/oauth/token'
   
  constructor(private http: HttpClient, private authHttp: AuthHttp, private ngRedux: NgRedux<IAppState>) { }
    
  login(credentials: LoginCredentials){
      let params = new URLSearchParams();
      params.append('username', credentials.username);
      params.append('password', credentials.password);
      params.append('grant_type', 'password');
      params.append('client_id', this.clientName);

      let headers = new HttpHeaders({
          'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
          'Authorization': 'Basic '+btoa(this.clientName+':')
      });
      let options2 = {headers: headers};
      this.http.post(this.loginUrl, params.toString(), options2)
          .catch(error=> Observable.throw(new AuthError({message: 'Bad credentials'})))
          .subscribe(response => {
          this.saveToken(response['access_token']);
          this.getUserInfo(response['access_token']);
          
      })
      
     
  }
  saveToken(token){
      localStorage.setItem('token', token);
  }
  get token(){
      return localStorage.getItem('token');
  }
  logout(){
      localStorage.removeItem('token');
      this.ngRedux.dispatch({type: UNSET_USER});
  }
   getUserInfo(token){
      if(this.isTokenValid()){
          this.authHttp.get(this.baseUrl+'/users/me').map(response => response.json())
          .subscribe(user => {
              
          this.ngRedux.dispatch({type: SET_USER, user: user});
      },err => this.logout())
      } else{
          localStorage.removeItem('token')
      }
      
  }
  isTokenValid(): boolean{
      const token = localStorage.getItem('token');
      return !this.jwtHelper.isTokenExpired(token);
  }
  get username(){
     if(this.isTokenValid()){
          return this.jwtHelper.decodeToken(this.token)['user_name']
     }else {
          return undefined;
      }
      
  }
 
 
}
export interface LoginCredentials{
    username: string;
    password: string;
}
