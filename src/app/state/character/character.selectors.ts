import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CharacterState } from './character.reducer';

export const selectCharacterState =
  createFeatureSelector<CharacterState>('character');

export const selectCharacters = createSelector(
  selectCharacterState,
  (state) => state.characters
);
