import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.scss'
})
export class Newsletter {
  email: string = '';

  subscribe() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.email.match(emailPattern)) {
      alert('من فضلك أدخل بريد إلكتروني صحيح');
      return;
    }
    alert(`تم الاشتراك بنجاح: ${this.email}`);
    this.email = '';
  }
}
