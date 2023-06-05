import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CharacterContainerComponent } from './character-container.component';
import { selectCharacter } from '../../state/character.actions';
import {
  selectCharacters,
  selectSelectedCharacter,
} from '../../state/character.selectors';
import { selectIsPlayerCreated } from 'src/app/player/state/player.selectors';
import { fetchCharacter } from '../../state/character.actions';
import { createPlayer } from 'src/app/player/state/player.actions';
import { fakeCharacter } from 'src/app/test/fakeState';
import { CharacterModule } from '../../character.module';

describe('CharacterContainerComponent', () => {
  let component: CharacterContainerComponent;
  let fixture: ComponentFixture<CharacterContainerComponent>;
  let store: MockStore;

  const initialState = {
    characters: [fakeCharacter],
    selectedCharacter: fakeCharacter,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterContainerComponent],
      imports: [CharacterModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    store.overrideSelector(selectCharacters, initialState.characters);
    store.overrideSelector(selectSelectedCharacter, null);
    store.overrideSelector(selectIsPlayerCreated, false);
    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch fetchCharacter action on component initialization', () => {
    expect(store.dispatch).toHaveBeenCalledWith(fetchCharacter());
  });

  it('should dispatch selectCharacter action on character selection', () => {
    const selectedCharacterId = 1;
    component.selectedCharacterId = selectedCharacterId;
    component.onCharacterSelection();
    expect(store.dispatch).toHaveBeenCalledWith(
      selectCharacter({ selectedCharacterId })
    );
  });

  it('should dispatch createPlayer action on form submission', () => {
    const selectedCharacterId = 1;
    component.selectedCharacterId = selectedCharacterId;
    component.onSubmit();
    expect(store.dispatch).toHaveBeenCalledWith(
      createPlayer({ selectedCharacterId })
    );
  });
});
