import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id?: number
  name?: string
  prijs?: number
  productImageUrl?: string
  omschrijven?:string
}

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})



export class RestaurantDetailComponent implements OnInit {
  restaurant!: Restaurant;
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.pageTitle += `: ${id}`;
    this.restaurant = restaurantData.find(r => r.id == id) ?? <Restaurant>{};
  }

  //restaurantsDetails: Restaurant[] = restaurantData(id:);

  onBack(): void{
    this.router.navigate(['/restaurants']);
  }
}
