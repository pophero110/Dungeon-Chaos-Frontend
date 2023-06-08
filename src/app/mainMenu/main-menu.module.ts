import { NgModule } from '@angular/core';
import { MainMenuContainerComponent } from './components/main-menu-container/main-menu-container.component';
import { CharacterModule } from '../character/character.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainMenuContainerComponent],
  exports: [MainMenuContainerComponent],
  imports: [CharacterModule, CommonModule],
})
export class MainMenuModule {}
