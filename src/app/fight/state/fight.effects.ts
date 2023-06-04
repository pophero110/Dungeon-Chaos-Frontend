import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FightService } from '../service/fight.service';
import {
  startFight,
  startFightError,
  startFightSuccess,
} from './fight.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Fight } from '../fight.model';

@Injectable()
export class FightEffects {
  startFight$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startFight),
      mergeMap(({ playerId, monsterId }) =>
        this.fightService.startFight({ playerId, monsterId }).pipe(
          map((response) => {
            console.log({ response });
            return startFightSuccess({
              fight: response as Fight,
            });
          }),
          catchError(() => of(startFightError))
        )
      )
    )
  );

  constructor(private actions$: Actions, private fightService: FightService) {}
}
