import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossShieldComponent } from './cross-shield.component';

describe('CrossShieldComponent', () => {
  let component: CrossShieldComponent;
  let fixture: ComponentFixture<CrossShieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrossShieldComponent]
    });
    fixture = TestBed.createComponent(CrossShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
