import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPlayerByIdentityKey } from 'src/app/player/state/player.actions';

@Component({
  selector: 'app-get-player-form',
  templateUrl: './get-player-form.component.html',
  styleUrls: ['./get-player-form.component.scss'],
})
export class GetPlayerFormComponent {
  identityKey!: string;

  constructor(private store: Store) {}
  onGetPlayerSubmitButtonClick() {
    this.store.dispatch(
      getPlayerByIdentityKey({ identityKey: this.identityKey })
    );
  }
}
