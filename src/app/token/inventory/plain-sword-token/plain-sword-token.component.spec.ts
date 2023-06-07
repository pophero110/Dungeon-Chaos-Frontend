import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainSwordTokenComponent } from './plain-sword-token.component';

describe('PlainSwordTokenComponent', () => {
  let component: PlainSwordTokenComponent;
  let fixture: ComponentFixture<PlainSwordTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlainSwordTokenComponent]
    });
    fixture = TestBed.createComponent(PlainSwordTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
