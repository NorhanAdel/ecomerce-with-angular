import { Component } from '@angular/core';
import { Categories } from '../categories/categories';
import { DealsOfDay } from '../deals-of-day/deals-of-day';
import { FeaturedProducts } from '../featured-products/featured-products';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { NewArrivals } from '../new-arrivals/new-arrivals';
import { Newsletter } from '../newsletter/newsletter';
import { PromoBanner } from '../promo-banner/promo-banner';
import { Testimonials } from '../testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [Hero,FeaturedProducts,NewArrivals,Testimonials,Categories, PromoBanner,DealsOfDay],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
