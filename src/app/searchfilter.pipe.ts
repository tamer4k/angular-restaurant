import { Pipe, PipeTransform } from '@angular/core';
import restaurantData from './restaurants.json';




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
  contact?: Contact[]
  openingstijden?: Openingstijden[]
  cat?: Cat[]

}

export interface Contact {
  email?: string
  phone?: number
  postcode?: string
  straat?: string
}

export interface Openingstijden {
  zaterdag?: string,
  zondag?: string,
  maandag?: string,
  dinsdag?: string,
  woensdag?: string,
  donderdag?: string,
  vrijdag?: string
}

export interface Cat {
  catName?: string
  sideImageUrl?: string,
  producten?: Producten[]
}

export interface Producten {
  id?: number
  name?: string
  prijs?: number
  qnt?: number
  productImageUrl?: string
  omschrijven?: string
}
@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Restaurants: Restaurant[], searchValue: string): Restaurant[] {
    if (!Restaurants || ! searchValue){ 
      return Restaurants;
    }
    return Restaurants.filter(cat =>
      cat.restaurantName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      cat.categories.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      cat.starRating.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );

  }

}
