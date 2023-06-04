import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPlayer } from './player/state/player.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dungeon-chaos-frontend';

  player$ = this.store.select(selectPlayer);
  constructor(private store: Store) {}
}
