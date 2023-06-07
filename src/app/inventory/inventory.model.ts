export enum ItemType {
  EQUIPMENT,
  POTION,
}

export interface Item extends Equipment, Potion {
  id: number;
  type: ItemType;
  name: string;
}

export interface InventoryItem {
  id: number;
  item: Item;
  itemQuantity: number;
  equipped: boolean;
}

export enum EquipmentType {
  WEAPON,
  ARMOR,
}

export interface Equipment {
  attack: number;
  health: number;
  defense: number;
  speed: number;
  rarity: string;
  equipmentType: EquipmentType;
  specialAbility: string;
}

export interface Potion {
  potionType: string;
  potionEffect: string;
  potionDuration: number;
  rarity: string;
}
