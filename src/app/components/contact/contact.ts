import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  submitForm() {
    if (this.name && this.email && this.message) {
      alert(`تم إرسال الرسالة! \nالاسم: ${this.name}\nالبريد: ${this.email}\nالرسالة: ${this.message}`);
      this.name = '';
      this.email = '';
      this.message = '';
    } else {
      alert('من فضلك املأ جميع الحقول!');
    }
  }
}
