import { Component, Input } from '@angular/core';
import { InventoryItem, ItemType } from '../../inventory.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-item-panel',
  templateUrl: './item-panel.component.html',
  styleUrls: ['./item-panel.component.scss'],
})
export class ItemPanelComponent {
  itemType = ItemType;
  @Input() selectedInventoryItem!: InventoryItem | null;
  @Input() onItemPanelCloseButtonClick!: () => void;
  @Input() onItemEquipButtonClick!: (inventoryItem: InventoryItem) => void;
  @Input() onItemUnequipButtonClick!: (inventoryItem: InventoryItem) => void;
  @Input() onItemDiscardButtonClick!: (inventoryItem: InventoryItem) => void;
  @Input() onConsumeButtonClick!: (inventoryItem: InventoryItem) => void;

  showDiscardButton = false;

  constructor(private store: Store) {}
}
