export type CharacterClass =
  | 'Warrior'
  | 'Mage'
  | 'Rogue'
  | 'Paladin'
  | 'Ranger'
  | 'Cleric'
  | 'Bard'
  | 'Necromancer'
  | 'Druid'
  | 'Monk';

export type CharacterRace =
  | 'Humano'
  | 'Elfo'
  | 'Enano'
  | 'Orco'
  | 'Dracónido'
  | 'Tiflin'
  | 'Mediano'
  | 'Gnomo';

export interface CharacterStats {
  health: number;       // Salud (HP)
  mana: number;         // Maná (MP)
  strength: number;     // Fuerza (STR)
  intelligence: number; // Inteligencia (INT)
  charisma: number;     // Carisma (CHA)
}

export interface QuestHook {
  title: string;
  objective: string;
  danger: string;
  reward: string;
}

export interface Character {
  id: string;
  name: string;
  characterClass: CharacterClass;
  race: string;
  title?: string;
  portraitUrl?: string;
  portraitSeed?: number;
  backstory?: string;
  backstorySeed?: number;
  stats: CharacterStats;
  questHook?: QuestHook;
  questHookSeed?: number;
  createdAt: number;
}
