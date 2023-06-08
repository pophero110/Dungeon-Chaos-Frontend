import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tileState',
})
export class TilePipe implements PipeTransform {
  transform(tile: string): { tileType: string; visited: boolean } {
    const visited = tile[1] === '!';
    const tileType = tile[0];
    return { tileType, visited };
  }
}
