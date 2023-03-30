export default class Charac {
  constructor(name, distanse = 1) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.attack1 = 100;
    this.stoned1 = false;
    this.distanse = distanse;
  }

  set attack(distanse) {
    if (distanse < 10) {
      this.attack1 -= ((this.attack1 * (distanse - 1)) / 10);

      if (this.stoned1) {
        this.attack1 -= (Math.log2(distanse) * 5);
      }
    }
    if ((distanse <= 0) || (distanse >= 10)) {
      throw new Error('Wrong distance!');
    }
  }

  get attack() {
    return this.attack1;
  }

  set stoned(stoned) {
    this.stoned1 = true;
  }

  get stoned() {
    return this.stoned1;
  }
}
