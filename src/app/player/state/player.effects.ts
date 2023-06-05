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
import { PlayerState } from './player.reducer';

@Injectable()
export class PlayerEffects {
  createPlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPlayer),
      mergeMap(({ selectedCharacterId }) => {
        return this.playerService.createPlayer(selectedCharacterId).pipe(
          map((response) => {
            return createPlayerSuccess({
              playerState: response as PlayerState,
            });
          }),
          catchError(() => of(createPlayerError()))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private playerService: PlayerService
  ) {}
}
