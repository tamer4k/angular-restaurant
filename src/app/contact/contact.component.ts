import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

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
    this.spinnerName = 'sp7';
    this.spinnerType = 'pacman'
    this.spinner.show(this.spinnerName,{color: "#ffc107", bdColor: "rgba(0, 0, 0, 0.7)"});
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide(this.spinnerName);
    }, 3000);
  }

  ngOnInit(): void {

  }

}
