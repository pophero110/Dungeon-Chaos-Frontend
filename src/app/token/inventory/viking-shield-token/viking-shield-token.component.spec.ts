import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VikingShieldTokenComponent } from './viking-shield-token.component';

describe('VikingShieldTokenComponent', () => {
  let component: VikingShieldTokenComponent;
  let fixture: ComponentFixture<VikingShieldTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VikingShieldTokenComponent]
    });
    fixture = TestBed.createComponent(VikingShieldTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
