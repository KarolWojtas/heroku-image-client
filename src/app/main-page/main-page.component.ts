import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
 import { ImageService } from "../services/image.service";
import { BASE_URL } from "../services/store";

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    
  firstPageUrl= BASE_URL + '/images?page=0&size=3';
  constructor() { }

  ngOnInit() {
      
  }

}
