/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  generateRandomCharacter, 
  FANTASY_RACES, 
  RACE_STAT_MODIFIERS 
} from './utils/characterGenerator';
import { generateCartoonPortrait } from './utils/portraitGenerator';
import { generateCharacterBackstory } from './utils/backstoryGenerator';
import { generateQuestHook } from './utils/questHookGenerator';
import { Character, CharacterRace } from './types/character';
import { CharacterDisplay } from './components/CharacterDisplay';
import { MyDeck } from './components/MyDeck';
import { 
  Dices, 
  Sparkles, 
  FlaskConical, 
  Flame, 
  History, 
  Layers,
  CheckCircle2,
  Users
} from 'lucide-react';

export default function App() {
  const [selectedRace, setSelectedRace] = useState<CharacterRace | 'Aleatorio'>('Aleatorio');

  const [character, setCharacter] = useState<Character | null>(() => {
    const initial = generateRandomCharacter('Aleatorio');
    initial.portraitSeed = 0;
    initial.portraitUrl = generateCartoonPortrait(initial, 0);
    initial.backstorySeed = 0;
    initial.backstory = generateCharacterBackstory(initial, 0);
    initial.questHookSeed = 0;
    initial.questHook = generateQuestHook(initial, 0);
    return initial;
  });

  const [deck, setDeck] = useState<Character[]>(() => {
    const initialSaved = generateRandomCharacter('Elfo');
    initialSaved.portraitSeed = 1;
    initialSaved.portraitUrl = generateCartoonPortrait(initialSaved, 1);
    initialSaved.backstorySeed = 1;
    initialSaved.backstory = generateCharacterBackstory(initialSaved, 1);
    initialSaved.questHookSeed = 1;
    initialSaved.questHook = generateQuestHook(initialSaved, 1);
    return [initialSaved];
  });

  const [history, setHistory] = useState<Character[]>([]);
  const [isRolling, setIsRolling] = useState(false);
  const [isGeneratingPortrait, setIsGeneratingPortrait] = useState(false);
  const [isGeneratingBackstory, setIsGeneratingBackstory] = useState(false);
  const [isGeneratingQuestHook, setIsGeneratingQuestHook] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleGenerate = () => {
    setIsRolling(true);
    setTimeout(() => {
      const newChar = generateRandomCharacter(selectedRace);
      newChar.portraitSeed = 0;
      newChar.portraitUrl = generateCartoonPortrait(newChar, 0);
      newChar.backstorySeed = 0;
      newChar.backstory = generateCharacterBackstory(newChar, 0);
      newChar.questHookSeed = 0;
      newChar.questHook = generateQuestHook(newChar, 0);

      if (character) {
        setHistory((prev) => [character, ...prev.slice(0, 4)]);
      }
      setCharacter(newChar);
      setIsRolling(false);
      showToast(`¡${newChar.name} invocado como ${newChar.race}!`);
    }, 150);
  };

  const handleGeneratePortrait = () => {
    if (!character) return;
    setIsGeneratingPortrait(true);
    setTimeout(() => {
      const seed = (character.portraitSeed ?? 0) + 1;
      const portraitUrl = generateCartoonPortrait(character, seed);
      setCharacter((prev) => prev ? { ...prev, portraitUrl, portraitSeed: seed } : null);
      setIsGeneratingPortrait(false);
      showToast('¡Nuevo retrato generado con éxito!');
    }, 250);
  };

  const handleRegeneratePortrait = () => {
    if (!character) return;
    setIsGeneratingPortrait(true);
    setTimeout(() => {
      const seed = (character.portraitSeed ?? 0) + 1;
      const portraitUrl = generateCartoonPortrait(character, seed);
      setCharacter((prev) => prev ? { ...prev, portraitUrl, portraitSeed: seed } : null);
      setIsGeneratingPortrait(false);
      showToast('¡Retrato regenerado con éxito!');
    }, 300);
  };

  const handleGenerateBackstory = () => {
    if (!character) return;
    setIsGeneratingBackstory(true);
    setTimeout(() => {
      const nextSeed = (character.backstorySeed ?? 0) + 1;
      const backstory = generateCharacterBackstory(character, nextSeed);
      setCharacter((prev) => prev ? { ...prev, backstory, backstorySeed: nextSeed } : null);
      setIsGeneratingBackstory(false);
      showToast('¡Historia de origen revelada!');
    }, 250);
  };

  const handleGenerateQuestHook = () => {
    if (!character) return;
    setIsGeneratingQuestHook(true);
    setTimeout(() => {
      const nextSeed = (character.questHookSeed ?? 0) + 1;
      const questHook = generateQuestHook(character, nextSeed);
      setCharacter((prev) => prev ? { ...prev, questHook, questHookSeed: nextSeed } : null);
      setIsGeneratingQuestHook(false);
      showToast('¡Gancho de aventura generado con éxito!');
    }, 250);
  };

  const handleSaveToDeck = () => {
    if (!character) return;
    const exists = deck.some((c) => c.id === character.id);
    if (!exists) {
      setDeck((prev) => [character, ...prev]);
      showToast(`¡${character.name} ha sido guardado en tu mazo!`);
    } else {
      showToast(`${character.name} ya está en tu mazo.`);
    }
  };

  const handleRemoveFromDeck = (id: string) => {
    setDeck((prev) => prev.filter((c) => c.id !== id));
    showToast('Carta eliminada del mazo.');
  };

  const isSavedInDeck = character ? deck.some((c) => c.id === character.id) : false;

  return (
    <div className="min-h-screen alchemist-workbench-bg text-stone-100 flex flex-col font-sans selection:bg-amber-600/40 selection:text-amber-100 relative overflow-x-hidden">
      {/* Alchemical Ambience / Warm candlelight overlays */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-black/80" />
      
      {/* Decorative Alchemical Workbench Runes in corners */}
      <div className="fixed top-8 left-8 pointer-events-none opacity-10 text-amber-500 font-serif text-6xl select-none hidden lg:block">
        🜁 🜂
      </div>
      <div className="fixed top-8 right-8 pointer-events-none opacity-10 text-amber-500 font-serif text-6xl select-none hidden lg:block">
        🜃 🜄
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-950/90 border-2 border-amber-500 text-amber-200 text-xs font-serif font-bold shadow-2xl shadow-black backdrop-blur-md transition-all animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <header className="relative border-b-2 border-amber-900/50 bg-stone-950/85 backdrop-blur-md px-6 py-4 z-10 shadow-lg shadow-black/80">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-900 via-amber-700 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-950/60 border-2 border-amber-400/60">
              <FlaskConical className="w-6 h-6 text-stone-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black font-cinzel tracking-wider text-amber-100 drop-shadow-sm">
                  Creador de Personajes Fantásticos
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-amber-950/80 border border-amber-600/40 text-amber-300">
                  Mesa del Alquimista
                </span>
              </div>
              <p className="text-xs text-amber-400/80 font-serif flex items-center gap-1.5">
                <Flame className="w-3 h-3 text-amber-500 inline" /> Santuario de Transmutación y Cartas de Héroes
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 shadow-sm font-cinzel">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Cartas en Mazo: {deck.length}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative flex-1 max-w-4xl w-full mx-auto px-4 py-6 sm:py-8 flex flex-col items-center justify-center z-10">
        <div className="w-full text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-amber-950/60 border border-amber-600/40 text-amber-300 mb-2 tracking-widest uppercase">
            <FlaskConical className="w-3.5 h-3.5 text-amber-400" />
            Círculo de Transmutación de Cartas
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-cinzel text-amber-100 tracking-wide drop-shadow-md">
            Forja tu Carta de Héroe
          </h2>
          <p className="mt-1 text-stone-400 text-xs sm:text-sm max-w-lg mx-auto font-serif">
            Selecciona la raza, genera 5 estadísticas completas (Salud, Maná, Fuerza, Inteligencia, Carisma) y crea ganchos de misiones.
          </p>
        </div>

        {/* CHARACTER RACE SELECTION DROPDOWN SECTION */}
        <div className="mb-5 w-full max-w-md p-3.5 rounded-2xl bg-stone-950/90 border-2 border-amber-700/50 shadow-xl flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label 
              htmlFor="race-select" 
              className="text-xs font-bold uppercase tracking-wider text-amber-300 font-cinzel flex items-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5 text-amber-400" />
              Elegir Raza del Personaje • Race
            </label>
            <span className="text-[10px] text-stone-400 font-serif">
              Modifica las estadísticas base
            </span>
          </div>

          <div className="relative">
            <select
              id="race-select"
              data-testid="race-select-dropdown"
              value={selectedRace}
              onChange={(e) => {
                const newRace = e.target.value as CharacterRace | 'Aleatorio';
                setSelectedRace(newRace);
                showToast(`Raza seleccionada: ${newRace}`);
              }}
              className="w-full py-2.5 px-3.5 rounded-xl bg-stone-900 border-2 border-amber-600/60 text-amber-100 text-xs sm:text-sm font-serif font-bold focus:outline-none focus:border-amber-400 transition cursor-pointer"
            >
              <option value="Aleatorio">🎲 Aleatorio (Elige al azar entre todas las razas)</option>
              {FANTASY_RACES.map((race) => (
                <option key={race} value={race}>
                  {race} — {RACE_STAT_MODIFIERS[race].description}
                </option>
              ))}
            </select>
          </div>

          {selectedRace !== 'Aleatorio' && (
            <p className="text-[11px] text-amber-400/90 font-serif italic text-center">
              Efecto de raza activo: {RACE_STAT_MODIFIERS[selectedRace].description}
            </p>
          )}
        </div>

        {/* Action Button Section on the Workbench */}
        <div className="mb-6 flex flex-col items-center gap-2">
          <button
            type="button"
            id="generate-button"
            data-testid="generate-character-button"
            onClick={handleGenerate}
            disabled={isRolling}
            className={`
              group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 
              rounded-2xl text-base sm:text-lg font-black font-cinzel tracking-wider
              text-stone-950 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500
              hover:from-amber-400 hover:to-yellow-300 active:scale-95
              shadow-2xl shadow-amber-900/60 hover:shadow-amber-500/40 border-2 border-amber-300
              transition-all duration-200 cursor-pointer disabled:opacity-75 disabled:cursor-wait
            `}
            aria-label="Generate Character"
            title="Generar Personaje • Generate Character"
          >
            <div className="brass-rivet absolute -top-1.5 -left-1.5" />
            <div className="brass-rivet absolute -top-1.5 -right-1.5" />
            <div className="brass-rivet absolute -bottom-1.5 -left-1.5" />
            <div className="brass-rivet absolute -bottom-1.5 -right-1.5" />

            <Dices className={`w-6 h-6 text-stone-950 transition-transform duration-300 ${isRolling ? 'animate-spin' : 'group-hover:rotate-45'}`} />
            <span>{isRolling ? 'Invocando Héroe...' : 'Generar Personaje • Generate Character'}</span>
            <Sparkles className="w-4 h-4 text-stone-950 opacity-80" />
          </button>

          <span className="text-xs text-amber-500/80 font-serif">
            Genera 5 atributos de combate e influencias de raza exclusivas
          </span>
        </div>

        {/* Full-Featured Bordered Player Card Display */}
        {character ? (
          <div className="w-full transition-all duration-300 transform">
            <CharacterDisplay 
              character={character} 
              onGeneratePortrait={handleGeneratePortrait}
              onRegeneratePortrait={handleRegeneratePortrait}
              onGenerateBackstory={handleGenerateBackstory}
              onGenerateQuestHook={handleGenerateQuestHook}
              onSaveToDeck={handleSaveToDeck}
              isSavedInDeck={isSavedInDeck}
              isGeneratingPortrait={isGeneratingPortrait}
              isGeneratingBackstory={isGeneratingBackstory}
              isGeneratingQuestHook={isGeneratingQuestHook}
            />
          </div>
        ) : (
          <div className="w-full max-w-md mx-auto rounded-3xl border-2 border-dashed border-amber-900/40 p-12 text-center text-stone-500">
            <Dices className="w-12 h-12 mx-auto mb-3 opacity-40 text-amber-500" />
            <p className="text-sm font-serif">No hay personaje en la mesa.</p>
            <p className="text-xs mt-1 text-stone-400">Presiona el botón de arriba para forjar tu primer héroe.</p>
          </div>
        )}

        {/* MY DECK / MI MAZO SECTION */}
        <MyDeck
          deck={deck}
          onSelectCharacter={(c) => {
            setCharacter(c);
            showToast(`Viendo a ${c.name} en la mesa de trabajo.`);
          }}
          onRemoveFromDeck={handleRemoveFromDeck}
          activeCharacterId={character?.id}
        />

        {/* Recent Summons / Alchemical Grimoire Section */}
        {history.length > 0 && (
          <div className="mt-10 w-full max-w-4xl border-t-2 border-amber-900/40 pt-6">
            <div className="flex items-center justify-between text-xs font-bold text-amber-400/80 mb-3 uppercase tracking-wider font-serif">
              <span className="flex items-center gap-2">
                <History className="w-3.5 h-3.5 text-amber-500" />
                Grimorio del Alquimista • Invocaciones Recientes
              </span>
              <span className="text-[10px] text-amber-600 font-mono">
                {history.length} registradas
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {history.map((prevChar) => (
                <div
                  key={prevChar.id}
                  onClick={() => {
                    setCharacter(prevChar);
                    showToast(`Cargando a ${prevChar.name}...`);
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-950/80 border border-amber-900/40 hover:border-amber-500/60 text-xs transition cursor-pointer shadow-sm group"
                  title="Ver en la mesa"
                >
                  <div className="flex items-center gap-2.5">
                    {prevChar.portraitUrl && (
                      <img 
                        src={prevChar.portraitUrl} 
                        alt={prevChar.name} 
                        className="w-8 h-8 rounded-lg border border-amber-500/40 object-cover" 
                      />
                    )}
                    <span className="font-fantasy-name text-stone-200 group-hover:text-amber-200 text-sm">
                      {prevChar.name}
                    </span>
                  </div>
                  <span className="font-cinzel px-2.5 py-0.5 rounded-lg bg-amber-950/60 border border-amber-700/40 text-amber-300 font-semibold text-[11px]">
                    {prevChar.characterClass}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-amber-900/40 bg-stone-950/95 py-4 px-6 text-center text-xs text-amber-500/60 font-serif">
        Mesa de Trabajo del Alquimista • Fantasy Game Jam Character Creator • Versión Final
      </footer>
    </div>
  );
}
