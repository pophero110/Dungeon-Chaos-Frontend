import { CommonModule } from '@angular/common';
import { TokenModule } from '../token/token.module';
import { NgModule } from '@angular/core';
import { InventoryContainerComponent } from './components/inventory-container/inventory-container.component';
import { EquipmentSlotsComponent } from './components/equipment-slots/equipment-slots.component';
import { InventorySlotsComponent } from './components/inventory-slots/inventory-slots.component';
import { ItemPanelComponent } from './components/item-panel/item-panel.component';

@NgModule({
  declarations: [
    InventoryContainerComponent,
    EquipmentSlotsComponent,
    InventorySlotsComponent,
    ItemPanelComponent,
  ],
  imports: [CommonModule, TokenModule],
  exports: [
    InventoryContainerComponent,
    EquipmentSlotsComponent,
    InventorySlotsComponent,
    ItemPanelComponent,
  ],
})
export class InventoryModule {}
