import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

import { Home } from './components/home/home';
import { Newsletter } from './components/newsletter/newsletter';
import { ProductsComponent } from './components/products/products';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Newsletter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ecomerce');
}
