import { Component } from '@angular/core';
import{CommonModule}from '@angular/common'
interface Category {
  id: number;
  name: string;
  image: string;
}
@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.scss'
})
export class Categories {
  categories: Category[] = [
    { id: 1, name: 'إلكترونيات', image: 'assets/lab.jpg' },
    { id: 2, name: 'ملابس', image: 'assets/product_10.png' },
    { id: 3, name: 'سماعات', image: 'assets/headphone-3.png' },
    { id: 4, name: 'إكسسوارات', image: 'assets/اكسسوارات.jpg' },
    { id: 5, name: 'ساعات', image: 'assets/watch.jpg' }
  ];
}
