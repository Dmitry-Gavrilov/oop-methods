import Characters from './characters';

export default class Daemon extends Characters {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
