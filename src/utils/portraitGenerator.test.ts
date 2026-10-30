import test from 'node:test';
import assert from 'node:assert/strict';
import { generateCartoonPortrait } from './portraitGenerator';
import { Character } from '../types/character';

test('generateCartoonPortrait returns a valid SVG data URL', () => {
  const character: Character = {
    id: 'test-1',
    name: 'Aeloria Nightwhisper',
    characterClass: 'Mage',
    race: 'High Elf',
    stats: { health: 75, mana: 150, strength: 35, intelligence: 90, charisma: 60 },
    createdAt: Date.now(),
  };

  const portraitUrl = generateCartoonPortrait(character, 0);
  assert.ok(portraitUrl.startsWith('data:image/svg+xml;utf8,'), 'Should return an SVG data URL');
  assert.ok(portraitUrl.includes('CARTOON ART %231') || portraitUrl.includes('CARTOON'), 'Should include cartoon style indicator');
});

test('generateCartoonPortrait regenerates different variations with different seeds', () => {
  const character: Character = {
    id: 'test-2',
    name: 'Grommash Ironbreaker',
    characterClass: 'Warrior',
    race: 'Mountain Dwarf',
    stats: { health: 140, mana: 30, strength: 90, intelligence: 45, charisma: 50 },
    createdAt: Date.now(),
  };

  const portraitV1 = generateCartoonPortrait(character, 0);
  const portraitV2 = generateCartoonPortrait(character, 1);
  assert.notEqual(portraitV1, portraitV2, 'Regenerated portraits with different seeds should differ');
});
