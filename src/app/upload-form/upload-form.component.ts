import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MyValidators } from "./my-validators";
import { HttpClient, HttpEvent, HttpProgressEvent, HttpEventType } from "@angular/common/http";
import { BASE_URL } from "../services/store";
import { ImageService } from "../services/image.service";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
    @Output('uploaded') uploaded =  new EventEmitter();
    progress: number = 0;
    faSpinner = faSpinner;
    form = new FormGroup({
        file: new FormControl('', [MyValidators.validFormat, Validators.required]),
        description: new FormControl('',Validators.required),
        isPublic: new FormControl('false', Validators.required),
    })
    selectedFile: File=null;
  constructor(private http: HttpClient, private imageService: ImageService) { }

  ngOnInit() {
  }
  get file(){
      return this.form.get('file');
  }
  get description(){
      return this.form.get('description');
  }
  get isPublic(){
      return this.form.get('isPublic');
  }
  submit(){
      console.log(`file: ${this.file.value} desc: ${this.description.value} public: ${this.isPublic.value} fileReader:`);
      const fd = new FormData();
      fd.append('file', this.selectedFile, this.selectedFile.name );
      fd.append('description', this.description.value);
      fd.append('isPublic', this.isPublic.value);
      this.http.post(BASE_URL+"/images", fd, {
          reportProgress:true,
          observe: 'events'
      }).subscribe(event => {
          
         switch(event.type){
         case HttpEventType.UploadProgress : this.handleProgress(event); break;
         case HttpEventType.Response : this.handleSuccess(event); break;
         }
         
      })
  }
  onFileSelected(event){
      this.selectedFile = event.target.files[0];
  }
  resetFormFieldValues(){
      this.file.setValue('');
      this.description.setValue('');
      this.isPublic.setValue('false');
  }
  handleSuccess(event: HttpEvent<any>){
      this.progress = 0;
      this.uploaded.emit(this.selectedFile.name);
      this.resetFormFieldValues()
  }
  handleProgress(event){
      this.progress = Math.floor(100 * (event as HttpProgressEvent).loaded / (event as HttpProgressEvent).total);
  }

}
