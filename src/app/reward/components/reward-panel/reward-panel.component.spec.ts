import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardPanelComponent } from './reward-panel.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('RewardPanelComponent', () => {
  let component: RewardPanelComponent;
  let fixture: ComponentFixture<RewardPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RewardPanelComponent],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(RewardPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
