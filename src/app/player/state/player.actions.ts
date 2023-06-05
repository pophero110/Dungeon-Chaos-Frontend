import { createAction, props } from '@ngrx/store';
import { PlayerState } from './player.reducer';

export const createPlayerSuccess = createAction(
  '[Player] Create Player Success',
  props<{ playerState: PlayerState }>()
);
export const createPlayer = createAction(
  '[Player] Create Player',
  props<{ selectedCharacterId: string }>()
);
export const createPlayerError = createAction('[Player] Create Player Error');

export const updatePlayer = createAction(
  '[Player] Update Player',
  props<{ playerState: PlayerState }>()
);

export const playerDie = createAction('[Player] Player Die');
