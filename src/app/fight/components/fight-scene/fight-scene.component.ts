import { Component, Input } from '@angular/core';
import { Opponent } from '../../fight.model';
import { Player } from 'src/app/player/player.model';

@Component({
  selector: 'app-fight-scene',
  templateUrl: './fight-scene.component.html',
  styleUrls: ['./fight-scene.component.scss'],
})
export class FightSceneComponent {
  @Input() isOpponentTurn!: boolean | null;
  @Input() opponent!: Opponent | null;
  @Input() player!: Player | null;
}
