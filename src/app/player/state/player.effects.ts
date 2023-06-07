import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concat, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import {
  createPlayer,
  createPlayerError,
  createPlayerSuccess,
} from './player.actions';
import { PlayerService } from '../service/player.service';
import { PlayerState } from './player.reducer';
import { initializeInventory } from 'src/app/inventory/state/inventory.actions';
import { InventoryState } from 'src/app/inventory/state/inventory.reducer';
import { log } from 'src/app/utils/log';

@Injectable()
export class PlayerEffects {
  createPlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPlayer),
      mergeMap(({ selectedCharacterId }) => {
        return this.playerService.createPlayer(selectedCharacterId).pipe(
          mergeMap((response) => {
            log('create player', { selectedCharacterId });
            return concat(
              of(
                createPlayerSuccess({
                  playerState: response as PlayerState,
                })
              ),
              of(
                initializeInventory({
                  ...(response as { inventory: InventoryState }).inventory,
                })
              )
            );
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
