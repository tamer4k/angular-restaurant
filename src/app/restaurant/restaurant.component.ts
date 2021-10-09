// import { state } from '@angular/animations';
// import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import { Route } from '@angular/router';
import restaurantData  from '../restaurants.json';



interface Restaurant{
    id: Number,
    restaurantName: String,
    starRating: Number,
    categories: String,
    tijdBezorgd: Number,
    minBestellen: Number,
    bezorgdKosten: Number,
    soort: Number,
    restaurantImageUrl: String,
    favoriet: boolean,

}




@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  // constructor(private route:Route) {

  //  }
   constructor() {

  }

  ngOnInit(): void {
  }
  restaurants: Restaurant[] = restaurantData;
  // public clickMe(restaurant: Restaurant): void{
  //   this.route.navigate(['/restaurants', restaurant.id], {state: {date: restaurant},})
//     // history.state.data in de DeclarationListEmitMode.comp
//   }
}
