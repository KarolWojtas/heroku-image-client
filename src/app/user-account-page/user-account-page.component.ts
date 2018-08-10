import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { ImageService } from "../services/image.service";
import { select, NgRedux } from "@angular-redux/store";
import { IAppState } from "../services/store";
import { AlertType } from "../services/domain";
import { ADD_ALERT } from "../services/actions";

@Component({
  selector: 'app-user-account-page',
  templateUrl: './user-account-page.component.html',
  styleUrls: ['./user-account-page.component.css']
})
export class UserAccountPageComponent implements OnInit {
  activeTab;
  images;
  @select(store=>store.user.username) username;
  @select(store=>store.user.firstName) firstName;
  @select(store=>store.user.lastName) lastName;
  @select(store=>store.user.email) email;
  constructor(private authService: AuthService, private imageService: ImageService, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
     this.loadImages();
     
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
      this.loadImages();
  }
  loadImages(){
      this.activeTab=1;
      this.images = this.imageService.getUserImages(this.authService.username);
  }
}
