import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPlayer } from '../../state/player.selectors';

@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.scss'],
})
export class PlayerPanelComponent {
  player$ = this.store.select(selectPlayer);
  constructor(private store: Store) {}
}
