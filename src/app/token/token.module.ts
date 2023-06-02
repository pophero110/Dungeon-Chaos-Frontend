import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathTokenComponent } from './board/path-token/path-token.component';
import { WallTokenComponent } from './board/wall-token/wall-token.component';
import { WarriorTokenComponent } from './character/warrior-token/warrior-token.component';
import { RogueTokenComponent } from './character/rogue-token/rogue-token.component';

@NgModule({
  declarations: [
    PathTokenComponent,
    WallTokenComponent,
    WarriorTokenComponent,
    RogueTokenComponent,
  ],
  imports: [CommonModule],
  exports: [
    PathTokenComponent,
    WallTokenComponent,
    WarriorTokenComponent,
    RogueTokenComponent,
  ],
})
export class TokenModule {}
