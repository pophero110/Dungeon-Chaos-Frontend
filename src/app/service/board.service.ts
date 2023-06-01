import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private http: HttpClient) {}

  fetchBoard() {
    return this.http.post(`${environment.apiUrl}/api/boards`, {});
  }
}
