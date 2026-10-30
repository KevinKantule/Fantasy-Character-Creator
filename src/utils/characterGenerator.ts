import { Character, CharacterClass, CharacterRace, CharacterStats } from '../types/character';

export const FANTASY_CLASSES: CharacterClass[] = [
  'Warrior',
  'Mage',
  'Rogue',
  'Paladin',
  'Ranger',
  'Cleric',
  'Bard',
  'Necromancer',
  'Druid',
  'Monk',
];

export const FANTASY_RACES: CharacterRace[] = [
  'Humano',
  'Elfo',
  'Enano',
  'Orco',
  'Dracónido',
  'Tiflin',
  'Mediano',
  'Gnomo',
];

export const RACE_STAT_MODIFIERS: Record<
  CharacterRace,
  { health: number; mana: number; strength: number; intelligence: number; charisma: number; description: string }
> = {
  Humano: {
    health: 8,
    mana: 8,
    strength: 8,
    intelligence: 8,
    charisma: 8,
    description: '+8 a todas las estadísticas (Equilibrado y Adaptable)',
  },
  Elfo: {
    health: -5,
    mana: 15,
    strength: -2,
    intelligence: 18,
    charisma: 12,
    description: '+18 INT, +15 MANÁ, +12 CAR (Gracia Mística)',
  },
  Enano: {
    health: 22,
    mana: -10,
    strength: 18,
    intelligence: 4,
    charisma: -4,
    description: '+22 SALUD, +18 FUE (Resistencia de la Montaña)',
  },
  Orco: {
    health: 18,
    mana: -12,
    strength: 24,
    intelligence: -8,
    charisma: -4,
    description: '+24 FUE, +18 SALUD (Furia Brutal)',
  },
  Dracónido: {
    health: 12,
    mana: 5,
    strength: 16,
    intelligence: 6,
    charisma: 14,
    description: '+16 FUE, +14 CAR, +12 SALUD (Presencia Dracónica)',
  },
  Tiflin: {
    health: 0,
    mana: 14,
    strength: 0,
    intelligence: 16,
    charisma: 18,
    description: '+18 CAR, +16 INT, +14 MANÁ (Herencia Infernálida)',
  },
  Mediano: {
    health: 5,
    mana: 6,
    strength: -8,
    intelligence: 8,
    charisma: 18,
    description: '+18 CAR, +8 INT (Fortuna y Astucia)',
  },
  Gnomo: {
    health: -4,
    mana: 16,
    strength: -10,
    intelligence: 22,
    charisma: 6,
    description: '+22 INT, +16 MANÁ (Inventiva Arcana)',
  },
};

export const FIRST_NAMES: string[] = [
  'Aeloria',
  'Thorne',
  'Kaelen',
  'Zephyr',
  'Lyra',
  'Grommash',
  'Valerius',
  'Morrigan',
  'Cassian',
  'Elowen',
  'Theron',
  'Seraphina',
  'Vaelin',
  'Baelor',
  'Ignis',
  'Sylas',
  'Faelan',
  'Isolde',
  'Darian',
  'Rowan',
];

export const SURNAMES_OR_TITLES: string[] = [
  'Shadowalker',
  'Ironbreaker',
  'Whisperwind',
  'Dawnseeker',
  'Emberforge',
  'Stormborn',
  'Bloodfang',
  'el Radiante',
  'Nightshade',
  'Spellweaver',
  'Frostbane',
  'Runecarver',
  'Silverleaf',
  'Voidwalker',
  'el Denodado',
  'Ironclad',
  'Sunstrider',
  'Grimspire',
];

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateClassBaseStats(characterClass: CharacterClass): CharacterStats {
  switch (characterClass) {
    case 'Warrior':
      return {
        health: getRandomInt(120, 145),
        mana: getRandomInt(25, 45),
        strength: getRandomInt(80, 95),
        intelligence: getRandomInt(40, 60),
        charisma: getRandomInt(45, 65),
      };
    case 'Mage':
      return {
        health: getRandomInt(65, 85),
        mana: getRandomInt(130, 160),
        strength: getRandomInt(28, 45),
        intelligence: getRandomInt(85, 100),
        charisma: getRandomInt(55, 75),
      };
    case 'Rogue':
      return {
        health: getRandomInt(85, 105),
        mana: getRandomInt(50, 75),
        strength: getRandomInt(65, 85),
        intelligence: getRandomInt(68, 88),
        charisma: getRandomInt(70, 90),
      };
    case 'Paladin':
      return {
        health: getRandomInt(110, 135),
        mana: getRandomInt(75, 100),
        strength: getRandomInt(75, 90),
        intelligence: getRandomInt(55, 75),
        charisma: getRandomInt(78, 95),
      };
    case 'Ranger':
      return {
        health: getRandomInt(90, 115),
        mana: getRandomInt(60, 85),
        strength: getRandomInt(70, 88),
        intelligence: getRandomInt(65, 85),
        charisma: getRandomInt(50, 70),
      };
    case 'Necromancer':
      return {
        health: getRandomInt(70, 90),
        mana: getRandomInt(125, 155),
        strength: getRandomInt(30, 50),
        intelligence: getRandomInt(85, 98),
        charisma: getRandomInt(40, 60),
      };
    case 'Cleric':
      return {
        health: getRandomInt(100, 125),
        mana: getRandomInt(105, 135),
        strength: getRandomInt(55, 75),
        intelligence: getRandomInt(75, 90),
        charisma: getRandomInt(70, 88),
      };
    case 'Bard':
      return {
        health: getRandomInt(80, 100),
        mana: getRandomInt(90, 120),
        strength: getRandomInt(45, 65),
        intelligence: getRandomInt(70, 88),
        charisma: getRandomInt(88, 100),
      };
    case 'Druid':
      return {
        health: getRandomInt(95, 120),
        mana: getRandomInt(95, 125),
        strength: getRandomInt(60, 80),
        intelligence: getRandomInt(75, 92),
        charisma: getRandomInt(55, 75),
      };
    case 'Monk':
      return {
        health: getRandomInt(100, 125),
        mana: getRandomInt(60, 85),
        strength: getRandomInt(78, 92),
        intelligence: getRandomInt(65, 82),
        charisma: getRandomInt(50, 70),
      };
    default:
      return {
        health: 100,
        mana: 80,
        strength: 70,
        intelligence: 70,
        charisma: 70,
      };
  }
}

export function applyRaceModifiers(baseStats: CharacterStats, race: CharacterRace): CharacterStats {
  const mod = RACE_STAT_MODIFIERS[race] || RACE_STAT_MODIFIERS.Humano;
  return {
    health: Math.max(20, baseStats.health + mod.health),
    mana: Math.max(10, baseStats.mana + mod.mana),
    strength: Math.max(15, baseStats.strength + mod.strength),
    intelligence: Math.max(15, baseStats.intelligence + mod.intelligence),
    charisma: Math.max(15, baseStats.charisma + mod.charisma),
  };
}

export function getRandomElement<T>(array: T[]): T {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

let lastGeneratedName = '';

/**
 * Generates a random fantasy character with a unique Name, Class, selected Race, and influenced stats.
 */
export function generateRandomCharacter(chosenRace?: CharacterRace | 'Aleatorio'): Character {
  let firstName = getRandomElement(FIRST_NAMES);
  let surname = getRandomElement(SURNAMES_OR_TITLES);
  let fullName = `${firstName} ${surname}`;

  if (fullName === lastGeneratedName) {
    const alternativeFirst = FIRST_NAMES.filter((n) => n !== firstName);
    firstName = getRandomElement(alternativeFirst);
    fullName = `${firstName} ${surname}`;
  }
  lastGeneratedName = fullName;

  const characterClass = getRandomElement(FANTASY_CLASSES);
  const race = (!chosenRace || chosenRace === 'Aleatorio')
    ? getRandomElement(FANTASY_RACES)
    : chosenRace;

  const baseStats = generateClassBaseStats(characterClass);
  const stats = applyRaceModifiers(baseStats, race);

  return {
    id: `char-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    name: fullName,
    characterClass,
    race,
    stats,
    createdAt: Date.now(),
  };
}
