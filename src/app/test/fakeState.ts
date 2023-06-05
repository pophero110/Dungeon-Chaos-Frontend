import { FightResult } from '../fight/fight.model';
import { CurrentTurn } from '../fight/fight.model';
import { Opponent } from '../fight/fight.model';
import { Fight } from '../fight/fight.model';
import { Player } from '../player/player.model';

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

export const fakePlayer: Player = {
  id: 1,
  name: 'Warrior',
  health: 90,
  attack: 15,
  defense: 20,
  speed: 30,
  goldCoin: 0,
};
export const fakeOpponent: Opponent = {
  id: 1,
  name: 'Goblin',
  health: 12,
  attack: 12,
  defense: 12,
  speed: 12,
};
export const fakeCurrentPlayerPosition = 1;
export const fakePlayerCharacterName = 'Warrior';
export const fakeFight: Fight = {
  id: 1,
  fightResult: FightResult.ONGOING,
  opponent: fakeOpponent,
  player: fakePlayer,
  currentTurn: CurrentTurn.PLAYER,
};