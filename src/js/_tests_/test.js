import Character from '../character';

import Daemon from '../daemon';
import Magician from '../magician';

test.each([
  ['символы имя цифры', 'Ошибка! Имя должно быть строкой!', 123, 'Bowman'],
  ['один символ', 'Значение не соответствует', 'a', 'Bowman'],
  ['больше 10 символов', 'Значение не соответствует', 'aaaaaaaaaaa', 'Bowman'],
  ['не соответствует тип', 'Заданный персонаж не существует', 'aaaaaa', 'AAA'],
])('Проверка создания класса %s', (_, expected, paramName, paramType) => {
  expect(() => {
    const result = new Character(paramName, paramType);
    return result;
  }).toThrow(expected);
});

test.each([
  ['под чарами', '2', true, 2, 4],
  ['под чарами', '1', true, 5, 0],
  ['не под чарами', '3', false, 3, 8],
])(
  'Проверка метода attack у героя Daemon %s с дистанции %s',
  (_, __, stoned, distance, expected) => {
    const personage = new Daemon('Surik');
    personage.stoned = stoned;
    personage.distance = distance;
    expect(personage.attack).toBe(expected);
  },
);

test.each([
  ['под чарами', '2', true, 2, 4],
  ['под чарами', '1', true, 5, 0],
  ['не под чарами', '3', false, 3, 8],
])(
  'Проверка метода attack у героя Magician %s с дистанции %s',
  (_, __, stoned, distance, expected) => {
    const personage = new Magician('Surik');
    personage.stoned = stoned;
    personage.distance = distance;
    expect(personage.attack).toBe(expected);
  },
);
