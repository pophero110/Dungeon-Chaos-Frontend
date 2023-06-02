import { createReducer, on } from '@ngrx/store';
import { fetchBoardSuccess } from './board.actions';
import { Board } from '../../board/board.model';

export const initialState: Board = {
  tiles: [],
};

export const boardReducer = createReducer(
  initialState,
  on(fetchBoardSuccess, (state, { tiles }) => ({ ...state, tiles }))
);
