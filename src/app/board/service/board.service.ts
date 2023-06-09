import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fetchBoardUrl } from '../../utils/api/boardApi';
@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private http: HttpClient) {}

  fetchBoard(playerId: number) {
    return this.http.post(fetchBoardUrl, { playerId });
  }
}
