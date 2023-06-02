import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorTokenComponent } from './warrior-token.component';

describe('WarriorTokenComponent', () => {
  let component: WarriorTokenComponent;
  let fixture: ComponentFixture<WarriorTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarriorTokenComponent],
    });
    fixture = TestBed.createComponent(WarriorTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
