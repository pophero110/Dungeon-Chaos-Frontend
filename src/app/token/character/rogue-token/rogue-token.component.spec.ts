import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RogueTokenComponent } from './rogue-token.component';

describe('RogueTokenComponent', () => {
  let component: RogueTokenComponent;
  let fixture: ComponentFixture<RogueTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RogueTokenComponent],
    });
    fixture = TestBed.createComponent(RogueTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
