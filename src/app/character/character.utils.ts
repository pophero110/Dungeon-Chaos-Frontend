import { Character } from './character.model';

export const findCharacterById = (
  characters: Character[],
  characterId: number
): Character | undefined => {
  return characters.find((character) => character.id === +characterId);
};
