import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPanelComponent } from './character-panel.component';

describe('CharacterPanelComponent', () => {
  let component: CharacterPanelComponent;
  let fixture: ComponentFixture<CharacterPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterPanelComponent]
    });
    fixture = TestBed.createComponent(CharacterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
