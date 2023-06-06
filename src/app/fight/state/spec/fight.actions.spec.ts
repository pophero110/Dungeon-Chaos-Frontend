import {
  startFightSuccess,
  startFightError,
  startFight,
  playerPerformAction,
  endFight,
  opponentPerformAction,
  opponentPerformActionError,
  opponentPerformActionSuccess,
  playerLoseFight,
  playerPerformActionError,
  playerPerformActionSuccess,
  playerWinFight,
} from '../fight.actions';
import { FightState } from '../fight.reducer';
import { fakeFightState } from 'src/app/test/fakeState';
import { ActionType } from '../../fight.model';

describe('Fight Actions', () => {
  describe('startFightSuccess', () => {
    it('should create the action with the provided fight state', () => {
      const fightState: FightState = fakeFightState;
      const action = startFightSuccess({ fightState });
      expect(action).toEqual({
        type: '[Fight] Start Fight Success',
        fightState: { ...fightState },
      });
    });
  });

  describe('startFightError', () => {
    it('should create the action without any payload', () => {
      const action = startFightError();
      expect(action).toEqual({ type: '[Fight] Start Fight Error' });
    });
  });

  describe('startFight', () => {
    it('should create the action with the provided monster ID and opponent position', () => {
      const playerId = 1;
      const monsterId = 123;
      const opponentPosition = 456;
      const action = startFight({ playerId, monsterId, opponentPosition });
      expect(action).toEqual({
        type: '[Fight] Start Fight',
        monsterId,
        opponentPosition,
        playerId,
      });
    });
  });

  describe('playerPerformAction', () => {
    it('should create the action with the provided action type', () => {
      const actionType: ActionType = ActionType.ATTACK;
      const action = playerPerformAction({ actionType });
      expect(action).toEqual({
        type: '[Fight] Player Perform Action',
        actionType,
      });
    });
  });

  describe('playerPerformActionSuccess', () => {
    it('should create the action with the provided fight state', () => {
      const fightState: FightState = fakeFightState;
      const action = playerPerformActionSuccess({ fightState });
      expect(action).toEqual({
        type: '[Fight] Player Perform Action Success',
        fightState: { ...fightState },
      });
    });
  });

  describe('playerPerformActionError', () => {
    it('should create the action without any payload', () => {
      const action = playerPerformActionError();
      expect(action).toEqual({ type: '[Fight] Player Perform Action Error' });
    });
  });

  describe('opponentPerformAction', () => {
    it('should create the action without any payload', () => {
      const action = opponentPerformAction();
      expect(action).toEqual({ type: '[Fight] Opponent Perform Action' });
    });
  });

  describe('opponentPerformActionSuccess', () => {
    it('should create the action with the provided fight state', () => {
      const fightState: FightState = fakeFightState;
      const action = opponentPerformActionSuccess({ fightState });
      expect(action).toEqual({
        type: '[Fight] Opponent Perform Action Success',
        fightState: { ...fightState },
      });
    });
  });

  describe('opponentPerformActionError', () => {
    it('should create the action without any payload', () => {
      const action = opponentPerformActionError();
      expect(action).toEqual({ type: '[Fight] Opponent Perform Action Error' });
    });
  });

  describe('endFight', () => {
    it('should create the action without any payload', () => {
      const action = endFight();
      expect(action).toEqual({ type: '[Fight] End Fight' });
    });
  });

  describe('playerWinFight', () => {
    it('should create the action without any payload', () => {
      const action = playerWinFight();
      expect(action).toEqual({ type: '[Fight] Player Win Fight' });
    });
  });

  describe('playerLoseFight', () => {
    it('should create the action without any payload', () => {
      const action = playerLoseFight();
      expect(action).toEqual({ type: '[Fight] Player Lose Fight' });
    });
  });
});
