import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FightService } from './fight.service';
import {
  FightRequest,
  opponentPerformActionUrl,
  playerPerformActionUrl,
  playerWinFightUrl,
  startFightUlr,
} from 'src/app/utils/api/fightApi';
import { ActionType } from '../fight.model';

describe('FightService', () => {
  let service: FightService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FightService],
    });
    service = TestBed.inject(FightService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('startFight', () => {
    it('should make a POST request to startFightUrl with the provided fight request', () => {
      const fightRequest: FightRequest = { playerId: 1 };
      service.startFight(fightRequest).subscribe();

      const req = httpMock.expectOne(startFightUlr);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(fightRequest);
    });
  });

  describe('playerPerformAction', () => {
    it('should make a PUT request to playerPerformActionUrl with the provided fight ID and action type', () => {
      const fightId = 1;
      const actionType: ActionType = ActionType.ATTACK;
      service.playerPerformAction(fightId, actionType).subscribe();

      const req = httpMock.expectOne(playerPerformActionUrl(fightId));
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual({ actionType });
    });
  });

  describe('opponentPerformAction', () => {
    it('should make a PUT request to opponentPerformActionUrl with the provided fight ID', () => {
      const fightId = 1;
      service.opponentPerformAction(fightId).subscribe();

      const req = httpMock.expectOne(opponentPerformActionUrl(fightId));
      expect(req.request.method).toBe('PUT');
    });
  });

  describe('playerWinFight', () => {
    it('should make a POST request to playerWinFightUrl with the provided fight ID', () => {
      const fightId = 1;
      service.playerWinFight(fightId).subscribe();

      const req = httpMock.expectOne(playerWinFightUrl(fightId));
      expect(req.request.method).toBe('POST');
    });
  });
});
