import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FightRequest, startFightUlr } from 'src/app/utils/api/fightApi';

@Injectable({
  providedIn: 'root',
})
export class FightService {
  constructor(private http: HttpClient) {}
  public startFight(fightRequest: FightRequest) {
    return this.http.post(startFightUlr, fightRequest);
  }
}
