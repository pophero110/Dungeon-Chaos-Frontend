import { Character, CharacterName } from '../character/character.model';
import { ActionType, FightResult } from '../fight/fight.model';
import { CurrentTurn } from '../fight/fight.model';
import { Opponent } from '../fight/fight.model';
import { FightState } from '../fight/state/fight.reducer';
import {
  EquipmentType,
  InventoryItem,
  Item,
  ItemType,
} from '../inventory/inventory.model';
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
  identityKey: '123123',
  difficulty: 1,
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
  difficulty: 1,
  identityKey: '123123',
};

export const fakeFightState: FightState = {
  id: 1,
  fightResult: FightResult.ONGOING,
  opponent: fakeOpponent,
  player: fakePlayer,
  currentTurn: CurrentTurn.PLAYER,
  opponentPosition: 2,
  isFighting: true,
  opponentActionType: ActionType.ATTACK,
  playerActionType: ActionType.ATTACK,
};

export const fakeWeapon: Item = {
  id: 1,
  type: ItemType.EQUIPMENT,
  name: 'Sword',
  attack: 5,
  health: 0,
  defense: 0,
  speed: 0,
  rarity: '',
  equipmentType: EquipmentType.WEAPON,
  specialAbility: '',
  potionType: '',
  potionEffect: '',
  potionDuration: 0,
};

export const fakeInventoryItemWeapon: InventoryItem = {
  id: 0,
  item: fakeWeapon,
  itemQuantity: 1,
  equipped: false,
};

export const fakeArmor: Item = {
  id: 2,
  type: ItemType.EQUIPMENT,
  name: 'Shield',
  attack: 0,
  health: 5,
  defense: 0,
  speed: 0,
  rarity: '',
  equipmentType: EquipmentType.ARMOR,
  specialAbility: '',
  potionType: '',
  potionEffect: '',
  potionDuration: 0,
};

export const fakeInventoryItemArmor: InventoryItem = {
  id: 0,
  item: fakeArmor,
  itemQuantity: 1,
  equipped: false,
};
