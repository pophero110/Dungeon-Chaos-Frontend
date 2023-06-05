import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterFormComponent } from './character-form.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { CharacterModule } from '../../character.module';

describe('CharacterFormComponent', () => {
  let component: CharacterFormComponent;
  let fixture: ComponentFixture<CharacterFormComponent>;
  let mockOnSubmit: jasmine.Spy;
  let mockOnCharacterSelection: jasmine.Spy;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), FormsModule, CharacterModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFormComponent);
    component = fixture.componentInstance;
    mockOnSubmit = jasmine.createSpy('onSubmit');
    mockOnCharacterSelection = jasmine.createSpy('onCharacterSelection');
    component.onSubmit = mockOnSubmit;
    component.onCharacterSelection = mockOnCharacterSelection;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch selectCharacter action on character selection', () => {
    const selectedCharacterId = 1;
    component.selectedCharacterId = selectedCharacterId;
    component.onCharacterSelection();
    expect(mockOnCharacterSelection).toHaveBeenCalled();
  });

  it('should dispatch createPlayer action on form submission', () => {
    const selectedCharacterId = 1;
    component.selectedCharacterId = selectedCharacterId;
    component.onSubmit();
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('should disable submit button when no character is selected', () => {
    const submitButton = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    );
    expect(submitButton.disabled).toBeTrue();

    component.selectedCharacterId = 1;
    fixture.detectChanges();

    expect(submitButton.disabled).toBeFalse();
  });
});
