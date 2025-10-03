import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deals-of-day',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deals-of-day.html',
  styleUrl: './deals-of-day.scss'
})
export class DealsOfDay {
  endTime = new Date().getTime() + 1000 * 60 * 60 * 5;
  timeLeft: string = '';

  products = [
    { id: 1, name: 'لاب توب ديل', price: 18000, discount: 15000, image: 'assets/laptop.jpg' },
    { id: 2, name: 'سماعات JBL', price: 1200, discount: 950, image: 'assets/headphone-2.png' },
    { id: 3, name: 'تيشيرت رجالي', price: 350, discount: 250, image: 'assets/f6.jpg' },
        { id: 2, name: 'حقيبه يد', price: 1700, discount: 840, image: 'assets/bage6.jpg' },
    { id: 3, name: 'ساعات', price: 750, discount: 250, image: 'assets/whatches.jpg' },
  ];

  constructor() {
    this.updateTimer();
    setInterval(() => this.updateTimer(), 1000);
  }

  updateTimer() {
    const now = new Date().getTime();
    const distance = this.endTime - now;

    if (distance <= 0) {
      this.timeLeft = "انتهى العرض!";
      return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.timeLeft = `${hours}س ${minutes}د ${seconds}ث`;
  }
}
