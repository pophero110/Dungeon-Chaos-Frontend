import { Component, Input } from '@angular/core';
import { CharacterName } from 'src/app/character/character.model';
import { Player } from '../../player.model';

//TODO: separate state and presentation by creating smart and dumb component
@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.scss'],
})
export class PlayerPanelComponent {
  characterName = CharacterName;
  @Input() player!: Player | null;
}
