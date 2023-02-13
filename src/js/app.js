import Character from './character';

export default class magDaemonAttack extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
  }

  get attack() {
    let calckAttack = Math.round((this.setAttack * (11 - this.distance)) / 10);
    if (this.setStoned) {
      Math.round((calckAttack -= Math.log2(this.distance) * 5));
      if (calckAttack < 0) {
        return 0;
      }
      return calckAttack;
    }
    return calckAttack;
  }

  set attack(damage) {
    this.setAttack = damage;
  }

  get stoned() {
    return this.setStoned;
  }

  set stoned(bolean) {
    this.setStoned = bolean;
  }
}
