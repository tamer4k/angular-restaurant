// import { BehaviorSubject } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { take, map } from 'rxjs/operators';
// import { Producten } from './restauant-service';


// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {
//   constructor() {
//     let existingCartItems = JSON.parse(localStorage.getItem('products'));
//     if (!existingCartItems) {
//       existingCartItems = [];
//     }
//     this.itemsSubject.next(existingCartItems);
//   }

//   private itemsSubject = new BehaviorSubject<Producten[]>([]);
//   items$ = this.itemsSubject.asObservable();

//   addToCart(product: Producten) {
//     this.items$.pipe(
//       take(1),
//       map((products) => {
//         products.push(product);
//         localStorage.setItem('products', JSON.stringify(products));
//       }),
//     ).subscribe();
//   }
// }
