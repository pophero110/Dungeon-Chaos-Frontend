import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  equipArmor,
  equipArmorError,
  equipArmorSuccess,
  equipWeapon,
  equipWeaponError,
  equipWeaponSuccess,
  unequipArmor,
  unequipArmorError,
  unequipArmorSuccess,
  unequipWeapon,
  unequipWeaponError,
  unequipWeaponSuccess,
} from './inventory.actions';
import { InventoryService } from '../service/inventory.service';
import { catchError, concat, mergeMap, of } from 'rxjs';
import { InventoryState } from './inventory.reducer';
import { log } from 'src/app/utils/log';
import { PlayerState } from '../../player/state/player.reducer';
import { updatePlayer } from 'src/app/player/state/player.actions';

@Injectable()
export class InventoryEffects {
  equipWeapon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(equipWeapon),
      mergeMap(({ inventoryItemId }) => {
        log('equip weapon effect', inventoryItemId);
        return this.inventoryService.equipWeapon(inventoryItemId).pipe(
          mergeMap((response) => {
            const playerState = response as PlayerState;
            const playerInventory = response as { inventory: InventoryState };
            return concat(
              of(
                equipWeaponSuccess({
                  inventoryState: playerInventory.inventory,
                })
              ),
              of(updatePlayer({ playerState }))
            );
          }),
          catchError((error) => of(equipWeaponError({ error })))
        );
      })
    )
  );

  unequipWeapon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(unequipWeapon),
      mergeMap(({ inventoryItemId }) => {
        log('equip weapon effect', inventoryItemId);
        return this.inventoryService.unequipWeapon(inventoryItemId).pipe(
          mergeMap((response) => {
            const playerState = response as PlayerState;
            const playerInventory = response as { inventory: InventoryState };
            return concat(
              of(
                unequipWeaponSuccess({
                  inventoryState: playerInventory.inventory,
                })
              ),
              of(updatePlayer({ playerState }))
            );
          }),
          catchError((error) => of(unequipWeaponError({ error })))
        );
      })
    )
  );

  equipArmor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(equipArmor),
      mergeMap(({ inventoryItemId }) => {
        log('equip armor effect', inventoryItemId);
        return this.inventoryService.equipArmor(inventoryItemId).pipe(
          mergeMap((response) => {
            const playerState = response as PlayerState;
            const playerInventory = response as { inventory: InventoryState };
            return concat(
              of(
                equipArmorSuccess({
                  inventoryState: playerInventory.inventory,
                })
              ),
              of(updatePlayer({ playerState }))
            );
          }),
          catchError((error) => of(equipArmorError({ error })))
        );
      })
    )
  );

  unequipArmor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(unequipArmor),
      mergeMap(({ inventoryItemId }) => {
        log('equip armor effect', inventoryItemId);
        return this.inventoryService.unequipArmor(inventoryItemId).pipe(
          mergeMap((response) => {
            const playerState = response as PlayerState;
            const playerInventory = response as { inventory: InventoryState };
            return concat(
              of(
                unequipArmorSuccess({
                  inventoryState: playerInventory.inventory,
                })
              ),
              of(updatePlayer({ playerState }))
            );
          }),
          catchError((error) => of(unequipArmorError({ error })))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private inventoryService: InventoryService
  ) {}
}
