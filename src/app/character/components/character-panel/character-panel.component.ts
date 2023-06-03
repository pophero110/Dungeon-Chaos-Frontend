import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSelectedCharacter } from '../../state/character.selectors';

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.scss'],
})
export class CharacterPanelComponent {
  selectedCharacter = this.store.select(selectSelectedCharacter);

  constructor(private store: Store) {}
}
