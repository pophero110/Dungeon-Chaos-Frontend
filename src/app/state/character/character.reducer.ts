import { createReducer, on } from '@ngrx/store';
import { Character } from 'src/app/character/character.model';
import { fetchCharacterSuccess } from './character.actions';

export interface CharacterState {
  characters: Character[];
}

export const initialState: CharacterState = {
  characters: [],
};

export const characterReducer = createReducer(
  initialState,
  on(fetchCharacterSuccess, (state, { characters }) => ({
    ...state,
    characters,
  }))
);
