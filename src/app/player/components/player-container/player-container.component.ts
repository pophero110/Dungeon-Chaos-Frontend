import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectPlayerState,
  selectIsPlayerCreated,
} from '../../state/player.selectors';

@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.scss'],
})
export class PlayerContainerComponent {
  player$ = this.store.select(selectPlayerState);
  isPlayerCreated$ = this.store.select(selectIsPlayerCreated);
  constructor(private store: Store) {}
}
