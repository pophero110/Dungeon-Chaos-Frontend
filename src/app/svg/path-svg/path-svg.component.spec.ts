import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathSvgComponent } from './path-svg.component';

describe('PathSvgComponent', () => {
  let component: PathSvgComponent;
  let fixture: ComponentFixture<PathSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PathSvgComponent]
    });
    fixture = TestBed.createComponent(PathSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
