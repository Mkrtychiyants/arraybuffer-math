import Daemon from './Daemon';
import Magician from './Magician';

const Mag1 = new Magician('Mag1');
Mag1.distanse = 2;
Mag1.attack = 10;
const Dae1 = new Daemon('Dae1');

console.log(Mag1.attack);
console.log(Dae1);
