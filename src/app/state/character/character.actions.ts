import { createAction, props } from '@ngrx/store';
import { CharacterState } from './character.reducer';

export const fetchCharacterSuccess = createAction(
  '[Character] Fetch Character Success',
  props<CharacterState>()
);
export const fetchCharacter = createAction('[Character] Fetch Character');
export const fetchCharacterError = createAction(
  '[Character] Fetch Character Error'
);
