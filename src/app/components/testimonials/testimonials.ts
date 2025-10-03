import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Testimonial {
  id: number;
  name: string;
  message: string;
  image: string;
}
@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'أحمد علي',
      message: 'منتجات رائعة وخدمة ممتازة 👌 وصلتني الطلبية في يومين بس.',
      image: 'assets/c1.jpg'
    },
    {
      id: 2,
      name: 'سارة محمد',
      message: 'جودة ممتازة وأسعار مناسبة جدًا. أنصح أي حد يجرب.',
      image: 'assets/c6.jpg'
    },
    {
      id: 3,
      name: 'كريم محمود',
      message: 'موقع سهل الاستخدام وخدمة العملاء محترمة جدًا.',
      image: 'assets/c4.jpg'
    }
  ];
}
