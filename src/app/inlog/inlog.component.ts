import { Component, OnInit } from '@angular/core';
import { UserModel } from '../interface/user-model';
import { ImgService } from '../services/img.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Component({
  selector: 'app-inlog',
  templateUrl: './inlog.component.html',
  styleUrls: ['./inlog.component.css']
})
export class InlogComponent implements OnInit {
  public user : UserModel;
  public userList: UserModel[] = [];
  seconde!: number;
  constructor(private imgService : ImgService) {
    this.user = new UserModel()
  }

  ngOnInit(): void {
    this.getImg();
    let counter = Observable.interval(1000);
    counter.subscribe(
      (value: number) => {
      this.seconde = value;
      console.log(value)

    }
    )
  }

  getImg(){
    this.imgService.getImgFromPlaceholder().subscribe(
      result => {
        this.userList = result;
      }
    )
  }
}
