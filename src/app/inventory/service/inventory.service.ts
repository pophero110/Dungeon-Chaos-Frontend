import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  addItemToInventoryUrl,
  equipWeaponUrl,
  removeItemFromInventoryUrl,
  unequipArmorUrl,
  unequipWeaponUrl,
  consumePotionUrl,
  equipArmorUrl,
} from '../../utils/api/inventoryApi';
import { getInventoryUrl } from '../../utils/api/inventoryApi';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private http: HttpClient) {}

  public getInventory(inventoryId: number) {
    return this.http.get(getInventoryUrl(inventoryId));
  }

  public addItemToInventory(inventoryId: number, itemId: number) {
    return this.http.post(addItemToInventoryUrl(inventoryId), { itemId });
  }

  public removeItemFromInventory(inventoryId: number, itemId: number) {
    return this.http.put(removeItemFromInventoryUrl(inventoryId), { itemId });
  }

  public equipWeapon(inventoryItemId: number) {
    return this.http.put(equipWeaponUrl(inventoryItemId), {});
  }

  public unequipWeapon(inventoryItemId: number) {
    return this.http.put(unequipWeaponUrl(inventoryItemId), {});
  }

  public equipArmor(inventoryItemId: number) {
    return this.http.put(equipArmorUrl(inventoryItemId), {});
  }

  public unequipArmor(inventoryItemId: number) {
    return this.http.put(unequipArmorUrl(inventoryItemId), {});
  }

  public consumePotion(inventoryItemId: number) {
    return this.http.put(consumePotionUrl(inventoryItemId), {});
  }
}
