import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { createPlayerUrl } from 'src/app/utils/api/playerApi';
import { fakePlayerState } from 'src/app/test/fakeState';

describe('PlayerService', () => {
  let service: PlayerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlayerService],
    });
    service = TestBed.inject(PlayerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to create player', () => {
    const selectedCharacterId = '123';
    const dummyResponse = fakePlayerState;

    service.createPlayer(selectedCharacterId).subscribe((response) => {
      expect(response).toEqual(dummyResponse);
    });

    const request = httpMock.expectOne(createPlayerUrl);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual({ selectedCharacterId });

    request.flush(dummyResponse);
  });
});
