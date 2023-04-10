export default class Charac {
  constructor(name, distanse = 1) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.distanse = distanse;
    this.attack = 100;
    this.stoned = false;
  }

  set distanse(dist) {
    if (dist < 10) {
      this._distanse = dist;
    }
    if ((dist <= 0) || (dist >= 10)) {
      throw new Error('Wrong distance!');
    }
  }

  get distanse() {
    return this._distanse;
  }

  set attack(attack) {
    this._attack = attack - ((attack * (this._distanse - 1)) / 10);

    if (this._stoned) {
      this._attack -= (Math.log2(this._distanse) * 5);
    }
  }

  get attack() {
    return this._attack;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }

  get stoned() {
    return this._stoned;
  }
}
