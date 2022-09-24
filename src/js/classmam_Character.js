export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;

    this.controlCondition(name, type);
  }

  controlCondition(name, type) {
    Character.types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (Character.types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Недопустимый тип игрока');
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error('Недопустимая длинна имени игрока');
    } else {
      this.name = name;
    }
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
      return this;
    }
    throw new Error('Нельзя повысить левел умершего');
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Нельзя нанести урон умершему');
    }
  }
}
