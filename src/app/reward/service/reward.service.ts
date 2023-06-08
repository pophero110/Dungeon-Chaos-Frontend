import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createRewardUrl } from 'src/app/utils/api/rewardApi';

@Injectable({
  providedIn: 'root',
})
export class RewardService {
  constructor(private http: HttpClient) {}
  public createReward(playerId: number) {
    return this.http.post(createRewardUrl, { playerId });
  }
}
