import { Component, OnInit } from '@angular/core';
import { ImageService } from "../services/image.service";
import { Route, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
    images;
  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {
      let username;
      this.route.paramMap.subscribe(paramMap => username = paramMap.get('username'))
      this.images = this.imageService.getUserImages(username);
  }
  
}
