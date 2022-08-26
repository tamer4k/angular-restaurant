import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InlogComponent } from './inlog/inlog.component';
import { KassabonComponent } from './kassabon/kassabon.component';
import { MapComponent } from './map/map.component';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'restaurants', component: RestaurantComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'kassabon', component: KassabonComponent},
  {path: 'map', component: MapComponent},
  {path: 'inlog', component: InlogComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full'}
];



// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

export class AppRoutingModule { }
