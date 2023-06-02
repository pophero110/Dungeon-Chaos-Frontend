import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBoard } from '../../state/board.selectors';
import { fetchBoard } from '../../state/board.actions';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  board = this.store.select(selectBoard);
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(fetchBoard());
  }
}
