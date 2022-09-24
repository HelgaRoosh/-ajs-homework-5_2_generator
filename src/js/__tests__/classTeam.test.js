import Team from '../classTeam';
import Character from '../classmam_Character';

const bowerman = new Character('bowerman', 'Bowerman');
const daemon = new Character('daemon', 'Daemon');
const magician = new Character('magician', 'Magician');

test('добавление в команду', () => {
  const result = new Team();
  result.add(bowerman);
  const resultArray = result.toArray();
  expect(resultArray).toEqual([
    {
      name: 'bowerman',
      type: 'Bowerman',
      health: 100,
      level: 1,
      attack: undefined,
      defence: undefined,
    },
  ]);
});

test('добавление в команду дважды(ошибка)', () => {
  function expectError() {
    const result = new Team();
    result.add(bowerman);
    result.add(bowerman);
    return result.toArray();
  }
  expect(expectError).toThrow(new Error('Персонаж уже есть в команде'));
});

test('добавление всех', () => {
  const result = new Team();
  result.addAll(bowerman, daemon, magician);
  const resultArray = result.toArray();
  expect(resultArray).toEqual([
    {
      name: 'bowerman', type: 'Bowerman', health: 100, level: 1, attack: undefined, defence: undefined,
    },
    {
      name: 'daemon', type: 'Daemon', health: 100, level: 1, attack: undefined, defence: undefined,
    },
    {
      name: 'magician', type: 'Magician', health: 100, level: 1, attack: undefined, defence: undefined,
    },
  ]);
});

test('добавление всех с повтором(без ошибки) ', () => {
  const result = new Team();
  result.addAll(bowerman, daemon, magician, bowerman);
  const resultArray = result.toArray();
  expect(resultArray).toEqual([
    {
      name: 'bowerman', type: 'Bowerman', health: 100, level: 1, attack: undefined, defence: undefined,
    },
    {
      name: 'daemon', type: 'Daemon', health: 100, level: 1, attack: undefined, defence: undefined,
    },
    {
      name: 'magician', type: 'Magician', health: 100, level: 1, attack: undefined, defence: undefined,
    },
  ]);
});
