import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  createPlayer,
  createPlayerError,
  createPlayerSuccess,
} from './player.actions';
import { PlayerService } from '../service/player.service';
import { Player } from '../player.model';

@Injectable()
export class PlayerEffects {
  createPlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPlayer),
      mergeMap((action) => {
        return this.playerService.createPlayer(action.selectedCharacterId).pipe(
          map((response) => {
            return createPlayerSuccess({
              player: response as Player,
            });
          }),
          catchError(() => of(createPlayerError))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private playerService: PlayerService
  ) {}
}
