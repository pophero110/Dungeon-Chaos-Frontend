import { Component, OnDestroy } from '@angular/core';
import { ActionType } from '../../fight.model';
import { Store } from '@ngrx/store';
import { playerPerformAction } from '../../state/fight.actions';
import {
  selectFightOpponent,
  selectOpponentTurn,
} from '../../state/fight.selectors';
import { log } from 'src/app/utils/log';

@Component({
  selector: 'app-fight-scene',
  templateUrl: './fight-scene.component.html',
  styleUrls: ['./fight-scene.component.scss'],
})
export class FightSceneComponent implements OnDestroy {
  actionType = ActionType;
  opponent$ = this.store.select(selectFightOpponent);
  opponentTurn$ = this.store.select(selectOpponentTurn);
  constructor(private store: Store) {}

  ngOnDestroy(): void {
    log('fight scene destroy');
  }

  handlePerformAction(actionType: ActionType) {
    this.store.dispatch(playerPerformAction({ actionType }));
  }
}
