import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories = [
    {
      id: 1,
      name: 'Mordern Rocking Chair',
      image: 'assets/bg-img/1.jpg',
      from: 500
    },
    {
      id: 2,
      name: 'Mordern Rocking Tables',
      image: 'assets/bg-img/table-1.jpg',
      from: 300
    },
    {
      id: 3,
      name: 'Mordern Rocking Beds',
      image: 'assets/bg-img/bed1.jpg',
      from: 1500
    },
    {
      id: 4,
      name: 'Mordern Rocking Shofas',
      image: 'assets/bg-img/shofa4.jpg',
      from: 1000
    },
    {
      id: 5,
      name: 'Mordern Rocking Lamp',
      image: 'assets/bg-img/lamp2.jpg',
      from: 2000
    },
    {
      id: 6,
      name: 'Mordern Rocking Bookself',
      image: 'assets/bg-img/bookself6.jpg',
      from: 500
    },


  ]

  constructor() { }
  getCategories = function () {
    return this.categories;
  }
}
