import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.scss']
})
export class ProductDetails {
  product: any;
  similarProducts: any[] = [];
  reviews: any[] = [];
  newReview = { user: '', rating: 5, comment: '' };
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const allProducts = this.productService.getAll();
    this.product = allProducts.find(p => p.id === id);
    if (this.product) {
      this.similarProducts = allProducts.filter(p => p.category === this.product.category && p.id !== id).slice(0, 4);
    }
    this.reviews = [
      { user: 'محمد', rating: 5, comment: 'المنتج ممتاز وجودته عالية 👌', date: '2025-09-12' },
      { user: 'أحمد', rating: 4, comment: 'الخدمة جيدة لكن الشحن اتأخر يوم', date: '2025-09-10' },
      { user: 'سارة', rating: 3, comment: 'مقبول لكن توقعت يكون أفضل', date: '2025-09-05' }
    ];
  }

  addReview() {
    if (this.newReview.user && this.newReview.comment) {
      this.reviews.unshift({
        ...this.newReview,
        date: new Date().toISOString().split('T')[0]
      });
      this.newReview = { user: '', rating: 5, comment: '' };
    }
  }

  addToCart() {
    this.cartService.addToCart(this.product, this.quantity);
    alert('تمت إضافة المنتج للسلة ✅');
    
  }
}
