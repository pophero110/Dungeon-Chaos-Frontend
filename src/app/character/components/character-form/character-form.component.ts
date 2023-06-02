import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchCharacter } from 'src/app/state/character/character.actions';
import { selectCharacter } from 'src/app/state/character/character.selectors';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss'],
})
export class CharacterFormComponent implements OnInit {
  selectedCharacterId = 1;
  characters = this.store.select(selectCharacter);
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(fetchCharacter());
  }

  onSubmit() {
    if (this.selectedCharacterId) {
      console.log(this.selectedCharacterId);
    }
  }
}
