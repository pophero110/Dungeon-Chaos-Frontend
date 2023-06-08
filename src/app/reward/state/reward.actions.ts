import { createAction, props } from '@ngrx/store';
import { RewardState } from './reward.reducer';

export const openTreasure = createAction(
  '[Reward] Open Treasure',

  props<{ playerId: number; treasurePosition: number }>()
);

export const openTreasureSuccess = createAction(
  '[Reward] Open Treasure Success',
  props<{ rewardState: RewardState; treasurePosition: number }>()
);

export const openTreasureError = createAction(
  '[Reward] Open Treasure Error',
  props<{ error: unknown }>()
);

export const takeTreasure = createAction(
  '[Reward] Take Treasure',
  props<{ itemId: number; treasurePosition: number }>()
);

export const takeTreasureSuccess = createAction(
  '[Reward] Take Treasure Success'
);

export const discardTreasure = createAction(
  '[Reward] Discard Treasure',
  props<{ treasurePosition: number }>()
);

export const discardTreasureSuccess = createAction(
  '[Reward] Discard Treasure Success'
);
