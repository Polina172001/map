import ErrorRepository from '../app';

import Settings from '../map2';

describe('Tack map 1:', () => {
  test('check size new value', () => {
    const map1 = new ErrorRepository();

    expect(map1.private.size).toBe(4);
  });

  test('should be translate for value1', () => {
    const map1 = new ErrorRepository();

    expect(map1.translate(1)).toBe('Error');
  });

  test('should be undefined code', () => {
    const map1 = new ErrorRepository();

    expect(map1.translate(6)).toBe('Undefined code');
  });
});

describe('Tack map 2:', () => {
  test('create new userSettiging', () => {
    const map1 = new Settings('light', 'pop', 'nightmare');

    expect(map1.settings()).toEqual({
      theme: 'light',
      music: 'pop',
      difficulty: 'nightmare',
    });
  });
});
