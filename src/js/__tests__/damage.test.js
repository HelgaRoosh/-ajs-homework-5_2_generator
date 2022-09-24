import Bowerman from '../class_Bowerman';

test('damage', () => {
  const char = new Bowerman('char', 'Bowerman');
  char.health = 100;
  char.damage(20);
  expect(char.health).toEqual(85);
});

test('damage in 0', () => {
  const char = new Bowerman('char', 'Bowerman');
  char.health = 0;
  const result = () => char.damage(20);
  expect(result).toThrowError(new Error('Нельзя нанести урон умершему'));
});

test('damage in <0', () => {
  const char = new Bowerman('char', 'Bowerman');
  char.health = -10;
  const result = () => char.damage(20);
  expect(result).toThrowError(new Error('Нельзя нанести урон умершему'));
});
