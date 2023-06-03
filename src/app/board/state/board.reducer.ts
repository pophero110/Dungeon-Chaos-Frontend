import { createReducer, on } from '@ngrx/store';
import { fetchBoardSuccess, makeMove } from './board.actions';
import { isValidMove } from '../board.utils';

export interface BoardState {
  tileMatrix: string[][];
  currentPlayerPosition: number | null;
  errorMessage?: string;
}

export const initialState: BoardState = {
  tileMatrix: [],
  currentPlayerPosition: null,
  errorMessage: '',
};

export const boardReducer = createReducer(
  initialState,
  on(fetchBoardSuccess, (state, { tileMatrix, currentPlayerPosition }) => ({
    ...state,
    tileMatrix,
    currentPlayerPosition,
  })),
  on(makeMove, (state, { tile, position }) => {
    if (isValidMove(state.currentPlayerPosition as number, position, tile)) {
      return {
        ...state,
        currentPlayerPosition: position,
      };
    }
    return { ...state };
  })
);
