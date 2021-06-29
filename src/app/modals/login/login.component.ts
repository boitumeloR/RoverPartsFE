import { Component, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {

  @Input() opened: boolean;
  @Output() onCloseLogin = new EventEmitter();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.opened) {
      if(changes.opened.firstChange === true) {
        return;
      } else {
        this.toggleModal();
      }
    }
    console.log(changes)
  }
  ngOnInit(): void {
    // if (this.opened) this.toggleModal();
  }

  toggleModal(): void {
    const modal = document.querySelector('.modal').classList.toggle('is-active');
  }

  close() {
    this.onCloseLogin.emit();
  }

}
