import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fetchBoardUrl } from '../../utils/boardApi';
@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private http: HttpClient) {}

  fetchBoard() {
    return this.http.get(fetchBoardUrl, {});
  }
}
