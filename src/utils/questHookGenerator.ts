import { Character, QuestHook } from '../types/character';

const CLASS_QUEST_TEMPLATES = [
  {
    titlePrefix: 'La Venganza de las Sombras',
    objective: (c: Character) =>
      `A raíz de los secretos revelados en su pasado, ${c.name} debe adentrarse en la fortaleza oculta del Paso Gris para neutralizar a la cábala que amenaza a su pueblo.`,
    danger: 'Gárgolas de piedra maldita y trampas de fuego fatuo en cada corredor.',
    reward: 'Daga Rúnica Sombría y 500 Monedas de Oro del Imperio Antiguo.',
  },
  {
    titlePrefix: 'El Enigma del Cristal Caído',
    objective: (c: Character) =>
      `Guiado por las visiones de su trasfondo, ${c.name} debe recuperar el fragmento del meteorito de éter antes de que los fanáticos del culto profano desaten su poder destructivo.`,
    danger: 'Monstruosidades deformadas por la energía del vacío y terremotos arcanos constantes.',
    reward: 'Gema del Corazón Celestial (+20 a Inteligencia) y renombre de leyenda.',
  },
  {
    titlePrefix: 'El Juicio del Titán de Hierro',
    objective: (c: Character) =>
      `Inspirado por su origen heroico, ${c.name} debe ascender a la cúspide de la montaña prohibida para desafiar al coloso despierto que custodia el tesoro de los primeros reyes.`,
    danger: 'Avalanchas de roca viva y aliento de escarcha elemental que hiela la sangre.',
    reward: 'Peto del Bastión Inquebrantable (+30 Salud) y el respeto de las tribus.',
  },
  {
    titlePrefix: 'El Pacto de la Arboleda Antigua',
    objective: (c: Character) =>
      `Para honrar su linaje y las memorias de su juventud, ${c.name} debe purificar la Fuente Primigenia de la corrupción venenosa que marchita el gran roble sagrado.`,
    danger: 'Enjambres de quimeras espinadas y un chamán corrupto maestro del mimetismo.',
    reward: 'Cáliz del Renacer (+25 a Maná) y la bendición eterna de los espíritus silvestres.',
  },
  {
    titlePrefix: 'El Rescate de la Cripta de Plata',
    objective: (c: Character) =>
      `Siguiendo pistas de su historia familiar, ${c.name} debe descender a las catacumbas olvidadas para liberar las almas atrapadas de la guardia real de su pueblo.`,
    danger: 'Espectros del remordimiento y una niebla gélida que extingue toda llama.',
    reward: 'Capa del Viento Estelar y el agradecimiento eterno de los señores feudales.',
  },
];

/**
 * Genera un gancho de aventura / mini-misión único basado en el personaje y su historia.
 */
export function generateQuestHook(character: Character, seed: number = 0): QuestHook {
  const index = Math.abs((character.name.length + seed + character.stats.strength) % CLASS_QUEST_TEMPLATES.length);
  const template = CLASS_QUEST_TEMPLATES[index];

  return {
    title: `${template.titlePrefix}: La Cruzada de ${character.name}`,
    objective: template.objective(character),
    danger: template.danger,
    reward: template.reward,
  };
}
