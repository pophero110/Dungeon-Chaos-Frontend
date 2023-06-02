import { createReducer, on } from '@ngrx/store';
import { fetchBoardSuccess } from './board.actions';

export interface BoardState {
  tiles: string[];
}

export const initialState: BoardState = {
  tiles: [],
};

export const boardReducer = createReducer(
  initialState,
  on(fetchBoardSuccess, (state, { tiles }) => ({ ...state, tiles }))
);
