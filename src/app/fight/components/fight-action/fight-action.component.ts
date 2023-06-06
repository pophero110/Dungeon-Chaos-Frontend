import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionType } from '../../fight.model';

@Component({
  selector: 'app-fight-action',
  templateUrl: './fight-action.component.html',
  styleUrls: ['./fight-action.component.scss'],
})
export class FightActionComponent {
  actionType = ActionType;
  @Input() isOpponentTurn!: boolean | null;
  @Input() onPerformAction!: (actionType: ActionType) => void;
  constructor(private store: Store) {}
}
