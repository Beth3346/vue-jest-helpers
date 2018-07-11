import helpers from '../index';

describe('helpers', () => {
  it('should have some methods', () => {
    expect(Object.keys(helpers).length).toBeGreaterThan(0);
  });
});
