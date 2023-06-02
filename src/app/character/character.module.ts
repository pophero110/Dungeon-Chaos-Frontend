import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterFormComponent } from './components/character-form/character-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CharacterFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [CharacterFormComponent],
})
export class CharacterModule {}
