import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PlayerState } from './player.reducer';

export const selectCharacterState =
  createFeatureSelector<PlayerState>('player');

export const selectPlayer = createSelector(
  selectCharacterState,
  (state) => state.player
);
