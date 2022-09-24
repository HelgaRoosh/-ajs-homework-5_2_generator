// import Character from '../classmam_Character';
import Bowerman from '../class_Bowerman';
import Swordsman from '../class_Swordsman';
import Magician from '../class_Magician';
import Daemon from '../class_Daemon';
import Undead from '../class_Undead';
import Zombie from '../class_Zombie';

test.each([
  ['Zombie', Zombie, {
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  },
  ],
  ['Undead', Undead, {
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }],
  ['Daemon', Daemon, {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }],
  ['Magician', Magician, {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }],
  ['Swordsman', Swordsman, {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }],
  ['Bowerman', Bowerman, {
    name: 'Bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }],
])(
  ('class calculate for %s'),
  (charName, CharClass, expected) => {
    const result = new CharClass(charName);
    expect(result).toEqual(expected);
  },
);
