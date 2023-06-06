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

export const selectisOpponentTurn = createSelector(
  selectFightState,
  (state: FightState) => {
    log('current turn', state.currentTurn);
    return state.currentTurn === CurrentTurn.OPPONENT;
  }
);

export const selectIsFighting = createSelector(
  selectFightState,
  (state: FightState) => state.isFighting
);
