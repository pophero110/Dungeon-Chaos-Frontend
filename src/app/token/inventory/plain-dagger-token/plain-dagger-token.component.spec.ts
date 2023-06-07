import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainDaggerTokenComponent } from './plain-dagger-token.component';

describe('PlainDaggerTokenComponent', () => {
  let component: PlainDaggerTokenComponent;
  let fixture: ComponentFixture<PlainDaggerTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlainDaggerTokenComponent]
    });
    fixture = TestBed.createComponent(PlainDaggerTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
