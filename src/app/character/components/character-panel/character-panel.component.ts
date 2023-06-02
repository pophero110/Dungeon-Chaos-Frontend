import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSelectedCharacter } from 'src/app/state/character/character.selectors';

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.scss'],
})
export class CharacterPanelComponent {
  selectedCharacter = this.store.select(selectSelectedCharacter);

  constructor(private store: Store) {}
}
