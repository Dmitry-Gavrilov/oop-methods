import Characters from './characters';

export default class Zombie extends Characters {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}
