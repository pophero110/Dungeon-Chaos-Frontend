import { CurrentTurn } from '../../fight.model';
import { selectOpponentTurn } from '../fight.selectors';
import { fakeFightState } from 'src/app/test/fakeState';

describe('Fight Selectors', () => {
  const fightState = fakeFightState;
  it('should return true on select the opponent turn', () => {
    const opponentTurn = selectOpponentTurn.projector({
      ...fightState,
      currentTurn: CurrentTurn.OPPONENT,
    });
    expect(opponentTurn).toEqual(true);
  });

  it('should return false on select the opponent turn', () => {
    const opponentTurn = selectOpponentTurn.projector({
      ...fightState,
      currentTurn: CurrentTurn.PLAYER,
    });
    expect(opponentTurn).toEqual(false);
  });
});
