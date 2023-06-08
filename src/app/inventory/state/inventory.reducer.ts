import { createReducer, on } from '@ngrx/store';
import { InventoryItem } from '../inventory.model';
import {
  addItemToInventoryError,
  addItemToInventorySuccess,
  consumePotionSuccess,
  equipArmorError,
  equipArmorSuccess,
  equipWeaponError,
  equipWeaponSuccess,
  fetchInventoryError,
  fetchInventorySuccess,
  hideItemPanel,
  initializeInventory,
  removeItemFromInventoryError,
  removeItemFromInventorySuccess,
  showItemPanel,
  unequipArmorError,
  unequipArmorSuccess,
  unequipWeaponError,
  unequipWeaponSuccess,
} from './inventory.actions';
import { log } from 'src/app/utils/log';
import { consumePotionError } from './inventory.actions';

export interface InventoryState {
  id: number;
  inventoryItems: InventoryItem[];
  selectedInventoryItem: InventoryItem;
}

const initialState: InventoryState | object = {};

export const inventoryReducer = createReducer(
  initialState,
  on(initializeInventory, (state, inventoryState) => {
    log('initialize inventory', inventoryState);
    return {
      ...state,
      ...inventoryState,
    };
  }),
  on(showItemPanel, (state, { inventoryItem }) => {
    log('show item panel', { inventoryItem });
    return {
      ...state,
      selectedInventoryItem: inventoryItem,
    };
  }),
  on(hideItemPanel, (state) => {
    log('hide item panel');
    return {
      ...state,
      selectedInventoryItem: null,
    };
  }),
  on(equipWeaponSuccess, (state, { inventoryState }) => {
    log('equip weapon success', inventoryState);
    return {
      ...state,
      ...inventoryState,
    };
  }),
  on(equipWeaponError, (state, { error }) => {
    log('equip weapon error', error);
    return {
      ...state,
    };
  }),
  on(unequipWeaponSuccess, (state, { inventoryState }) => {
    log('unequip weapon success', inventoryState);
    return {
      ...state,
      ...inventoryState,
    };
  }),
  on(unequipWeaponError, (state, { error }) => {
    log('unequip weapon error', error);
    return {
      ...state,
    };
  }),
  on(equipArmorSuccess, (state, { inventoryState }) => {
    log('equip armor success', inventoryState);
    return {
      ...state,
      ...inventoryState,
    };
  }),
  on(equipArmorError, (state, { error }) => {
    log('equip armor error', error);
    return {
      ...state,
    };
  }),
  on(unequipArmorSuccess, (state, { inventoryState }) => {
    log('unequip armor success', inventoryState);
    return {
      ...state,
      ...inventoryState,
    };
  }),
  on(unequipArmorError, (state, { error }) => {
    log('unequip armor error', error);
    return {
      ...state,
    };
  }),
  on(fetchInventorySuccess, (state, { inventoryState }) => {
    return {
      ...state,
      ...inventoryState,
    };
  }),
  on(fetchInventoryError, (state, { error }) => {
    console.error('fetch inventory error', error);
    return { ...state };
  }),
  on(addItemToInventorySuccess, (state, { inventoryState }) => {
    log('add item to inventory success');
    return {
      ...state,
      ...inventoryState,
    };
  }),
  on(addItemToInventoryError, (state, { error }) => {
    console.error('add item to inventory error', error);
    return { ...state };
  }),
  on(removeItemFromInventorySuccess, (state, { inventoryState }) => {
    log('remove item from inventory success');
    return {
      ...state,
      ...inventoryState,
    };
  }),
  on(removeItemFromInventoryError, (state, { error }) => {
    console.error('remove item to inventory error', error);
    return { ...state };
  }),
  on(consumePotionSuccess, (state, { inventoryState }) => {
    log('consume potion success');
    return {
      ...state,
      ...inventoryState,
    };
  }),
  on(consumePotionError, (state, { error }) => {
    log('consume potion error', error);
    return { ...state };
  })
);
