import { createAction, props } from '@ngrx/store';

export const fetchBoardSuccess = createAction(
  '[Board] Fetch Board Success',
  props<{ tiles: string[] }>()
);
export const fetchBoard = createAction('[Board] Fetch Board');
export const fetchBoardError = createAction('[Board] Fetch Board Error');
