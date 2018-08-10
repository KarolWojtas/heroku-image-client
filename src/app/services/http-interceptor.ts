import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { select } from "@angular-redux/store";

/** Pass untouched request through to the next request handler. */
@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    @select() baseUrl;
    
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        if(req.headers.has('Authorization')){
            return next.handle(req); 
        } else {
            let request = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            
            return next.handle(request);
        }
        
  }
}