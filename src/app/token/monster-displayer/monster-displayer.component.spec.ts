import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterDisplayerComponent } from './monster-displayer.component';

describe('MonsterDisplayerComponent', () => {
  let component: MonsterDisplayerComponent;
  let fixture: ComponentFixture<MonsterDisplayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonsterDisplayerComponent]
    });
    fixture = TestBed.createComponent(MonsterDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
