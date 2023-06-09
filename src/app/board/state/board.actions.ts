import { createAction, props } from '@ngrx/store';
import { BoardState } from './board.reducer';

export const fetchBoardSuccess = createAction(
  '[Board] Fetch Board Success',
  props<BoardState>()
);
export const fetchBoard = createAction(
  '[Board] Fetch Board',
  props<{ playerId: number }>()
);
export const fetchBoardError = createAction('[Board] Fetch Board Error');

export const makeMove = createAction(
  '[Board] Make Move',
  props<{ position: number }>()
);

export const removeToken = createAction(
  '[Board] Remove Token',
  props<{ position: number }>()
);
