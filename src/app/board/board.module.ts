import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenModule } from '../token/token.module';
import { BoardComponent } from './components/board/board.component';
import { FlattenTilesPipe } from '../utils/pipe/flattenTiles.pipe';
import { TileComponent } from './components/tile/tile.component';

@NgModule({
  declarations: [BoardComponent, TileComponent, FlattenTilesPipe],
  imports: [CommonModule, TokenModule],
  exports: [BoardComponent],
})
export class BoardModule {}
