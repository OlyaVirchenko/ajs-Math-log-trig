import magDaemonAttack from './app';

export default class Daemon extends magDaemonAttack {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.deffence = 40;
  }
}
