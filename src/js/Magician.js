import Charac from './Charac';

export default class Magician extends Charac {
  constructor(name, distanse) {
    super(name, distanse);
    this.type = 'magician';
    this.attack = 10;
    this.defence = 40;
  }
}
