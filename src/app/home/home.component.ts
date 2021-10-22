import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../shared/restauant-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurants?: any[];
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurants = this.restaurantService.getRestaurants()
  }
}


