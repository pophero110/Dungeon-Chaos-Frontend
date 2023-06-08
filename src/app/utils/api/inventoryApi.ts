import { environment } from 'src/environment';

export interface InventoryRequest {
  itemId: number;
}

export const getInventoryUrl = (inventoryId: number) =>
  `${environment.apiUrl}/api/inventories/${inventoryId}`;

export const addItemToInventoryUrl = (inventoryId: number) =>
  `${environment.apiUrl}/api/inventories/${inventoryId}/addItem`;

export const removeItemFromInventoryUrl = (inventoryId: number) =>
  `${environment.apiUrl}/api/inventories/${inventoryId}/removeItem`;

export const equipWeaponUrl = (inventoryItemId: number) =>
  `${environment.apiUrl}/api/inventoryItems/${inventoryItemId}/equipWeapon`;

export const unequipWeaponUrl = (inventoryItemId: number) =>
  `${environment.apiUrl}/api/inventoryItems/${inventoryItemId}/unequipWeapon`;

export const equipArmorUrl = (inventoryItemId: number) =>
  `${environment.apiUrl}/api/inventoryItems/${inventoryItemId}/equipArmor`;

export const unequipArmorUrl = (inventoryItemId: number) =>
  `${environment.apiUrl}/api/inventoryItems/${inventoryItemId}/unequipArmor`;

export const consumePotionUrl = (inventoryItemId: number) =>
  `${environment.apiUrl}/api/inventoryItems/${inventoryItemId}/consumePotion`;
