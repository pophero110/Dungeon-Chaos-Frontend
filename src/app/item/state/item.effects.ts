import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ItemService } from '../service/item.service';
import {
  fetchItems,
  fetchItemsError,
  fetchItemsSuccess,
} from './item.actionts';
import { Item } from 'src/app/inventory/inventory.model';
import { mergeMap, map, catchError, of } from 'rxjs';

@Injectable()
export class ItemEffects {
  fetchItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchItems),
      mergeMap(() =>
        this.itemService.fetchItems().pipe(
          map((response) => {
            return fetchItemsSuccess({
              items: response as Item[],
            });
          }),
          catchError((error) => of(fetchItemsError({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private itemService: ItemService) {}
}
