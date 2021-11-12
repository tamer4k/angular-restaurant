// import { state } from '@angular/animations';
// import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import { Route } from '@angular/router';
import restaurantData from '../restaurants.json';

/**/

/* */
declare let toastr: any
interface Restaurant {
  id: Number
  restaurantName: String
  starRating: Number
  categories: String
  tijdBezorgd: Number
  minBestellen: Number
  bezorgdKosten: Number
  restaurantImageUrl: String
  favoriet: boolean
  cat?: Cat[]

}

export interface Cat {
  catName?: string
  producten?: Producten[]
}

export interface Producten {
  id: number
  name: string
}


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],

})





export class RestaurantComponent implements OnInit {
  constructor() { }
  searchValue? : any ;
  komma = ","
  filteredRestaurants: Restaurant[] = [];
  restaurants: Restaurant[]  = restaurantData;

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredRestaurants = this.categoriesFilter(value);
  }

  categoriesFilter(filterBy: string): Restaurant[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.restaurants.filter((restaurant: Restaurant) =>
      restaurant.categories.toLocaleLowerCase().includes(filterBy));
  }
  filterFavoriet(): Restaurant[] {
    return this.restaurants.filter((restaurant: Restaurant) => restaurant.favoriet === true);
  }
  ngOnInit(): void {
    this.filteredRestaurants = this.restaurants;
    this.listFilter = '';
  }


  allValue(): void {
    this.listFilter = '';
  }
  lunchValue(): void {
    this.listFilter = 'lunch';
  }
  pizzaValue(): void {
    this.listFilter = 'pizza';
  }
  japaneseValue(): void {
    this.listFilter = 'japanese';
  }
  favorietValue(): void {
    this.filteredRestaurants = this.filterFavoriet();

  }




}

