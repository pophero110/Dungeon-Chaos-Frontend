import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectBoard,
  selectCurrentPlayerPosition,
} from '../../state/board.selectors';
import { fetchBoard, makeMove } from '../../state/board.actions';
import { selectPlayerCharacterName } from 'src/app/player/state/player.selectors';
import { distinctUntilChanged } from 'rxjs';
import { startFight } from 'src/app/fight/state/fight.actions';
import { log } from 'src/app/utils/log';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  board$ = this.store.select(selectBoard);
  currentPlayerPosition$ = this.store
    .select(selectCurrentPlayerPosition)
    .pipe(distinctUntilChanged());
  playerCharacterName$ = this.store
    .select(selectPlayerCharacterName)
    .pipe(distinctUntilChanged());

  trackByPositionAndTileType(position: number, tileType: string): string {
    return position + tileType;
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchBoard());
  }

  handleTileClick(tileType: string, position: number) {
    log('tile click', { tileType, position });
    if (['P', 'S', 'E'].includes(tileType)) {
      this.store.dispatch(makeMove({ position }));
    } else if (tileType === 'M') {
      //TODO: fetch monsterid dynamically
      this.store.dispatch(
        startFight({
          monsterId: 1,
          opponentPosition: position,
        })
      );
    }
  }
}
