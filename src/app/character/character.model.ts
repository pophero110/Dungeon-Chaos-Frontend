export interface Character {
  id: number;
  name: string;
  health: number;
  attack: number;
  defense: number;
  speed: number;
}

export enum CharacterName {
  Warrior = 'Warrior',
  Rogue = 'Rogue',
  Uncertainty = 'Uncertainty',
}
