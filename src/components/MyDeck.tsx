import React from 'react';
import { Character } from '../types/character';
import { Layers, Trash2, Eye, Heart, Droplets, Sword } from 'lucide-react';

interface MyDeckProps {
  deck: Character[];
  onSelectCharacter: (character: Character) => void;
  onRemoveFromDeck: (characterId: string) => void;
  activeCharacterId?: string;
}

export const MyDeck: React.FC<MyDeckProps> = ({
  deck,
  onSelectCharacter,
  onRemoveFromDeck,
  activeCharacterId,
}) => {
  return (
    <section 
      data-testid="my-deck-list"
      className="w-full max-w-4xl mx-auto mt-10 p-6 rounded-3xl bg-stone-950/85 border-2 border-amber-800/50 shadow-2xl shadow-black backdrop-blur-md"
    >
      {/* Deck Header */}
      <div className="flex items-center justify-between border-b-2 border-amber-900/40 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30">
            <Layers className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black font-cinzel text-amber-100 flex items-center gap-2">
              <span>Mi Mazo</span>
              <span className="text-sm font-sans font-medium text-amber-500/80">• My Deck</span>
            </h3>
            <p className="text-xs text-stone-400 font-serif">
              Colección de cartas de personajes guardadas para la partida
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span 
            data-testid="deck-counter"
            className="px-3.5 py-1 rounded-full text-xs font-bold font-cinzel bg-amber-950/80 border border-amber-600/50 text-amber-300"
          >
            {deck.length} {deck.length === 1 ? 'Carta' : 'Cartas'} Guardadas
          </span>
        </div>
      </div>

      {/* Deck Cards Grid */}
      {deck.length === 0 ? (
        <div className="py-12 px-4 text-center rounded-2xl border-2 border-dashed border-stone-800 bg-stone-900/30">
          <Layers className="w-12 h-12 text-stone-600 mx-auto mb-3" />
          <h4 className="text-base font-bold text-stone-300 font-cinzel">Tu mazo está vacío</h4>
          <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto font-serif">
            Genera un héroe y haz clic en <strong>"Guardar en el Mazo • Save to Deck"</strong> en la carta para guardarlo en tu colección.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deck.map((card) => {
            const isActive = card.id === activeCharacterId;
            return (
              <div
                key={card.id}
                data-testid={`deck-card-${card.id}`}
                className={`
                  relative rounded-2xl p-4 bg-gradient-to-b from-stone-900 via-stone-950 to-neutral-950
                  border-2 transition-all duration-200 group flex flex-col justify-between
                  ${isActive 
                    ? 'border-amber-400 shadow-lg shadow-amber-500/20' 
                    : 'border-amber-900/50 hover:border-amber-600/70 hover:shadow-md'
                  }
                `}
              >
                {/* Card Top Details */}
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    {card.portraitUrl ? (
                      <img
                        src={card.portraitUrl}
                        alt={card.name}
                        className="w-16 h-16 rounded-xl border border-amber-500/50 object-cover shadow-md flex-shrink-0"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-xl bg-stone-800 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                        <Layers className="w-6 h-6 text-stone-500" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500/80 font-serif">
                          {card.race}
                        </span>
                        {isActive && (
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
                            Activa
                          </span>
                        )}
                      </div>
                      <h4 className="font-fantasy-name text-lg font-bold text-amber-100 truncate mt-0.5">
                        {card.name}
                      </h4>
                      <p className="text-xs font-cinzel text-amber-400 font-semibold">
                        {card.characterClass}
                      </p>
                    </div>
                  </div>

                  {/* Stats Mini Badges - All 5 Stats */}
                  <div className="grid grid-cols-5 gap-1 py-1.5 px-2 rounded-lg bg-stone-950/80 border border-amber-900/30 text-center mb-2.5">
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] text-red-400 font-serif flex items-center gap-0.5">
                        <Heart className="w-2 h-2" /> HP
                      </span>
                      <span className="text-[11px] font-bold font-cinzel text-red-200">
                        {card.stats.health}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] text-cyan-400 font-serif flex items-center gap-0.5">
                        <Droplets className="w-2 h-2" /> MP
                      </span>
                      <span className="text-[11px] font-bold font-cinzel text-cyan-200">
                        {card.stats.mana}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] text-amber-400 font-serif flex items-center gap-0.5">
                        <Sword className="w-2 h-2" /> STR
                      </span>
                      <span className="text-[11px] font-bold font-cinzel text-amber-200">
                        {card.stats.strength}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] text-purple-400 font-serif">
                        INT
                      </span>
                      <span className="text-[11px] font-bold font-cinzel text-purple-200">
                        {card.stats.intelligence}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] text-rose-400 font-serif">
                        CHA
                      </span>
                      <span className="text-[11px] font-bold font-cinzel text-rose-200">
                        {card.stats.charisma}
                      </span>
                    </div>
                  </div>

                  {/* Quest Hook Mini Badge if present */}
                  {card.questHook && (
                    <div className="p-1.5 rounded bg-amber-950/30 border border-amber-800/30 text-[10px] text-amber-300 font-serif mb-2 truncate">
                      🧭 <strong>Misión:</strong> {card.questHook.title}
                    </div>
                  )}

                  {/* Backstory Snippet */}
                  {card.backstory && (
                    <p className="text-[11px] text-stone-400 line-clamp-2 italic font-serif mb-3">
                      "{card.backstory}"
                    </p>
                  )}
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-2 pt-2 border-t border-stone-800">
                  <button
                    type="button"
                    onClick={() => onSelectCharacter(card)}
                    className="flex-1 py-1.5 px-2 rounded-lg text-xs font-bold font-serif bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition flex items-center justify-center gap-1 cursor-pointer"
                    title="Ver carta en la mesa"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver Carta</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onRemoveFromDeck(card.id)}
                    className="p-1.5 rounded-lg text-xs text-stone-400 hover:text-red-400 hover:bg-red-950/40 border border-stone-800 hover:border-red-800/50 transition cursor-pointer"
                    title="Eliminar del mazo"
                    aria-label="Remove from deck"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
