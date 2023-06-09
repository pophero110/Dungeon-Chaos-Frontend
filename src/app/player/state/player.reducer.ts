import { createReducer, on } from '@ngrx/store';
import {
  createPlayerError,
  createPlayerSuccess,
  enterPortalSuccess,
  getPlayerByIdentityKeySuccess,
  playerDie,
  updatePlayer,
} from './player.actions';
import { log } from 'src/app/utils/log';
import { getPlayerByIdentityKeyError } from './player.actions';

export interface PlayerState {
  id: number;
  name: string;
  health: number;
  attack: number;
  defense: number;
  speed: number;
  goldCoin: number;
  isCreated: boolean;
  identityKey: string;
  difficulty: number;
}

export const initialState: PlayerState | object = {
  isCreated: false,
};

export const playerReducer = createReducer(
  initialState,
  on(createPlayerSuccess, (state, { playerState }) => ({
    ...state,
    ...playerState,
    isCreated: true,
  })),
  on(updatePlayer, (state, { playerState }) => {
    log('update player attributes', playerState);
    return {
      ...state,
      ...playerState,
    };
  }),
  on(playerDie, () => initialState),
  on(createPlayerError, () => {
    new Error('Player creation failed');
    return initialState;
  }),
  on(getPlayerByIdentityKeySuccess, (state, { playerState }) => {
    log('get player by identity success', playerState);
    return {
      ...state,
      ...playerState,
      isCreated: true,
    };
  }),
  on(getPlayerByIdentityKeyError, (state, { error }) => {
    log('get player by identity key error', error);
    return {
      ...state,
    };
  }),
  on(enterPortalSuccess, (state) => {
    log('enter portal success');
    return { ...state };
  })
);
