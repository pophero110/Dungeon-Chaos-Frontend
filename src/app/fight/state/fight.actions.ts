import { createAction, props } from '@ngrx/store';
import { FightState } from './fight.reducer';
import { ActionType } from '../fight.model';

export const startFightSuccess = createAction(
  '[Fight] Start Fight Success',
  props<{ fightState: FightState }>()
);

export const startFightError = createAction('[Fight] Start Fight Error');

export const startFight = createAction(
  '[Fight] Start Fight',
  props<{ playerId: number; opponentPosition: number }>()
);

export const playerPerformAction = createAction(
  '[Fight] Player Perform Action',
  props<{ actionType: ActionType }>()
);

export const playerPerformActionSuccess = createAction(
  '[Fight] Player Perform Action Success',
  props<{ fightState: FightState }>()
);

export const playerPerformActionError = createAction(
  '[Fight] Player Perform Action Error'
);

export const opponentPerformAction = createAction(
  '[Fight] Opponent Perform Action'
);

export const opponentPerformActionSuccess = createAction(
  '[Fight] Opponent Perform Action Success',
  props<{ fightState: FightState }>()
);

export const opponentPerformActionError = createAction(
  '[Fight] Opponent Perform Action Error'
);

export const endFight = createAction('[Fight] End Fight');

export const playerWinFight = createAction('[Fight] Player Win Fight');

export const playerLoseFight = createAction(
  '[Fight] Player Lose Fight',
  props<{ playerId: number }>()
);
