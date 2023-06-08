import { createReducer, on } from '@ngrx/store';
import {
  fetchBoardError,
  fetchBoardSuccess,
  makeMove,
  removeToken,
} from './board.actions';
import {
  convertArrayIndexToMatrixIndex,
  uncoverSurroundingTiles,
  isVisitedTile,
} from '../board.utils';
import { log } from 'src/app/utils/log';

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
  on(fetchBoardSuccess, (state, { tileMatrix, currentPlayerPosition }) => {
    log('fetch board success', tileMatrix);
    return {
      ...state,
      tileMatrix,
      currentPlayerPosition,
    };
  }),
  on(fetchBoardError, (state) => {
    throw new Error('Fetch Board Error');
    return { ...state };
  }),
  on(makeMove, (state, { position }) => {
    if (isVisitedTile({ tileMatrix: state.tileMatrix, position })) {
      const tileMatrix = uncoverSurroundingTiles(state.tileMatrix, position);
      return {
        ...state,
        tileMatrix,
        currentPlayerPosition: position,
      };
    }
    return {
      ...state,
    };
  }),
  on(removeToken, (state, { position }) => {
    if (position) {
      const { row, col } = convertArrayIndexToMatrixIndex(position);
      const tileMatrix = [...state.tileMatrix];
      tileMatrix[row] = [...tileMatrix[row]];
      tileMatrix[row][col] = 'P!';
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
