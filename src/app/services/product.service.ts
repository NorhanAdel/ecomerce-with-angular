import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'تيشيرت كاجوال', price: 250, image: 'assets/product_12.png', category: 'ملابس', rating: 4 },
    { id: 2, name: 'سماعات بلوتوث', price: 600, image: 'assets/headphone-2.png', category: 'إلكترونيات', rating: 5 },
    { id: 3, name: 'موبايل ايفون', price: 80000, image: 'assets/phone.jpg', category: 'إلكترونيات', rating: 5 },
    { id: 4, name: 'حقيبة يد', price: 700, image: 'assets/bage3.jpg', category: 'إكسسوارات', rating: 3 },
    { id: 5, name: 'اكسسوار فان كليق', price: 700, image: 'assets/اكسسوارات.jpg', category: 'إكسسوارات', rating: 2 },
    { id: 6, name: 'ساعه رولكس', price: 1000, image: 'assets/watch.jpg', category: 'إكسسوارات', rating: 5 },
    { id: 7, name: 'تيشيرت كاجوال', price: 250, image: 'assets/f4.jpg', category: 'ملابس', rating: 4 },
    { id: 8, name: 'سماعات بلوتوث', price: 600, image: 'assets/headphone-3.png', category: 'إلكترونيات', rating: 5 },
    { id: 9, name: 'لابتوب', price: 80000, image: 'assets/lab.jpg', category: 'إلكترونيات', rating: 5 },
    { id: 10, name: 'حقيبة يد', price: 700, image: 'assets/bage6.jpg', category: 'إكسسوارات', rating: 3 },
    { id: 11, name: 'اكسسوار فان كليق', price: 700, image: 'assets/اكسسوارات.jpg', category: 'إكسسوارات', rating: 2 },
    { id: 12, name: 'ساعه رولكس', price: 1000, image: 'assets/whatches.jpg', category: 'إكسسوارات', rating: 5 },
  ];

  getAll() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
