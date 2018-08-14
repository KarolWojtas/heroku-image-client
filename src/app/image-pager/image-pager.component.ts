import { Component, OnInit, Input } from '@angular/core';
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { ImagePage } from "../services/domain";
import { ImageService } from "../services/image.service";
import { BASE_URL } from "../services/store";
import { Subject } from "rxjs";
@Component({
  selector: 'image-pager',
  templateUrl: './image-pager.component.html',
  styleUrls: ['./image-pager.component.css']
})
export class ImagePagerComponent implements OnInit {
    faArrowRight = faArrowRight;
    faArrowLeft = faArrowLeft;
    @Input('secure') secure:boolean;
    @Input('reloadSubject') reloadSubject: Subject<string>;
    imagePage: ImagePage;
    @Input('firstPageUrl')firstPageUrl :string;
    
  constructor(private imageService: ImageService) { }

  ngOnInit() {
      this.loadFirstPage();
      if(this.reloadSubject!==null){
          this.reloadSubject.subscribe(event => this.loadFirstPage())
      }
  }
  nextPage(){
      if(!this.imagePage.last){
          const nextLink = this.imagePage.links.filter(link => link.rel==='next')[0].href;
          
          this.imageService.getImagePageByLink(nextLink, this.secure).subscribe(response => {
              this.imagePage = response as ImagePage
          })
      }
  }
  prevPage(){
      if(!this.imagePage.first){
          const prevLink = this.imagePage.links.filter(link => link.rel==='prev')[0].href;
          console.log(prevLink)
          this.imageService.getImagePageByLink(prevLink, this.secure).subscribe(response => {
              this.imagePage = response as ImagePage
          })
      }
  }
  loadFirstPage(){
      this.imageService.getImagePageByLink(this.firstPageUrl, this.secure)
      .subscribe(response=> {
          this.imagePage = response as ImagePage
      });
  }
}
