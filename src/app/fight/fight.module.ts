import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TokenModule } from '../token/token.module';
import { FightSceneComponent } from './components/fight-scene/fight-scene.component';

@NgModule({
  declarations: [FightSceneComponent],
  imports: [CommonModule, TokenModule],
  exports: [FightSceneComponent],
})
export class FightModule {}
