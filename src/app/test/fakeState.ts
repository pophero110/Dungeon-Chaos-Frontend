import { Character, CharacterName } from '../character/character.model';
import { FightResult } from '../fight/fight.model';
import { CurrentTurn } from '../fight/fight.model';
import { Opponent } from '../fight/fight.model';
import { FightState } from '../fight/state/fight.reducer';
import { Player } from '../player/player.model';
import { PlayerState } from '../player/state/player.reducer';

export const fakeBoard: string[][] = [
  ['M', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'M', 'W', 'P', 'W'],
  ['W', 'W', 'P', 'W', 'W', 'W', 'W', 'W', 'P', 'W', 'M', 'W'],
  ['P', 'P', 'P', 'W', 'P', 'P', 'S', 'W', 'M', 'W', 'P', 'P'],
  ['P', 'W', 'M', 'W', 'M', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
  ['M', 'W', 'P', 'W', 'P', 'W', 'P', 'P', 'P', 'M', 'P', 'W'],
  ['P', 'W', 'P', 'W', 'M', 'W', 'P', 'W', 'W', 'W', 'M', 'W'],
  ['P', 'W', 'P', 'W', 'P', 'P', 'P', 'W', 'P', 'W', 'P', 'W'],
  ['M', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'P', 'W', 'P'],
  ['P', 'W', 'P', 'P', 'M', 'P', 'P', 'P', 'P', 'P', 'P', 'W'],
  ['P', 'W', 'P', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
  ['M', 'P', 'P', 'P', 'P', 'M', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'E', 'W'],
];

export const fakePlayerState: PlayerState = {
  id: 1,
  name: CharacterName.Warrior,
  health: 90,
  attack: 15,
  defense: 20,
  speed: 30,
  goldCoin: 0,
  isCreated: true,
};

export const fakeOpponent: Opponent = {
  id: 1,
  name: 'Goblin',
  health: 12,
  attack: 12,
  defense: 12,
  speed: 12,
};

export const fakeCharacter: Character = {
  id: 1,
  name: CharacterName.Warrior,
  health: 90,
  attack: 15,
  defense: 20,
  speed: 30,
};

const fakePlayer: Player = {
  id: 1,
  name: CharacterName.Warrior,
  health: 90,
  attack: 15,
  defense: 20,
  speed: 30,
  goldCoin: 0,
};

export const fakeFightState: FightState = {
  id: 1,
  fightResult: FightResult.ONGOING,
  opponent: fakeOpponent,
  player: fakePlayer,
  currentTurn: CurrentTurn.PLAYER,
  opponentPosition: 2,
  isFighting: true,
};
