import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenModule } from '../token/token.module';
import { BoardComponent } from './components/board/board.component';
import { FlattenTilesPipe } from '../utils/pipe/flattenTiles.pipe';
import { TileComponent } from './components/tile/tile.component';
import { TilePipe } from '../utils/pipe/tileState.pipe';

@NgModule({
  declarations: [BoardComponent, TileComponent, FlattenTilesPipe, TilePipe],
  imports: [CommonModule, TokenModule],
  exports: [BoardComponent],
})
export class BoardModule {}
