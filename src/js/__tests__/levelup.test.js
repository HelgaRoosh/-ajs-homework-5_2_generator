import Character from '../classmam_Character';
import Zombie from '../class_Zombie';

test('errorLevelUp', () => {
  const char = new Character('char', 'Bowerman');
  char.health = 0;
  expect(() => char.levelUp()).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('levelUp', () => {
  const char = new Zombie('char', 'Zombie');
  char.health = 50;
  expect(char.levelUp()).toEqual({
    name: 'char',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  });
});
