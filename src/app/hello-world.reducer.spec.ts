import { helloWorldReducer, initialState } from './hello-world.reducer';

describe('HelloWorld Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = helloWorldReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
