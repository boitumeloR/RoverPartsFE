import { EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliding-cart',
  templateUrl: './sliding-cart.component.html',
  styleUrls: ['./sliding-cart.component.scss']
})
export class SlidingCartComponent implements OnInit, OnChanges {

  @Input() opened: boolean;
  @Output() onClose = new EventEmitter<boolean>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.toggleCart();
  }

  ngOnInit(): void {
  }

  toggleCart(): void {
    if (this.opened) {
      console.log(this.opened);
      const menu = document.querySelector('.menu');
      const toggler = document.querySelector('.menu-toggler');
      menu.classList.toggle('active');
      toggler.classList.toggle('active');
    }
  }

  close() {
    const menu = document.querySelector('.menu');
    const toggler = document.querySelector('.menu-toggler');
    menu.classList.toggle('active');
    toggler.classList.toggle('active');
    this.onClose.emit(false);
  }

}
