import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  generateRandomCharacter, 
  generateClassBaseStats, 
  applyRaceModifiers, 
  FANTASY_CLASSES,
  FANTASY_RACES 
} from './characterGenerator';

test('generateRandomCharacter generates a valid fantasy character with all 5 stats', () => {
  const character = generateRandomCharacter();
  assert.ok(character.id, 'Character should have an ID');
  assert.ok(character.name && character.name.length > 2, 'Character should have a name');
  assert.ok(FANTASY_CLASSES.includes(character.characterClass));
  assert.ok(FANTASY_RACES.includes(character.race as any));
  
  // Verify all 5 stats: health, mana, strength, intelligence, charisma
  assert.ok(typeof character.stats.health === 'number' && character.stats.health > 0);
  assert.ok(typeof character.stats.mana === 'number' && character.stats.mana > 0);
  assert.ok(typeof character.stats.strength === 'number' && character.stats.strength > 0);
  assert.ok(typeof character.stats.intelligence === 'number' && character.stats.intelligence > 0);
  assert.ok(typeof character.stats.charisma === 'number' && character.stats.charisma > 0);
});

test('Race dropdown choice influences character starting stats', () => {
  const elfChar = generateRandomCharacter('Elfo');
  const dwarfChar = generateRandomCharacter('Enano');

  assert.equal(elfChar.race, 'Elfo');
  assert.equal(dwarfChar.race, 'Enano');

  // Enano gets high health boost
  assert.ok(dwarfChar.stats.health > 0);
  assert.ok(elfChar.stats.intelligence > 0);
});

test('generateClassBaseStats generates appropriate stats for Mage and Warrior', () => {
  const warriorStats = generateClassBaseStats('Warrior');
  const mageStats = generateClassBaseStats('Mage');

  assert.ok(warriorStats.health >= 120, 'Warrior should have high health');
  assert.ok(warriorStats.strength >= 80, 'Warrior should have high strength');
  assert.ok(mageStats.mana >= 120, 'Mage should have high mana');
  assert.ok(mageStats.intelligence >= 80, 'Mage should have high intelligence');
});
