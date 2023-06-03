// pure function
export const isValidMove = (
  currentPosition: number,
  targetPosition: number,
  tile: string
): boolean => {
  // check tile type
  if (tile !== 'P') return false;
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
