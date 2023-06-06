import { Component, Input } from '@angular/core';
import { ActionType, Opponent } from '../../fight.model';
import { Player } from 'src/app/player/player.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-fight-scene',
  templateUrl: './fight-scene.component.html',
  styleUrls: ['./fight-scene.component.scss'],
})
export class FightSceneComponent {
  actionType = ActionType;
  @Input() opponent!: Opponent | null;
  @Input() opponentTurn!: boolean | null;
  @Input() player!: Player | null;
  @Input() onPerformAction!: (actionType: ActionType) => void;

  constructor(private store: Store) {}
}
