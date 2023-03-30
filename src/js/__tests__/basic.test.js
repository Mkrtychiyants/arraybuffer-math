import Magician from '../Magician';

test('attack without stoned eff', () => {
  const Mag1 = new Magician('Mag1');
  Mag1.attack = 2;
  const attWithoutStone = Mag1.attack;

  expect(attWithoutStone).toBe(9);
});
test('attack with stoned eff', () => {
  const Mag2 = new Magician('Mag2');
  Mag2.stoned = true;
  Mag2.attack = 2;
  const attWithStone = Mag2.attack;
  expect(attWithStone).toBe(4);
});
test('stoned eff', () => {
  const Mag2 = new Magician('Mag2');
  Mag2.stoned = true;
  const atStone = Mag2.stoned;
  expect(atStone).toBe(true);
});
test('Incorrect distance', () => {
  expect(() => {
    const Mag2 = new Magician('Mag2');
    Mag2.attack = 100;
  }).toThrow();
});
