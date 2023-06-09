import { createAction, props } from '@ngrx/store';
import { PlayerState } from './player.reducer';

export const createPlayerSuccess = createAction(
  '[Player] Create Player Success',
  props<{ playerState: PlayerState }>()
);
export const createPlayer = createAction(
  '[Player] Create Player',
  props<{ selectedCharacterId: number }>()
);
export const createPlayerError = createAction('[Player] Create Player Error');

// TODO: break down updatePlayer action into smaller actions such as: takeDamage
export const updatePlayer = createAction(
  '[Player] Update Player',
  props<{ playerState: PlayerState }>()
);

export const playerDie = createAction('[Player] Player Die');

export const getPlayerByIdentityKeySuccess = createAction(
  '[Player] Get By Identity Key Player Success',
  props<{ playerState: PlayerState }>()
);
export const getPlayerByIdentityKey = createAction(
  '[Player] Get By Identity Key Player',
  props<{ identityKey: string }>()
);
export const getPlayerByIdentityKeyError = createAction(
  '[Player] Get By Identity Key Player Error',
  props<{ error: unknown }>()
);

export const enterPortalSuccess = createAction('[Board] Enter Portal Success');
export const enterPortal = createAction(
  '[Board] Enter Portal Board',
  props<{ playerId: number }>()
);
export const enterPortalError = createAction(
  '[Board] Enter Portal Board Error'
);
