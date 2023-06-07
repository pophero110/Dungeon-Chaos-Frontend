import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPotionTokenComponent } from './health-potion-token.component';

describe('HealthPotionTokenComponent', () => {
  let component: HealthPotionTokenComponent;
  let fixture: ComponentFixture<HealthPotionTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthPotionTokenComponent]
    });
    fixture = TestBed.createComponent(HealthPotionTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
