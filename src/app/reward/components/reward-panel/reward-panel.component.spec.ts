import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardPanelComponent } from './reward-panel.component';

describe('RewardPanelComponent', () => {
  let component: RewardPanelComponent;
  let fixture: ComponentFixture<RewardPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RewardPanelComponent]
    });
    fixture = TestBed.createComponent(RewardPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
