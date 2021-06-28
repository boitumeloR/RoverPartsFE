import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {

  @Input() opened: boolean;
  constructor() { }

  ngOnChanges(): void {
    this.toggleModal();
  }
  ngOnInit(): void {
    if (this.opened) this.toggleModal();
  }

  toggleModal(): void {
    const modal = document.querySelector('.modal').classList.toggle('is-active');
  }

}
