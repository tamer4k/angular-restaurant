import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private http: HttpClient) { }

  public getImgFromPlaceholder(){
    let mydata = this.http.get<any>("https://jsonplaceholder.typicode.com/users");
    return mydata;
  }
}
