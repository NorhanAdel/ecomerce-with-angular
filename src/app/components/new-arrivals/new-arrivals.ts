import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  createdAt: string;
}

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-arrivals.html',
  styleUrls: ['./new-arrivals.scss']
})
export class NewArrivals {
  newProducts: Product[] = [
    { id: 1, name: 'تيشيرت كاجوال', price: 250, image: 'assets/product_12.png', createdAt: '2025-09-20' },
    { id: 2, name: 'سماعات بلوتوث', price: 600, image: 'assets/headphone-2.png', createdAt: '2025-09-22' },
    { id: 3, name: 'موبايل ايفون', price: 80000, image: 'assets/phone.jpg', createdAt: '2025-09-25' },
    { id: 4, name: 'حقيبة يد', price: 700, image: 'assets/bage3.jpg', createdAt: '2025-09-28' },
    { id: 5, name: 'اكسسوار فان كليق', price: 700, image: 'assets/اكسسوارات.jpg', createdAt: '2025-09-28' },
    { id: 6, name: 'ساعه رولكس', price: 1000, image: 'assets/watch.jpg', createdAt: '2025-09-28' },
     { id: 4, name: 'حقيبة يد', price: 800, image: 'assets/bage4.jpg', createdAt: '2025-09-28' },
  ];

  currentIndex = 0;
  visibleCards = 4;

  get sliderTransform() {
    return `translateX(-${this.currentIndex * (100 / this.visibleCards)}%)`;
  }

  next() {
    if (this.currentIndex < this.newProducts.length - this.visibleCards) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
