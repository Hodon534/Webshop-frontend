import { Component } from '@angular/core';
import { CartService } from './service/cart.service';
import { Cart } from './model/models/cart.model';

@Component({
  selector: 'app-root',
  template: `
  <app-header [cart]="cart"></app-header>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'WebShop';
  cart: Cart = { items: [] };

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => this.cart = _cart);
  }
}
