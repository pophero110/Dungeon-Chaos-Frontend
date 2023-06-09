import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrollComponent } from './troll.component';

describe('TrollComponent', () => {
  let component: TrollComponent;
  let fixture: ComponentFixture<TrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrollComponent]
    });
    fixture = TestBed.createComponent(TrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
