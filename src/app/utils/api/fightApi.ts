import { environment } from 'src/environment';

export interface FightRequest {
  playerId: number;
  monsterId: number;
}

export const startFightUlr = `${environment.apiUrl}/api/fights/start`;

export const playerPerformActionUrl = (fightId: number) => {
  `${environment.apiUrl}/api/fights/${fightId}/performAction`;
};
