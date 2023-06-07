import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { PlayerEffects } from '../player.effects';
import {
  createPlayer,
  createPlayerError,
  createPlayerSuccess,
} from '../player.actions';
import { PlayerService } from '../../service/player.service';
import { Actions } from '@ngrx/effects';
import { fakePlayerState } from 'src/app/test/fakeState';
import { initializeInventory } from 'src/app/inventory/state/inventory.actions';

describe('PlayerEffects', () => {
  let playerEffects: PlayerEffects;
  let actions$: Observable<unknown>;
  let playerService: jasmine.SpyObj<PlayerService>;

  beforeEach(() => {
    const playerServiceSpy = jasmine.createSpyObj('PlayerService', [
      'createPlayer',
    ]);

    TestBed.configureTestingModule({
      providers: [
        PlayerEffects,
        provideMockActions(() => actions$),
        { provide: PlayerService, useValue: playerServiceSpy },
      ],
    });

    playerEffects = TestBed.inject(PlayerEffects);
    actions$ = TestBed.inject<Observable<unknown>>(Actions);
    playerService = TestBed.inject(
      PlayerService
    ) as jasmine.SpyObj<PlayerService>;
  });

  it('should dispatch createPlayerSuccess action on successful player creation', () => {
    const selectedCharacterId = 123;

    playerService.createPlayer.and.returnValue(of(fakePlayerState));

    actions$ = of(createPlayer({ selectedCharacterId }));

    playerEffects.createPlayer$.subscribe((result: any) => {
      console.log({ result });
      if (result.type === createPlayerSuccess.type) {
        expect(result).toEqual(
          createPlayerSuccess({ playerState: fakePlayerState })
        );
      } else {
        expect(result.type).toEqual(initializeInventory.type);
      }
    });
  });

  it('should dispatch createPlayerError action on player creation failure', () => {
    const selectedCharacterId = 123;
    const error = new Error('Player creation failed');

    playerService.createPlayer.and.returnValue(throwError(() => error));

    actions$ = of(createPlayer({ selectedCharacterId }));

    playerEffects.createPlayer$.subscribe((result: unknown) => {
      expect(result).toEqual(createPlayerError());
    });
  });
});
