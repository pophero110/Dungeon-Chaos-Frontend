import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createPlayerUrl } from 'src/app/utils/api/playerApi';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  public createPlayer(selectedCharacterId: number) {
    return this.http.post(createPlayerUrl, { selectedCharacterId });
  }
}
