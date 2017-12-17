import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';


import { AppComponent } from './app.component';
import { UploadService } from './upload.service';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfilePictureComponent
  ],
  imports: [
    BrowserModule, HttpModule, FileUploadModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
