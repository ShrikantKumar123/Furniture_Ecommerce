import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {
      id: 1,
      name: 'Modern Chair',
      price: 500,
      image: 'assets/bg-img/chare-4.jpg',
      rating: 4
    },
    {
      id: 2,
      name: 'Modern Tables',
      price: 1500,
      image: 'assets/bg-img/table4.jpg',
      rating: 5
    },
    {
      id: 3,
      name: 'Modern Beds',
      price: 500,
      image: 'assets/bg-img/bed4.jpg',
      rating: 4
    },
    {
      id: 4,
      name: 'Modern Shofas',
      price: 500,
      image: 'assets/bg-img/shofa5.jpg',
      rating: 5
    },

    {
      id: 5,
      name: 'Modern Lamp',
      price: 500,
      image: 'assets/bg-img/lamp2.jpg',
      rating: 3
    },
    {
      id: 6,
      name: 'Modern Bookself',
      price: 500,
      image: 'assets/bg-img/bookself4.jpg',
      rating: 4
    }
  ];

  constructor() { }
  getProducts = function () {
    return this.products;
  }
}
