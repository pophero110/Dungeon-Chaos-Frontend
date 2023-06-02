import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CharacterState } from './character.reducer';

export const selectBoardState =
  createFeatureSelector<CharacterState>('character');

export const selectCharacter = createSelector(
  selectBoardState,
  (state) => state.characters
);
