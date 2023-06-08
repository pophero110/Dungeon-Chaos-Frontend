enum Visibility {
  HIDDEN = '?',
  VISIBLE = '!',
}

export const isSurroundingTile = ({
  currentPosition,
  targetPosition,
}: {
  currentPosition: number;
  targetPosition: number;
}): boolean => {
  // check left tile
  if (currentPosition - targetPosition === 1) return true;
  // check right tile
  if (currentPosition - targetPosition === -1) return true;
  // check up tile
  if (currentPosition - targetPosition === 12) return true;
  // check down tile
  if (currentPosition - targetPosition === -12) return true;
  return false;
};

export const convertArrayIndexToMatrixIndex = (
  index: number
): { row: number; col: number } => {
  const row = Math.floor(index / 12);
  const col = index % 12;
  return { row, col };
};

export const findPositionOfStartingPoint = (matrix: string[][]): number => {
  let position = 0;
  matrix.forEach((arr, row) => {
    arr.find((string, column) => {
      if (string === 'S') position = row * 12 + column;
    });
  });
  return position;
};

// ['pp', 'pp'] => [['p','p']['p','p']]
export const convertArrayStringIntoMatrix = (array: string[]): string[][] => {
  return array.map((row) => row.split(''));
};

export const uncoverSurroundingTiles = (
  tileMatrix: string[][],
  targetPosition: number
): string[][] => {
  const numRows = tileMatrix.length;
  const numColumns = tileMatrix[0].length;

  // Calculate the row and column indices of the targetPosition
  const targetRow = Math.floor(targetPosition / numColumns);
  const targetColumn = targetPosition % numColumns;

  // Create a deep copy of the tileMatrix to avoid modifying the original
  const updatedTileMatrix = JSON.parse(JSON.stringify(tileMatrix));

  // Uncover the surrounding tiles
  for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
    for (let colOffset = -1; colOffset <= 1; colOffset++) {
      const rowIndex = targetRow + rowOffset;
      const columnIndex = targetColumn + colOffset;

      // Check if the calculated indices are within bounds
      if (
        rowIndex >= 0 &&
        rowIndex < numRows &&
        columnIndex >= 0 &&
        columnIndex < numColumns
      ) {
        // Update the tile to be uncovered (e.g., set it to an uncovered state)
        updatedTileMatrix[rowIndex][columnIndex] =
          updatedTileMatrix[rowIndex][columnIndex][0] + Visibility.VISIBLE;
      }
    }
  }

  return updatedTileMatrix;
};

export const hideTilesExceptTilesSurroundingStartTile = (
  tileMatrix: string[][],
  startPointPosition: number
): string[][] => {
  const { row, col } = convertArrayIndexToMatrixIndex(startPointPosition);
  tileMatrix[row][col] = tileMatrix[row][col] + Visibility.VISIBLE;
  const numberOfColumns = 12;
  for (let row = 0; row < tileMatrix.length; row++) {
    for (let col = 0; col < tileMatrix[0].length; col++) {
      const tileType = tileMatrix[row][col];
      const targetPosition = row * numberOfColumns + col;
      if (
        isSurroundingTile({
          currentPosition: startPointPosition,
          targetPosition,
        })
      ) {
        tileMatrix[row][col] = tileType + Visibility.VISIBLE;
      } else {
        tileMatrix[row][col] = tileType + Visibility.HIDDEN;
      }
    }
  }
  return tileMatrix;
};

export const isVisitedTile = ({
  tileMatrix,
  position,
}: {
  tileMatrix: string[][];
  position: number;
}): boolean => {
  const { row, col } = convertArrayIndexToMatrixIndex(position);
  console.log('visited', tileMatrix[row][col][1] === Visibility.VISIBLE);
  return tileMatrix[row][col][1] === Visibility.VISIBLE;
};
