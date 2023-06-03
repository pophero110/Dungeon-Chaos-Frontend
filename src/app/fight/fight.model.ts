export interface Fight {
  id: string;
  fightResult: FightResult;
  opponent: Opponent;
}

export enum FightResult {
  VICTORY_PLAYER = 'Victory - Player',
  VICTORY_MONSTER = 'Victory - Monster',
  FLEE = 'Flee',
}

interface Opponent {
  id: number;
  name: string;
  health: number;
  attack: number;
  defense: number;
  speed: number;
}
