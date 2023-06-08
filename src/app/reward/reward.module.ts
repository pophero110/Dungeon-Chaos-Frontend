import { NgModule } from '@angular/core';
import { RewardContainerComponent } from './components/reward-container/reward-container.component';
import { RewardPanelComponent } from './components/reward-panel/reward-panel.component';
import { TokenModule } from '../token/token.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RewardContainerComponent, RewardPanelComponent],
  imports: [TokenModule, CommonModule],
  exports: [RewardContainerComponent, RewardPanelComponent],
})
export class RewardModule {}
