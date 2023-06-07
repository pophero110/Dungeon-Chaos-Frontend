import { Component, Input } from '@angular/core';
import { InventoryItem } from '../../inventory.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-inventory-slots',
  templateUrl: './inventory-slots.component.html',
  styleUrls: ['./inventory-slots.component.scss'],
})
export class InventorySlotsComponent {
  @Input() inventoryItems!: InventoryItem[] | null;
  @Input() onInventorySlotClick!: (inventoryItem: InventoryItem) => void;

  constructor(private store: Store) {}
}
