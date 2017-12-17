import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {
  public uploader: FileUploader;

  private hasDragOver= false;

  private imgurl = '';

  constructor() {
    this.uploader = new FileUploader({
      url: 'http://localhost:9090/upload',
      disableMultipart: false,
      autoUpload: true
    });

    this.uploader.response.subscribe(res => {
       this.imgurl = 'http://localhost:9090/get/' + JSON.parse(res).id;
    });
  }

  public fileOver(e: any): void {
    this.hasDragOver = e;
  }

  ngOnInit() {
  }

}
