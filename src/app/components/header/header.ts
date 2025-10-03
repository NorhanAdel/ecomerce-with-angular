import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule,FormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  cartCount = 0;
  searchValue: string = '';

  constructor(private cartService: CartService, private router: Router, private productService: ProductService) {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  onSearch(searchValue: string) {
    if (!searchValue.trim()) return;

    const product = this.productService.getAll()
      .find(p => p.name.toLowerCase().includes(searchValue.toLowerCase()));

    if (product) {
      this.router.navigate(['/product', product.id]);
      this.searchValue = '';
    } else {
      alert('المنتج غير موجود 😔');
    }
  }
}
