import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallSvgComponent } from './wall-svg.component';

describe('WallSvgComponent', () => {
  let component: WallSvgComponent;
  let fixture: ComponentFixture<WallSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WallSvgComponent]
    });
    fixture = TestBed.createComponent(WallSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
