import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent {
  @Input() tileType!: string;
  @Input() position!: number;
  @Input() currentPlayerPosition!: number | null;
  @Input() playerCharacterName!: string | null | undefined;
  @Input() handleTileClick!: (tileType: string, position: number) => void;

  constructor(private store: Store) {}
}
