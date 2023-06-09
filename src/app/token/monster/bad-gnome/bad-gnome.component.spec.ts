import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadGnomeComponent } from './bad-gnome.component';

describe('BadGnomeComponent', () => {
  let component: BadGnomeComponent;
  let fixture: ComponentFixture<BadGnomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadGnomeComponent]
    });
    fixture = TestBed.createComponent(BadGnomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
