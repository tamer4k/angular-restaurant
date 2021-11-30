import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name = 'SnelBezorgd';
  spinnerType: string;
  spinnerName: string;

  constructor(private spinner: NgxSpinnerService) {
    this.spinnerName = 'sp1';
    this.spinnerType = 'ball-clip-rotate-multiple'
    this.spinner.show(this.spinnerName, { color: "#ffc107", bdColor: "rgba(0, 79, 255, 0.7)" });
    setTimeout(() => {
      this.spinner.hide(this.spinnerName);
    }, 2000);
  }
}




