import { createReducer, on } from '@ngrx/store';
import * as HelloWorldActions from './hello-world.actions';

export const helloWorldFeatureKey = 'helloWorld';

export interface State {}

export const initialState: State = {};

export const helloWorldReducer = createReducer(
  initialState,

  on(HelloWorldActions.loadHelloWorlds, (state) => state),
  on(HelloWorldActions.loadHelloWorldsSuccess, (state, action) => state),
  on(HelloWorldActions.loadHelloWorldsFailure, (state, action) => state)
);

interface Person {
  name: string;
  hobbies: string[];
}

const person: Person = {
  name: 'Doug',
  hobbies: ['D&D', 'Basketball']
};
function addHobby(p: Person, hobby: string): Person {
  // manipulating variables outside of scope :(
  // API calls :(
  // mutating state

  // p.hobbies.push('Hiking'); // :(

  // Returning a clone, to keep my function pure
  return {
    ...p,
    hobbies: [...p.hobbies, hobby]
  };
}
