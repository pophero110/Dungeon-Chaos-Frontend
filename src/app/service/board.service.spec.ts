import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BoardService } from './board.service';
import { fetchBoardUrl } from '../utils/boardApi';

describe('BoardService', () => {
  let service: BoardService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BoardService],
    });

    service = TestBed.inject(BoardService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should make a POST request to fetch the board data', () => {
    const expectedUrl = fetchBoardUrl;
    const mockResponse = [
      'PPPPPPPPP#P#',
      '##P#####P#P#',
      'PPP#PPS#P#PP',
      'P#P#P#######',
      'P#P#P#PPPPP#',
      'P#P#P#P###P#',
      'P#P#PPP#P#P#',
      'P#######P#P#',
      'P#PPPPPPPPP#',
      'P#P#########',
      'PPPPPPPPPPPP',
      '##########E#',
    ];

    service.fetchBoard().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(expectedUrl);
    console.log(req);

    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});
