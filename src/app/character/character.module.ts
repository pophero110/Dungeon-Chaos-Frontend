import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterFormComponent } from './components/character-form/character-form.component';
import { FormsModule } from '@angular/forms';
import { CharacterPanelComponent } from './components/character-panel/character-panel.component';
import { TokenModule } from '../token/token.module';
import { CharacterContainerComponent } from './components/character-container/character-container.component';

@NgModule({
  declarations: [
    CharacterFormComponent,
    CharacterPanelComponent,
    CharacterContainerComponent,
  ],
  imports: [CommonModule, FormsModule, TokenModule],
  exports: [CharacterContainerComponent],
})
export class CharacterModule {}
