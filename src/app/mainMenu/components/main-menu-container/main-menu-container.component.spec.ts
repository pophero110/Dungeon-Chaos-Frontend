import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuContainerComponent } from './main-menu-container.component';

describe('MainMenuContainerComponent', () => {
  let component: MainMenuContainerComponent;
  let fixture: ComponentFixture<MainMenuContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMenuContainerComponent]
    });
    fixture = TestBed.createComponent(MainMenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
