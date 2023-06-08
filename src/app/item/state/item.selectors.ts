import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemState } from './item.reducer';

export const selectItemState = createFeatureSelector<ItemState>('item');

export const selectItems = createSelector(selectItemState, (state) => [
  ...state.items,
]);
