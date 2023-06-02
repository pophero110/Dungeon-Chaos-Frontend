import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenModule } from '../token/token.module';
import { BoardComponent } from './components/board/board.component';

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, TokenModule],
  exports: [BoardComponent],
})
export class BoardModule {}
