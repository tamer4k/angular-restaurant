import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import restaurantData from '../restaurants.json';



interface Restaurant {
  id: Number
  restaurantName: String
  starRating: Number
  categories: String
  tijdBezorgd: Number
  minBestellen: Number
  bezorgdKosten: Number
  soort: Number
  restaurantImageUrl: String
  favoriet: boolean
  openingstiden: String
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


@Injectable()
export class RestaurantService{
  // constructor(private http:HttpClient){}
   getRestaurants(){
    return restaurants
   }
}




  const restaurants: Restaurant[] = restaurantData;


