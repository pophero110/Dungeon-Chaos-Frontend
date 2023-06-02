import { createReducer, on } from '@ngrx/store';
import { Player } from '../player.model';
import { createPlayerSuccess } from './player.actions';

export interface PlayerState {
  player: Player | null;
}

export const initialState: PlayerState = {
  player: null,
};

export const playerReducer = createReducer(
  initialState,
  on(createPlayerSuccess, (state, { player }) => ({
    ...state,
    player,
  }))
);
