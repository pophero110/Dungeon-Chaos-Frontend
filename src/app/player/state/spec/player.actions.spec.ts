import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { playerReducer } from '../player.reducer';
import {
  createPlayerSuccess,
  createPlayer,
  createPlayerError,
  updatePlayer,
  playerDie,
} from '../player.actions';
import { fakePlayerState } from '../../../test/fakeState';

describe('Player Actions', () => {
  let actions$: Actions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ player: playerReducer })],
      providers: [provideMockActions(() => actions$)],
    });
    actions$ = TestBed.inject(Actions);
  });

  describe('createPlayerSuccess', () => {
    it('should create the action with the provided player state', () => {
      const action = createPlayerSuccess({ playerState: fakePlayerState });

      expect(action.type).toBe('[Player] Create Player Success');
      expect(action.playerState).toEqual(fakePlayerState);
    });
  });

  describe('createPlayer', () => {
    it('should create the action with the provided selectedCharacterId', () => {
      const selectedCharacterId = '123';
      const action = createPlayer({ selectedCharacterId });

      expect(action.type).toBe('[Player] Create Player');
      expect(action.selectedCharacterId).toBe(selectedCharacterId);
    });
  });

  describe('createPlayerError', () => {
    it('should create the action with correc type', () => {
      const action = createPlayerError();

      expect(action.type).toBe('[Player] Create Player Error');
    });
  });

  describe('updatePlayer', () => {
    it('should create the action with the provided player state', () => {
      const action = updatePlayer({ playerState: fakePlayerState });

      expect(action.type).toBe('[Player] Update Player');
      expect(action.playerState).toEqual(fakePlayerState);
    });
  });

  describe('playerDie', () => {
    it('should create the action with correct type', () => {
      const action = playerDie();

      expect(action.type).toBe('[Player] Player Die');
    });
  });
});
