import test from 'node:test';
import assert from 'node:assert/strict';
import { generateQuestHook } from './questHookGenerator';
import { Character } from '../types/character';

test('generateQuestHook creates a complete mini-adventure based on character', () => {
  const character: Character = {
    id: 'char-hook-1',
    name: 'Aeloria Whisperwind',
    characterClass: 'Mage',
    race: 'Elfo',
    stats: { health: 70, mana: 160, strength: 30, intelligence: 95, charisma: 65 },
    createdAt: Date.now(),
  };

  const hook = generateQuestHook(character, 0);
  assert.ok(hook.title.includes('Aeloria Whisperwind'), 'Quest title should feature character');
  assert.ok(hook.objective.includes('Aeloria Whisperwind'), 'Objective should reference character');
  assert.ok(hook.danger.length > 10, 'Danger should have details');
  assert.ok(hook.reward.length > 10, 'Reward should have details');
});

test('generateQuestHook yields different adventures with different seeds', () => {
  const character: Character = {
    id: 'char-hook-2',
    name: 'Grommash Ironbreaker',
    characterClass: 'Warrior',
    race: 'Enano',
    stats: { health: 150, mana: 30, strength: 95, intelligence: 45, charisma: 40 },
    createdAt: Date.now(),
  };

  const hook1 = generateQuestHook(character, 0);
  const hook2 = generateQuestHook(character, 1);
  assert.notEqual(hook1.title, hook2.title, 'Different seeds should vary the quest hook');
});
