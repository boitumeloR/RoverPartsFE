import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-main-image',
  templateUrl: './view-main-image.component.html',
  styleUrls: ['./view-main-image.component.scss']
})
export class ViewMainImageComponent implements OnInit {

  @Input() opened: boolean;
  @Output() 
  onClose = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
    if (this.opened) this.toggleModal();
  }

  toggleModal(): void {
    const modal = document.querySelector('.modal').classList.toggle('is-active');
    this.onClose.emit(false);
  }

}
