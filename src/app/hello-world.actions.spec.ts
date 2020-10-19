import * as fromHelloWorld from './hello-world.actions';

describe('loadHelloWorlds', () => {
  it('should return an action', () => {
    expect(fromHelloWorld.loadHelloWorlds().type).toBe('[HelloWorld] Load HelloWorlds');
  });
});
