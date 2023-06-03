import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  fetchCharacter,
  fetchCharacterError,
  fetchCharacterSuccess,
} from './character.actions';
import { Character } from 'src/app/character/character.model';
import { CharacterService } from 'src/app/character/service/character.service';

@Injectable()
export class CharacterEffects {
  fetchCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCharacter),
      mergeMap(() =>
        this.characterService.fetchCharacters().pipe(
          map((response) => {
            return fetchCharacterSuccess({
              characters: response as Character[],
            });
          }),
          catchError(() => of(fetchCharacterError))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}
}
