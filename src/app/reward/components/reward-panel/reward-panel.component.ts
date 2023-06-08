import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item, ItemType } from 'src/app/inventory/inventory.model';

@Component({
  selector: 'app-reward-panel',
  templateUrl: './reward-panel.component.html',
  styleUrls: ['./reward-panel.component.scss'],
})
export class RewardPanelComponent {
  itemType = ItemType;
  @Input() rewardItemId!: number | null;
  @Input() items!: Item[] | null;
  @Input() treasurePosition!: number | null;
  @Input() onTakeTreasureButtonClick!: (
    itemId: number,
    treasurePosition: number
  ) => void;
  @Input() ondiscardTreasureButtonClick!: (treasurePosition: number) => void;

  constructor(private store: Store) {}
}
