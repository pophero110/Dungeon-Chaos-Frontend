import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchItems } from '../../state/item.actionts';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.scss'],
})
export class ItemContainerComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(fetchItems());
  }
}
