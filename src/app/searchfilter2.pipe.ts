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
  producten?: Producten[]
}

export interface Producten {
  id?: number
  name?: string
  prijs?: number
  qnt?: number
  productImageUrl?: string
  omschrijven?: string
  category: string
}
@Pipe({
  name: 'searchfilter2'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Productens: Producten[], searchValue2: string): Producten[] {
    if (!Productens || ! searchValue2){
      return Productens;
    }

    return Productens.filter(cat =>
      cat.category.toLocaleLowerCase().includes(searchValue2.toLocaleLowerCase())
      // cat.categories.toLocaleLowerCase().includes(searchValue2.toLocaleLowerCase()) ||
      // cat.starRating.toString().toLocaleLowerCase().includes(searchValue2.toLocaleLowerCase()) ||
      // cat.minBestellen.toString().toLocaleLowerCase().includes(searchValue2.toLocaleLowerCase())


      );

  }

}
