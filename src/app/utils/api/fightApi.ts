import { environment } from 'src/environment';

export interface FightRequest {
  playerId: string;
  monsterId: string;
}

export const startFightUlr = `${environment.apiUrl}/api/fights/start`;

export const playerPerformActionUrl = (fightId: string) => {
  `${environment.apiUrl}/api/fights/${fightId}/playerPerformAction`;
};

export const opponentPerformActionUrl = (fightId: string) => {
  `${environment.apiUrl}/api/fights/${fightId}/opponentPerformAction`;
};
