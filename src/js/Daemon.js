import Charac from './Charac';

export default class Daemon extends Charac {
  constructor(name, distanse = 1) {
    super(name, distanse);
    this.type = 'daemon';
    this.attack1 = 10;
    this.defence = 40;
  }
}
