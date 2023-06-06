import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TokenModule } from '../token/token.module';
import { FightSceneComponent } from './components/fight-scene/fight-scene.component';
import { PlayerModule } from '../player/player.module';
import { FightContainerComponent } from './components/fight-container/fight-container.component';

@NgModule({
  declarations: [FightSceneComponent, FightContainerComponent],
  imports: [CommonModule, TokenModule, PlayerModule],
  exports: [FightSceneComponent, FightContainerComponent],
})
export class FightModule {}
