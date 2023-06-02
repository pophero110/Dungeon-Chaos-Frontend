import { environment } from 'src/environment';

export interface FetchBoardResponse {
  board: string[];
}
export const fetchBoardUrl = `${environment.apiUrl}/api/boards`;
