import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadSwordTokenComponent } from './broad-sword-token.component';

describe('BroadSwordTokenComponent', () => {
  let component: BroadSwordTokenComponent;
  let fixture: ComponentFixture<BroadSwordTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BroadSwordTokenComponent]
    });
    fixture = TestBed.createComponent(BroadSwordTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
