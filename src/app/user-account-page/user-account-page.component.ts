import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { ImageService } from "../services/image.service";
import { select, NgRedux } from "@angular-redux/store";
import { IAppState, BASE_URL } from "../services/store";
import { AlertType, ImagePage } from "../services/domain";
import { ADD_ALERT } from "../services/actions";
import { Subject } from "rxjs";

@Component({
  selector: 'app-user-account-page',
  templateUrl: './user-account-page.component.html',
  styleUrls: ['./user-account-page.component.css']
})
export class UserAccountPageComponent implements OnInit {
  activeTab;
  reloadImagePageSubject = new Subject();
  firstPageUrl = BASE_URL + '/images/my?page=0&size=3'
  @select(store=>store.user.username) username;
  @select(store=>store.user.firstName) firstName;
  @select(store=>store.user.lastName) lastName;
  @select(store=>store.user.email) email;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
     this.activeTab=1;
  }
  selectTab(index: number){
      this.activeTab = index;
  }
  onUpload(event){
      this.ngRedux.dispatch({
          type: ADD_ALERT,
          alert: {
              message: 'Successfully uploaded image: '+event,
              type: AlertType.INFO,
              date: new Date()
          }
      })
      this.reloadImagePageSubject.next("uploaded");
      
  }
  
}
