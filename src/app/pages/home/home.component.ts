import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  openedImage = false;
  constructor() { }

  ngOnInit(): void {
    // this.init()
  }

  init() {
    const slidesContainers = document.querySelectorAll('.slide-container');
    const wrapper = document.querySelector('.wrapper');
    let panAmount = 5;
    slidesContainers.forEach((item: HTMLElement) => {
      item.style.width = (100 + slidesContainers.length * panAmount) + "%"; // Set wrapper width based on number of slides + panAmount.
    })
  
    for (var i = 0; i < slidesContainers.length; i++) {
      slidesContainers.forEach((item: HTMLElement) => {
        item.style.width = 100 / slidesContainers.length + "%"; // Fit slides into the wrapper.
      })
    }
  }

  openImage() {
    this.openedImage = true;
  }

  closeImage(passedData: boolean) {
    console.log(passedData);
    this.openedImage = false;
  }

}
