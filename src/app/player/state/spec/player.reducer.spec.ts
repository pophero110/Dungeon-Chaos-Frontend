import {
  createPlayerSuccess,
  createPlayerError,
  updatePlayer,
  playerDie,
} from '../player.actions';
import { initialState, playerReducer, PlayerState } from '../player.reducer';
import { fakePlayerState } from '../../../test/fakeState';

describe('playerReducer', () => {
  it('should handle createPlayerSuccess action correctly', () => {
    const action = createPlayerSuccess({ playerState: fakePlayerState });
    const newState = playerReducer(initialState, action);

    expect(newState).toEqual(fakePlayerState);
  });

  it('should handle updatePlayer action correctly', () => {
    const existingState: PlayerState = fakePlayerState;
    const updatedPlayerState: PlayerState = {
      ...existingState,
      health: 80,
      goldCoin: 100,
    };
    const action = updatePlayer({ playerState: updatedPlayerState });
    const newState = playerReducer(existingState, action);

    expect(newState).toEqual(updatedPlayerState);
  });

  it('should handle playerDie action correctly', () => {
    const existingState: PlayerState = fakePlayerState;
    const action = playerDie();
    const newState = playerReducer(existingState, action);

    expect(newState).toEqual(initialState);
  });

  it('should handle createPlayerError action correctly', () => {
    const existingState: PlayerState = fakePlayerState;
    const action = createPlayerError();
    const newState = playerReducer(existingState, action);

    expect(newState).toEqual(initialState);
  });
});
