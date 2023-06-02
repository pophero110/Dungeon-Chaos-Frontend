import { createAction, props } from '@ngrx/store';
import { Character } from 'src/app/character/character.model';

export const fetchCharacterSuccess = createAction(
  '[Character] Fetch Character Success',
  props<{ characters: Character[] }>()
);
export const fetchCharacter = createAction('[Character] Fetch Character');
export const fetchCharacterError = createAction(
  '[Character] Fetch Character Error'
);

export const selectCharacter = createAction(
  '[Character] Select Character',
  props<{ selectedCharacterId: string }>()
);
