import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart, CartItem } from '../model/cart.model';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] })
  private postOrderUrl: string = "http://localhost:8080/api/v1/cart/add";


  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { 
  }

  productToCartItem(product: Product, quantityToAdd: number): CartItem {
    product.id = product.id ?? 0;
    product.name = product.name ?? '';
    product.description = product.description ?? '';
    product.manufacturer = product.manufacturer ?? '';
    product.category = product.category ?? '';
    product.image = product.image ?? '';
    product.price = product.price ?? 0;
    product.inStock = product.inStock ?? 0;

    return ({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantityToAdd,
      image: product.image
    });
  }

  //TODO fix adding more items from product page
  addToCart(item: CartItem): void {
    console.log(item);
    const items = [...this.cart.value.items];
    console.log(items);
    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open('Item added to cart.', 'Ok', { duration: 5000 });
    }

  getTotal(items: Array<CartItem>): number{
    return items
    .map((item) => item.price * item.quantity)
    .reduce((prev, currenct) => prev + currenct, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open('Cart is cleared', 'Ok', { duration: 5000 });
  }

  removeFromCart(item: CartItem, update = true): Array<CartItem> {
    const filteredItems = this.cart.value.items.filter((_item) => _item.id !== item.id);

    if (update) {
      this.cart.next({items: filteredItems});
      this._snackBar.open('1 item removed from car/t.', 'Ok', {duration: 5000});
    }

    return filteredItems;

  }

  removeQuantity(item: CartItem): void {
    let itemForRemoval: CartItem | undefined;
    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }
      return _item;
    }
    );
    
    if (itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false);
    }
    this.cart.next({ items: filteredItems });
    this._snackBar.open('1 item removed from cart.', 'Ok', { duration: 5000 });
      }

    public submitOrder(): Observable<Cart> {
      this._snackBar.open("Your order has been added", "Ok", { duration: 5000 });
      return this.http.post<Cart>(this.postOrderUrl, this.cart.getValue());
    }
  }
