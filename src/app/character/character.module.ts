import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterFormComponent } from './character-form/character-form.component';

@NgModule({
  declarations: [CharacterFormComponent],
  imports: [CommonModule],
  exports: [CharacterFormComponent],
})
export class CharacterModule {}
