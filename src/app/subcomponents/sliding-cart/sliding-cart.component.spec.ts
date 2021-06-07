import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingCartComponent } from './sliding-cart.component';

describe('SlidingCartComponent', () => {
  let component: SlidingCartComponent;
  let fixture: ComponentFixture<SlidingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
