import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: any[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  getCart() {
    return this.cart;
  }

  addToCart(product: any, quantity: number = 1) {
    const existing = this.cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({ ...product, quantity });
    }
    this.updateCartCount();
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(p => p.id !== productId);
    this.updateCartCount();
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cart.find(p => p.id === productId);
    if (item) item.quantity = quantity;
    this.updateCartCount();
  }

  clearCart() {
    this.cart = [];
    this.updateCartCount();
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  private updateCartCount() {
    const totalCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCountSubject.next(totalCount);
  }
}
