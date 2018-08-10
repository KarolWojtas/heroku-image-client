import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from "./services/auth.service";
import { HttpModule } from "@angular/http";
import { MyHttpInterceptor} from './services/http-interceptor';
import { ImageService } from "./services/image.service";
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, INITIAL_STATE, rootReducer } from "./services/store";
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { AppErrorHandler } from "./services/errors/app-error-handler";
import { UserPageComponent } from './user-page/user-page.component';
import { SecurePipe } from './secure.pipe';
import { ImageCardComponent } from './image-card/image-card.component';
import { UserAccountPageComponent } from './user-account-page/user-account-page.component';
import { UserPageGuard } from "./services/guards/user-page-guard.service";
import { UserAccountPageGuard } from "./services/guards/user-account-page-guard.service";
import { UploadFormComponent } from './upload-form/upload-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MainPageComponent,
    LoginComponent,
    AlertBoxComponent,
    UserPageComponent,
    SecurePipe,
    ImageCardComponent,
    UserAccountPageComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
            {path: '', component: MainPageComponent},
            {path: 'user/:username', component: UserPageComponent, canActivate: [UserPageGuard]},
            {path: 'account', component: UserAccountPageComponent, canActivate: [UserAccountPageGuard]},
            {path: '**', component: MainPageComponent}
            ]),
    ReactiveFormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [ AuthHttp,
               UserPageGuard,UserAccountPageGuard,
              {provide: AuthConfig, useValue: new AuthConfig()},
              AuthService,
              ImageService,
              {provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true},
              {provide: ErrorHandler, useClass: AppErrorHandler}
     ],
  bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension){
        let enhancers = isDevMode ? [devTools.enhancer()] : [];
        ngRedux.configureStore(rootReducer,INITIAL_STATE,[],enhancers);
    }
}
