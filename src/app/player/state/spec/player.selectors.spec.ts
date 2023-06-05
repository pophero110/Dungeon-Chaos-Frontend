import { PlayerState } from '../player.reducer';
import {
  selectPlayerState,
  selectPlayerCharacterName,
  selectPlayerId,
  selectPlayerStateCreated,
} from '../player.selectors';

describe('Player Selectors', () => {
  const playerState: PlayerState = {
    id: 1,
    name: 'John',
    health: 100,
    attack: 20,
    defense: 10,
    speed: 5,
    goldCoin: 50,
    created: true,
  };

  const appState = {
    player: playerState,
  };

  it('should select the player state', () => {
    const selectedPlayerState = selectPlayerState.projector(appState);
    expect(selectedPlayerState).toEqual(playerState);
  });

  it('should select the player character name', () => {
    const selectedCharacterName =
      selectPlayerCharacterName.projector(playerState);
    expect(selectedCharacterName).toBe('John');
  });

  it('should select the player ID', () => {
    const selectedPlayerId = selectPlayerId.projector(playerState);
    expect(selectedPlayerId).toBe(1);
  });

  it('should select the player state created status', () => {
    const selectedPlayerStateCreated =
      selectPlayerStateCreated.projector(playerState);
    expect(selectedPlayerStateCreated).toBe(true);
  });
});
