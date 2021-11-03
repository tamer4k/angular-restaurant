import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import{AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  [x: string]: any;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
 public amount: number = 0;

  constructor(private breakpointObserver: BreakpointObserver, private auth: AuthService) {
    this.auth.cartSubject.subscribe((data)=>{
      console.log(data);
      const numberOfItem = this.cartItem = data;
      this.amount = numberOfItem;

    });
  }
  ngOnInit(): void{
    this.cartItemFunc();
  }
  totalItem: number = 0;

  cartItemFunc(){
    if(localStorage.getItem('localCart') != null){
      var cartCount =JSON.parse(localStorage.getItem('localCart') || '') ;
      this.totalItem = cartCount.length;

    }
  }
}




