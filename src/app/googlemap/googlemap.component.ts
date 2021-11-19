import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  spinnerType: string;
  spinnerName: string;
  constructor(private spinner: NgxSpinnerService) {
    this.spinnerName = 'sp1';
    this.spinnerType = 'ball-clip-rotate-multiple'
    this.spinner.show(this.spinnerName,{bdColor: "rgba(0, 0, 0, 0.7)"});
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide(this.spinnerName);
    }, 2000);
  }

  ngOnInit(): void {
  }

}
