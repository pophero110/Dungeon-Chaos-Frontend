import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectBoard,
  selectCurrentPlayerPosition,
} from '../../state/board.selectors';
import { makeMove } from '../../state/board.actions';
import {
  selectPlayerCharacterName,
  selectPlayerId,
  selectPlayerIdentityKeyAndDifficulty,
} from 'src/app/player/state/player.selectors';
import { distinctUntilChanged } from 'rxjs';
import { startFight } from 'src/app/fight/state/fight.actions';
import { log } from 'src/app/utils/log';
import { openTreasure } from 'src/app/reward/state/reward.actions';
import { isSurroundingTile } from '../../board.utils';
import { enterPortal } from 'src/app/player/state/player.actions';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  clickSound!: HTMLAudioElement;
  board$ = this.store.select(selectBoard);
  playerId$ = this.store.select(selectPlayerId);
  currentPlayerPosition!: number;
  currentPlayerPosition$ = this.store
    .select(selectCurrentPlayerPosition)
    .pipe(distinctUntilChanged());
  playerCharacterName$ = this.store
    .select(selectPlayerCharacterName)
    .pipe(distinctUntilChanged());

  playerIdentityKeyAndDifficulty = this.store.select(
    selectPlayerIdentityKeyAndDifficulty
  );

  trackByPositionAndTileType(position: number, tileType: string): string {
    return position + tileType;
  }

  constructor(private store: Store) {
    this.currentPlayerPosition$.subscribe((currentPlayerPosition) => {
      this.currentPlayerPosition = currentPlayerPosition;
    });
    this.clickSound = new Audio('/assets/music/click.wav');
  }

  onTileClick(tileType: string, position: number, playerId: number | null) {
    log('tile click', { tileType, position }, this.clickSound);

    if (['P', 'S'].includes(tileType)) {
      this.clickSound.play();
      this.store.dispatch(makeMove({ position }));
      return;
    }

    if (
      !isSurroundingTile({
        currentPosition: this.currentPlayerPosition,
        targetPosition: position,
      })
    ) {
      return;
    }

    if (tileType === 'M') {
      //TODO: fetch monsterid dynamically
      log('tile click - start fight', { playerId });
      this.store.dispatch(
        startFight({
          playerId: playerId as number,
          opponentPosition: position,
        })
      );
      return;
    }

    if (tileType === 'T') {
      this.store.dispatch(
        openTreasure({
          playerId: playerId as number,
          treasurePosition: position,
        })
      );
      return;
    }

    if (tileType === 'E') {
      this.store.dispatch(enterPortal({ playerId: playerId as number }));
    }

    console.error('No action on tile type: ' + tileType);
  }
}
