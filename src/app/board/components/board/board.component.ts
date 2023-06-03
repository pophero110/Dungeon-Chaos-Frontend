import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectBoard,
  selectCurrentPlayerPosition,
} from '../../state/board.selectors';
import { fetchBoard, makeMove } from '../../state/board.actions';
import {
  selectPlayer,
  selectPlayerCharacterName,
} from 'src/app/player/state/player.selectors';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  player = this.store.select(selectPlayer);
  board = this.store.select(selectBoard);
  currentPlayerPosition = this.store
    .select(selectCurrentPlayerPosition)
    .pipe(distinctUntilChanged());
  playerCharacterName = this.store
    .select(selectPlayerCharacterName)
    .pipe(distinctUntilChanged());

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchBoard());
  }

  handleTileClick(tile: string, position: number) {
    this.store.dispatch(makeMove({ tile, position }));
  }
}
