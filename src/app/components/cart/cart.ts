import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';
import { NewArrivals } from '../new-arrivals/new-arrivals';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,NewArrivals],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class CartComponent {
  cart: any[] = [];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  updateQuantity(id: number, qty: number) {
    this.cartService.updateQuantity(id, qty);
  }

  remove(id: number) {
    this.cartService.removeFromCart(id);
    this.cart = this.cartService.getCart();
  }

  getTotal() {
    return this.cartService.getTotal();
  }
}
