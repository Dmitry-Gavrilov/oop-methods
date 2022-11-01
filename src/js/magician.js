import Characters from './characters';

export default class Magician extends Characters {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
