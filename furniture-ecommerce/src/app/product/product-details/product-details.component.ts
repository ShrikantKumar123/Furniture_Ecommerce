import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  imageArr = [
    { 'imgData': 'assets/bg-img/5.jpg' },
    { 'imgData': 'assets/bg-img/4.jpg' },
    { 'imgData': 'assets/bg-img/6.jpg' }
  ]
  @Input() imgPath: string = "";
  imgFileName: string = this.imageArr[0].imgData;
  router: any;
  constructor() { }

  ngOnInit() {
  }
  onImageClick(index: number) {
    console.log(index);
    this.imgFileName = this.imageArr[index].imgData;
  }
  onProductClick() {
    this.router.navigate(['productdetails']);
  }

}
