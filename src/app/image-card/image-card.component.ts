import { Component, OnInit, Input } from '@angular/core';
import { Image } from "../services/domain";

@Component({
  selector: 'image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  @Input('image') image: Image;
  @Input('secure') secure: boolean;
  constructor() { }

  ngOnInit() {
  }

}
