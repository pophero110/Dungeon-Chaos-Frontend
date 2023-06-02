import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BoardState } from './board.reducer';

export const selectBoardState = createFeatureSelector<BoardState>('board');

export const selectBoard = createSelector(
  selectBoardState,
  (state) => state.tiles
);
