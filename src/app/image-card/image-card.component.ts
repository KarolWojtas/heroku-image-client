import { Component, OnInit, Input } from '@angular/core';
import { Image } from "../services/domain";
import { faLock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  @Input('image') image: Image;
  @Input('secure') secure: boolean;
  faLock = faLock;
  constructor() { 
     
  }

  ngOnInit() {
      
  }

}
