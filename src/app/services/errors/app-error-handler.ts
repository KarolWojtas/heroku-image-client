import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { AuthError } from "./auth-error";
import { NgRedux } from "@angular-redux/store/lib/src";
import { IAppState } from "../store";
import { ADD_ALERT } from "../actions";
import { AlertType } from "../domain";
@Injectable()
export class AppErrorHandler implements ErrorHandler{
    
    constructor(private ngRedux: NgRedux<IAppState>){
        
    }
    handleError(error: any): void {
        if(error instanceof AuthError){
            this.ngRedux.dispatch({
                type: ADD_ALERT,
                alert: {
                    message: 'Bad credentials.',
                    type: AlertType.WARNING,
                    date: new Date()
                }
            })
        }
        
    }
    
}