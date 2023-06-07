import { createAction, props } from '@ngrx/store';
import { InventoryState } from './inventory.reducer';
import { InventoryItem } from '../inventory.model';

export const initializeInventory = createAction(
  '[Inventory] Initialize Inventory',
  props<InventoryState>()
);

export const showItemPanel = createAction(
  '[Inventory] Show Item Panel',
  props<{ inventoryItem: InventoryItem }>()
);

export const hideItemPanel = createAction('[Inventory] Hide Item Panel');

export const equipWeapon = createAction(
  '[Inventory] Equip Weapon',
  props<{ inventoryItemId: number }>()
);

export const equipWeaponSuccess = createAction(
  '[Inventory] Equip Weapon Success',
  props<{ inventoryState: InventoryState }>()
);

export const equipWeaponError = createAction(
  '[Inventory] Equip Weapon Error',
  props<{ error: unknown }>()
);

export const equipArmor = createAction(
  '[Inventory] Equip Armor',
  props<{ inventoryItemId: number }>()
);

export const equipArmorSuccess = createAction(
  '[Inventory] Equip Armor Success',
  props<{ inventoryState: InventoryState }>()
);

export const equipArmorError = createAction(
  '[Inventory] Equip Armor Error',
  props<{ error: unknown }>()
);

export const unequipWeapon = createAction(
  '[Inventory] Unequip Weapon',
  props<{ inventoryItemId: number }>()
);

export const unequipWeaponSuccess = createAction(
  '[Inventory] Unequip Weapon Success',
  props<{ inventoryState: InventoryState }>()
);

export const unequipWeaponError = createAction(
  '[Inventory] Unequip Weapon Error',
  props<{ error: unknown }>()
);

export const unequipArmor = createAction(
  '[Inventory] Unequip Armor',
  props<{ inventoryItemId: number }>()
);

export const unequipArmorSuccess = createAction(
  '[Inventory] Unequip Armor Success',
  props<{ inventoryState: InventoryState }>()
);

export const unequipArmorError = createAction(
  '[Inventory] Unequip Armor Error',
  props<{ error: unknown }>()
);

export const drinkPotion = createAction(
  '[Inventory] Drink Potion',
  props<{ inventoryItemId: number }>()
);

export const fetchInventory = createAction(
  '[Inventory] Fetch Inventory',
  props<{ inventoryState: InventoryState }>()
);

export const fetchInventorySuccess = createAction(
  '[Inventory] Fetch Inventory Success',
  props<{ inventoryState: InventoryState }>()
);

export const fetchInventoryError = createAction(
  '[Inventory] Fetch Inventory Error',
  props<{ error: unknown }>()
);

export const addItemToInventory = createAction(
  '[Inventory] Add Item To Inventory',
  props<{ inventoryState: InventoryState }>()
);

export const addItemToInventorySuccess = createAction(
  '[Inventory] Add Item To Inventory Success',
  props<{ inventoryState: InventoryState }>()
);

export const addItemToInventoryError = createAction(
  '[Inventory] Add Item To Inventory Error',
  props<{ error: unknown }>()
);

export const removeItemFromInventory = createAction(
  '[Inventory] Remove Item From Inventory',
  props<{ inventoryState: InventoryState }>()
);

export const removeItemFromInventorySuccess = createAction(
  '[Inventory] Remove Item From Inventory Success',
  props<{ inventoryState: InventoryState }>()
);

export const removeItemFromInventoryError = createAction(
  '[Inventory] Remove Item From Inventory Error',
  props<{ error: unknown }>()
);
