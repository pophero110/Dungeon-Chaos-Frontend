import { createReducer, on } from '@ngrx/store';
import { Character } from 'src/app/character/character.model';
import { fetchCharacterSuccess, selectCharacter } from './character.actions';

export interface CharacterState {
  characters: Character[];
  selectedCharacter: Character | null;
}

export const initialState: CharacterState = {
  characters: [],
  selectedCharacter: null,
};

export const characterReducer = createReducer(
  initialState,
  on(fetchCharacterSuccess, (state, { characters }) => ({
    ...state,
    characters,
  })),
  on(selectCharacter, (state, { selectedCharacterId }) => {
    const selectedCharacter =
      state.characters.find((c) => c.id === +selectedCharacterId) || null;
    console.log(selectedCharacter, selectedCharacterId);

    return {
      ...state,
      selectedCharacter: selectedCharacter,
    };
  })
);
