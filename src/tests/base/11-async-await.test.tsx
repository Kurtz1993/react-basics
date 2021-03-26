import { getImagen } from '../../base/11-async-await';

describe('giphy api', () => {
  test('should return the img url', async () => {
    const url = await getImagen();

    expect(url).toContain('https://');
  });
});
