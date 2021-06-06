import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMainImageComponent } from './view-main-image.component';

describe('ViewMainImageComponent', () => {
  let component: ViewMainImageComponent;
  let fixture: ComponentFixture<ViewMainImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMainImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMainImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
