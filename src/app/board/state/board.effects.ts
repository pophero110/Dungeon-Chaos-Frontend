import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BoardService } from '../service/board.service';
import {
  fetchBoard,
  fetchBoardError,
  fetchBoardSuccess,
} from './board.actions';
import { FetchBoardResponse } from 'src/app/utils/boardApi';

@Injectable()
export class BookEffects {
  fetchBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchBoard),
      mergeMap(() =>
        this.boardService.fetchBoard().pipe(
          map((response) => {
            const tiles: string[] = (response as FetchBoardResponse).board;
            return fetchBoardSuccess({
              tiles: tiles.map((row) => row.split('')).flat(),
            });
          }),
          catchError(() => of(fetchBoardError))
        )
      )
    )
  );

  constructor(private actions$: Actions, private boardService: BoardService) {}
}
