import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallTokenComponent } from './wall-token.component';

describe('WallTokenComponent', () => {
  let component: WallTokenComponent;
  let fixture: ComponentFixture<WallTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WallTokenComponent],
    });
    fixture = TestBed.createComponent(WallTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
