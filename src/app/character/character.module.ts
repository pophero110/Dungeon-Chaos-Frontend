import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterFormComponent } from './components/character-form/character-form.component';
import { FormsModule } from '@angular/forms';
import { CharacterPanelComponent } from './components/character-panel/character-panel.component';
import { TokenModule } from '../token/token.module';

@NgModule({
  declarations: [CharacterFormComponent, CharacterPanelComponent],
  imports: [CommonModule, FormsModule, TokenModule],
  exports: [CharacterFormComponent, CharacterPanelComponent],
})
export class CharacterModule {}
