import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  CurrentCart =  [];
  temp_cart = JSON.parse(localStorage.getItem('temp_cart')) || [];

  constructor() {
  }

  GetCurrentCart() {
    return this.temp_cart;
  }

  AddToCart(item:any) {
    this.temp_cart.push(item);
    console.log('pushed', this.temp_cart);
    localStorage.setItem('temp_cart', JSON.stringify(this.temp_cart));
  }
  RemoveFromCart(key) {
    console.log('remove', key);
    this.temp_cart.splice(key, 1);
    localStorage.setItem('temp_cart', JSON.stringify(this.temp_cart));
    console.log(this.CurrentCart);
  }

}
