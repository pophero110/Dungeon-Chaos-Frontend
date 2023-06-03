import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent {
  @Input() type!: string;
  @Input() position!: number;
  @Input() currentPlayerPosition!: number | null;
  @Input() playerCharacterName!: string | null | undefined;
}
