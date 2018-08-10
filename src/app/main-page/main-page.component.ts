import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
 import { ImageService } from "../services/image.service";

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    images;
    
  constructor(private imageService: ImageService) { }

  ngOnInit() {
      this.images = this.imageService.getPublicImages();
  }

}
