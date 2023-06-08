import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fetchItemsUrl } from 'src/app/utils/api/itemApi';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  public fetchItems() {
    return this.http.get(fetchItemsUrl);
  }
  constructor(private http: HttpClient) {}
}
