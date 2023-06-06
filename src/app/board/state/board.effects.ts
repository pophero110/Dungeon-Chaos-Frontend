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
import { FetchBoardResponse } from 'src/app/utils/api/boardApi';

@Injectable()
export class BoardEffects {
  fetchBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchBoard),
      mergeMap(() =>
        this.boardService.fetchBoard().pipe(
          map((response) => {
            const tileMatrix = this.convertArrayStringIntoMatrix(
              (response as FetchBoardResponse).board
            );
            const currentPlayerPosition =
              this.findPositionOfStartingPoint(tileMatrix);
            return fetchBoardSuccess({
              tileMatrix,
              currentPlayerPosition,
            });
          }),
          catchError(() => of(fetchBoardError()))
        )
      )
    )
  );

  private convertArrayStringIntoMatrix(array: string[]): string[][] {
    return array.map((row) => row.split(''));
  }

  private findPositionOfStartingPoint(matrix: string[][]): number {
    let position = 0;
    matrix.forEach((arr, row) => {
      arr.find((string, column) => {
        if (string === 'S') position = row * 12 + column;
      });
    });
    return position;
  }

  constructor(private actions$: Actions, private boardService: BoardService) {}
}
