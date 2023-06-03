import { createAction, props } from '@ngrx/store';
import { FightState } from './fight.reducer';

export const startFightSuccess = createAction(
  '[Fight] Start Fight Success',
  props<FightState>()
);

export const startFightError = createAction('[Fight] Start Fight Error');

export const startFight = createAction(
  '[Fight] Start Fight',
  props<{ playerId: number; monsterId: number }>()
);
