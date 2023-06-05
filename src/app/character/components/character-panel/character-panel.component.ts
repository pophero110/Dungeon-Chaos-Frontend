import { Component, Input } from '@angular/core';
import { Character, CharacterName } from '../../character.model';

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.scss'],
})
export class CharacterPanelComponent {
  characterName = CharacterName;
  @Input() selectedCharacter!: Character | null;
}
