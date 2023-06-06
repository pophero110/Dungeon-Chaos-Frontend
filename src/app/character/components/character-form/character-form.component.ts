import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Character } from '../../character.model';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss'],
})
export class CharacterFormComponent {
  @Input() characters!: Character[] | null;
  @Input() selectedCharacterId!: number;
  @Input() onCharacterSelection!: () => void;
  @Input() onSubmit!: () => void;
  constructor(private store: Store) {}
}
