import { createReducer, on } from '@ngrx/store';
import { Fight } from '../fight.model';
import { startFightSuccess } from './fight.actions';

export interface FightState {
  fight: Fight | null;
}

const initialState: FightState = {
  fight: null,
};

export const fightReducer = createReducer(
  initialState,
  on(startFightSuccess, (state, action) => {
    console.log('start fight success');

    return {
      ...state,
    };
  })
);
