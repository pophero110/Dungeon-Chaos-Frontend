import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FightService } from '../service/fight.service';
import {
  playerPerformActionError,
  playerPerformActionSuccess,
  playerPerformAction,
  startFight,
  startFightError,
  startFightSuccess,
  opponentPerformAction,
  opponentPerformActionSuccess,
  playerLoseFight,
  endFight,
} from './fight.actions';
import { catchError, concat, delay, mergeMap, of } from 'rxjs';
import {
  CurrentTurn,
  FightResult,
  OPPONENT_TURN_DURATION,
} from '../fight.model';
import { playerDie, updatePlayer } from 'src/app/player/state/player.actions';
import {
  fetchBoard,
  removeMonsterToken,
} from 'src/app/board/state/board.actions';
import { opponentPerformActionError, playerWinFight } from './fight.actions';
import { log, logStart } from 'src/app/utils/log';
import { FightState } from './fight.reducer';
import { PlayerState } from 'src/app/player/state/player.reducer';

@Injectable()
export class FightEffects {
  fightId!: number;
  opponentPosition!: number;
  startFight$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startFight),
      mergeMap(({ monsterId, opponentPosition, playerId }) =>
        this.fightService.startFight({ playerId, monsterId }).pipe(
          mergeMap((response) => {
            const fightState = response as FightState;
            logStart('start fight', response);
            this.opponentPosition = opponentPosition;
            this.fightId = fightState.id;
            const successAction = startFightSuccess({
              fightState: { ...fightState },
            });
            if (fightState.currentTurn === CurrentTurn.OPPONENT) {
              return concat(of(successAction), of(opponentPerformAction()));
            }
            return concat(of(successAction));
          }),
          catchError(() => of(startFightError()))
        )
      )
    )
  );

  opponentPerformAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(opponentPerformAction),
      mergeMap(() =>
        this.fightService.opponentPerformAction(this.fightId).pipe(
          mergeMap((response) => {
            const fightState = response as FightState;
            log('opponent perform action', fightState.opponentActionType);
            if (fightState.fightResult === FightResult.VICTORY_OPPONENT) {
              return concat(of(playerLoseFight()));
            } else {
              const successAction = opponentPerformActionSuccess({
                fightState: { ...fightState },
              });
              return concat(
                of(
                  updatePlayer({
                    playerState: fightState.player as PlayerState,
                  })
                ).pipe(delay(OPPONENT_TURN_DURATION)),
                of(successAction).pipe(delay(OPPONENT_TURN_DURATION))
              );
            }
          }),
          catchError(() => of(opponentPerformActionError()))
        )
      )
    )
  );

  playerPerformAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(playerPerformAction),
      mergeMap(({ actionType }) =>
        this.fightService.playerPerformAction(this.fightId, actionType).pipe(
          mergeMap((response) => {
            log('player perform action', actionType);
            const fightState = response as FightState;
            //TODO: refactor by creating separate effect per actionType?
            if (fightState.fightResult === FightResult.VICTORY_PLAYER) {
              return concat(of(playerWinFight()));
            } else if (fightState.fightResult === FightResult.FLEE_PLAYER) {
              return concat(of(endFight()));
            } else {
              const successAction = playerPerformActionSuccess({
                fightState: { ...fightState },
              });
              return concat(of(successAction), of(opponentPerformAction()));
            }
          }),
          catchError(() => of(playerPerformActionError()))
        )
      )
    )
  );

  playerWinFight$ = createEffect(() =>
    this.actions$.pipe(
      ofType(playerWinFight),
      mergeMap(() =>
        this.fightService.playerWinFight(this.fightId).pipe(
          mergeMap((response) => {
            log('player win fight');
            const playerState = (response as { player: PlayerState }).player;
            return concat(
              of(endFight()),
              of(
                removeMonsterToken({
                  position: this.opponentPosition,
                })
              ),
              of(
                updatePlayer({
                  playerState: playerState,
                })
              )
            );
          }),
          catchError(() => of(playerPerformActionError()))
        )
      )
    )
  );

  playerLoseFight$ = createEffect(() =>
    this.actions$.pipe(
      ofType(playerLoseFight),
      mergeMap(() => {
        log('player lose fight');
        return concat(of(endFight()), of(playerDie()), of(fetchBoard()));
      }),
      catchError(() => of(playerPerformActionError()))
    )
  );

  constructor(private actions$: Actions, private fightService: FightService) {}
}
