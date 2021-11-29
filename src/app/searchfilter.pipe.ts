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
  producten: Producten[]

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


export interface Producten {
  id: number
  name: string
  prijs: number
  qnt: number
  productImageUrl: string
  omschrijven: string
  category: string
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
      cat.starRating.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      cat.minBestellen.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())


      );

  }

}

// export class SearchfilterPipe implements PipeTransform {

//   transform(Productens: Producten[], searchValue: string): Producten[] {
//     if (!Productens || ! searchValue){
//       return Productens;
//     }

//     return Productens.filter(cat =>
//       cat.category.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
//       );

//   }

// }
