import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectBoard,
  selectCurrentPlayerPosition,
} from '../../state/board.selectors';
import { fetchBoard, makeMove } from '../../state/board.actions';
import {
  selectPlayerCharacterName,
  selectPlayerId,
} from 'src/app/player/state/player.selectors';
import { distinctUntilChanged } from 'rxjs';
import { startFight } from 'src/app/fight/state/fight.actions';
import { log } from 'src/app/utils/log';
import { openTreasure } from 'src/app/reward/state/reward.actions';
import { isSurroundingTile } from '../../board.utils';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  board$ = this.store.select(selectBoard);
  playerId$ = this.store.select(selectPlayerId);
  currentPlayerPosition!: number;
  currentPlayerPosition$ = this.store
    .select(selectCurrentPlayerPosition)
    .pipe(distinctUntilChanged());
  playerCharacterName$ = this.store
    .select(selectPlayerCharacterName)
    .pipe(distinctUntilChanged());

  trackByPositionAndTileType(position: number, tileType: string): string {
    return position + tileType;
  }

  constructor(private store: Store) {
    this.currentPlayerPosition$.subscribe((currentPlayerPosition) => {
      this.currentPlayerPosition = currentPlayerPosition;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fetchBoard());
  }

  onTileClick(tileType: string, position: number, playerId: number | null) {
    log('tile click', { tileType, position });

    if (['P', 'S', 'E'].includes(tileType)) {
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
          monsterId: 1,
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
    } else {
      console.error('No such tile type: ' + tileType);
    }
  }
}
