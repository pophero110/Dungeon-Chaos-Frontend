import { createSelector, createFeatureSelector } from '@ngrx/store';
import { InventoryState } from './inventory.reducer';
import { EquipmentType, InventoryItem } from '../inventory.model';

export const selectInventoryState =
  createFeatureSelector<InventoryState>('inventory');

export const selectInventoryItems = createSelector(
  selectInventoryState,
  (state) => {
    const inventoryItems = state.inventoryItems
      ? [...state.inventoryItems].filter(
          (inventoryItem) => !inventoryItem.equipped
        )
      : [];
    while (inventoryItems.length < 9) {
      inventoryItems.push({ item: {} } as InventoryItem);
    }
    return inventoryItems.sort(
      (inventoryItem1, inventoryItem2) =>
        inventoryItem1.item.id - inventoryItem2.item.id
    );
  }
);

export const selectSelectedInvetoryItem = createSelector(
  selectInventoryState,
  (state) => state.selectedInventoryItem
);

export const selectEquippedWeapon = createSelector(
  selectInventoryState,
  (state) => {
    return (
      state.inventoryItems.find(
        (inventoryItem) =>
          inventoryItem.equipped &&
          inventoryItem.item.equipmentType === EquipmentType.WEAPON
      ) || null
    );
  }
);

export const selectEquippedArmor = createSelector(
  selectInventoryState,
  (state) => {
    return (
      state.inventoryItems.find(
        (inventoryItem) =>
          inventoryItem.equipped &&
          inventoryItem.item.equipmentType === EquipmentType.ARMOR
      ) || null
    );
  }
);
