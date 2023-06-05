// pure function
export const isValidMove = (
  currentPosition: number,
  targetPosition: number
): boolean => {
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

export const convertToMatrixIndex = (
  index: number
): { row: number; col: number } => {
  const row = Math.floor(index / 12);
  const col = index % 12;
  return { row, col };
};
