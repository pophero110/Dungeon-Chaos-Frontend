import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  fetchCharacter,
  selectCharacter,
} from 'src/app/state/character/character.actions';
import { selectCharacters } from 'src/app/state/character/character.selectors';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss'],
})
export class CharacterFormComponent implements OnInit {
  selectedCharacterId!: string;
  characters = this.store.select(selectCharacters);
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(fetchCharacter());
  }

  onSubmit() {
    if (this.selectedCharacterId) {
      this.store.dispatch(
        selectCharacter({ selectedCharacterId: this.selectedCharacterId })
      );
    }
  }
}
