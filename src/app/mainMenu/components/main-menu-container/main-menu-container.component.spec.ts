import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuContainerComponent } from './main-menu-container.component';
import { MainMenuModule } from '../../main-menu.module';
import { provideMockStore } from '@ngrx/store/testing';

describe('MainMenuContainerComponent', () => {
  let component: MainMenuContainerComponent;
  let fixture: ComponentFixture<MainMenuContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MainMenuModule],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(MainMenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
