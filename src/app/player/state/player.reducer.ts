import { createReducer, on } from '@ngrx/store';
import {
  createPlayerError,
  createPlayerSuccess,
  playerDie,
  updatePlayer,
} from './player.actions';

export interface PlayerState {
  id: number;
  name: string;
  health: number;
  attack: number;
  defense: number;
  speed: number;
  goldCoin: number;
  created: boolean;
}

export const initialState: PlayerState | object = {
  created: false,
};

export const playerReducer = createReducer(
  initialState,
  on(createPlayerSuccess, (state, { playerState }) => ({
    ...state,
    ...playerState,
    created: true,
  })),
  on(updatePlayer, (state, { playerState }) => {
    return {
      ...state,
      ...playerState,
    };
  }),
  on(playerDie, () => initialState),
  on(createPlayerError, () => {
    new Error('Player creation failed');
    return initialState;
  })
);
