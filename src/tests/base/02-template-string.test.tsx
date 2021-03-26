import { getSaludo } from '../../base/02-template-string';

describe('Template string tests', () => {
  test('should get right greeting', () => {
    const result = getSaludo('luis');

    expect(result).toBe('Hola luis');
  });

  test('should return Hola Carlos when no argument', () => {
    const result = getSaludo();

    expect(result).toBe('Hola Carlos');
  });
});
