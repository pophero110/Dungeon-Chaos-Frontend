import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/inventory/inventory.model';

export const fetchItems = createAction('[Item] Fetch Items');

export const fetchItemsSuccess = createAction(
  '[Item] Fetch Items Success',
  props<{ items: Item[] }>()
);
export const fetchItemsError = createAction(
  '[Item] Fetch Items Error',
  props<{ error: unknown }>()
);
