import Characters from './characters';

export default class Bowman extends Characters {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}
