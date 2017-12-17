
import { Component, ViewChild, Injectable } from '@angular/core';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {


  title = 'app';

  @ViewChild('fileInput') fileInput;

  constructor(private uploadService: UploadService) {

  }

/* custom file upload
  addFile(): void {
      const fi = this.fileInput.nativeElement;
      if (fi.files && fi.files[0]) {
          const fileToUpload = fi.files[0];
          this.uploadService
              .upload(fileToUpload)
              .subscribe(fileId => {
                  console.log(fileId);
                  this.imgurl = 'http://localhost:9090/get/' + fileId.id;
              });
      }
  }
  */


}
