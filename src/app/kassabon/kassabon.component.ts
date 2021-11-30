import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import restaurantData from '../restaurants.json';
import { AuthService } from '../shared/auth.service';

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
  sideImageUrl?: string,
  producten?: Producten[]
}

export interface Producten {
  id?: number
  name?: string
  prijs?: number
  productImageUrl?: string
  omschrijven?: string
}
@Component({
  selector: 'app-kassabon',
  templateUrl: './kassabon.component.html',
  styleUrls: ['./kassabon.component.css']
})
export class KassabonComponent implements OnInit {
  restaurant!: Restaurant;
  todayString: string = new Date().toDateString();
  time = new Date();
  constructor(private auth: AuthService, private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurant = restaurantData.find(r => r.id == id) ?? <Restaurant>{};
    this.CartDetails();
    this.loadCart();
    this.findRandom();
  }

  getCartDetails: any = [];
  CartDetails() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
    }
  }
  totaal: number = 0;
  BezorgdKosten: number = 0;
  loadCart() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '');
      this.totaal = this.getCartDetails.reduce(function (acc: number, val: { prijs: number; qnt: number; }) {
        return acc + (val.prijs * val.qnt);
      }, 0);
    }
    if (this.totaal >= 35 || this.getCartDetails == 0) {
      this.BezorgdKosten = 0;
    } else {
      this.BezorgdKosten = 5;
    }
  }
  random: any;
  max = 98765432
  findRandom() {
    this.random = Math.floor(Math.random() * this.max)
  }
  removeAll() {
    localStorage.removeItem('localCart');
  }

}
