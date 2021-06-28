import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() opened: boolean;
  constructor() { }

  ngOnInit(): void {
    if (this.opened) this.toggleModal();
  }

  toggleModal(): void {
    const modal = document.querySelector('.modal').classList.toggle('is-active');
  }

}
