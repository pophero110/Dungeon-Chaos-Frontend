import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsPlayerCreated } from 'src/app/player/state/player.selectors';
import {
  selectEquippedArmor,
  selectEquippedWeapon,
  selectInventoryItems,
} from '../../state/inventory.selelctors';
import {
  consumePotion,
  equipArmor,
  equipWeapon,
  hideItemPanel,
  removeItemFromInventory,
  showItemPanel,
  unequipArmor,
  unequipWeapon,
} from '../../state/inventory.actions';
import { selectSelectedInvetoryItem } from '../../state/inventory.selelctors';
import { EquipmentType, InventoryItem } from '../../inventory.model';

@Component({
  selector: 'app-inventory-container',
  templateUrl: './inventory-container.component.html',
  styleUrls: ['./inventory-container.component.scss'],
})
export class InventoryContainerComponent {
  isPlayerCreated$ = this.store.select(selectIsPlayerCreated);
  inventoryItems$ = this.store.select(selectInventoryItems);
  selectedInventoryItem$ = this.store.select(selectSelectedInvetoryItem);
  selectEquippedArmor$ = this.store.select(selectEquippedArmor);
  selectEquippedWeapon$ = this.store.select(selectEquippedWeapon);
  constructor(private store: Store) {}

  onInventorySlotClick(inventoryItem: InventoryItem) {
    this.store.dispatch(showItemPanel({ inventoryItem }));
  }

  onEquipmentSlotClick(inventoryItem: InventoryItem) {
    this.store.dispatch(showItemPanel({ inventoryItem }));
  }

  onItemPanelCloseButtonClick() {
    this.store.dispatch(hideItemPanel());
  }

  onConsumeButtonClick(inventoryItem: InventoryItem) {
    this.store.dispatch(consumePotion({ inventoryItemId: inventoryItem.id }));
  }

  onItemEquipButtonClick(inventoryItem: InventoryItem) {
    if (inventoryItem.item.equipmentType === EquipmentType.WEAPON) {
      this.store.dispatch(equipWeapon({ inventoryItemId: inventoryItem.id }));
    } else if (inventoryItem.item.equipmentType === EquipmentType.ARMOR) {
      this.store.dispatch(equipArmor({ inventoryItemId: inventoryItem.id }));
    } else {
      console.error('No such equipment type');
    }
    this.store.dispatch(hideItemPanel());
  }

  onItemUnequipButtonClick(inventoryItem: InventoryItem) {
    if (inventoryItem.item.equipmentType === EquipmentType.WEAPON) {
      this.store.dispatch(unequipWeapon({ inventoryItemId: inventoryItem.id }));
    } else if (inventoryItem.item.equipmentType === EquipmentType.ARMOR) {
      this.store.dispatch(unequipArmor({ inventoryItemId: inventoryItem.id }));
    } else {
      console.error('No such equipment type');
    }
    this.store.dispatch(hideItemPanel());
  }

  onItemDiscardButtonClick(inventoryItem: InventoryItem) {
    this.store.dispatch(
      removeItemFromInventory({ itemId: inventoryItem.item.id })
    );
  }
}
