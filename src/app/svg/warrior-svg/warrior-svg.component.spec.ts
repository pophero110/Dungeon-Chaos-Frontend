import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorSvgComponent } from './warrior-svg.component';

describe('WarriorSvgComponent', () => {
  let component: WarriorSvgComponent;
  let fixture: ComponentFixture<WarriorSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarriorSvgComponent]
    });
    fixture = TestBed.createComponent(WarriorSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
