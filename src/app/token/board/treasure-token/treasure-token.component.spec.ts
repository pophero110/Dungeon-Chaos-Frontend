import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasureTokenComponent } from './treasure-token.component';

describe('TreasureTokenComponent', () => {
  let component: TreasureTokenComponent;
  let fixture: ComponentFixture<TreasureTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreasureTokenComponent]
    });
    fixture = TestBed.createComponent(TreasureTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
