import { meta } from '../../routes/_index';

describe('Index route', () => {
  it('should return the correct meta tags', () => {
    const result = meta();
    expect(result).toContainEqual({ title: 'New Remix App' });
    expect(result).toContainEqual({
      name: 'description',
      content: 'Welcome to Remix!',
    });
  });
});