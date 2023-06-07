import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createPlayer } from 'src/app/player/state/player.actions';
import { selectIsPlayerCreated } from 'src/app/player/state/player.selectors';
import { fetchCharacter, selectCharacter } from '../../state/character.actions';
import {
  selectCharacters,
  selectSelectedCharacter,
} from '../../state/character.selectors';
import { log } from 'src/app/utils/log';

@Component({
  selector: 'app-character-container',
  templateUrl: './character-container.component.html',
  styleUrls: ['./character-container.component.scss'],
})
export class CharacterContainerComponent implements OnInit {
  selectedCharacterId!: number;
  characters$ = this.store.select(selectCharacters);
  selectedCharacter$ = this.store.select(selectSelectedCharacter);
  isPlayerCreated$ = this.store.select(selectIsPlayerCreated);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchCharacter());
  }

  onCharacterSelection() {
    this.store.dispatch(
      selectCharacter({ selectedCharacterId: this.selectedCharacterId })
    );
  }

  onSubmit() {
    this.store.dispatch(
      createPlayer({ selectedCharacterId: this.selectedCharacterId })
    );
  }
}
