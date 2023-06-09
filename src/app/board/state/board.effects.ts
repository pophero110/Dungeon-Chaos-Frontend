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
import {
  convertArrayStringIntoMatrix,
  findPositionOfStartingPoint,
  hideTilesExceptTilesSurroundingStartTile,
} from '../board.utils';
@Injectable()
export class BoardEffects {
  fetchBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchBoard),
      mergeMap(({ playerId }) =>
        this.boardService.fetchBoard(playerId).pipe(
          map((response) => {
            const tileMatrix = convertArrayStringIntoMatrix(
              (response as FetchBoardResponse).board
            );
            const currentPlayerPosition =
              findPositionOfStartingPoint(tileMatrix);
            const hiddenTileMatrix = hideTilesExceptTilesSurroundingStartTile(
              tileMatrix,
              currentPlayerPosition
            );
            return fetchBoardSuccess({
              tileMatrix: hiddenTileMatrix,
              currentPlayerPosition,
            });
          }),
          catchError(() => of(fetchBoardError()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private boardService: BoardService) {}
}
