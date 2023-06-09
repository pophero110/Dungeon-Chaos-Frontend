import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolblinTokenComponent } from './golblin-token.component';

describe('GolblinTokenComponent', () => {
  let component: GolblinTokenComponent;
  let fixture: ComponentFixture<GolblinTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolblinTokenComponent]
    });
    fixture = TestBed.createComponent(GolblinTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
