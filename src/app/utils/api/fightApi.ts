import { environment } from 'src/environments/environment';

export interface FightRequest {
  playerId: number;
}

export const startFightUlr = `${environment.apiUrl}/api/fights/start`;

export const performActionUrl = (fightId: number): string => {
  return `${environment.apiUrl}/api/fights/${fightId}/performAction`;
};

export const playerPerformActionUrl = (fightId: number): string => {
  return `${environment.apiUrl}/api/fights/${fightId}/playerPerformAction`;
};

export const opponentPerformActionUrl = (fightId: number): string => {
  return `${environment.apiUrl}/api/fights/${fightId}/opponentPerformAction`;
};

export const playerWinFightUrl = (fightId: number): string => {
  return `${environment.apiUrl}/api/fights/${fightId}/playerWinFight`;
};
