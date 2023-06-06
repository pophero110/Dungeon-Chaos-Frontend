import { Player } from '../player/player.model';

export interface Fight {
  id: number;
  fightResult: FightResult;
  opponent: Opponent;
  player: Player;
  currentTurn: CurrentTurn;
}

export enum FightResult {
  VICTORY_PLAYER = 'VICTORY_PLAYER',
  VICTORY_OPPONENT = 'VICTORY_OPPONENT',
  FLEE_PLAYER = 'FLEE_PLAYER',
  FLEE_MONSTER = 'FLEE_MONSTER',
  ONGOING = 'ONGOING',
}

export enum CurrentTurn {
  PLAYER = 'PLAYER',
  OPPONENT = 'OPPONENT',
}

export interface Opponent {
  id: number;
  name: string;
  health: number;
  attack: number;
  defense: number;
  speed: number;
}

export enum ActionType {
  ATTACK = 'ATTACK',
  DEFEND = 'DEFEND',
  FLEE = 'FLEE',
}

export const OPPONENT_TURN_DURATION = 1000; // 1 second
