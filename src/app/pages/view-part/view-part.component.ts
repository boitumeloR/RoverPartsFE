import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-part',
  templateUrl: './view-part.component.html',
  styleUrls: ['./view-part.component.scss']
})
export class ViewPartComponent implements OnInit {
  openedImage = false;
  addedToCart = false;
  constructor() { }

  ngOnInit(): void {
  }

  openImage() {
    this.openedImage = true;
  }

  closeImage(passedData: boolean) {
    console.log(passedData);
    this.openedImage = false;
  }

  closeSide(passedData: boolean) {
    this.addedToCart = passedData;
  }

  addToCart(): void {
    this.addedToCart = !this.addedToCart;
    console.log(this.addedToCart);
  }

}
