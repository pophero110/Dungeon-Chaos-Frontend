import { fakePlayerState } from 'src/app/test/fakeState';
import {
  selectPlayerState,
  selectPlayerCharacterName,
  selectPlayerId,
  selectIsPlayerCreated,
} from '../player.selectors';

describe('Player Selectors', () => {
  it('should select the player state', () => {
    const selectedPlayerState = selectPlayerState.projector(fakePlayerState);
    expect(selectedPlayerState).toEqual(fakePlayerState);
  });

  it('should select the player character name', () => {
    const selectedCharacterName =
      selectPlayerCharacterName.projector(fakePlayerState);
    expect(selectedCharacterName).toBe('Warrior');
  });

  it('should select the player ID', () => {
    const selectedPlayerId = selectPlayerId.projector(fakePlayerState);
    expect(selectedPlayerId).toBe(1);
  });

  it('should select the player state created status', () => {
    const selectedPlayerStateCreated =
      selectIsPlayerCreated.projector(fakePlayerState);
    expect(selectedPlayerStateCreated).toBe(true);
  });
});
