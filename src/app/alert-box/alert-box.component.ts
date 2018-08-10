import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from "@angular-redux/store/lib/src";
import { IAppState } from "../services/store";
import { REMOVE_ALERT } from "../services/actions";

@Component({
  selector: 'alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {
    @select() alerts;
    @select(store => store.user.firstName) firstName;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }
  closeAlert(alertId: number){
      
      this.ngRedux.dispatch({type:REMOVE_ALERT,alertId: alertId});
  }
}
