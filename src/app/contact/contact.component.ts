import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GooglemapComponent } from '../googlemap/googlemap.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  spinnerType: string;
  spinnerName: string;

  constructor(private spinner: NgxSpinnerService,

    ) {
    this.spinnerName = 'sp1';
    this.spinnerType = 'ball-clip-rotate-multiple'
    this.spinner.show(this.spinnerName,{bdColor: "rgba(0, 0, 0, 0.7)"});
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide(this.spinnerName);
    }, 1000);
  }

  ngOnInit(): void {

  }

}
