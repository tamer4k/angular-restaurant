import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {  AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public map!: L.Map;
  private centroid: L.LatLngExpression = [52.6305, 4.7643]; //

  private initMap(): void {
    let map = L.map('map', {
      center: this.centroid,
      zoom: 14
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    // create 5 random jitteries and add them to map
    const jittery = Array(5).fill(this.centroid).map(
      x => [x[0] + (Math.random() - .5) / 10, x[1] + (Math.random() - .5) / 10]
    ).map(
      x => L.marker(x as L.LatLngExpression)
    ).forEach(
      x => x.addTo(map)
    );
    tiles.addTo(map);
  }
  constructor() { }
    ngAfterViewInit(): void { }

  ngOnInit(): void {
    this.initMap();
  }
}
