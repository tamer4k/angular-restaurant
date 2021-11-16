import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MapComponent } from './map/map.component';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail.component';
import { RestaurantDetailGuard } from './restaurant/restaurant-detail.guard';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { RestaurantService } from './shared/restauant-service';
import {appRoutes} from './routing';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CartComponent } from './cart/cart.component';
import { KassabonComponent } from './kassabon/kassabon.component';
import { TestComponent } from './test/test.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { NgxPrintModule } from 'ngx-print';


// import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ContactComponent,
    RestaurantComponent,
    MapComponent,
    RestaurantDetailComponent,
    FooterComponent,
    Error404Component,
    CartComponent,
    KassabonComponent,
    TestComponent,
    SearchfilterPipe,
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxPrintModule

  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
