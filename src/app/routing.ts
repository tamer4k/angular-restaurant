import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './errors/404.component';
import { HomeComponent } from './home/home.component';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'restaurants', component: RestaurantComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent},
  {path: '404', component: Error404Component},
  {path: 'cart', component: CartComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full'}
];



// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

export class AppRoutingModule { }
