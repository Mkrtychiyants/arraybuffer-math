import Charac from './Charac';

export default class Magician extends Charac {
  constructor(name, distanse = 1) {
    super(name, distanse);
    this.attack1 = 10;
    this.defence = 40;
    this.type = 'magician';
  }
}
