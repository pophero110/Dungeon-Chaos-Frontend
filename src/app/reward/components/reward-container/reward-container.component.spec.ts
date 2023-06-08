import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardContainerComponent } from './reward-container.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('RewardContainerComponent', () => {
  let component: RewardContainerComponent;
  let fixture: ComponentFixture<RewardContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RewardContainerComponent],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(RewardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
