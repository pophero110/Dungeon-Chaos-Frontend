import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  createPlayerUrl,
  getPlayerByIdentityKeyUrl,
  getPlayerUrl,
  increasePlayerDifficultyUrl,
} from 'src/app/utils/api/playerApi';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  public createPlayer(selectedCharacterId: number) {
    return this.http.post(createPlayerUrl, { selectedCharacterId });
  }

  public getPlayer() {
    return this.http.get(getPlayerUrl);
  }

  public getPlayerByIdentityKey(identityKey: string) {
    return this.http.get(getPlayerByIdentityKeyUrl(identityKey));
  }

  public increasePlayerDifficulty(playerId: number) {
    return this.http.put(increasePlayerDifficultyUrl(playerId), {});
  }
}
