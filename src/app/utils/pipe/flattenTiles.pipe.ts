import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flattenTiles',
})
export class FlattenTilesPipe implements PipeTransform {
  transform(matrix: string[][] | null): string[] {
    if (!matrix) return [];
    return matrix.flatMap((row) => row);
  }
}
