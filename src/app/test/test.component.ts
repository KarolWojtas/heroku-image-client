import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  images: Observable<ImageHolder>;
  base = 'http://localhost:8080/images/all/';
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.images =this.http.get(this.base) as Observable<ImageHolder>;
  }

}
interface ImageHolder{
    id :number;
    description: string;
    width: number;
    height: number;
    isPublic: boolean;
    links: any[]
}