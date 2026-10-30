import { Character, CharacterClass } from '../types/character';

const CLASS_ORIGIN_TEMPLATES: Record<
  CharacterClass,
  Array<{
    setup: (name: string, race: string) => string;
    climax: (name: string, race: string) => string;
  }>
> = {
  Mage: [
    {
      setup: (name, race) =>
        `Antaño un erudito en las Agujas Sumergidas, ${name} desató por accidente un nexo astral que bañó su alma en pura luz estelar.`,
      climax: (name) =>
        `Hoy recorre los reinos buscando tomos olvidados para dominar el torrente de magia arcana que arde en sus venas.`,
    },
    {
      setup: (name, race) =>
        `Exiliado del Gran Cónclave tras desafiar al Archimago Supremo, ${name} se adentró en la espesura portando solo un cristal y un grimorio en llamas.`,
      climax: (name) =>
        `Las leyendas susurran que sus conjuros elementales tienen el poder de dominar las tempestades más feroces.`,
    },
    {
      setup: (name, race) =>
        `Nacido durante un eclipse místico entre los clanes de los ${race}, ${name} manifestó antiguos glifos luminosos sobre su piel desde su infancia.`,
      climax: (name) =>
        `Ahora manipula la hechicería del tiempo para enmendar las fracturas de la realidad antes de que despierte la calamidad.`,
    },
  ],
  Warrior: [
    {
      setup: (name, race) =>
        `Tras sobrevivir a un duelo solitario contra un dragón de hierro en los picos helados, ${name} emergió forjado en fuego y curtido en combate.`,
      climax: (name) =>
        `Blandiendo su mandoble ancestral, ${name} se alza como un baluarte inquebrantable entre los indefensos y los tiranos del reino.`,
    },
    {
      setup: (name, race) =>
        `Instruido desde la niñez en las legiones de vanguardia de los ${race}, ${name} fue el único guerrero capaz de defender la Puerta de Ceniza ante un ejército invasor.`,
      climax: (name) =>
        `Con pesada armadura y escudo mellado, ${name} busca una campaña gloriosa que honre la memoria de sus ancestros caídos.`,
    },
    {
      setup: (name, race) =>
        `Despojado de su título noble tras un duelo de honor, ${name} abandonó las intrigas cortesanas para convertirse en un guerrero de disciplina implacable.`,
      climax: (name) =>
        `Su maestría devastadora con el acero asegura que allá donde impacte su espada, renazca una nueva epopeya.`,
    },
  ],
  Rogue: [
    {
      setup: (name, race) =>
        `Criado en los traicioneros muelles del bajo mundo, ${name} sobrevivió burlando a los señores del crimen antes de que pudieran desenfundar su acero.`,
      climax: (name) =>
        `Envuelto en cueros sombríos, ${name} ataca desde la penumbra con una velocidad letal y desaparece sin dejar rastro.`,
    },
    {
      setup: (name, race) =>
        `Antiguo espía de la corona, ${name} escapó en la noche al descubrir una sangrienta conspiración urdida en la corte imperial.`,
      climax: (name) =>
        `Con dagas envenenadas y una sonrisa audaz, ${name} pone sus talentos de infiltración al servicio de causas que considera justas.`,
    },
    {
      setup: (name, race) =>
        `Desterrado de un gremio de acróbatas ${race} por sustraer una gema maldita, ${name} convirtió el sigilo en un arte magistral.`,
      climax: (name) =>
        `Ningún castillo es inexpugnable ni existe cámara acorazada a salvo cuando ${name} acecha en la penumbra.`,
    },
  ],
  Paladin: [
    {
      setup: (name, race) =>
        `Expulsado de una orden severa tras perdonar la vida a un enemigo arrepentido, ${name} renovó sus juramentos ante el primer rayo del alba.`,
      climax: (name) =>
        `Guiado por una moral inquebrantable, la espada bendecida y el escudo de ${name} brillan como faros de justicia contra el mal.`,
    },
    {
      setup: (name, race) =>
        `Cuando una horda demoníaca redujo a cenizas su santuario natal, ${name} juró proteger a los desamparados con fervor celestial.`,
      climax: (name) =>
        `Su armadura dorada fulgura con fuego divino mientras ${name} purga las sombras más tenebrosas del continente.`,
    },
  ],
  Ranger: [
    {
      setup: (name, race) =>
        `Abandonado en las profundidades del Bosque Susurrante, ${name} fue criado por una legendaria manada de lobos espectrales.`,
      climax: (name) =>
        `Dueño del susurro del viento y maestro del arco de tejo, ${name} jamás erra un disparo protegiendo los claros sagrados.`,
    },
    {
      setup: (name, race) =>
        `Como el rastreador más audaz de las fronteras de los ${race}, ${name} cartografió gargantas salvajes donde perecieron incontables exploradores.`,
      climax: (name) =>
        `En compañía de un halcón de mirada penetrante, ${name} persigue monstruos y forajidos con implacable puntería.`,
    },
  ],
  Necromancer: [
    {
      setup: (name, race) =>
        `En las criptas sepultadas bajo su panteón familiar, ${name} desenterró un grimorio viviente forjado con esencias del más allá.`,
      climax: (name) =>
        `Lejos de buscar la destrucción, ${name} comulga con espíritus antiguos para descifrar enigmas olvidados y subsanar maldiciones.`,
    },
  ],
  Cleric: [
    {
      setup: (name, race) =>
        `Ungido por la divinidad de la Luz Matinal, ${name} consagró sus años a sanar a los peregrinos y peregrinas en poblados azotados por la penuria.`,
      climax: (name) =>
        `Con una invocación de gracia sanadora y su fiel maza de combate, ${name} socorre a los heridos y ahuyenta a las aberraciones.`,
    },
  ],
  Bard: [
    {
      setup: (name, race) =>
        `Dotado de un laúd melodioso tallado en madera milenaria, ${name} abandonó el Conservatorio Real tras hechizar a toda la corte con una tonada prohibida.`,
      climax: (name) =>
        `Hoy frecuenta posadas y ruinas secretas, convirtiendo las hazañas de su cuadrilla en himnos que infunden valentía.`,
    },
  ],
  Druid: [
    {
      setup: (name, race) =>
        `Elegido por el Árbol Anciano del Valle Brumoso, ${name} percibe el palpitar de la tierra y los cambios del viento antes de la tormenta.`,
      climax: (name) =>
        `Capaz de transformarse en una bestia temible al instante, ${name} resguarda ferozmente la armonía de la naturaleza salvaje.`,
    },
  ],
  Monk: [
    {
      setup: (name, race) =>
        `Tras décadas de contemplación en monasterios esculpidos en la roca viva, ${name} aprendió a canalizar su ki en impactos arrolladores.`,
      climax: (name) =>
        `Sin la atadura del oro ni de corazas pesadas, ${name} recorre el mundo amparando a los desvalidos con sus ágiles puños.`,
    },
  ],
};

/**
 * Genera una historia de origen única de una o dos oraciones en español para un personaje de fantasía.
 */
export function generateCharacterBackstory(character: Character, seed: number = 0): string {
  const templates = CLASS_ORIGIN_TEMPLATES[character.characterClass] || CLASS_ORIGIN_TEMPLATES.Warrior;
  const index = Math.abs((character.name.length + seed + character.race.length) % templates.length);
  const template = templates[index];

  const sentence1 = template.setup(character.name, character.race);
  const sentence2 = template.climax(character.name, character.race);

  return `${sentence1} ${sentence2}`;
}
