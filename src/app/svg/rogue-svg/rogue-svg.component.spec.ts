import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RogueSvgComponent } from './rogue-svg.component';

describe('RogueSvgComponent', () => {
  let component: RogueSvgComponent;
  let fixture: ComponentFixture<RogueSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RogueSvgComponent]
    });
    fixture = TestBed.createComponent(RogueSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
