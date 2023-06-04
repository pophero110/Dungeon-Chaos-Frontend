import { CommonModule } from '@angular/common';
import { PlayerPanelComponent } from './components/player-panel/player-panel.component';
import { TokenModule } from '../token/token.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [PlayerPanelComponent],
  imports: [CommonModule, TokenModule],
  exports: [PlayerPanelComponent],
})
export class PlayerModule {}
