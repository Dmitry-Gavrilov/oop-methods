export default class Characters {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
    const charTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name !== 'string' || this.name.length > 10 || this.name.length < 2) {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    }
    if (typeof type !== 'string' || !(charTypes.includes(type))) {
      throw new Error('Неверный тип.');
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else throw new Error('нельзя повысить левел умершего');
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Ошибочка вышла');
    }
  }
}
