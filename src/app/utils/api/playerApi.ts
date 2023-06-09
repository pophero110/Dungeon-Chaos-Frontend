import { environment } from 'src/environment';

export const createPlayerUrl = `${environment.apiUrl}/api/players`;

export const getPlayerUrl = `${environment.apiUrl}/api/players/1`;

export const getPlayerByIdentityKeyUrl = (identityKey: string) => {
  return `${environment.apiUrl}/api/players/identityKey/${identityKey}`;
};

export const increasePlayerDifficultyUrl = (playerId: number) => {
  return `${environment.apiUrl}/api/players/${playerId}/increaseDifficultyByOne`;
};
