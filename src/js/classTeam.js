export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error('Персонаж уже есть в команде');
    } else {
      this.members.add(char);
    }
  }

  addAll(...chars) {
    chars.forEach((char) => this.members.add(char));
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    const characters = this.toArray();
    return {
      current: 0,
      last: characters.length,
      next() {
        if (this.current < this.last) {
          const element = characters[this.current];
          this.current += 1;
          return { done: false, value: element };
        }
        return { done: true };
      },
    };
  }
}
