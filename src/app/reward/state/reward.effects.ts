import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RewardService } from '../service/reward.service';
import {
  discardTreasure,
  discardTreasureSuccess,
  openTreasure,
  openTreasureError,
  openTreasureSuccess,
  takeTreasure,
  takeTreasureSuccess,
} from './reward.actions';
import { RewardState } from './reward.reducer';
import { catchError, concat, map, mergeMap, of } from 'rxjs';
import { addItemToInventory } from 'src/app/inventory/state/inventory.actions';
import { makeMove, removeToken } from 'src/app/board/state/board.actions';

@Injectable()
export class RewardEffects {
  openTreasure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(openTreasure),
      mergeMap(({ playerId, treasurePosition }) =>
        this.rewardService.createReward(playerId).pipe(
          map((response) => {
            return openTreasureSuccess({
              rewardState: response as RewardState,
              treasurePosition,
            });
          }),
          catchError((error) => of(openTreasureError({ error })))
        )
      )
    )
  );

  takeTreasure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(takeTreasure),
      mergeMap(({ itemId, treasurePosition }) => {
        return concat(
          of(takeTreasureSuccess()),
          of(removeToken({ position: treasurePosition })),
          of(addItemToInventory({ itemId }))
        );
      })
    )
  );

  discardTreasure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(discardTreasure),
      mergeMap(({ treasurePosition }) => {
        return concat(
          of(discardTreasureSuccess()),
          of(removeToken({ position: treasurePosition })),
          of(makeMove({ position: treasurePosition }))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private rewardService: RewardService
  ) {}
}
