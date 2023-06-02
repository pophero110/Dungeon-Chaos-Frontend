import { createAction, props } from '@ngrx/store';
import { Board } from 'src/app/board/board.model';

export const fetchBoardSuccess = createAction(
  '[Board] Fetch Board Success',
  props<Board>()
);
export const fetchBoard = createAction('[Board] Fetch Board');
export const fetchBoardError = createAction('[Board] Fetch Board Error');
