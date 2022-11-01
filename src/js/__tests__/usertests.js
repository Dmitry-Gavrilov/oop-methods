import Characters from '../characters';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('longName', () => {
  const named = () => new Characters('df1227777777777777', 'Bowman');
  expect(named).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('shortName', () => {
  const named = () => new Characters('ы', 'Zombie', 100);
  expect(named).toThrowError('Длина имени должна быть от 2 до 10 символов');
});

test('typeError', () => {
  const named = () => new Characters('ironMan', 'Axeman');
  expect(named).toThrowError('Неверный тип.');
});

test('Zombie parameters', () => {
  const zombie = new Zombie('Zooma');
  expect([zombie.type, zombie.health, zombie.attack, zombie.defence]).toEqual(['Zombie', 100, 40, 10]);
});

test('Bowman parameters', () => {
  const bowman = new Bowman('RobinGood');
  expect([bowman.type, bowman.health, bowman.attack, bowman.defence]).toEqual(['Bowman', 100, 25, 25]);
});

test('Undead parameters', () => {
  const undead = new Undead('Koschei');
  expect([undead.type, undead.level, undead.attack, undead.defence]).toEqual(['Undead', 1, 25, 25]);
});

test('Magician parameters', () => {
  const magician = new Magician('Merlin');
  expect([magician.type, magician.level, magician.attack, magician.defence]).toEqual(['Magician', 1, 10, 40]);
});

test('Daemon parameters', () => {
  const daemon = new Daemon('Гагтунгр ');
  expect([daemon.type, daemon.health, daemon.attack, daemon.defence]).toEqual(['Daemon', 100, 10, 40]);
});

test('Swordsman parameters', () => {
  const swordsman = new Swordsman('Артур');
  expect([swordsman.type, swordsman.health, swordsman.attack, swordsman.defence]).toEqual(['Swordsman', 100, 40, 10]);
});

test('levelUpError', () => {
  const zombie = new Zombie('zombak');
  zombie.health = 0;
  expect(() => { zombie.levelUp(); }).toThrowError('нельзя повысить левел умершего');
});

test('levelUpError', () => {
  const zombie = new Zombie('zombak');
  zombie.health = -10;
  expect(() => { zombie.levelUp(); }).toThrowError('нельзя повысить левел умершего');
});

test('levelUp', () => {
  const undead = new Undead('uicraor');
  undead.levelUp();
  expect([undead.level, undead.attack, undead.defence]).toEqual([2, 30, 30]);
});

test('damage', () => {
  const magician = new Magician('volhv');
  magician.damage(10);
  expect(magician.health).toEqual(94);
});

test('damageToThrowError', () => {
  const bowman = new Bowman('muzhik');
  bowman.health = -7;
  expect(() => { bowman.damage(7); }).toThrowError('Ошибочка вышла');
});
