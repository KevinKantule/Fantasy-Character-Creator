import { Character, CharacterClass } from '../types/character';

export interface PortraitOptions {
  seed?: number;
  style?: 'cartoon' | 'video-game';
}

interface ClassVisuals {
  primaryGradient: [string, string];
  secondaryColor: string;
  glowColor: string;
  elementSymbol: string;
  armorType: string;
  accessory: string;
}

const CLASS_VISUAL_MAP: Record<CharacterClass, ClassVisuals> = {
  Mage: {
    primaryGradient: ['#0f172a', '#1e1b4b'],
    secondaryColor: '#38bdf8',
    glowColor: '#818cf8',
    elementSymbol: '✦',
    armorType: 'Arcane Robes & Hood',
    accessory: 'Floating Spell Runes',
  },
  Warrior: {
    primaryGradient: ['#1c1917', '#451a03'],
    secondaryColor: '#f59e0b',
    glowColor: '#fbbf24',
    elementSymbol: '⚔',
    armorType: 'Steel Plate & Pauldrons',
    accessory: 'Battle Crest',
  },
  Rogue: {
    primaryGradient: ['#022c22', '#064e3b'],
    secondaryColor: '#10b981',
    glowColor: '#34d399',
    elementSymbol: '🗡',
    armorType: 'Shadow Leather & Cowl',
    accessory: 'Concealed Dagger',
  },
  Paladin: {
    primaryGradient: ['#451a03', '#78350f'],
    secondaryColor: '#facc15',
    glowColor: '#fef08a',
    elementSymbol: '🛡',
    armorType: 'Gilded Sun Armor',
    accessory: 'Radiant Halo',
  },
  Ranger: {
    primaryGradient: ['#14532d', '#166534'],
    secondaryColor: '#4ade80',
    glowColor: '#86efac',
    elementSymbol: '🏹',
    armorType: 'Warden Tunic & Quiver',
    accessory: 'Forest Camo Cloak',
  },
  Necromancer: {
    primaryGradient: ['#2e1065', '#3b0764'],
    secondaryColor: '#c084fc',
    glowColor: '#a855f7',
    elementSymbol: '☠',
    armorType: 'Bone Spikes & Shroud',
    accessory: 'Soul Fire Wisps',
  },
  Cleric: {
    primaryGradient: ['#082f49', '#0c4a6e'],
    secondaryColor: '#38bdf8',
    glowColor: '#7dd3fc',
    elementSymbol: '✧',
    armorType: 'Blessed Vestments',
    accessory: 'Sacred Symbol',
  },
  Bard: {
    primaryGradient: ['#500724', '#831843'],
    secondaryColor: '#f472b6',
    glowColor: '#fb7185',
    elementSymbol: '♬',
    armorType: 'Feathered Tunic & Cape',
    accessory: 'Enchanted Lute Strings',
  },
  Druid: {
    primaryGradient: ['#064e3b', '#134e4a'],
    secondaryColor: '#2dd4bf',
    glowColor: '#5eead4',
    elementSymbol: '🍃',
    armorType: 'Living Bark & Leaves',
    accessory: 'Antler Crown',
  },
  Monk: {
    primaryGradient: ['#431407', '#7c2d12'],
    secondaryColor: '#fb923c',
    glowColor: '#fdba74',
    elementSymbol: '☯',
    armorType: 'Monastic Wraps',
    accessory: 'Prayer Beads',
  },
};

const BACKGROUND_THEMES = [
  { name: 'Astral Temple', bg: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)', stars: true },
  { name: 'Volcanic Citadel', bg: 'linear-gradient(135deg, #451a03 0%, #78350f 50%, #b45309 100%)', ember: true },
  { name: 'Emerald Forest', bg: 'linear-gradient(135deg, #022c22 0%, #065f46 50%, #047857 100%)', leaves: true },
  { name: 'Shadow Realm', bg: 'linear-gradient(135deg, #18181b 0%, #27272a 50%, #3f3f46 100%)', mist: true },
  { name: 'Sunken Shallows', bg: 'linear-gradient(135deg, #082f49 0%, #0e7490 50%, #0284c7 100%)', bubbles: true },
];

/**
 * Generates an SVG data URL of a cartoon / video game style character portrait.
 */
export function generateCartoonPortrait(character: Character, seed: number = 0): string {
  const visuals = CLASS_VISUAL_MAP[character.characterClass] || CLASS_VISUAL_MAP.Warrior;
  const bgTheme = BACKGROUND_THEMES[(character.name.length + seed) % BACKGROUND_THEMES.length];
  
  // Deterministic seed variations
  const hairStyles = ['spiky', 'flowing', 'hooded', 'short'];
  const hairStyle = hairStyles[(seed + character.name.length) % hairStyles.length];
  const eyeGlow = seed % 2 === 0;
  
  // Custom SVG portrait
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${visuals.primaryGradient[0]}" />
        <stop offset="100%" stop-color="${visuals.primaryGradient[1]}" />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${visuals.secondaryColor}" />
        <stop offset="100%" stop-color="${visuals.glowColor}" />
      </linearGradient>
      <radialGradient id="auraGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${visuals.glowColor}" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="${visuals.glowColor}" stop-opacity="0"/>
      </radialGradient>
      <filter id="gameGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <filter id="borderShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.8"/>
      </filter>
    </defs>

    <!-- Background Base -->
    <rect width="400" height="400" fill="url(#bgGrad)" />

    <!-- Ambient Glow / Aura Behind Hero -->
    <circle cx="200" cy="200" r="160" fill="url(#auraGlow)" />

    <!-- Stylized Back Ring / Video Game Halo -->
    <circle cx="200" cy="180" r="120" fill="none" stroke="${visuals.secondaryColor}" stroke-width="3" stroke-dasharray="10 8" opacity="0.4" />
    <circle cx="200" cy="180" r="130" fill="none" stroke="${visuals.glowColor}" stroke-width="1.5" opacity="0.3" />

    <!-- Class Crest Floating Particles -->
    <text x="70" y="90" font-size="24" fill="${visuals.glowColor}" opacity="0.7" filter="url(#gameGlow)">${visuals.elementSymbol}</text>
    <text x="320" y="110" font-size="28" fill="${visuals.glowColor}" opacity="0.8" filter="url(#gameGlow)">${visuals.elementSymbol}</text>
    <text x="90" y="320" font-size="20" fill="${visuals.secondaryColor}" opacity="0.6">${visuals.elementSymbol}</text>
    <text x="310" y="330" font-size="22" fill="${visuals.secondaryColor}" opacity="0.5">${visuals.elementSymbol}</text>

    <!-- Hero Silhouette / Torso Armor -->
    <path d="M120 400 L140 280 L200 300 L260 280 L280 400 Z" fill="#1e293b" stroke="#0f172a" stroke-width="4" />
    <path d="M140 290 Q200 320 260 290 L270 400 L130 400 Z" fill="${visuals.primaryGradient[1]}" opacity="0.8" />
    
    <!-- Armor Pauldrons / Collar -->
    <polygon points="120,310 160,270 180,310 140,340" fill="${visuals.secondaryColor}" stroke="#0f172a" stroke-width="3" />
    <polygon points="280,310 240,270 220,310 260,340" fill="${visuals.secondaryColor}" stroke="#0f172a" stroke-width="3" />
    
    <!-- Chest Crest -->
    <circle cx="200" cy="330" r="18" fill="#0f172a" stroke="${visuals.glowColor}" stroke-width="3" />
    <text x="200" y="337" font-size="16" font-weight="bold" text-anchor="middle" fill="${visuals.glowColor}">${visuals.elementSymbol}</text>

    <!-- Hero Neck -->
    <rect x="185" y="230" width="30" height="45" rx="5" fill="#fbcfe8" opacity="0.9" />

    <!-- Hero Head / Face -->
    <ellipse cx="200" cy="180" rx="65" ry="75" fill="#fde047" opacity="0.9" filter="url(#borderShadow)" />
    <!-- Facial Skin Base Tone -->
    <ellipse cx="200" cy="180" rx="62" ry="72" fill="#fed7aa" stroke="#78350f" stroke-width="3" />

    <!-- Stylized Hair or Hood depending on hairStyle -->
    ${
      hairStyle === 'hooded' || character.characterClass === 'Rogue' || character.characterClass === 'Mage'
        ? `<!-- Cowl / Hood -->
           <path d="M130 190 Q120 110 200 100 Q280 110 270 190 Q290 240 260 250 Q200 270 140 250 Z" fill="${visuals.primaryGradient[0]}" stroke="${visuals.secondaryColor}" stroke-width="4" />
           <path d="M145 180 Q135 125 200 115 Q265 125 255 180 Z" fill="${visuals.primaryGradient[1]}" />
          `
        : hairStyle === 'spiky'
        ? `<!-- Video Game Anime Spiky Hair -->
           <polygon points="135,160 110,100 150,120 170,80 200,115 230,75 250,115 290,95 265,160" fill="${visuals.secondaryColor}" stroke="#1e293b" stroke-width="3" />
           <polygon points="145,150 130,110 160,125 180,95 200,125 220,90 240,120 270,110 255,150" fill="${visuals.glowColor}" />
          `
        : `<!-- Sleek Fantasy Crown / Flowing Locks -->
           <path d="M130 180 C130 110 270 110 270 180 C270 140 250 120 200 120 C150 120 130 140 130 180 Z" fill="${visuals.secondaryColor}" stroke="#1e293b" stroke-width="3" />
           <path d="M170 120 L200 90 L230 120" stroke="${visuals.glowColor}" stroke-width="5" fill="none" />
          `
    }

    <!-- Hero Eyes (Cartoon Video Game style) -->
    <ellipse cx="178" cy="180" rx="14" ry="12" fill="#ffffff" stroke="#1c1917" stroke-width="3" />
    <ellipse cx="222" cy="180" rx="14" ry="12" fill="#ffffff" stroke="#1c1917" stroke-width="3" />
    <!-- Iris & Pupil -->
    <circle cx="180" cy="180" r="8" fill="${visuals.secondaryColor}" />
    <circle cx="220" cy="180" r="8" fill="${visuals.secondaryColor}" />
    <circle cx="180" cy="180" r="4" fill="#0f172a" />
    <circle cx="220" cy="180" r="4" fill="#0f172a" />
    <!-- Catchlight Glint -->
    <circle cx="177" cy="177" r="2.5" fill="#ffffff" />
    <circle cx="217" cy="177" r="2.5" fill="#ffffff" />
    ${
      eyeGlow
        ? `<ellipse cx="178" cy="180" rx="14" ry="12" fill="none" stroke="${visuals.glowColor}" stroke-width="2.5" opacity="0.8" filter="url(#gameGlow)" />
           <ellipse cx="222" cy="180" rx="14" ry="12" fill="none" stroke="${visuals.glowColor}" stroke-width="2.5" opacity="0.8" filter="url(#gameGlow)" />`
        : ''
    }

    <!-- Eyebrows (Heroic Angle) -->
    <path d="M165 162 L192 168" stroke="#1c1917" stroke-width="4" stroke-linecap="round" />
    <path d="M235 162 L208 168" stroke="#1c1917" stroke-width="4" stroke-linecap="round" />

    <!-- Nose -->
    <path d="M198 185 L195 198 L204 198" stroke="#b45309" stroke-width="2.5" fill="none" stroke-linecap="round" />

    <!-- Confident Hero Smirk / Smile -->
    <path d="M186 215 Q200 225 214 215" stroke="#78350f" stroke-width="3.5" fill="none" stroke-linecap="round" />

    <!-- War Paint / Facial Marking -->
    <line x1="160" y1="192" x2="168" y2="200" stroke="${visuals.secondaryColor}" stroke-width="3" opacity="0.75" />
    <line x1="240" y1="192" x2="232" y2="200" stroke="${visuals.secondaryColor}" stroke-width="3" opacity="0.75" />

    <!-- Fantasy Video Game Card Frame / Ornate Border -->
    <rect x="8" y="8" width="384" height="384" rx="16" fill="none" stroke="#d97706" stroke-width="6" opacity="0.9" />
    <rect x="14" y="14" width="372" height="372" rx="12" fill="none" stroke="#fef3c7" stroke-width="1.5" opacity="0.4" />
    
    <!-- Corner Gemstones -->
    <polygon points="12,12 28,12 28,28 12,28" fill="${visuals.secondaryColor}" stroke="#78350f" stroke-width="2" />
    <polygon points="388,12 372,12 372,28 388,28" fill="${visuals.secondaryColor}" stroke="#78350f" stroke-width="2" />
    <polygon points="12,388 28,388 28,372 12,372" fill="${visuals.secondaryColor}" stroke="#78350f" stroke-width="2" />
    <polygon points="388,388 372,388 372,372 388,372" fill="${visuals.secondaryColor}" stroke="#78350f" stroke-width="2" />

    <!-- Style Badge -->
    <g transform="translate(20, 360)">
      <rect width="130" height="22" rx="11" fill="#000000" opacity="0.7" />
      <text x="65" y="15" fill="#fde68a" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" letter-spacing="1">CARTOON ART #${seed + 1}</text>
    </g>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
