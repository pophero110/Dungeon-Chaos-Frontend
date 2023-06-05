import { createAction, props } from '@ngrx/store';
import { Player } from '../player.model';

export const createPlayerSuccess = createAction(
  '[Player] Create Player Success',
  props<{ player: Player }>()
);
export const createPlayer = createAction(
  '[Player] Create Player',
  props<{ selectedCharacterId: string }>()
);
export const createPlayerError = createAction('[Player] Create Player Error');

export const updatePlayer = createAction(
  '[Player] Update Player',
  props<{ player: Player }>()
);

export const playerDie = createAction('[Player] Player Die');
