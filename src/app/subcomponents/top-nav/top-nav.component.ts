import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleBurger(): void {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  }

}
