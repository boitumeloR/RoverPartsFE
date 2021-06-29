import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  parts = Array(8).fill(0);
  openedImage = false;
  addedToCart = false;
  constructor() { }

  ngOnInit(): void {
  }

  openImage() {
    this.openedImage = true;
  }

  closeImage(passedData: boolean) {
    this.openedImage = false;
  }

  addToCart(): void {
    this.addedToCart = !this.addedToCart;
    console.log(this.addedToCart);
  }

  closeSide(passedData: boolean) {
    this.addedToCart = passedData;
  }

}
