import { ValidatorFn, ValidationErrors, AbstractControl } from "@angular/forms";
import { FileFormats } from "../services/domain";
import { AppError } from "../services/errors/app-error";
import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store/lib/src";
import { IAppState } from "../services/store";

@Injectable()
export class MyValidators {
    
    static validFormat(control: AbstractControl): ValidationErrors | null{
        const fileUrl = control.value as string;
        //
        if(!fileUrl.endsWith(FileFormats.JPG)&&!fileUrl.endsWith(FileFormats.JPEG)&&!fileUrl.endsWith(FileFormats.PNG)){

            return {error: 'wrong format'}
            
        } else return null;
    }
}
