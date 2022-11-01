import Characters from './characters';

export default class Undead extends Characters {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}
