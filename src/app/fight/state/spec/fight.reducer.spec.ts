import { fightReducer } from '../fight.reducer';
import {
  startFightSuccess,
  playerPerformActionSuccess,
  opponentPerformActionSuccess,
  endFight,
} from '../fight.actions';
import { fakeFightState } from 'src/app/test/fakeState';

describe('fightReducer', () => {
  const initialState = {};

  it('should handle startFightSuccess action', () => {
    const fightState = fakeFightState;
    const action = startFightSuccess({
      fightState,
    });
    const newState = fightReducer(initialState, action);
    expect(newState).toEqual(fightState);
  });

  it('should handle playerPerformActionSuccess action', () => {
    const fightState = fakeFightState;
    const action = playerPerformActionSuccess({ fightState });
    const newState = fightReducer(initialState, action);
    expect(newState).toEqual(fightState);
  });

  it('should handle opponentPerformActionSuccess action', () => {
    const fightState = fakeFightState;
    const action = opponentPerformActionSuccess({ fightState });
    const newState = fightReducer(initialState, action);
    expect(newState).toEqual(fightState);
  });

  it('should handle endFight action', () => {
    const action = endFight();
    const newState = fightReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
