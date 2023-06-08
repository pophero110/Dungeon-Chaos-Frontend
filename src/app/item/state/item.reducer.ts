import { createReducer, on } from '@ngrx/store';
import { Item } from '../../inventory/inventory.model';
import { fetchItemsError, fetchItemsSuccess } from './item.actionts';
import { log } from 'src/app/utils/log';

export interface ItemState {
  items: Item[];
}

const initialState: ItemState = { items: [] };
export const itemReducer = createReducer(
  initialState,

  on(fetchItemsSuccess, (state, { items }) => {
    log('fetch items success ', items);
    return {
      ...state,
      items: [...items],
    };
  }),
  on(fetchItemsError, (state, { error }) => {
    console.error('fetch items error ', error);
    return {
      ...state,
    };
  })
);
