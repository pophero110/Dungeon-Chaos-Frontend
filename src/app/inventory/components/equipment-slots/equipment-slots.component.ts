import { Component, Input } from '@angular/core';
import { InventoryItem } from '../../inventory.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-equipment-slots',
  templateUrl: './equipment-slots.component.html',
  styleUrls: ['./equipment-slots.component.scss'],
})
export class EquipmentSlotsComponent {
  @Input() equippedWeapon!: InventoryItem | null;
  @Input() equippedArmor!: InventoryItem | null;
  @Input() onEquipmentSlotClick!: (inventoryItem: InventoryItem) => void;

  constructor(private store: Store) {}
}
