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
  }

  openImage() {
    this.openedImage = true;
  }

  closeImage(passedData: boolean) {
    console.log(passedData);
    this.openedImage = false;
  }

}
