import Charac from './Charac';

export default class Daemon extends Charac {
  constructor(name, distanse) {
    super(name, distanse);
    this.type = 'daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
