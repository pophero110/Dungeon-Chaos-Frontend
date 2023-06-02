import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Board } from 'src/app/board/board.model';

export const selectBoardState = createFeatureSelector<Board>('board');

export const selectBoard = createSelector(
  selectBoardState,
  (state) => state.tiles
);
