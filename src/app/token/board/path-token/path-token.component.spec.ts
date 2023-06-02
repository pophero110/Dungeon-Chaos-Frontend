import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathTokenComponent } from './path-token.component';

describe('PathTokenComponent', () => {
  let component: PathTokenComponent;
  let fixture: ComponentFixture<PathTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PathTokenComponent],
    });
    fixture = TestBed.createComponent(PathTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
