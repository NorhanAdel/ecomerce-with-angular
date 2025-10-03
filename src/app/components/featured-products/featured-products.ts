import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
 discount?: number;
}
@Component({
  selector: 'app-featured-products',
  imports: [CommonModule],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.scss'
})
export class FeaturedProducts {
  products: Product[] = [
    {
      id: 1,
      name: 'ملابس حريمى',
      price: 120,
discount:50,
      image: 'assets/product_10.png'
    },
    {
      id: 2,
      name: "   سماعات",
      price: 80,
      image: 'assets/headphone-3.png'
    },
    {
      id: 3,
      name: 'حقيبة جلد',
      price: 350,
      discount: 70,
      image: 'assets/bag2.jpg'
    },
    {
      id: 4,
      name: 'سماعات لاسلكية',
      price: 500,
      image: 'assets/hu.jpg'
    },
        { id: 5, name: 'لاب توب', price: 8500, image: 'assets/lab.jpg' },
    { id: 6, name: 'ساعة ذكية', price: 950, discount: 10, image: 'assets/watch.jpg' },
    { id: 7, name: "اكسسوارات", price: 220, image: "assets/اكسسوارات.jpg" },
     {
      id: 8,
      name: 'حقيبة جلد',
      price: 850,
      discount: 70,
      image: 'assets/bage5.jpg'
    },
     {
      id: 3,
      name: 'حقيبة جلد',
      price: 400,
      discount: 70,
      image: 'assets/bage4.jpg'
    },
  ];
   currentIndex = 0;
  cardWidth = 250;
  next() {
    if (this.currentIndex < this.products.length - 4) {
      this.currentIndex++;
    }
  }
   prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
