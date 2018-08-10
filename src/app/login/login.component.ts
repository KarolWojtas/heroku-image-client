import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService, LoginCredentials } from "../services/auth.service";
import {select} from'@angular-redux/store';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
      username : new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
  });
  @select(store => store.user) user;
  @select(store => store.isUserLoggedIn) isUserLoggedOut;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  get username(){
      return this.loginForm.get('username');
  }
  get password(){
      return this.loginForm.get('password');
  }
  submitLogin(){
      const credentials: LoginCredentials = {
             username: this.username.value,
             password: this.password.value
      }
      this.authService.login(credentials);
      this.username.setValue('');
      this.password.setValue('');
  }

}
