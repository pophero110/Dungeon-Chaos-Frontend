import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { FightEffects } from '../fight.effects';
import {
  opponentPerformAction,
  opponentPerformActionError,
  opponentPerformActionSuccess,
  playerLoseFight,
  playerPerformAction,
  playerPerformActionSuccess,
  startFight,
  startFightError,
  startFightSuccess,
} from '../fight.actions';
import { FightService } from '../../service/fight.service';
import { fakeFightState } from 'src/app/test/fakeState';
import { FightRequest } from 'src/app/utils/api/fightApi';
import { FightState } from '../fight.reducer';
import { ActionType, FightResult } from '../../fight.model';
import { playerWinFight } from '../fight.actions';
import { playerPerformActionError } from '../fight.actions';
import { updatePlayer } from 'src/app/player/state/player.actions';

//TODO: separate store and effect
describe('FightEffects', () => {
  let actions$: Observable<unknown>;
  let effects: FightEffects;
  let fightService: jasmine.SpyObj<FightService>;
  beforeEach(() => {
    fightService = jasmine.createSpyObj('FightService', [
      'startFight',
      'playerPerformAction',
      'opponentPerformAction',
      'playerWinFight',
    ]);
    TestBed.configureTestingModule({
      providers: [
        FightEffects,
        provideMockActions(() => actions$),
        { provide: FightService, useValue: fightService },
      ],
    });
    effects = TestBed.inject(FightEffects);
  });

  describe('startFight$', () => {
    it('should dispatch startFightSuccess and opponentPerformAction actions', (done) => {
      const monsterId = 123;
      const opponentPosition = 456;
      const fightState = fakeFightState;
      const playerId = 1;
      const fightRequest: FightRequest = { playerId, monsterId };

      const response = { ...fightState };
      fightService.startFight.and.returnValue(of(response));

      actions$ = of(startFight({ playerId, monsterId, opponentPosition }));
      effects.startFight$.subscribe((result) => {
        expect(result).toEqual(
          startFightSuccess({ fightState: { ...fightState } })
        );

        expect(fightService.startFight).toHaveBeenCalledWith(fightRequest);
        done();
      });
    });

    it('should dispatch startFightError on service error', (done) => {
      const opponentPosition = 456;
      const monsterId = 1;
      const playerId = 1;
      const fightREquest: FightRequest = { monsterId, playerId };

      fightService.startFight.and.returnValue(
        throwError('Failed to start fight')
      );

      actions$ = of(startFight({ playerId, monsterId, opponentPosition }));
      effects.startFight$.subscribe((result) => {
        expect(result).toEqual(startFightError());
        expect(fightService.startFight).toHaveBeenCalledWith(fightREquest);
        done();
      });
    });
  });

  describe('playerPerformAction$', () => {
    const actionType = ActionType.ATTACK;

    it('should dispatch playerPerformActionSuccess and opponentPerformAction on success response', () => {
      const fightState: FightState = fakeFightState;
      fightService.playerPerformAction.and.returnValue(of(fightState));

      actions$ = of(playerPerformAction({ actionType }));
      effects.playerPerformAction$.subscribe((result) => {
        expect(result).toBeTruthy();
        expect([
          playerPerformActionSuccess.type.toString(),
          opponentPerformAction.type.toString(),
        ]).toContain(result.type);
        // expect(result.type).toEqual('[Fight] Opponent Perform Action');
      });
    });

    it('should dispatch playerWinFight on victory response', () => {
      const fightState: FightState = fakeFightState;
      fightService.playerPerformAction.and.returnValue(
        of({ ...fightState, fightResult: FightResult.VICTORY_PLAYER })
      );

      actions$ = of(playerPerformAction({ actionType }));
      effects.playerPerformAction$.subscribe((result) => {
        expect(result).toBeTruthy();
        expect([playerWinFight.type.toString()]).toContain(result.type);
      });
    });

    it('should dispatch playerPerformActionError on error response', () => {
      fightService.playerPerformAction.and.returnValue(throwError('Error'));

      actions$ = of(playerPerformAction({ actionType }));
      effects.playerPerformAction$.subscribe((result) => {
        expect(result).toBeTruthy();
        expect([playerPerformActionError.type.toString()]).toContain(
          result.type
        );
      });
    });
  });

  describe('opponentPerformAction$', () => {
    it('should dispatch opponentPerformActionSuccess and updatePlayer with a delay of 1 second', fakeAsync(() => {
      const fightState: FightState = fakeFightState;
      fightService.opponentPerformAction.and.returnValue(of({ ...fightState }));

      actions$ = of(opponentPerformAction());
      effects.opponentPerformAction$.subscribe((result) => {
        expect(result).toBeTruthy();
        expect([
          opponentPerformActionSuccess.type.toString(),
          updatePlayer.type.toString(),
        ]).toContain(result.type);
      });

      // Advance the virtual clock by 1 second
      tick(2000);
    }));

    it('should dispatch playerLoseFight on lose response', () => {
      const fightState: FightState = fakeFightState;
      fightService.opponentPerformAction.and.returnValue(
        of({ ...fightState, fightResult: FightResult.VICTORY_OPPONENT })
      );

      actions$ = of(opponentPerformAction());
      effects.opponentPerformAction$.subscribe((result) => {
        expect(result).toBeTruthy();
        expect([playerLoseFight.type.toString()]).toContain(result.type);
      });
    });

    it('should dispatch playerPerformActionError on error response', () => {
      fightService.opponentPerformAction.and.returnValue(throwError('Error'));

      actions$ = of(opponentPerformAction());
      effects.opponentPerformAction$.subscribe((result) => {
        expect(result).toBeTruthy();
        expect([opponentPerformActionError.type.toString()]).toContain(
          result.type
        );
      });
    });
  });
});
