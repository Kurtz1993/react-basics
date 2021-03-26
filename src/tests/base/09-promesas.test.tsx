import { heroes } from '../../base/08-imp-exp';
import { getHeroeByIdAsync } from '../../base/09-promesas';

describe('Promises', () => {
  test('should return a promise', () => {
    const id = 1;
    return getHeroeByIdAsync(id).then(hero => {
      expect(hero).toEqual(heroes[0]);
    });
  });

  test('should fail if there is no matching hero', () => {
    const id = 10;

    return getHeroeByIdAsync(id).catch(err => {
      expect(err).toBe('No se pudo encontrar el héroe');
    });
  });
});
