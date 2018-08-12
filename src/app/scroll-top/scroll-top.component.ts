import { Component, OnInit } from '@angular/core';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
@Component({
  selector: 'scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {
    faArrowCircleUp = faArrowCircleUp;
    
  constructor() { }

  ngOnInit() {
      
  }
  scrollTop(){
      window.scrollTo(0, 0);
  }
}
