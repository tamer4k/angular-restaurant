import { Component } from '@angular/core'

@Component({
  template: `
    <h1 class="errorMessage ">404</h1>
  `,
  styles: [`
    .errorMessage {
      margin:150px;
      font-size: 170px;
      text-align: center;
      color: red
    }`]
})
export class Error404Component{
  constructor() {

  }

}
