
import { Component, ViewChild, Injectable } from '@angular/core';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {

  public editEnabled = true;
  public picurl = 'http://localhost:9090/get/5a3686df69f925a64c6c24e8';

  constructor() {}

}
