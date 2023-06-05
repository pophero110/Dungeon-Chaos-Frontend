import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  FightRequest,
  opponentPerformActionUrl,
  playerWinFightUrl,
  startFightUlr,
} from 'src/app/utils/api/fightApi';
import { playerPerformActionUrl } from 'src/app/utils/api/fightApi';
import { ActionType } from '../fight.model';

@Injectable({
  providedIn: 'root',
})
export class FightService {
  constructor(private http: HttpClient) {}
  public startFight(fightRequest: FightRequest) {
    return this.http.post(startFightUlr, fightRequest);
  }

  public playerPerformAction(fightId: number, actionType: ActionType) {
    return this.http.put(playerPerformActionUrl(fightId), { actionType });
  }

  public opponentPerformAction(fightId: number) {
    return this.http.put(opponentPerformActionUrl(fightId), {});
  }

  public playerWinFight(fightId: number) {
    return this.http.post(playerWinFightUrl(fightId), {});
  }
}
