import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concat, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import {
  createPlayer,
  createPlayerError,
  createPlayerSuccess,
  enterPortal,
  enterPortalError,
  enterPortalSuccess,
  getPlayerByIdentityKey,
  getPlayerByIdentityKeyError,
  getPlayerByIdentityKeySuccess,
  updatePlayer,
} from './player.actions';
import { PlayerService } from '../service/player.service';
import { PlayerState } from './player.reducer';
import { initializeInventory } from 'src/app/inventory/state/inventory.actions';
import { InventoryState } from 'src/app/inventory/state/inventory.reducer';
import { log } from 'src/app/utils/log';
import { fetchBoard } from 'src/app/board/state/board.actions';

@Injectable()
export class PlayerEffects {
  createPlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPlayer),
      mergeMap(({ selectedCharacterId }) => {
        return this.playerService.createPlayer(selectedCharacterId).pipe(
          mergeMap((response) => {
            log('create player', { selectedCharacterId });
            const playerState = response as PlayerState;
            return concat(
              of(
                createPlayerSuccess({
                  playerState,
                })
              ),
              of(
                initializeInventory({
                  ...(response as { inventory: InventoryState }).inventory,
                })
              ),
              of(fetchBoard({ playerId: playerState.id }))
            );
          }),
          catchError(() => of(createPlayerError()))
        );
      })
    )
  );

  getPlayerByIdentityKey$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPlayerByIdentityKey),
      mergeMap(({ identityKey }) => {
        return this.playerService.getPlayerByIdentityKey(identityKey).pipe(
          mergeMap((response) => {
            log('get player by identity key', { identityKey });
            const playerState = response as PlayerState;
            return concat(
              of(
                getPlayerByIdentityKeySuccess({
                  playerState,
                })
              ),
              of(
                initializeInventory({
                  ...(response as { inventory: InventoryState }).inventory,
                })
              ),
              of(fetchBoard({ playerId: playerState.id }))
            );
          }),
          catchError((error) => of(getPlayerByIdentityKeyError(error)))
        );
      })
    )
  );

  enterPortal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(enterPortal),
      mergeMap(({ playerId }) =>
        this.playerService.increasePlayerDifficulty(playerId).pipe(
          mergeMap((response) => {
            const playerState = response as PlayerState;
            return concat(
              of(enterPortalSuccess()),
              of(fetchBoard({ playerId })),
              of(updatePlayer({ playerState }))
            );
          }),
          catchError(() => of(enterPortalError()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private playerService: PlayerService
  ) {}
}
