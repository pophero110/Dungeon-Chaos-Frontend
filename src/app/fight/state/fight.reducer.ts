import { createReducer, on } from '@ngrx/store';
import { CurrentTurn, FightResult, Opponent } from '../fight.model';
import {
  endFight,
  opponentPerformActionSuccess,
  playerPerformActionSuccess,
  startFight,
  startFightSuccess,
} from './fight.actions';
import { logEnd } from 'src/app/utils/log';
import { Player } from 'src/app/player/player.model';

export interface FightState {
  id: number;
  fightResult: FightResult;
  opponent: Opponent;
  player: Player;
  currentTurn: CurrentTurn;
  opponentPosition: number;
  isFighting: boolean;
  opponentActionType: string;
  playerActionType: string;
}

const initialState: FightState | object = {};

export const fightReducer = createReducer(
  initialState,
  on(startFight, (state, { opponentPosition }) => {
    return { ...state, opponentPosition, isFighting: true };
  }),
  on(startFightSuccess, (state, { fightState }) => ({
    ...state,
    ...fightState,
  })),
  on(playerPerformActionSuccess, (state, { fightState }) => ({
    ...state,
    ...fightState,
  })),
  on(opponentPerformActionSuccess, (state, { fightState }) => {
    return {
      ...state,
      ...fightState,
    };
  }),
  on(endFight, () => {
    logEnd('end fight');
    return initialState;
  })
);
