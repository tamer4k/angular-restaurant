import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import restaurantData from '../restaurants.json';
import{AuthService} from '../shared/auth.service';


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
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  restaurant!: Restaurant;
  promotiecodes : number = 10;
  constructor(private auth:AuthService,private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurant = restaurantData.find(r => r.id == id) ?? <Restaurant>{};
    this.CartDetails();
    this.loadCart();
  }

  cartNumber: number = 0;
  cartNumberFunc() {
    var cartValue = JSON.parse(localStorage.getItem('localCart') !);
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }
  getCartDetails: any = [];
  CartDetails() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
    }
  }
  incQnt(id: any, qnt: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].id === id) {
        if (qnt != 10)
          this.getCartDetails[i].qnt = parseInt(qnt) + 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();

  }
  decQnt(id: any, qnt: any) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
      if (this.getCartDetails[i].id === id) {
        if (qnt != 1)
          this.getCartDetails[i].qnt = parseInt(qnt) - 1;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();

  }
  totaal: number = 0;
  BezorgdKosten: number = 0;

  loadCart() {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || '');
      this.totaal = this.getCartDetails.reduce(function (acc: number, val: { prijs: number; qnt: number; })  {
        return acc + (val.prijs * val.qnt);
      }, 0);
    }
    if(this.totaal >= 35 || this.getCartDetails == 0){
      this.BezorgdKosten = 0;
     } else{
      this.BezorgdKosten = 5;
    }

  }
  MyLog(mylog: any){
   console.log(mylog);
  }
  removeAll() {
    localStorage.removeItem('localCart');
    this.getCartDetails = [];
    this.totaal = 0;
    this.BezorgdKosten = 0;
    this.cartNumber = 0;
    this.auth.cartSubject.next(this.cartNumber);
  }
  singleDelete(getCartDetail: any) {
    console.log(getCartDetail);

    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      for (let i = 0; i < this.getCartDetails.length; i++) {
        if (this.getCartDetails[i].id === getCartDetail) {
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
          this.loadCart();
          this.cartNumberFunc();
        }
      }
    }
  }




}
