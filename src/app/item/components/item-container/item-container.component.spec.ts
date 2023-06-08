import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemContainerComponent } from './item-container.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('ItemContainerComponent', () => {
  let component: ItemContainerComponent;
  let fixture: ComponentFixture<ItemContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemContainerComponent],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(ItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
