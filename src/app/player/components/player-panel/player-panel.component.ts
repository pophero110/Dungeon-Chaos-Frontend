import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectIsPlayerCreated,
  selectPlayerState,
} from '../../state/player.selectors';
import { CharacterName } from 'src/app/character/character.model';

//TODO: separate state and presentation by creating smart and dumb component
@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.scss'],
})
export class PlayerPanelComponent {
  characterName = CharacterName;
  player$ = this.store.select(selectPlayerState);
  isPlayerCreated$ = this.store.select(selectIsPlayerCreated);
  constructor(private store: Store) {}
}
