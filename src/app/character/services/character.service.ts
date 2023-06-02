import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fetchCharactersUrl } from 'src/app/utils/characterApi';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}
  public fetchCharacters() {
    return this.http.get(fetchCharactersUrl);
  }
}
