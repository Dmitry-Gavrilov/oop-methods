import Characters from './characters';

export default class Swordsman extends Characters {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}
