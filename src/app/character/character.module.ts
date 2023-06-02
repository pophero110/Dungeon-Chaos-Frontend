import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterFormComponent } from './components/character-form/character-form.component';
import { FormsModule } from '@angular/forms';
import { TokenModule } from '../token/token.module';

@NgModule({
  declarations: [CharacterFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [CharacterFormComponent],
  imports: [CommonModule, FormsModule, TokenModule],
})
export class CharacterModule {}
