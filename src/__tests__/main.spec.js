import helpers from '../../dist/bundle';

describe('helpers', () => {
  it('should have some methods', () => {
    console.log(helpers);
    
    console.log(Object.keys(helpers.init()).length);

    expect(Object.keys(helpers).length).toBeGreaterThan(0);
  });
});