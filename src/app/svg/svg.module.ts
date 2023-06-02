import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathSvgComponent } from './path-svg/path-svg.component';
import { WallSvgComponent } from './wall-svg/wall-svg.component';

@NgModule({
  declarations: [PathSvgComponent, WallSvgComponent],
  imports: [CommonModule],
  exports: [PathSvgComponent, WallSvgComponent],
})
export class SvgModule {}
