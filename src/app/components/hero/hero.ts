import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
 slides = [
  {
    image: 'assets/brand.jpg',
    title: 'اكتشف أحدث العروض ',
    subtitle:  'منتجات أصلية 100% مع ضمان'
  },
  {
    image: 'assets/دفع.jpg',
    title: 'أفضل الماركات العالمية',
    subtitle:  "'خصومات تصل لـ 50% على منتجات مختارة"
  },
  {
    image: 'assets/شحن.jpg',
    title: 'تسوق دلوقتي ',
    subtitle: 'شحن سريع خلال 48 ساعة'
  }
];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
