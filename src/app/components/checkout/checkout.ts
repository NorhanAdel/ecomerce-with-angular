import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss']
})
export class Checkout{
  cart: any[] = [];
  name: string = '';
  email: string = '';
  address: string = '';
  paymentMethod: string = 'cash';

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  placeOrder() {
    if (!this.name || !this.email || !this.address) {
      alert('يرجى ملء جميع البيانات');
      return;
    }
    alert('تم تأكيد الطلب بنجاح! ✅');
    this.cartService.clearCart();
  }
}
