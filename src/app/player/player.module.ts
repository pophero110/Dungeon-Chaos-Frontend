import { CommonModule } from '@angular/common';
import { PlayerPanelComponent } from './components/player-panel/player-panel.component';
import { TokenModule } from '../token/token.module';
import { NgModule } from '@angular/core';
import { PlayerContainerComponent } from './components/player-container/player-container.component';

@NgModule({
  declarations: [PlayerPanelComponent, PlayerContainerComponent],
  imports: [CommonModule, TokenModule],
  exports: [PlayerPanelComponent, PlayerContainerComponent],
})
export class PlayerModule {}
