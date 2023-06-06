import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectFightOpponent,
  selectIsFighting,
  selectOpponentTurn,
} from '../../state/fight.selectors';
import { selectPlayerState } from 'src/app/player/state/player.selectors';
import { playerPerformAction } from '../../state/fight.actions';
import { ActionType } from '../../fight.model';

@Component({
  selector: 'app-fight-container',
  templateUrl: './fight-container.component.html',
  styleUrls: ['./fight-container.component.scss'],
})
export class FightContainerComponent {
  isFighting$ = this.store.select(selectIsFighting);
  opponent$ = this.store.select(selectFightOpponent);
  opponentTurn$ = this.store.select(selectOpponentTurn);
  player$ = this.store.select(selectPlayerState);
  constructor(private store: Store) {}

  onPerformAction(actionType: ActionType) {
    this.store.dispatch(playerPerformAction({ actionType }));
  }
}
