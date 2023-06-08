import { createReducer, on } from '@ngrx/store';
import { RewardType } from '../reward.model';
import {
  discardTreasureSuccess,
  openTreasureError,
  openTreasureSuccess,
  takeTreasureSuccess,
} from './reward.actions';
import { log } from 'src/app/utils/log';

export interface RewardState {
  rewardItemId: number;
  description: string;
  rewardType: RewardType;
  treasurePosition: number;
}

const initialState: RewardState | object = {};

export const rewardReducer = createReducer(
  initialState,

  on(openTreasureSuccess, (state, { rewardState, treasurePosition }) => {
    log('open treasure success', rewardState);
    return {
      ...state,
      ...rewardState,
      treasurePosition,
    };
  }),
  on(openTreasureError, (state, { error }) => {
    log('open treasure error', error);
    return {
      ...state,
    };
  }),
  on(takeTreasureSuccess, () => {
    log('take treasure success');
    return {
      ...initialState,
    };
  }),
  on(discardTreasureSuccess, () => {
    log('discard treasure success');
    return {
      ...initialState,
    };
  })
);
