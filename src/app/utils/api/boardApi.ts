import { environment } from 'src/environments/environment';

export interface FetchBoardResponse {
  board: string[];
}
export const fetchBoardUrl = `${environment.apiUrl}/api/boards`;
