import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TokenModule } from '../token/token.module';
import { FightSceneComponent } from './components/fight-scene/fight-scene.component';
import { PlayerModule } from '../player/player.module';

@NgModule({
  declarations: [FightSceneComponent],
  imports: [CommonModule, TokenModule, PlayerModule],
  exports: [FightSceneComponent],
})
export class FightModule {}
