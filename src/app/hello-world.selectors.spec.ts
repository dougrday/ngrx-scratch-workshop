import * as fromHelloWorld from './hello-world.reducer';
import { selectHelloWorldState } from './hello-world.selectors';

describe('HelloWorld Selectors', () => {
  it('should select the feature state', () => {
    const result = selectHelloWorldState({
      [fromHelloWorld.helloWorldFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
