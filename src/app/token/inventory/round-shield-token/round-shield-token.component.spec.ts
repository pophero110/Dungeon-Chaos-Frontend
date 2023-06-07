import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundShieldTokenComponent } from './round-shield-token.component';

describe('RoundShieldTokenComponent', () => {
  let component: RoundShieldTokenComponent;
  let fixture: ComponentFixture<RoundShieldTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoundShieldTokenComponent]
    });
    fixture = TestBed.createComponent(RoundShieldTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
