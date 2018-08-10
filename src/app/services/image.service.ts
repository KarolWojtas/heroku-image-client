import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt";
import { HttpClient } from "@angular/common/http";
import { select } from "@angular-redux/store";
import { BASE_URL } from "./store";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";

@Injectable()
export class ImageService {

  constructor(private authService: AuthService, private http: HttpClient) { }
  getPublicImages(){
      return this.http.get(BASE_URL+'/images/all', {headers: {'Authorization':''}});
  }
  getUserImages(usernameRequest: string){
      
      if(this.authService.username===usernameRequest){
          return this.http.get(BASE_URL+'/images/my');
      } else {
          return Observable.empty;
      }
  }
  
}
   


