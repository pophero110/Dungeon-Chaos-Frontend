import { createReducer, on } from '@ngrx/store';
import { Character } from 'src/app/character/character.model';
import { fetchCharacterSuccess, selectCharacter } from './character.actions';
import { log } from 'src/app/utils/log';
import { findCharacterById } from '../character.utils';

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
    const selectedCharacter = findCharacterById(
      state.characters,
      selectedCharacterId
    );
    log('selected character', selectedCharacter, state.characters);
    if (selectedCharacter) {
      return {
        ...state,
        selectedCharacter: selectedCharacter,
      };
    }
    return { ...state };
  })
);
