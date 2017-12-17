import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as FormData from 'form-data';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';

@Injectable()
export class UploadService {



  constructor(private http: Http) { }

  public upload(fileToUpload: any): Observable<FileId> {
    const input = new FormData();
    input.append('file', fileToUpload);

    return this.http.post('http://localhost:9090/upload', input).map(resp => resp.json());
  }

}

export class FileId {
  constructor(
      public id: string
      ) {}
}
