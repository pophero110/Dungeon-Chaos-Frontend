import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectRewardItemId,
  selectTreasurePosition,
} from '../../state/reward.selectors';
import { selectItems } from 'src/app/item/state/item.selectors';
import { discardTreasure, takeTreasure } from '../../state/reward.actions';

@Component({
  selector: 'app-reward-container',
  templateUrl: './reward-container.component.html',
  styleUrls: ['./reward-container.component.scss'],
})
export class RewardContainerComponent {
  rewardItemId$ = this.store.select(selectRewardItemId);
  items$ = this.store.select(selectItems);
  treasurePosition$ = this.store.select(selectTreasurePosition);

  constructor(private store: Store) {}

  onTakeTreasureButtonClick(itemId: number, treasurePosition: number) {
    this.store.dispatch(takeTreasure({ itemId, treasurePosition }));
  }

  ondiscardTreasureButtonClick(treasurePosition: number) {
    this.store.dispatch(discardTreasure({ treasurePosition }));
  }
}
