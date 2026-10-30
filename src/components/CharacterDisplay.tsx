import React from 'react';
import { Character } from '../types/character';
import { 
  Sparkles, 
  Sword, 
  Crosshair, 
  Shield, 
  Flame, 
  Skull, 
  Music, 
  HeartHandshake, 
  Trees, 
  Dumbbell,
  RefreshCw,
  Image as ImageIcon,
  Scroll,
  BookOpen,
  Heart,
  Droplets,
  Zap,
  BookmarkPlus,
  Check,
  Brain,
  Crown,
  Compass,
  AlertTriangle,
  Gift
} from 'lucide-react';

interface CharacterDisplayProps {
  character: Character;
  onGeneratePortrait: () => void;
  onRegeneratePortrait: () => void;
  onGenerateBackstory: () => void;
  onGenerateQuestHook: () => void;
  onSaveToDeck: () => void;
  isSavedInDeck?: boolean;
  isGeneratingPortrait?: boolean;
  isGeneratingBackstory?: boolean;
  isGeneratingQuestHook?: boolean;
}

const CLASS_THEMES: Record<
  string, 
  { 
    icon: React.ReactNode; 
    color: string; 
    border: string; 
    bg: string; 
    gradient: string; 
    nameEs: string; 
    description: string;
    gemColor: string;
  }
> = {
  Mage: {
    icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
    color: 'text-cyan-300',
    border: 'border-cyan-500/50',
    bg: 'bg-cyan-950/40',
    gradient: 'from-cyan-950/60 to-blue-950/40',
    nameEs: 'Mago / Mage',
    description: 'Maestro de misterios arcanos y hechicería elemental.',
    gemColor: 'from-cyan-400 to-blue-600',
  },
  Warrior: {
    icon: <Sword className="w-6 h-6 text-amber-500" />,
    color: 'text-amber-400',
    border: 'border-amber-500/50',
    bg: 'bg-amber-950/40',
    gradient: 'from-amber-950/60 to-stone-950/40',
    nameEs: 'Guerrero / Warrior',
    description: 'Luchador disciplinado con destreza inigualable en acero y armadura.',
    gemColor: 'from-amber-400 to-orange-600',
  },
  Rogue: {
    icon: <Crosshair className="w-6 h-6 text-emerald-400" />,
    color: 'text-emerald-300',
    border: 'border-emerald-500/50',
    bg: 'bg-emerald-950/40',
    gradient: 'from-emerald-950/60 to-teal-950/40',
    nameEs: 'Pícaro / Rogue',
    description: 'Acechador de sombras experto en sigilo y ataques de precisión.',
    gemColor: 'from-emerald-400 to-green-600',
  },
  Paladin: {
    icon: <Shield className="w-6 h-6 text-yellow-300" />,
    color: 'text-yellow-200',
    border: 'border-yellow-500/50',
    bg: 'bg-yellow-950/40',
    gradient: 'from-yellow-950/60 to-amber-950/40',
    nameEs: 'Paladín / Paladin',
    description: 'Cruzado sagrado bajo juramento para proteger a los indefensos.',
    gemColor: 'from-yellow-300 to-amber-500',
  },
  Ranger: {
    icon: <Crosshair className="w-6 h-6 text-lime-400" />,
    color: 'text-lime-300',
    border: 'border-lime-500/50',
    bg: 'bg-lime-950/40',
    gradient: 'from-lime-950/60 to-emerald-950/40',
    nameEs: 'Explorador / Ranger',
    description: 'Vigía montaraz y arquero maestro vinculado a la naturaleza salvaje.',
    gemColor: 'from-lime-400 to-emerald-600',
  },
  Necromancer: {
    icon: <Skull className="w-6 h-6 text-purple-400" />,
    color: 'text-purple-300',
    border: 'border-purple-500/50',
    bg: 'bg-purple-950/40',
    gradient: 'from-purple-950/60 to-indigo-950/40',
    nameEs: 'Nigromante / Necromancer',
    description: 'Tejedor de sombras prohibidas y comandante de espíritus ancestrales.',
    gemColor: 'from-purple-400 to-violet-700',
  },
  Cleric: {
    icon: <HeartHandshake className="w-6 h-6 text-sky-300" />,
    color: 'text-sky-200',
    border: 'border-sky-500/50',
    bg: 'bg-sky-950/40',
    gradient: 'from-sky-950/60 to-cyan-950/40',
    nameEs: 'Clérigo / Cleric',
    description: 'Canalizador de plegarias divinas, gracia curativa y luz sagrada.',
    gemColor: 'from-sky-300 to-blue-500',
  },
  Bard: {
    icon: <Music className="w-6 h-6 text-pink-400" />,
    color: 'text-pink-300',
    border: 'border-pink-500/50',
    bg: 'bg-pink-950/40',
    gradient: 'from-pink-950/60 to-rose-950/40',
    nameEs: 'Bardo / Bard',
    description: 'Músico elocuente que inspira con baladas místicas y cautiva enemigos.',
    gemColor: 'from-pink-400 to-rose-600',
  },
  Druid: {
    icon: <Trees className="w-6 h-6 text-teal-400" />,
    color: 'text-teal-300',
    border: 'border-teal-500/50',
    bg: 'bg-teal-950/40',
    gradient: 'from-teal-950/60 to-emerald-950/40',
    nameEs: 'Druida / Druid',
    description: 'Guardián del bosque antiguo, cambiaformas y protector del equilibrio.',
    gemColor: 'from-teal-400 to-emerald-600',
  },
  Monk: {
    icon: <Dumbbell className="w-6 h-6 text-orange-400" />,
    color: 'text-orange-300',
    border: 'border-orange-500/50',
    bg: 'bg-orange-950/40',
    gradient: 'from-orange-950/60 to-amber-950/40',
    nameEs: 'Monje / Monk',
    description: 'Artista marcial disciplinado que canaliza su ki en golpes devastadores.',
    gemColor: 'from-orange-400 to-amber-600',
  },
};

export const CharacterDisplay: React.FC<CharacterDisplayProps> = ({ 
  character, 
  onGeneratePortrait, 
  onRegeneratePortrait,
  onGenerateBackstory,
  onGenerateQuestHook,
  onSaveToDeck,
  isSavedInDeck = false,
  isGeneratingPortrait = false,
  isGeneratingBackstory = false,
  isGeneratingQuestHook = false 
}) => {
  const theme = CLASS_THEMES[character.characterClass] || CLASS_THEMES.Warrior;

  return (
    <div 
      data-testid="player-card"
      className="relative w-full max-w-lg mx-auto rounded-[28px] p-2 bg-gradient-to-b from-amber-600 via-amber-800 to-amber-950 shadow-[0_0_50px_rgba(0,0,0,0.9)] border-4 border-amber-400/90 transition-all duration-300 hover:shadow-amber-500/20 group"
    >
      {/* Outer Filigree Frame */}
      <div className="relative rounded-[22px] bg-stone-950 border-2 border-amber-500/70 p-5 sm:p-6 overflow-hidden">
        {/* Ornate Corner Metal Brackets */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t-3 border-l-3 border-amber-300 pointer-events-none" />
        <div className="absolute top-2 right-2 w-6 h-6 border-t-3 border-r-3 border-amber-300 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-3 border-l-3 border-amber-300 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-3 border-r-3 border-amber-300 pointer-events-none" />

        {/* Card Header: Rarity Gem & Card Title */}
        <div className="flex items-center justify-between border-b-2 border-amber-500/30 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-lg bg-gradient-to-tr ${theme.gemColor} shadow-md shadow-black flex items-center justify-center border border-amber-200`}>
              <span className="text-stone-950 font-black text-xs font-cinzel">★</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400/90 font-cinzel">
                Carta de Personaje • Player Card
              </span>
              <p className="text-[11px] text-stone-400 font-serif">
                {character.race} • {theme.nameEs}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-stone-900 border border-amber-600/50 text-amber-300 font-cinzel">
              Rango Legendario
            </span>
          </div>
        </div>

        {/* Character Name */}
        <div className="mb-3 text-center py-2 px-3 rounded-xl bg-gradient-to-r from-amber-950/40 via-stone-900/90 to-amber-950/40 border border-amber-500/40 shadow-inner">
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500/70 font-serif block">
            Nombre • Name
          </span>
          <h2
            data-testid="character-name"
            className="font-fantasy-name text-2xl sm:text-3xl lg:text-4xl font-black text-amber-100 tracking-wider drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] leading-tight"
          >
            {character.name}
          </h2>
        </div>

        {/* Portrait & Action Buttons */}
        <div className="mb-3 flex flex-col items-center">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-3 border-amber-400/90 shadow-2xl shadow-black bg-stone-950 group">
            {character.portraitUrl ? (
              <>
                <img
                  src={character.portraitUrl}
                  alt={`${character.name} cartoon/video game style portrait`}
                  data-testid="character-portrait"
                  className={`w-full h-full object-cover transition-opacity duration-300 ${isGeneratingPortrait ? 'opacity-40' : 'opacity-100'}`}
                />
                <div className="absolute top-1.5 left-1.5 bg-stone-950/90 backdrop-blur-sm border border-amber-400/50 rounded px-1.5 py-0.5 text-[9px] font-bold text-amber-300 tracking-wider uppercase font-cinzel">
                  Estilo Cartoon / Video Game
                </div>
              </>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-stone-900/80 border border-dashed border-amber-500/30">
                <ImageIcon className="w-10 h-10 text-amber-400/50 mb-1" />
                <p className="text-xs font-semibold text-stone-300">Sin Retrato</p>
                <p className="text-[10px] text-stone-400">Cartoon / Video Game Style</p>
              </div>
            )}

            {isGeneratingPortrait && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm">
                <RefreshCw className="w-7 h-7 text-amber-400 animate-spin mb-1.5" />
                <span className="text-[11px] font-semibold text-amber-200 font-serif">Invocando Retrato...</span>
              </div>
            )}
          </div>

          <div className="mt-2 flex items-center gap-2">
            <button
              type="button"
              data-testid="generate-portrait-button"
              onClick={onGeneratePortrait}
              disabled={isGeneratingPortrait}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold font-serif bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/50 hover:border-amber-400 transition cursor-pointer disabled:opacity-50 shadow-sm"
              aria-label="Generate Portrait"
              title="Generar Retrato / Generate Portrait"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Generar Retrato • Generate</span>
            </button>

            <button
              type="button"
              data-testid="regenerate-portrait-button"
              onClick={onRegeneratePortrait}
              disabled={isGeneratingPortrait}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold font-serif bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-amber-500/50 transition cursor-pointer disabled:opacity-50 shadow-sm"
              aria-label="Regenerate Portrait"
              title="Regenerar Retrato / Regenerate Portrait"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-amber-400 ${isGeneratingPortrait ? 'animate-spin' : ''}`} />
              <span>Regenerar • Regenerate</span>
            </button>
          </div>
        </div>

        {/* Character Class & Race Banner */}
        <div className={`p-2.5 rounded-xl border ${theme.border} ${theme.bg} mb-3`}>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block font-serif">
                Clase • Class & Raza
              </span>
              <span
                data-testid="character-class"
                className={`text-lg sm:text-xl font-black font-cinzel ${theme.color}`}
              >
                {character.characterClass}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-serif text-amber-400/90 font-semibold block">
                {character.race} • {theme.nameEs}
              </span>
              <span className="text-[10px] text-stone-400 font-serif">Arquetipo Activo</span>
            </div>
          </div>
          <p className="text-[11px] text-stone-400 mt-0.5 italic font-serif">
            {theme.description}
          </p>
        </div>

        {/* ALL 5 STATS SECTION: Health, Mana, Strength, Intelligence, Charisma */}
        <div 
          data-testid="character-stats" 
          className="mb-3 p-3 rounded-2xl bg-stone-950/90 border-2 border-amber-500/40 shadow-inner"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-black uppercase tracking-widest text-amber-300 font-cinzel flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Estadísticas • Stats (5 Atributos)
            </span>
            <span className="text-[10px] text-amber-400/80 font-serif">Influenciadas por {character.race}</span>
          </div>

          <div className="grid grid-cols-5 gap-1.5">
            {/* Health / Salud */}
            <div 
              data-testid="stat-health"
              className="flex flex-col items-center p-1.5 rounded-xl bg-gradient-to-b from-red-950/40 to-stone-900 border border-red-700/50 shadow-sm"
              title="Salud (Health)"
            >
              <Heart className="w-3.5 h-3.5 fill-red-500/30 text-red-400 mb-0.5" />
              <span className="text-[10px] font-bold font-serif text-red-300">Salud</span>
              <span className="text-base sm:text-lg font-black font-cinzel text-red-100">
                {character.stats.health}
              </span>
              <span className="text-[8px] uppercase tracking-wider text-red-400/80 font-mono">
                HP
              </span>
            </div>

            {/* Mana / Maná */}
            <div 
              data-testid="stat-mana"
              className="flex flex-col items-center p-1.5 rounded-xl bg-gradient-to-b from-blue-950/40 to-stone-900 border border-blue-700/50 shadow-sm"
              title="Maná (Mana)"
            >
              <Droplets className="w-3.5 h-3.5 fill-cyan-500/30 text-cyan-400 mb-0.5" />
              <span className="text-[10px] font-bold font-serif text-cyan-300">Maná</span>
              <span className="text-base sm:text-lg font-black font-cinzel text-cyan-100">
                {character.stats.mana}
              </span>
              <span className="text-[8px] uppercase tracking-wider text-cyan-400/80 font-mono">
                MP
              </span>
            </div>

            {/* Strength / Fuerza */}
            <div 
              data-testid="stat-strength"
              className="flex flex-col items-center p-1.5 rounded-xl bg-gradient-to-b from-amber-950/40 to-stone-900 border border-amber-600/50 shadow-sm"
              title="Fuerza (Strength)"
            >
              <Sword className="w-3.5 h-3.5 text-amber-400 mb-0.5" />
              <span className="text-[10px] font-bold font-serif text-amber-300">Fuerza</span>
              <span className="text-base sm:text-lg font-black font-cinzel text-amber-100">
                {character.stats.strength}
              </span>
              <span className="text-[8px] uppercase tracking-wider text-amber-400/80 font-mono">
                STR
              </span>
            </div>

            {/* Intelligence / Inteligencia */}
            <div 
              data-testid="stat-intelligence"
              className="flex flex-col items-center p-1.5 rounded-xl bg-gradient-to-b from-purple-950/40 to-stone-900 border border-purple-600/50 shadow-sm"
              title="Inteligencia (Intelligence)"
            >
              <Brain className="w-3.5 h-3.5 text-purple-400 mb-0.5" />
              <span className="text-[10px] font-bold font-serif text-purple-300">Intel</span>
              <span className="text-base sm:text-lg font-black font-cinzel text-purple-100">
                {character.stats.intelligence}
              </span>
              <span className="text-[8px] uppercase tracking-wider text-purple-400/80 font-mono">
                INT
              </span>
            </div>

            {/* Charisma / Carisma */}
            <div 
              data-testid="stat-charisma"
              className="flex flex-col items-center p-1.5 rounded-xl bg-gradient-to-b from-rose-950/40 to-stone-900 border border-rose-600/50 shadow-sm"
              title="Carisma (Charisma)"
            >
              <Crown className="w-3.5 h-3.5 text-rose-400 mb-0.5" />
              <span className="text-[10px] font-bold font-serif text-rose-300">Carisma</span>
              <span className="text-base sm:text-lg font-black font-cinzel text-rose-100">
                {character.stats.charisma}
              </span>
              <span className="text-[8px] uppercase tracking-wider text-rose-400/80 font-mono">
                CHA
              </span>
            </div>
          </div>
        </div>

        {/* Backstory Lore Section */}
        <div className="mb-3 pt-2.5 border-t border-amber-900/50">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400/90 font-serif flex items-center gap-1.5">
              <Scroll className="w-3.5 h-3.5 text-amber-500" />
              Historia de Origen • Backstory
            </span>

            <button
              type="button"
              data-testid="generate-backstory-button"
              onClick={onGenerateBackstory}
              disabled={isGeneratingBackstory}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-xs font-bold font-serif bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 border border-amber-400/70 shadow-sm transition cursor-pointer disabled:opacity-50"
              aria-label="Generate Backstory"
              title="Generar Trasfondo / Generate Backstory"
            >
              <BookOpen className={`w-3 h-3 text-stone-950 ${isGeneratingBackstory ? 'animate-bounce' : ''}`} />
              <span>{isGeneratingBackstory ? 'Tejiendo...' : 'Generar Historia • Generate Backstory'}</span>
            </button>
          </div>

          <div className="p-3 rounded-xl bg-stone-950/80 border border-amber-800/40 shadow-inner min-h-[58px] flex items-center">
            {isGeneratingBackstory ? (
              <div className="w-full flex items-center justify-center gap-2 text-xs text-amber-300 font-serif italic py-1.5">
                <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                <span>Consultando las crónicas del reino...</span>
              </div>
            ) : character.backstory ? (
              <p
                data-testid="character-backstory"
                className="text-xs sm:text-sm text-amber-100/90 font-serif italic leading-relaxed"
              >
                "{character.backstory}"
              </p>
            ) : (
              <p className="text-xs text-stone-500 italic font-serif">
                Haz clic en "Generar Historia" para revelar el trasfondo de este héroe.
              </p>
            )}
          </div>
        </div>

        {/* QUEST HOOK / MINI-ADVENTURE SECTION ("Generate course Hook") */}
        <div className="mb-3 pt-2.5 border-t border-amber-900/50">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400/90 font-serif flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-amber-500" />
              Gancho de Misión • Mini-Aventura
            </span>

            <button
              type="button"
              data-testid="generate-course-hook-button"
              onClick={onGenerateQuestHook}
              disabled={isGeneratingQuestHook}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold font-serif bg-gradient-to-r from-yellow-600 via-amber-600 to-amber-700 hover:from-yellow-500 hover:to-amber-600 text-stone-950 border border-amber-300 shadow-sm transition cursor-pointer disabled:opacity-50"
              aria-label="Generate course Hook"
              title="Generar Gancho de Misión basado en el trasfondo"
            >
              <Compass className={`w-3.5 h-3.5 text-stone-950 ${isGeneratingQuestHook ? 'animate-spin' : ''}`} />
              <span>{isGeneratingQuestHook ? 'Trazando Misión...' : 'Generate course Hook'}</span>
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-950/20 border-2 border-amber-700/40 shadow-inner">
            {isGeneratingQuestHook ? (
              <div className="w-full flex items-center justify-center gap-2 text-xs text-amber-300 font-serif italic py-2">
                <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                <span>Generando mini-aventura basada en el trasfondo...</span>
              </div>
            ) : character.questHook ? (
              <div data-testid="character-quest-hook" className="space-y-2">
                <h4 className="font-fantasy-name text-sm sm:text-base font-bold text-amber-200">
                  {character.questHook.title}
                </h4>
                <p className="text-xs text-stone-300 font-serif leading-relaxed">
                  <strong>Objetivo:</strong> {character.questHook.objective}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-[11px] font-serif border-t border-amber-800/30">
                  <span className="text-amber-400/90 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-red-400 flex-shrink-0" />
                    <strong>Peligro:</strong> {character.questHook.danger}
                  </span>
                  <span className="text-emerald-400/90 flex items-center gap-1">
                    <Gift className="w-3 h-3 text-amber-400 flex-shrink-0" />
                    <strong>Recompensa:</strong> {character.questHook.reward}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-xs text-stone-500 italic font-serif">
                Presiona "Generate course Hook" para crear una mini-aventura exclusiva basada en el trasfondo de {character.name}.
              </p>
            )}
          </div>
        </div>

        {/* SAVE TO DECK ACTION BUTTON */}
        <div className="pt-1">
          <button
            type="button"
            data-testid="save-to-deck-button"
            onClick={onSaveToDeck}
            className={`
              w-full py-3 px-4 rounded-xl font-cinzel font-black text-sm sm:text-base tracking-wider 
              flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-lg
              ${isSavedInDeck
                ? 'bg-emerald-900/80 border-2 border-emerald-500 text-emerald-200 hover:bg-emerald-800'
                : 'bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-stone-950 border-2 border-amber-300 hover:shadow-amber-500/30 active:scale-[0.99]'
              }
            `}
            aria-label="Save to Deck"
          >
            {isSavedInDeck ? (
              <>
                <Check className="w-5 h-5 text-emerald-300" />
                <span>¡Guardado en el Mazo! • In My Deck</span>
              </>
            ) : (
              <>
                <BookmarkPlus className="w-5 h-5 text-stone-950" />
                <span>Guardar en el Mazo • Save to Deck</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
