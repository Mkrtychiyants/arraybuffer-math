import Magician from '../Magician';

test('attack without stoned eff', () => {
  const Mag1 = new Magician('Mag1');
  Mag1.distanse = 2;
  Mag1.attack = 10;
  const attWithoutStone = Mag1.attack;
  expect(attWithoutStone).toBe(9);
});
test('attack with stoned eff', () => {
  const Mag2 = new Magician('Mag2');
  Mag2.stoned = true;
  Mag2.distanse = 2;
  Mag2.attack = 10;
  const attWithStone = Mag2.attack;
  expect(attWithStone).toBe(4);
});
test('stoned eff', () => {
  const Mag2 = new Magician('Mag2');
  Mag2.stoned = true;
  const atStone = Mag2.stoned;
  expect(atStone).toBe(true);
});
test('stoned eff', () => {
  const Mag2 = new Magician('Mag2');
  Mag2.distanse = 2;
  const atStone = Mag2.distanse;
  expect(atStone).toBe(2);
});
test('Incorrect distance', () => {
  expect(() => {
    const Mag2 = new Magician('Mag2');
    Mag2.distanse = 100;
  }).toThrow();
});
