import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PlayerState } from './player.reducer';

export const selectPlayerState = createFeatureSelector<PlayerState>('player');

export const selectPlayerCharacterName = createSelector(
  selectPlayerState,
  (state) => state.name
);

export const selectPlayerId = createSelector(
  selectPlayerState,
  (state) => state.id
);

export const selectIsPlayerCreated = createSelector(
  selectPlayerState,
  (state) => state.isCreated
);

export const selectPlayerIdentityKeyAndDifficulty = createSelector(
  selectPlayerState,
  (state) => {
    return { identityKey: state.identityKey, difficulty: state.difficulty };
  }
);
