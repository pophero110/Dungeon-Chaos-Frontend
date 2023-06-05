import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FightState } from './fight.reducer';
import { CurrentTurn } from '../fight.model';
import { log } from 'src/app/utils/log';

export const selectFightState = createFeatureSelector<FightState>('fight');

export const selectFightOpponent = createSelector(
  selectFightState,
  (state) => state.opponent
);

export const selectFightResult = createSelector(
  selectFightState,
  (state) => state.fightResult
);

export const selectOpponentTurn = createSelector(
  selectFightState,
  (state: FightState) => {
    if (state.currentTurn) {
      log('current turn:', state.currentTurn);
      return state.currentTurn === CurrentTurn.OPPONENT;
    }
    return;
  }
);

export const selectFightId = createSelector(
  selectFightState,
  (state) => state.id
);
