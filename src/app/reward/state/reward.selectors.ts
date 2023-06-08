import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RewardState } from './reward.reducer';

const selectRewardState = createFeatureSelector<RewardState>('reward');

export const selectRewardItemId = createSelector(
  selectRewardState,
  (state) => state.rewardItemId
);

export const selectTreasurePosition = createSelector(
  selectRewardState,
  (state) => state.treasurePosition
);
