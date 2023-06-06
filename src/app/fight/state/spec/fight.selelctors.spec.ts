import { CurrentTurn } from '../../fight.model';
import { selectisOpponentTurn } from '../fight.selectors';
import { fakeFightState } from 'src/app/test/fakeState';

describe('Fight Selectors', () => {
  const fightState = fakeFightState;
  it('should return true on select the opponent turn', () => {
    const isOpponentTurn = selectisOpponentTurn.projector({
      ...fightState,
      currentTurn: CurrentTurn.OPPONENT,
    });
    expect(isOpponentTurn).toEqual(true);
  });

  it('should return false on select the opponent turn', () => {
    const isOpponentTurn = selectisOpponentTurn.projector({
      ...fightState,
      currentTurn: CurrentTurn.PLAYER,
    });
    expect(isOpponentTurn).toEqual(false);
  });
});
