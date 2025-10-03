import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart';
import { Checkout } from './components/checkout/checkout';
import { ContactComponent } from './components/contact/contact';
import { Home } from './components/home/home';
import { ProductDetails } from './components/product-details/product-details';
import { ProductsComponent } from './components/products/products';

export const routes: Routes = [
{ path: '', component: Home },
  { path: 'products',component: ProductsComponent},
  { path: 'product/:id', component: ProductDetails },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: Checkout },
  { path: 'contact',component: ContactComponent},



];
