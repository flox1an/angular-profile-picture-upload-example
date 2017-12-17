
import { Component, ViewChild, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {

  public editEnabled = true;
  public picurl: string;

  constructor() {}

  public clear() {
    this.picurl = '';
  }
}
