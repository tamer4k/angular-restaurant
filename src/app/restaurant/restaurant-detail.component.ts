import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { __values } from 'tslib';
import restaurantData from '../restaurants.json';
import { AuthService } from '../shared/auth.service';
// import { CartService } from '../shared/cart.service';
declare let toastr: any
interface Restaurant {
  id?: Number
  restaurantName?: String
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
  name?: string
  prijs?: number
  qnt?: number
  productImageUrl?: string
  omschrijven?: string
  category?: string
}

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})



export class RestaurantDetailComponent implements OnInit {
  searchValue?: any;
  restaurant!: Restaurant;

  filteredProducts: Producten[] = [];



  constructor(private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {

  }
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    //  this.filteredCategories = this.categoriesFilter(value);
     this.filteredProducts = this._listFilter? this.productCategoriesFilter(this._listFilter) : this.restaurant.producten;
  }
  productCategoriesFilter(filterBy: string): Producten[] {
//als filterby waarde heeft (bijvoorbeeld lunch) ga dan producten filteren obv category
    filterBy = filterBy.toLocaleLowerCase();
    return this.restaurant.producten.filter((product: Producten) =>
    product.category?.toLocaleLowerCase().includes(filterBy));

  }
//   performFilter(filterBy: string): any[] {
//     filterBy = filterBy.toLocaleLowerCase();
//     return this.products.filter((product: any) =>
//         product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
// }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurant = restaurantData.find(r => r.id == id) ?? <Restaurant>{};
    this.cartItemFunc();
    this.listFilter = '';
  }
  onBack(): void {
    this.router.navigate(['/restaurants']);
  }
  totalItem: number = 0;
  cartItemFunc() {
    if (localStorage.getItem('localCart') != null) {
      var cartCount = JSON.parse(localStorage.getItem('localCart') || '');
      this.totalItem = cartCount.length;
      this.auth.cartSubject.next(this.cartNumber);
    }
  }
  cartNumber: number = 0;
  cartNumberFunc() {
    var cartValue = JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }

  itemsCart: any = [];
  addtocart(category: any) {
    let cartDataNull = localStorage.getItem('localCart');
    if (cartDataNull == null) {
      let storeDataGet: any = [];
      storeDataGet.push(category);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    }
    else {
      var id = category.id;
      let index: number = -1;

      this.itemsCart = JSON.parse(localStorage.getItem('localCart')!);
      for (let i = 0; i < this.itemsCart.length; i++) {
        if (parseInt(id) === parseInt(this.itemsCart[i].id)) {
          this.itemsCart[i].qnt = category.qnt;
          index = i;
          break;
        }
      }
      if (index == -1) {
        this.itemsCart.push(category);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
      else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }

    }
    this.cartNumberFunc();
    this.cartItemFunc();
    // localStorage.setItem('localCart', JSON.stringify(category));
  }


  ins(product: any) {
    if (product.qnt != 10)
      product.qnt += 1;
  }
  dec(product: any) {
    if (product.qnt != 1)
      product.qnt -= 1;
  }


  allValue(): void {
    this.listFilter = '';
  }
  CategoryValue(): void {
    this.listFilter = '';
  }

}
