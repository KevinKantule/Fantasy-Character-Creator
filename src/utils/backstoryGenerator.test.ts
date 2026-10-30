import test from 'node:test';
import assert from 'node:assert/strict';
import { generateCharacterBackstory } from './backstoryGenerator';
import { Character } from '../types/character';

test('generateCharacterBackstory generates a 1 to 2 sentence origin story', () => {
  const character: Character = {
    id: 'char-1',
    name: 'Aeloria Whisperwind',
    characterClass: 'Mage',
    race: 'High Elf',
    stats: { health: 75, mana: 150, strength: 35, intelligence: 90, charisma: 60 },
    createdAt: Date.now(),
  };

  const backstory = generateCharacterBackstory(character, 0);
  assert.ok(backstory.length > 30, 'Backstory should be substantial');
  assert.ok(backstory.includes('Aeloria Whisperwind'), 'Backstory should reference character name');
  
  // Count sentences by counting period endings
  const sentences = backstory.split(/\.\s+/).filter(Boolean);
  assert.ok(sentences.length <= 2, `Backstory should be 1-2 sentences, got ${sentences.length}`);
});

test('generateCharacterBackstory varies with different seeds', () => {
  const character: Character = {
    id: 'char-2',
    name: 'Grommash Ironbreaker',
    characterClass: 'Warrior',
    race: 'Mountain Dwarf',
    stats: { health: 140, mana: 30, strength: 90, intelligence: 45, charisma: 50 },
    createdAt: Date.now(),
  };

  const backstory1 = generateCharacterBackstory(character, 0);
  const backstory2 = generateCharacterBackstory(character, 1);
  assert.notEqual(backstory1, backstory2, 'Different seeds should generate different backstories');
});
