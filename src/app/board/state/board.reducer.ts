import { createReducer, on } from '@ngrx/store';
import {
  fetchBoardError,
  fetchBoardSuccess,
  makeMove,
  removeToken,
} from './board.actions';
import { convertToMatrixIndex } from '../board.utils';

export interface BoardState {
  tileMatrix: string[][];
  currentPlayerPosition: number;
  errorMessage?: string;
}

export const initialState: BoardState = {
  tileMatrix: [],
  currentPlayerPosition: -999,
  errorMessage: '',
};

export const boardReducer = createReducer(
  initialState,
  on(fetchBoardSuccess, (state, { tileMatrix, currentPlayerPosition }) => ({
    ...state,
    tileMatrix,
    currentPlayerPosition,
  })),
  on(fetchBoardError, (state) => {
    throw new Error('Fetch Board Error');
    return { ...state };
  }),
  on(makeMove, (state, { position }) => {
    return {
      ...state,
      currentPlayerPosition: position,
    };
  }),
  on(removeToken, (state, { position }) => {
    if (position) {
      const { row, col } = convertToMatrixIndex(position);
      const tileMatrix = [...state.tileMatrix];
      tileMatrix[row] = [...tileMatrix[row]];
      tileMatrix[row][col] = 'P';
      return {
        ...state,
        tileMatrix: [...tileMatrix],
      };
    }
    return {
      ...state,
    };
  })
);
